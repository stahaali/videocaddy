import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimationPage from "@/components/sections/AnimationPage/AnimationPage";
import { getAnimationPage, animationSlugs } from "@/data/animation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return animationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getAnimationPage(slug);

  if (!page) {
    return {
      title: "Animation Services",
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default async function AnimationSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getAnimationPage(slug);

  if (!page) {
    notFound();
  }

  return <AnimationPage data={page} />;
}
