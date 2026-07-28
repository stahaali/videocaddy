import type { VideoEditingPageData } from "./types";
import index from "./pages/_index.json";

import page360 from "./pages/360.json";
import adobeAfterEffects from "./pages/adobe-after-effects.json";
import brochure from "./pages/brochure.json";
import clipping from "./pages/clipping.json";
import commercials from "./pages/commercials.json";
import corporate from "./pages/corporate.json";
import ediusPro from "./pages/edius-pro.json";
import filmReEditing from "./pages/film-re-editing.json";
import finalCutPro from "./pages/final-cut-pro.json";
import holiday from "./pages/holiday.json";
import interview from "./pages/interview.json";
import premierePro from "./pages/premiere-pro.json";
import product from "./pages/product.json";
import realEstate from "./pages/real-estate.json";
import realEstateTour from "./pages/real-estate-tour.json";
import salesPitch from "./pages/sales-pitch.json";
import sports from "./pages/sports.json";
import stabilizing from "./pages/stabilizing.json";
import summary from "./pages/summary.json";
import tagging from "./pages/tagging.json";
import testimonial from "./pages/testimonial.json";
import virtualReality from "./pages/virtual-reality.json";
import wedding from "./pages/wedding.json";
import youtube from "./pages/youtube.json";

export type {
  VideoEditingCaseStudy,
  VideoEditingFAQ,
  VideoEditingLink,
  VideoEditingPageData,
  VideoEditingProcessStep,
  VideoEditingService,
  VideoEditingWhyItem,
} from "./types";

export const videoEditingPages: Record<string, VideoEditingPageData> = {
  "360": page360 as VideoEditingPageData,
  corporate: corporate as VideoEditingPageData,
  "edius-pro": ediusPro as VideoEditingPageData,
  "film-re-editing": filmReEditing as VideoEditingPageData,
  "final-cut-pro": finalCutPro as VideoEditingPageData,
  "real-estate": realEstate as VideoEditingPageData,
  holiday: holiday as VideoEditingPageData,
  interview: interview as VideoEditingPageData,
  "premiere-pro": premierePro as VideoEditingPageData,
  product: product as VideoEditingPageData,
  "real-estate-tour": realEstateTour as VideoEditingPageData,
  youtube: youtube as VideoEditingPageData,
  "sales-pitch": salesPitch as VideoEditingPageData,
  sports: sports as VideoEditingPageData,
  testimonial: testimonial as VideoEditingPageData,
  brochure: brochure as VideoEditingPageData,
  clipping: clipping as VideoEditingPageData,
  commercials: commercials as VideoEditingPageData,
  stabilizing: stabilizing as VideoEditingPageData,
  summary: summary as VideoEditingPageData,
  tagging: tagging as VideoEditingPageData,
  "virtual-reality": virtualReality as VideoEditingPageData,
  wedding: wedding as VideoEditingPageData,
  "adobe-after-effects": adobeAfterEffects as VideoEditingPageData,
};

export const videoEditingSlugs = index.map((entry) => entry.slug);

export function getVideoEditingPage(slug: string): VideoEditingPageData | undefined {
  return videoEditingPages[slug];
}
