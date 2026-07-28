import type { Metadata } from "next";
import AnimationPage from "@/components/sections/AnimationPage/AnimationPage";
import { getAnimationLanding } from "@/data/animation";

export async function generateMetadata(): Promise<Metadata> {
  const page = getAnimationLanding();

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default function AnimationLandingPage() {
  const page = getAnimationLanding();
  return <AnimationPage data={page} />;
}
