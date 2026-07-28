import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StoryboardPage from "@/components/sections/StoryboardPage/StoryboardPage";
import { getStoryboardPage, storyboardSlugs } from "@/data/storyboard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return storyboardSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getStoryboardPage(slug);

  if (!page) {
    return {
      title: "Storyboard Services",
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default async function StoryboardSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getStoryboardPage(slug);

  if (!page) {
    notFound();
  }

  return <StoryboardPage data={page} />;
}
