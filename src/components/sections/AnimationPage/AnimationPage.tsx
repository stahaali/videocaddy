import VideoEditingPage from "@/components/sections/VideoEditingPage/VideoEditingPage";
import type { AnimationPageData } from "@/data/animation";

interface AnimationPageProps {
  data: AnimationPageData;
}

/** Animation service pages reuse the Video Editing page layout/composer. */
export default function AnimationPage({ data }: AnimationPageProps) {
  return <VideoEditingPage data={data} />;
}
