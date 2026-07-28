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
    href: "/video-editing/corporate",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "360 Video Editing", href: "/video-editing/360" },
          { label: "Corporate Videos", href: "/video-editing/corporate" },
          { label: "Edius Pro Editing", href: "/video-editing/edius-pro" },
          { label: "Film Re-editing", href: "/video-editing/film-re-editing" },
          { label: "Final Cut Editing", href: "/video-editing/final-cut-pro" },
          { label: "Real Estate Video Editing", href: "/video-editing/real-estate" },
        ],
      },
      {
        links: [
          { label: "Holiday Vacation Video", href: "/video-editing/holiday" },
          { label: "Interview Video Editing", href: "/video-editing/interview" },
          { label: "Premiere Pro Editing", href: "/video-editing/premiere-pro" },
          { label: "Product Video Editing", href: "/video-editing/product" },
          { label: "Real Estate Video Tour", href: "/video-editing/real-estate-tour" },
          { label: "Youtube Video Editing", href: "/video-editing/youtube" },
        ],
      },
      {
        links: [
          { label: "Sale Pitch Video Editing", href: "/video-editing/sales-pitch" },
          { label: "Sports Video Editing", href: "/video-editing/sports" },
          { label: "Testimonial Video Editing", href: "/video-editing/testimonial" },
          { label: "Video Brochure", href: "/video-editing/brochure" },
          { label: "Video Clipping", href: "/video-editing/clipping" },
          { label: "Commercial Video Editing", href: "/video-editing/commercials" },
        ],
      },
      {
        links: [
          { label: "Video Stabilizing", href: "/video-editing/stabilizing" },
          { label: "Video Summary", href: "/video-editing/summary" },
          { label: "Video Tagging", href: "/video-editing/tagging" },
          { label: "Virtual Reality Post-Production", href: "/video-editing/virtual-reality" },
          { label: "Wedding Video Editing", href: "/video-editing/wedding" },
          { label: "Adobe After Effects Editing", href: "/video-editing/adobe-after-effects" },
        ],
      },
    ],
  },
  {
    label: "Audio Editing",
    href: "/audio-editing",
    hasDropdown: false,
  },
  {
    label: "Storyboard",
    href: "/storyboard",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "Cartoon Storyboard", href: "/storyboard/cartoon" },
          { label: "Character Creation", href: "/storyboard/character-creation" },
        ],
      },
      {
        links: [
          { label: "Comic Book Storyboard", href: "/storyboard/comic-book" },
          { label: "eLearning Storyboard", href: "/storyboard/elearning" },
        ],
      },
      {
        links: [
          { label: "Illustration Storyboard", href: "/storyboard/illustration" },
          { label: "Photomatic Storyboard", href: "/storyboard/photomatic" },
        ],
      },
      {
        links: [
          { label: "Storyboard Animatics", href: "/storyboard/animatics" },
          { label: "Video Game Storyboard", href: "/storyboard/video-game" },
        ],
      },
    ],
  },
  {
    label: "Animation",
    href: "/animation",
    hasDropdown: true,
    columns: [
      {
        links: [
          { label: "3D Engineering Animation", href: "/animation/3d-engineering" },
          { label: "Animated Product Advertisement", href: "/animation/animated-product-advertisement" },
          { label: "2D Animation", href: "/animation/2d-animation" },
          { label: "3D Animation", href: "/animation/3d-animation" },
          { label: "3D Product Animation", href: "/animation/3d-product-animation" },
        ],
      },
      {
        links: [
          { label: "Architecture Animation", href: "/animation/architecture" },
          { label: "Character Animation", href: "/animation/character" },
          { label: "Cutout Animation", href: "/animation/cutout" },
          { label: "Explainer Video Animation", href: "/animation/explainer-video" },
          { label: "Feature Film Animation", href: "/animation/feature-film" },
        ],
      },
      {
        links: [
          { label: "Flash Animation", href: "/animation/flash" },
          { label: "Logo Animation", href: "/animation/logo" },
          { label: "Machine Assembly Animation", href: "/animation/machine-assembly" },
          { label: "Product Animation", href: "/animation/product" },
          { label: "Rotoscoping Animation", href: "/animation/rotoscoping" },
        ],
      },
      {
        links: [
          { label: "Titling Animation", href: "/animation/titling" },
          { label: "Whiteboard Animation", href: "/animation/whiteboard" },
          { label: "Stop Motion Animation", href: "/animation/stop-motion" },
          { label: "TV Commercial Animation", href: "/animation/tv-commercial" },
          { label: "Medical Animation", href: "/animation/medical" },
        ],
      },
    ],
  },
];

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Audio Editing", href: "/audio-editing" },
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
    { label: "Video Editing", href: "/video-editing/corporate" },
    { label: "Audio Editing", href: "/audio-editing" },
    { label: "Animation", href: "/animation" },
    { label: "Storyboarding", href: "/storyboard" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};
