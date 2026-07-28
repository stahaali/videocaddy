import type { Metadata } from "next";
import StoryboardPage from "@/components/sections/StoryboardPage/StoryboardPage";
import { getStoryboardLanding } from "@/data/storyboard";

export async function generateMetadata(): Promise<Metadata> {
  const page = getStoryboardLanding();

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default function StoryboardLandingPage() {
  const page = getStoryboardLanding();
  return <StoryboardPage data={page} />;
}
