export interface HeroData {
  name: string;
  role: string;
  bio: string;
  photoUrl?: string;
  heroVideoUrl?: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface QuickInfoItem {
  key: string;
  value: string;
  highlight?: boolean;
}

export interface AboutData {
  paragraphs: string[];
  quickInfo: QuickInfoItem[];
}

export interface ExperienceEntry {
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
}

export interface ProjectEntry {
  name: string;
  description: string;
  stars: number;
  techStack: string[];
  github: string;
  liveDemo?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
  link: string;
  previewImage?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  type: 'email' | 'linkedin' | 'github';
}

export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface ContactData {
  paragraph: string;
  links: ContactLink[];
  emailjs: EmailJSConfig;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'leetcode' | 'twitter';
  url: string;
}
