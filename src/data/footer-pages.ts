import type { InfoCard, InfoSection, GlossaryTerm } from "@/components/sections/InfoPageContent/InfoPageContent";
import type { Feature } from "@/data/features";

export const securitySections: InfoSection[] = [
  {
    title: "Protecting Your Media From Start to Finish",
    paragraphs: [
      "Client footage, scripts, and brand assets stay under controlled access for the full life of a project. We combine legal agreements, restricted facility access, and encrypted digital workflows so files are safeguarded in transit, in storage, and while editors work.",
    ],
  },
  {
    title: "Legal Safeguards",
    paragraphs: [
      "Every engagement can include a non-disclosure agreement. Team members are bound by confidentiality requirements before they touch project media.",
    ],
    bullets: [
      { title: "NDAs", text: "Project-level confidentiality agreements for clients and assigned staff." },
      { title: "Access control", text: "Only the people assigned to your job can open project folders." },
      { title: "Retention policy", text: "Files are retained or removed according to the terms agreed at kickoff." },
    ],
  },
  {
    title: "Physical and Digital Controls",
    bullets: [
      { title: "Secure transfer", text: "Encrypted upload channels and VPN options for large deliveries." },
      { title: "Endpoint protection", text: "Workstations use enterprise antivirus, spam filtering, and monitored access." },
      { title: "Facility controls", text: "Restricted entry, monitoring, and credentialed access to production areas." },
      { title: "Backups", text: "Centralized storage with redundancy so work is recoverable without widening exposure." },
    ],
  },
];

export const qualitySections: InfoSection[] = [
  {
    title: "Built Around Consistent Review",
    paragraphs: [
      "Quality is treated as a process, not a final glance. Every delivery moves through defined checkpoints so pacing, brand rules, audio levels, and technical specs are verified before you receive the master.",
    ],
  },
  {
    title: "Our QA Approach",
    bullets: [
      { title: "Multi-tier checks", text: "Editors, supervisors, and QC reviewers each validate different aspects of the cut." },
      { title: "ISO-aligned practices", text: "Documented procedures keep reviews repeatable across high-volume work." },
      { title: "Fast escalation", text: "Issues raised during review are routed quickly so timelines stay intact." },
      { title: "Revision cycles", text: "Feedback is logged, applied, and re-checked before final approval." },
    ],
  },
  {
    title: "What You Can Expect",
    paragraphs: [
      "Clear brand and technical guidelines at the start of the job, structured review rounds, and delivery packages that match the formats and versions you request.",
    ],
  },
];

export const tatSections: InfoSection[] = [
  {
    title: "Turnaround That Matches Production Reality",
    paragraphs: [
      "Deadlines are set during scoping based on runtime, complexity, revision rounds, and asset readiness. We staff and schedule to hit those dates without cutting corners on quality.",
    ],
  },
  {
    title: "How We Keep Delivery Predictable",
    bullets: [
      { title: "Scoped timelines", text: "Every project starts with a written schedule and checkpoint dates." },
      { title: "Flexible capacity", text: "Additional editors and extended coverage help absorb peak volume." },
      { title: "Parallel workflows", text: "Picture, audio, and graphics can move in coordinated tracks when needed." },
      { title: "Status visibility", text: "You receive progress updates so approvals never become the bottleneck." },
    ],
  },
  {
    title: "Typical Ranges",
    paragraphs: [
      "Short social cuts and simple edits can often move within a few business days once assets and notes are complete. Longer features, multi-language packages, and heavy VFX need longer windows that we confirm before work begins.",
    ],
  },
];

export const benefitsFeatures: Feature[] = [
  {
    title: "Skilled Production Bench",
    description:
      "Editors, animators, and audio specialists trained on current tools so you can scale output without long hiring cycles.",
  },
  {
    title: "Quality Without Surprise Costs",
    description:
      "Defined scopes, ISO-aligned checks, and transparent revision handling keep budgets predictable while standards stay high.",
  },
  {
    title: "Faster Delivery Windows",
    description:
      "Extended coverage and expandable teams help meet campaign and broadcast deadlines when volume spikes.",
  },
  {
    title: "Confidential by Design",
    description:
      "NDAs, controlled access, and encrypted transfers protect unreleased footage and brand material throughout production.",
  },
];

export const blogCards: InfoCard[] = [
  {
    title: "How to Brief an Outsourced Editing Team",
    description: "A practical checklist for brand rules, file naming, review rounds, and delivery formats.",
  },
  {
    title: "Choosing Between 2D and 3D for Product Spots",
    description: "When motion graphics, CGI, or live-action hybrids make the strongest case for your campaign.",
  },
  {
    title: "Audio Cleanup Tips Before You Hand Off",
    description: "Simple recording habits that reduce noise-reduction time and improve final mix quality.",
  },
  {
    title: "Storyboards That Survive Production Changes",
    description: "How clear panels and timing notes keep animation and live shoots aligned under deadline pressure.",
  },
  {
    title: "White-Label Post Workflows for Agencies",
    description: "Ways to keep client communication, revisions, and brand control while scaling delivery.",
  },
  {
    title: "Measuring Turnaround Without Sacrificing QC",
    description: "Setting SLAs that balance speed, review depth, and predictable revision cycles.",
  },
];

export const articleCards: InfoCard[] = [
  {
    title: "Frame Rates and Delivery Specs Explained",
    description: "A plain-language guide to common frame rates, containers, and when clients ask for both.",
  },
  {
    title: "Color Grading vs. Color Correction",
    description: "Where technical fixes end and creative look development begins in a post pipeline.",
  },
  {
    title: "What Belongs in an Animatic Package",
    description: "Timing, temp audio, and panel notes that help directors approve before full animation starts.",
  },
  {
    title: "Secure File Transfer for Large Media",
    description: "Practical options for moving multi-gigabyte project folders without email bottlenecks.",
  },
  {
    title: "Captioning and Accessibility Basics",
    description: "Why clean dialogue edits and timed captions matter for reach and compliance.",
  },
  {
    title: "Building a Revision-Friendly Edit",
    description: "Project organization habits that make client notes faster to apply and verify.",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Animatic",
    definition:
      "A timed sequence of storyboard panels, often with temporary audio, used to preview pacing before full animation or shoot.",
  },
  {
    term: "Color Grading",
    definition:
      "Creative adjustment of color, contrast, and mood after basic color correction is complete.",
  },
  {
    term: "Conform",
    definition:
      "Rebuilding an offline edit against full-resolution media so the final timeline matches the approved cut.",
  },
  {
    term: "Lower Third",
    definition:
      "On-screen text, usually in the lower portion of the frame, that identifies a speaker or topic.",
  },
  {
    term: "Proxy Edit",
    definition:
      "Editing with lighter media files for speed, then linking back to high-resolution footage for finishing.",
  },
  {
    term: "Rotoscoping",
    definition:
      "Frame-by-frame isolation of subjects so elements can be composited, cleaned, or animated separately.",
  },
  {
    term: "Rough Cut",
    definition:
      "An early assembly of selected takes used to evaluate structure before fine trimming and polish.",
  },
  {
    term: "Scratch Audio",
    definition:
      "Temporary voice or music tracks placed during editing or animatics until final recordings are ready.",
  },
  {
    term: "TAT (Turnaround Time)",
    definition:
      "The agreed window from asset handoff to delivery of the requested edit, animation, or revision round.",
  },
  {
    term: "White-Label Delivery",
    definition:
      "Finished work supplied so agencies can present it under their own brand without revealing the production partner.",
  },
];

export const caseStudyCards: InfoCard[] = [
  {
    title: "Basketball Analytics Video Tagging",
    description:
      "High-volume tagging and annotation support for a sports analytics team that needed consistent labeling at scale.",
    href: "/portfolio",
  },
  {
    title: "Artistic Storyboard for a Translation Brand",
    description:
      "Panel-driven visualization that helped a French translation company present a script before production spend.",
    href: "/portfolio",
  },
  {
    title: "Animated Storyboard for Studio Planning",
    description:
      "Previsualization that helped an American studio estimate investment and align creative stakeholders early.",
    href: "/portfolio",
  },
];
