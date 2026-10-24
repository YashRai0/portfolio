import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ChatWidget from "../components/ChatWidget";
import appCss from "../styles.css?url";
import { getPersonSchema, getWebSiteSchema } from "../lib/structured-data";
import { SITE_CONFIG } from "../lib/siteConfig";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_CONFIG.title },
      { name: "description", content: SITE_CONFIG.description },
      { name: "author", content: SITE_CONFIG.name },
      {
        name: "keywords",
        content:
          "Yash Rai, portfolio, BCA student, full-stack developer, software developer, React developer, web developer, AI-assisted development, Prayagraj, United Institute of Management, 2ambuddy, ResumeAI4u",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#F7F6F2" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_CONFIG.url },
      { property: "og:title", content: SITE_CONFIG.title },
      { property: "og:description", content: SITE_CONFIG.description },
      {
        property: "og:image",
        content: `${SITE_CONFIG.url}/og-image.png`,
      },
      { property: "og:site_name", content: `${SITE_CONFIG.name} Portfolio` },
      { property: "og:locale", content: "en_IN" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_CONFIG.title },
      { name: "twitter:description", content: SITE_CONFIG.description },
      {
        name: "twitter:image",
        content: `${SITE_CONFIG.url}/og-image.png`,
      },
    ],
    links: [
      {
        rel: "preload",
        href: "/fonts/inter-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "alternate icon", href: "/favicon.ico" },
    ],
    scripts: [
      // Theme initialization script to prevent FOUC
      {
        children: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.remove('dark','light');document.documentElement.classList.add(t);document.documentElement.style.colorScheme=t;}catch(e){}})()`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getPersonSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getWebSiteSchema()),
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundPage,
});

function NotFoundPage() {
  return (
    <main className="page-main">
      <div className="page-container py-16 md:py-24 text-center max-w-2xl mx-auto flex flex-col items-center justify-center flex-1">
        <span className="section-label mb-2">404 · Error</span>
        <h1 className="section-title text-5xl sm:text-6xl font-black mb-4">
          Page <span className="highlight">Not Found</span>
        </h1>
        <p className="section-subtitle text-base sm:text-lg mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist, has been moved, or the URL might be mistyped.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href="/" className="btn btn-primary text-sm">
            Back to Home
          </a>
          <a href="/work" className="btn btn-secondary text-sm">
            View Selected Work
          </a>
          <a href="/contact" className="btn btn-secondary text-sm">
            Contact Yash
          </a>
        </div>
      </div>
    </main>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere]">
        <Header />
        {children}
        <Footer />
        <ChatWidget />
        <Scripts />
      </body>
    </html>
  );
}
