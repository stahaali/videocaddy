import type { AnimationPageData } from "./types";
import index from "./pages/_index.json";

import landing from "./pages/index.json";
import engineering3d from "./pages/3d-engineering.json";
import animatedProductAd from "./pages/animated-product-advertisement.json";
import animation2d from "./pages/2d-animation.json";
import animation3d from "./pages/3d-animation.json";
import product3d from "./pages/3d-product-animation.json";
import architecture from "./pages/architecture.json";
import character from "./pages/character.json";
import cutout from "./pages/cutout.json";
import explainerVideo from "./pages/explainer-video.json";
import featureFilm from "./pages/feature-film.json";
import flash from "./pages/flash.json";
import logo from "./pages/logo.json";
import machineAssembly from "./pages/machine-assembly.json";
import product from "./pages/product.json";
import rotoscoping from "./pages/rotoscoping.json";
import titling from "./pages/titling.json";
import whiteboard from "./pages/whiteboard.json";
import stopMotion from "./pages/stop-motion.json";
import tvCommercial from "./pages/tv-commercial.json";
import medical from "./pages/medical.json";

export type {
  AnimationCaseStudy,
  AnimationFAQ,
  AnimationLink,
  AnimationPageData,
  AnimationProcessStep,
  AnimationService,
  AnimationWhyItem,
} from "./types";

export const animationPages: Record<string, AnimationPageData> = {
  index: landing as AnimationPageData,
  "3d-engineering": engineering3d as AnimationPageData,
  "animated-product-advertisement": animatedProductAd as AnimationPageData,
  "2d-animation": animation2d as AnimationPageData,
  "3d-animation": animation3d as AnimationPageData,
  "3d-product-animation": product3d as AnimationPageData,
  architecture: architecture as AnimationPageData,
  character: character as AnimationPageData,
  cutout: cutout as AnimationPageData,
  "explainer-video": explainerVideo as AnimationPageData,
  "feature-film": featureFilm as AnimationPageData,
  flash: flash as AnimationPageData,
  logo: logo as AnimationPageData,
  "machine-assembly": machineAssembly as AnimationPageData,
  product: product as AnimationPageData,
  rotoscoping: rotoscoping as AnimationPageData,
  titling: titling as AnimationPageData,
  whiteboard: whiteboard as AnimationPageData,
  "stop-motion": stopMotion as AnimationPageData,
  "tv-commercial": tvCommercial as AnimationPageData,
  medical: medical as AnimationPageData,
};

/** Sub-page slugs only (excludes landing `index`). */
export const animationSlugs = index
  .map((entry) => entry.slug)
  .filter((slug) => slug !== "index");

export function getAnimationPage(slug: string): AnimationPageData | undefined {
  return animationPages[slug];
}

export function getAnimationLanding(): AnimationPageData {
  return animationPages.index;
}
