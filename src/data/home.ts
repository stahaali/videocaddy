import { assets } from "./assets";

export const heroData = {
  titleLines: [
    "PROFESSIONAL VIDEO",
    { solid: "EDITING &", outline: "POST-PRODUCTION" },
    "SERVICES",
  ],
  subtitle:
    "Video Caddy is a leading video editing and post-production outsourcing partner to video content creators and production houses worldwide",
  primaryCta: { label: "GET STARTED NOW", href: "/contact" },
  secondaryCta: { label: "PORTFOLIO", href: "/portfolio" },
  showreel: assets.heroShowreel,
  bannerBg: assets.bannerBg,
};

export const statsData = [
  { value: "15+", label: "Years of experience" },
  { value: "500+", label: "Satisfied clients" },
  { value: "120", label: "4K resolution projects" },
  { value: "500+", label: "Project Done" },
];

export const serviceCategories = [
  {
    title: "Picture Service",
    image: assets.services.picture,
    items: [
      "Conform",
      "Color Correction",
      "Title",
      "Caption",
      "Dubbing",
      "Editorial",
      "StoryBoard",
    ],
  },
  {
    title: "Visual Effects",
    image: assets.services.vfx,
    items: [
      "Rotoscoping",
      "Motion Tracking",
      "Chroma Removal",
      "Motion Graphics",
      "Beauty",
      "CleanUp",
      "Animation",
    ],
  },
  {
    title: "Audio Service",
    image: assets.services.audio,
    items: [
      "Ad Jingle Creation",
      "Corporate Audio",
      "Radio Program",
      "Music Mixing",
      "Audio Conversion",
      "Podcast Editing",
      "Adobe Audition",
    ],
  },
];

export const videoCategories = [
  { title: "Corporate Videos", href: "/services", image: assets.categories.corporate },
  { title: "Real Estate Video Tour", href: "/services", image: assets.categories.realEstate },
  { title: "Virtual Reality", href: "/services", image: assets.categories.virtualReality },
  { title: "Wedding Video", href: "/services", image: assets.categories.wedding },
  { title: "Film Re-Editing", href: "/services", image: assets.categories.filmReEditing },
  { title: "Product Video", href: "/services", image: assets.categories.product },
  { title: "Video Summary", href: "/services", image: assets.categories.videoSummary },
  { title: "Video Clipping", href: "/services", image: assets.categories.videoClipping },
  { title: "Edius Pro Editing", href: "/services", image: assets.categories.ediusPro },
  { title: "Final Cut Editing", href: "/services", image: assets.categories.finalCut },
  { title: "Holiday Vacation Video", href: "/services", image: assets.categories.holiday },
  { title: "Sales Pitch Video", href: "/services", image: assets.categories.salesPitch },
  { title: "Testimonial Video", href: "/services", image: assets.categories.testimonial },
  { title: "Video Tagging", href: "/services", image: assets.categories.videoTagging },
  { title: "Premier Pro Editing", href: "/services", image: assets.categories.premierPro },
  { title: "Interview Videos", href: "/services", image: assets.categories.interview },
  { title: "Sports Video", href: "/services", image: assets.categories.sports },
  { title: "Video Stabilizing", href: "/services", image: assets.categories.stabilizing },
  { title: "360 Video", href: "/services", image: assets.categories.video360 },
  { title: "Video Brochure", href: "/services", image: assets.categories.brochure },
];

export const processSteps = [
  {
    variant: "one",
    step: "STEP",
    number: assets.process.step1,
    icon: assets.process.step1Icon,
    title: "You give the brief & upload the file via FTP",
  },
  {
    variant: "two",
    step: "STEP",
    number: assets.process.step2,
    icon: assets.process.step2Icon,
    title: "We edit the video according to the brief",
  },
  {
    variant: "three",
    step: "STEP",
    number: assets.process.step3,
    icon: assets.process.step3Icon,
    title: "You review the final output for approval",
  },
  {
    variant: "four",
    step: "STEP",
    number: assets.process.step4,
    icon: assets.process.step4Icon,
    title: "Edited file ready to download via FTP",
  },
] as const;

export const successStories = [
  {
    title: "Video Tagging and Annotation Project for Basketball Analytics Company",
    image: assets.successStories[0],
    href: "/portfolio",
  },
  {
    title: "French Translation Company Received an Artistic Storyboard of Their Original Script",
    image: assets.successStories[1],
    href: "/portfolio",
  },
  {
    title: "Animated Storyboard by Video Caddy Helped American Studio in Calculated Investment",
    image: assets.successStories[2],
    href: "/portfolio",
  },
] as const;

export const approachItems = [
  {
    title: "Advanced Editing Techniques",
    description:
      "We incorporate the latest video editing advancements, such as AI-driven software and machine learning algorithms, to create visually stunning and optimized videos. These technologies improve video quality, minimize noise, and create seamless transitions that engage viewers.",
  },
  {
    title: "Comprehensive Color Grading and Correction",
    description:
      "Our experts use industry-standard tools like DaVinci Resolve and Adobe Premiere Pro for sophisticated color grading and correction. By fine-tuning color palettes, we enhance mood, maintain consistency, and match your creative vision.",
  },
  {
    title: "High-Quality Motion Graphics and VFX",
    description:
      "We utilize advanced VFX and motion graphics techniques to add impactful visual elements to your videos. Whether it's dynamic titles, kinetic typography, or complex animations, our team can elevate your narrative.",
  },
  {
    title: "Precision Audio Editing",
    description:
      "Our specialists use tools such as Pro Tools and Adobe Audition to synchronize sound with visuals, eliminate unwanted noise, and enhance the overall audio experience.",
  },
  {
    title: "Efficient Workflow and Project Management",
    description:
      "Our streamlined workflow focuses on maximizing efficiency and reducing turnaround times. By using collaborative platforms and cloud-based project management tools, we ensure smooth communication.",
  },
  {
    title: "Tailored Solutions and Customization",
    description:
      "Recognizing that each project is unique, we offer customized solutions to meet specific client needs. We collaborate closely with you to ensure the final product aligns with your vision.",
  },
  {
    title: "Data Security and Confidentiality",
    description:
      "We prioritize content security and confidentiality, employing strong data protection measures with encrypted transfers and secure storage throughout the editing process.",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our dedication to excellence ensures that every video undergoes thorough checks and refinements to meet the highest standards.",
  },
];

export const industries = [
  {
    title: "CORPORATE",
    description:
      "Corporate entities require high-quality video content for internal communications, training, marketing, and branding. Video Caddy provides comprehensive video editing services to create professional corporate videos that effectively communicate messages and align with business strategies.",
  },
  {
    title: "REAL ESTATE",
    description:
      "Real estate professionals benefit from video tours and promotional videos that showcase properties and engage potential buyers. Our editing services help create compelling visual content that highlights property features, providing a complete view that facilitates informed buying decisions.",
  },
  {
    title: "VIRTUAL REALITY",
    description:
      "The Virtual Reality industry relies on immersive 3D experiences that require precise editing to convey effectively. Our expertise in VR video editing ensures content is engaging and accurately represents virtual environments, enhancing user experience and product appeal.",
  },
  {
    title: "MEDIA AND ENTERTAINMENT",
    description:
      "Video Caddy supports the media and entertainment industries with services like film re-editing, sports video editing, and testimonial videos. We provide the technical expertise and creativity needed to refine and produce captivating video content for audiences worldwide.",
  },
  {
    title: "EDUCATION",
    description:
      "The education sector benefits from video content for instructional purposes, e-learning modules, and promotional materials. Our editing services help educational institutions and companies produce polished and educational videos that enhance learning experiences and engagement.",
  },
  {
    title: "OTHER INDUSTRIES",
    description:
      "While these are some of the top industries we serve, many other sectors can also leverage our expert video editing services. Whether you are in healthcare, automotive, tourism, or any other field, Video Caddy can tailor its services to meet your unique video content needs, ensuring your message reaches your audience effectively.",
  },
];
