import { useState, useEffect, useCallback } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    document.documentElement.style.colorScheme = newTheme;
    try {
      localStorage.setItem('theme', newTheme);
    } catch {
      // Ignore localStorage errors
    }
    // Dispatch event so any other ThemeToggle instance synchronizes
    window.dispatchEvent(new CustomEvent('theme-changed', { detail: newTheme }));
  }, []);

  useEffect(() => {
    setMounted(true);
    // 1. Check current DOM attribute first
    const domTheme = document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null;
    // 2. Check localStorage
    let stored: 'dark' | 'light' | null = null;
    try {
      stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    } catch {
      // Ignore
    }
    // 3. Fallback to system preference, default light (akshatpandey.cv style)
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme: 'dark' | 'light' = domTheme || stored || (systemPrefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(initialTheme);
    document.documentElement.style.colorScheme = initialTheme;

    // Listen to changes from other toggle instances or window
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<'dark' | 'light'>;
      if (customEvent.detail && (customEvent.detail === 'dark' || customEvent.detail === 'light')) {
        setTheme(customEvent.detail);
      }
    };

    window.addEventListener('theme-changed', handleThemeChange);
    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Determine current theme by checking document element directly to prevent state lag
    const currentTheme =
      (document.documentElement.getAttribute('data-theme') as 'dark' | 'light' | null) ||
      theme ||
      'light';

    const nextTheme: 'dark' | 'light' = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  };

  // Prevent hydration mismatch: render neutral button until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className="p-2 rounded-full transition-all duration-200 flex items-center justify-center border"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--text-primary)',
          width: '38px',
          height: '38px',
        }}
        aria-label="Theme toggle"
      >
        <Moon size={17} />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      className="p-2 rounded-full transition-all duration-200 flex items-center justify-center border hover:border-[var(--accent)] hover:scale-105 active:scale-95 cursor-pointer"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        color: 'var(--text-primary)',
        width: '38px',
        height: '38px',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun size={17} className="text-amber-400 animate-in fade-in duration-200" />
      ) : (
        <Moon size={17} className="animate-in fade-in duration-200" />
      )}
    </button>
  );
}
