/** Credentials data — real certificates only, categorized by Courses, Training & Internships, Participation, and Other */

export type CredentialCategory =
  | "Certification"
  | "Training"
  | "Internship"
  | "Course"
  | "Participation"
  | "Other";

export type GalleryFilter =
  | "All Certificates"
  | "Courses"
  | "Training & Internships"
  | "Participation"
  | "Other Certificates";

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: CredentialCategory;
  grade?: string;
  certificateNo?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  image: string;
  skills: string[];
  priority: number;
}

export const credentials: Credential[] = [
  {
    id: "cred-claude",
    title: "Claude 101",
    issuer: "Anthropic",
    year: "2026",
    category: "Certification",
    certificateNo: "cokdj72i372r",
    verificationUrl: "https://verify.skilljar.com/c/cokdj72i372r",
    pdfUrl: "/certificates/claude-101.pdf",
    image: "/certificates/anthropic-claude-101.jpg",
    skills: ["Claude 101", "Anthropic Claude", "Prompt Engineering", "LLM Integration"],
    priority: 1,
  },
  {
    id: "cred-genai",
    title: "Generative AI & Prompt Engineering Add-on Course",
    issuer: "United Institute of Management (FUGS)",
    year: "2026",
    category: "Course",
    image: "/certificates/01-generative-ai-prompt-engineering.jpg",
    skills: ["Generative AI", "Prompt Engineering"],
    priority: 2,
  },
  {
    id: "cred-summer-intern",
    title: "Certificate of Summer Internship",
    issuer: "NETCAMP",
    year: "2026",
    category: "Internship",
    image: "/certificates/10-netcamp-summer-internship.jpg",
    skills: ["Software Development", "Industry Experience"],
    priority: 3,
  },
  {
    id: "cred-net-ethical",
    title: "Network Management and Web Development with Ethical Hacking",
    issuer: "NETCAMP",
    year: "2026",
    category: "Training",
    image: "/certificates/07-netcamp-network-management-ethical-hacking.jpg",
    skills: ["Networking", "Web Development", "Ethical Hacking"],
    priority: 4,
  },
  {
    id: "cred-android-java",
    title: "Android with Core Java",
    issuer: "NETCAMP",
    year: "2026",
    category: "Training",
    image: "/certificates/09-netcamp-android-core-java.jpg",
    skills: ["Android", "Java"],
    priority: 5,
  },
  {
    id: "cred-industrial",
    title: "Certificate of Industrial Training",
    issuer: "NETCAMP",
    year: "2026",
    category: "Training",
    image: "/certificates/08-netcamp-industrial-training.jpg",
    skills: ["Industrial Training", "Software Development"],
    priority: 6,
  },
  {
    id: "cred-web-dev",
    title: "Web Development Using HTML, CSS & JavaScript",
    issuer: "United Institute of Management (FUGS)",
    year: "2025",
    category: "Course",
    grade: "Grade A",
    image: "/certificates/04-web-development-value-addition.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
    priority: 7,
  },
  {
    id: "cred-prof-skills",
    title: "Enhancing Professional Skills",
    issuer: "United Institute of Management (FUGS)",
    year: "2024",
    category: "Course",
    grade: "Grade B",
    image: "/certificates/03-certificate-of-appreciation.jpg",
    skills: ["Professional Development", "Communication"],
    priority: 8,
  },
  {
    id: "cred-compiler",
    title: "Compiler Designing",
    issuer: "United Institute of Management (FUGS)",
    year: "2025",
    category: "Course",
    grade: "Grade B",
    image: "/certificates/06-computer-designing-value-addition.jpg",
    skills: ["Compiler Design", "Computer Science"],
    priority: 9,
  },
  {
    id: "cred-prabandhan",
    title: "Prabandhan 2k26 Annual Fest",
    issuer: "United Institute of Management (FUGS)",
    year: "2026",
    category: "Participation",
    image: "/certificates/02-prabandhan-participation.jpg",
    skills: ["Code Hunt", "Technical Fest"],
    priority: 10,
  },
  {
    id: "cred-kumbh",
    title: "International Conference on Maha Kumbh 2025 (ICM 2025)",
    issuer: "United Institute of Management (FUGS)",
    year: "2025",
    category: "Participation",
    image: "/certificates/05-maha-kumbh-conference-participation.jpg",
    skills: ["Academic Participation", "Conference"],
    priority: 11,
  },
];

export const GALLERY_FILTERS: GalleryFilter[] = [
  "All Certificates",
  "Courses",
  "Training & Internships",
  "Participation",
  "Other Certificates",
];

export function filterCredentials(filter: GalleryFilter): Credential[] {
  switch (filter) {
    case "Courses":
      return credentials.filter((c) => c.category === "Course");
    case "Training & Internships":
      return credentials.filter((c) => c.category === "Training" || c.category === "Internship");
    case "Participation":
      return credentials.filter((c) => c.category === "Participation");
    case "Other Certificates":
      return credentials.filter((c) => c.category === "Certification" || c.category === "Other");
    case "All Certificates":
    default:
      return credentials;
  }
}
