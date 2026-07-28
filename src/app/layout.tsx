import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import {
  getPersonSchema,
  getWebsiteSchema,
  getBreadcrumbSchema,
} from "@/lib/structured-data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yashrai.dev";

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yash Rai — AI Full Stack Developer | Building AI-Powered SaaS Products",
  description:
    "Yash Rai is an AI Full Stack Developer building production-ready SaaS products with React, TypeScript, Node.js, Generative AI, Docker, and modern cloud technologies. Creator of ResumeAI4U.",
  keywords: [
    "AI full stack developer",
    "yash rai",
    "AI developer",
    "react developer",
    "full stack developer",
    "generative AI",
    "RAG pipeline",
    "SaaS developer",
    "resume optimizer",
    "AI study assistant",
    "typescript developer",
    "node.js developer",
    "docker",
    "web developer india",
  ],
  authors: [{ name: "Yash Rai", url: SITE_URL }],
  creator: "Yash Rai",
  publisher: "Yash Rai",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Yash Rai — AI Full Stack Developer",
    title: "Yash Rai — AI Full Stack Developer | Building AI-Powered SaaS Products",
    description:
      "AI Full Stack Developer building production-ready SaaS products with React, TypeScript, Node.js, Generative AI, Docker & CI/CD.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Yash Rai — AI Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Rai — AI Full Stack Developer",
    description:
      "Building AI-powered SaaS products with React, TypeScript, Node.js & Generative AI.",
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-[#F9FAFB] font-sans antialiased">
        <a href="#projects" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
