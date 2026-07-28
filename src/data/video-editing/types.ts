export interface VideoEditingLink {
  label: string;
  href: string;
}

export interface VideoEditingFAQ {
  question: string;
  answer: string;
}

export interface VideoEditingService {
  title: string;
  items: string[];
  image?: string;
}

export interface VideoEditingWhyItem {
  title: string;
  description: string;
}

export interface VideoEditingProcessStep {
  title: string;
  description: string;
}

export interface VideoEditingCaseStudy {
  title: string;
  href: string;
  description?: string;
  variant?: "white" | "middle";
}

export interface VideoEditingPageData {
  slug: string;
  label: string;
  sourceUrl: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    image: string;
    backgroundImage?: string;
    primaryCta: VideoEditingLink;
    secondaryCta?: VideoEditingLink;
  };
  intro: string[];
  servicesHeader: {
    title: string;
    description: string;
  } | null;
  services: VideoEditingService[];
  why: {
    eyebrow?: string;
    title: string;
    description?: string;
    image?: string;
    items: VideoEditingWhyItem[];
  };
  process: VideoEditingProcessStep[];
  midCta: {
    title: string;
    description: string | string[];
    cta: VideoEditingLink;
    /** content = inside page body; afterStories = after Success Stories */
    placement?: "content" | "afterStories";
  } | null;
  caseStudiesSection?: {
    eyebrow?: string;
    title?: string;
    viewAll?: VideoEditingLink;
  };
  caseStudies: VideoEditingCaseStudy[];
  faqs: VideoEditingFAQ[];
}
