import type { StoryboardPageData } from "./types";
import index from "./pages/_index.json";

import animatics from "./pages/animatics.json";
import cartoon from "./pages/cartoon.json";
import characterCreation from "./pages/character-creation.json";
import comicBook from "./pages/comic-book.json";
import elearning from "./pages/elearning.json";
import illustration from "./pages/illustration.json";
import landing from "./pages/index.json";
import photomatic from "./pages/photomatic.json";
import videoGame from "./pages/video-game.json";

export type {
  StoryboardCaseStudy,
  StoryboardFAQ,
  StoryboardLink,
  StoryboardPageData,
  StoryboardProcessStep,
  StoryboardService,
  StoryboardWhyItem,
} from "./types";

export const storyboardPages: Record<string, StoryboardPageData> = {
  index: landing as StoryboardPageData,
  cartoon: cartoon as StoryboardPageData,
  "character-creation": characterCreation as StoryboardPageData,
  "comic-book": comicBook as StoryboardPageData,
  elearning: elearning as StoryboardPageData,
  illustration: illustration as StoryboardPageData,
  photomatic: photomatic as StoryboardPageData,
  animatics: animatics as StoryboardPageData,
  "video-game": videoGame as StoryboardPageData,
};

/** Sub-page slugs only (excludes landing `index`). */
export const storyboardSlugs = index
  .map((entry) => entry.slug)
  .filter((slug) => slug !== "index");

export function getStoryboardPage(slug: string): StoryboardPageData | undefined {
  return storyboardPages[slug];
}

export function getStoryboardLanding(): StoryboardPageData {
  return storyboardPages.index;
}
