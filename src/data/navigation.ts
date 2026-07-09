export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  links: MegaMenuLink[];
}

export interface HeaderNavItem {
  label: string;
  href: string;
  hasDropdown: boolean;
  columns?: MegaMenuColumn[];
}

export const headerMegaNav: HeaderNavItem[] = [
  {
    label: "Video Editing",
    href: "/services",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "360 Video Editing", href: "/services" },
          { label: "Corporate Videos", href: "/services" },
          { label: "Edius Pro Editing", href: "/services" },
          { label: "Film Re-editing", href: "/services" },
          { label: "Final Cut Editing", href: "/services" },
          { label: "Real Estate Video Editing", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Holiday Vacation Video", href: "/services" },
          { label: "Interview Video Editing", href: "/services" },
          { label: "Premiere Pro Editing", href: "/services" },
          { label: "Product Video Editing", href: "/services" },
          { label: "Real Estate Video Tour", href: "/services" },
          { label: "Youtube Video Editing", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Sale Pitch Video Editing", href: "/services" },
          { label: "Sports Video Editing", href: "/services" },
          { label: "Testimonial Video Editing", href: "/services" },
          { label: "Video Brochure", href: "/services" },
          { label: "Video Clipping", href: "/services" },
          { label: "Commercial Video Editing", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Video Stabilizing", href: "/services" },
          { label: "Video Summary", href: "/services" },
          { label: "Video Tagging", href: "/services" },
          { label: "Virtual Reality Post-Production", href: "/services" },
          { label: "Wedding Video Editing", href: "/services" },
          { label: "Adobe After Effects Editing", href: "/services" },
        ],
      },
    ],
  },
  {
    label: "Audio Editing",
    href: "/services",
    hasDropdown: false,
  },
  {
    label: "Storyboard",
    href: "/services",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "Cartoon Storyboard", href: "/services" },
          { label: "Character Creation", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Comic Book Storyboard", href: "/services" },
          { label: "eLearning Storyboard", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Illustration Storyboard", href: "/services" },
          { label: "Photomatic Storyboard", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Storyboard Animatics", href: "/services" },
          { label: "Video Game Storyboard", href: "/services" },
        ],
      },
    ],
  },
  {
    label: "Animation",
    href: "/services",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "3D Engineering Animation", href: "/services" },
          { label: "Animated Product Advertisement", href: "/services" },
          { label: "2D Animation", href: "/services" },
          { label: "3D Animation", href: "/services" },
          { label: "3D Product Animation", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Architecture Animation", href: "/services" },
          { label: "Character Animation", href: "/services" },
          { label: "Cutout Animation", href: "/services" },
          { label: "Explainer Video Animation", href: "/services" },
          { label: "Feature Film Animation", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Flash Animation", href: "/services" },
          { label: "Logo Animation", href: "/services" },
          { label: "Machine Assembly Animation", href: "/services" },
          { label: "Product Animation", href: "/services" },
          { label: "Rotoscoping Animation", href: "/services" },
        ],
      },
      {
        links: [
          { label: "Titling Animation", href: "/services" },
          { label: "Whiteboard Animation", href: "/services" },
          { label: "Stop Motion Animation", href: "/services" },
          { label: "TV Commercial Animation", href: "/services" },
          { label: "Medical Animation", href: "/services" },
        ],
      },
    ],
  },
];

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "866-561-4250",
  phoneAlt: ["866-504-4402", "866-535-7673"],
  email: "info@videocaddy.com",
  chatLabel: "CHAT",
};

export const footerLinks = {
  services: [
    { label: "Video Editing", href: "/services" },
    { label: "Audio Editing", href: "/services" },
    { label: "Animation", href: "/services" },
    { label: "Storyboarding", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};
