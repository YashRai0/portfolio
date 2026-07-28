import BackToTop from "./back-to-top";

export function Footer() {
  return (
    <footer className="w-full bg-[#080B12] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
            <span className="font-mono text-[#F9FAFB]">Yash Rai</span>
            <span>•</span>
            <span>AI Product Engineer</span>
            <span>•</span>
            <span>© 2026</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#9CA3AF]">
            <a 
              href="mailto:yashrai6635@gmail.com" 
              className="hover:text-[#3B82F6] transition-colors"
            >
              Email
            </a>
            <a 
              href="https://github.com/YashRai0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#3B82F6] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/yash-rai-1a218433b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#3B82F6] transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20">
              Open to SWE & AI Internships
            </span>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
