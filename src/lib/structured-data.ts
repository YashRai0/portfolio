import { SITE_CONFIG } from "./siteConfig";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    jobTitle: "Full-Stack Developer",
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin,
      SITE_CONFIG.twitter,
      SITE_CONFIG.instagram,
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: SITE_CONFIG.education.institution,
    },
    knowsAbout: [
      "React",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Full-Stack Development",
      "AI-Assisted Development",
      "REST APIs",
      "MongoDB",
      "Web Development",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_CONFIG.name} Portfolio`,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

