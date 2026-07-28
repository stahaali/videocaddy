import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VideoEditingPage from "@/components/sections/VideoEditingPage/VideoEditingPage";
import { getVideoEditingPage, videoEditingSlugs } from "@/data/video-editing";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return videoEditingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getVideoEditingPage(slug);

  if (!page) {
    return {
      title: "Video Editing Services",
    };
  }

  return {
    title: page.meta.title,
    description: page.meta.description,
  };
}

export default async function VideoEditingSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getVideoEditingPage(slug);

  if (!page) {
    notFound();
  }

  return <VideoEditingPage data={page} />;
}
