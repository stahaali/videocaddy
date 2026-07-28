import { assets } from "./assets";

export const audioEditingHero = {
  title: "Audio Editing Services",
  subtitle:
    "Audio editing services for podcast networks, agencies, and production teams, designed to refine dialogue, balance soundtracks, and prepare audio tracks for professional distribution and broadcast.",
  cta: { label: "Contact Us", href: "/contact" },
};

export const audioEditingIntro = [
  "Audio recorded for podcasts, marketing videos, training modules, and branded content often reaches post-production with background noise, uneven levels, or inconsistent dialogue quality. For production teams managing tight schedules and distribution deadlines, these issues can slow delivery and increase internal editing workloads. At Video Caddy, our audio editing services provide structured post-production support to refine dialogue, stabilize sound levels, and prepare audio tracks for professional release.",
  "We work with podcast networks, agencies, and production studios that require dependable audio post production services across recurring content pipelines. Each engagement focuses on controlled editing workflows, consistent output standards, and scalable capacity. As an experienced audio editing company, we support tasks such as dialogue cleanup, professional audio editing, audio restoration, and music mixing services, ensuring production teams receive audio that is ready for publishing, broadcast, or distribution.",
];

export const audioEditingServicesHeader = {
  titleLine1: "Our Audio Editing",
  titleLine2: "Services",
  description:
    "Our audio editing services are designed for podcast networks, agencies, and production studios that need consistent audio quality for their recurring media content. At our audio editing company, we offer structured audio post-production services to enhance dialogues, soundtracks, and other elements, preparing audio assets for distribution across podcasts, marketing media, and other platforms.",
};

export type AudioServiceItemPart =
  | { type: "text"; value: string }
  | { type: "link"; value: string; href: string };

export interface AudioService {
  title: string;
  image: string;
  items: AudioServiceItemPart[][];
}

export const audioEditingServices: AudioService[] = [
  {
    title: "Corporate Audio Editing",
    image: assets.audioEditing.corporate,
    items: [
      [{ type: "text", value: "Clean interviews and presentations using professional audio editing to remove noise and stabilize dialogue levels." }],
      [{ type: "text", value: "Balance narration and background music for corporate videos within structured enterprise media editing solutions workflows." }],
      [{ type: "text", value: "Correct uneven speech levels and microphone inconsistencies across internal communications and executive recordings." }],
      [
        { type: "text", value: "Deliver cleaned and optimized audio for video projects edited using " },
        { type: "link", value: "Premiere Pro", href: "/services" },
        { type: "text", value: " or Edius Pro." },
      ],
    ],
  },
  {
    title: "Radio Program Editing",
    image: assets.audioEditing.radio,
    items: [
      [{ type: "text", value: "Edit recorded radio programs by removing pauses to stabilize host and guest dialogue." }],
      [{ type: "text", value: "Apply audio restoration services to repair distorted recordings captured during live broadcast environments." }],
      [{ type: "text", value: "Balance music beds, advertisements, and speech segments to maintain consistent program pacing." }],
      [{ type: "text", value: "Deliver broadcast-ready audio formatted for radio distribution and podcast publishing." }],
    ],
  },
  {
    title: "Music Editing & Mixing",
    image: assets.audioEditing.music,
    items: [
      [{ type: "text", value: "Edit instrumental and vocal recordings using structured music mixing services to create balanced soundtracks." }],
      [{ type: "text", value: "Synchronize music tracks with narration across podcasts, promotional media, and branded marketing content." }],
      [{ type: "text", value: "Adjust timing, equalization, and volume transitions across layered music recordings." }],
      [
        { type: "text", value: "Deliver finalized tracks prepared for integration with video " },
        { type: "link", value: "production services", href: "/services" },
        { type: "text", value: " pipelines." },
      ],
    ],
  },
  {
    title: "Audio Conversion Services",
    image: assets.audioEditing.conversion,
    items: [
      [{ type: "text", value: "Convert analog and legacy recordings through structured audio conversion services into standardized digital formats." }],
      [{ type: "text", value: "Standardize multiple audio formats into consistent files used across production environments." }],
      [{ type: "text", value: "Prepare converted files compatible with Adobe Audition audio editing workflows." }],
      [{ type: "text", value: "Organize audio libraries for efficient access across podcast production and marketing media teams." }],
    ],
  },
  {
    title: "Ad Jingle Creation",
    image: assets.audioEditing.jingle,
    items: [
      [{ type: "text", value: "Edit promotional voiceovers and music segments through structured Ad jingle creation services workflows." }],
      [{ type: "text", value: "Balance narration and music layers used in advertising audio segments." }],
      [{ type: "text", value: "Structure short promotional jingles for radio advertising and podcast sponsorship segments." }],
      [
        { type: "text", value: "Deliver promotional audio assets used across marketing videos and " },
        { type: "link", value: "YouTube editing", href: "/services" },
        { type: "text", value: " workflows." },
      ],
    ],
  },
  {
    title: "Podcast Editing Services",
    image: assets.audioEditing.podcast,
    items: [
      [{ type: "text", value: "Provide structured podcast editing services by removing filler words and background noise." }],
      [{ type: "text", value: "Manage podcast post production including dialogue cleanup, intro integration, and audio mastering." }],
      [{ type: "text", value: "Perform audio editing for podcasts recorded remotely or within studio environments." }],
      [{ type: "text", value: "Deliver podcast episodes prepared for publishing across podcast platforms and marketing channels." }],
    ],
  },
  {
    title: "SoundTrack Pro Editing",
    image: assets.audioEditing.soundtrack,
    items: [
      [{ type: "text", value: "Perform legacy corrections through Soundtrack Pro audio editing workflows for archived production sessions." }],
      [{ type: "text", value: "Remove audio artifacts and stabilize dialogue tracks across recorded media content." }],
      [{ type: "text", value: "Apply audio restoration services to improve the clarity of damaged recordings." }],
      [{ type: "text", value: "Deliver corrected audio tracks prepared for modern post-production systems." }],
    ],
  },
  {
    title: "Adobe Audition Audio Editing",
    image: assets.audioEditing.audition,
    items: [
      [{ type: "text", value: "Edit complex recordings through Adobe Audition audio editing workflows used in professional post-production." }],
      [{ type: "text", value: "Apply compression, equalization, and noise reduction to refine dialogue clarity." }],
      [
        { type: "text", value: "Align edited audio with video timelines created in Premiere Pro or " },
        { type: "link", value: "Edius Pro", href: "/services" },
        { type: "text", value: "." },
      ],
      [{ type: "text", value: "Deliver finalized audio outputs prepared for podcast distribution and marketing media publishing." }],
    ],
  },
  {
    title: "AI Voice Cloning & Dialogue Correction",
    image: assets.audioEditing.aiVoice,
    items: [
      [{ type: "text", value: "Apply AI Voice Cloning & Dialogue Correction to repair missing voice segments." }],
      [{ type: "text", value: "Match reconstructed dialogue with original voice tone to maintain recording continuity." }],
      [{ type: "text", value: "Correct unusable audio sections without requiring additional recording sessions." }],
      [
        { type: "text", value: "Deliver corrected dialogue tracks for podcasts, marketing content, and " },
        { type: "link", value: "sports audio editing", href: "/services" },
        { type: "text", value: " projects." },
      ],
    ],
  },
];

export const audioWhyChoose = {
  title: "Why Should Businesses Choose Our Audio Editing Services",
  description:
    "Our audio editing services support podcast networks, agencies, production studios, and corporate media teams that require dependable audio post production services across recurring content pipelines. Engagements focus on controlled editing workflows, consistent output quality, and reliable turnaround across podcasts, marketing, and training media production.",
  items: [
    {
      title: "Dedicated Editors for Recurring Media Production",
      description:
        "Podcast networks and agencies work with consistent editors who understand content formats, pacing expectations, and delivery requirements across ongoing podcast editing services engagements.",
    },
    {
      title: "Structured Multi-Stage Audio Quality Review",
      description:
        "Each project passes through controlled review steps covering dialogue clarity, sound balance, and noise correction within professional audio editing workflows.",
    },
    {
      title: "Scalable Support for High-Volume Content Teams",
      description:
        "Production teams managing podcasts, marketing media, and training content can scale editing capacity without expanding internal audio post production services teams.",
    },
    {
      title: "Tool-Aligned Editing for Modern Production Environments",
      description:
        "Audio tracks are refined using professional environments such as Adobe Audition audio editing and legacy Soundtrack Pro audio editing workflows.",
    },
    {
      title: "Consistent Sound Output Across Multi-Channel Media",
      description:
        "Edited audio maintains stable sound levels and clarity across podcasts, marketing media, and corporate communications through structured audio restoration practices.",
    },
    {
      title: "Prepared Audio Tracks for Distribution and Publishing",
      description:
        "Finalized files are delivered in structured formats ready for podcast platforms, marketing videos, and other digital distribution channels.",
    },
  ],
};

export const audioMidCta = {
  title: "Strengthen Your Content Pipeline with Reliable Audio Editing Services",
  descriptionBefore:
    "Our audio editing services support podcast networks, agencies, production studios, and corporate teams requiring consistent audio post production services across recurring media content. Video Caddy provides professional audio editing, podcast editing services, and audio restoration services through structured workflows designed for dependable delivery.",
  descriptionLink: { label: "Contact us", href: "/contact" },
  descriptionAfter:
    " to discuss your requirements and engage a trusted audio editing company for scalable post-production support.",
  cta: { label: "Contact Us", href: "/contact" },
};

export const audioCaseStudies = {
  eyebrow: "SUCCESS STORIES",
  title: "OUR RECENT CASE STUDIES",
  viewAll: { label: "View all", href: "/portfolio" },
  items: [
    {
      variant: "white" as const,
      title:
        "Audio Editing of 8400 Clinical Files for Leading Digital Speech Therapy Specialist",
      href: "/portfolio",
    },
    {
      variant: "middle" as const,
      title:
        "Video & Audio Editing Services for a Digital Publishing and Content Delivery Company",
      href: "/portfolio",
    },
  ],
};

export const audioEditingFaqs = [
  {
    question: "How much do Adobe After Effects video editing services cost?",
    answer:
      "Costs typically depend on animation complexity, visual effects requirements, video length, and revision scope. Most vendors assess project briefs and asset readiness before providing structured pricing.",
  },
  {
    question: "What kind of videos can be developed through Adobe After Effects?",
    answer:
      "Adobe After Effects is generally used for creating explainer videos, product videos, marketing videos, motion graphics videos, VFX videos, etc.",
  },
  {
    question: "What is the pricing for editing podcast or corporate audio recordings?",
    answer:
      "The fees for expert audio editing services vary based on the length of the recording, the intricacy of the audio tracks, the audio cleanup needed, and the time required for audio editing. Audio editing companies generally offer their services based on sample audio files along with audio editing standards.",
  },
  {
    question:
      "Is it possible for companies to avail external services for audio editing of audiobooks in extensive narration recordings?",
    answer:
      "Yes, it is possible for companies to avail external services for audio editing of audiobooks during extensive narration recordings. Systematic audio post-production services are generally provided for audio editing of audiobooks.",
  },
  {
    question: "Is it possible to enhance voiceover recordings if audio quality is poor?",
    answer:
      "Of course, it is possible to enhance voiceover recordings through audio editing services, which involve audio enhancement, audio restoration, etc., for voiceover recordings.",
  },
  {
    question: "Do audio editing companies synchronize audio with video content?",
    answer:
      "Certainly. Many audio editing companies align dialogue, voiceovers, and music tracks with edited video timelines to guarantee timing accuracy in podcasts, promotional videos, and digital media projects.",
  },
  {
    question: "Can old or damaged recordings be restored by professionals?",
    answer:
      "Certainly. Professional audio restoration services repair distorted, noisy, or aged recordings by removing artifacts, balancing levels, and improving clarity while preserving original vocal characteristics whenever possible.",
  },
];
