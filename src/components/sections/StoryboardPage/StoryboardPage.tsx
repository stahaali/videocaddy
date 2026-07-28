import VideoEditingPage from "@/components/sections/VideoEditingPage/VideoEditingPage";
import type { StoryboardPageData } from "@/data/storyboard";

interface StoryboardPageProps {
  data: StoryboardPageData;
}

/** Storyboard service pages reuse the Video Editing page layout/composer. */
export default function StoryboardPage({ data }: StoryboardPageProps) {
  return <VideoEditingPage data={data} />;
}
