import VideoEditingBanner from "@/components/sections/VideoEditingBanner/VideoEditingBanner";
import Stats from "@/components/sections/Stats/Stats";
import VideoEditingContent from "@/components/sections/VideoEditingContent/VideoEditingContent";
import VideoMidCta from "@/components/sections/VideoEditingContent/VideoMidCta";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import TrialForm from "@/components/sections/TrialForm/TrialForm";
import SuccessStories from "@/components/sections/SuccessStories/SuccessStories";
import CTASection from "@/components/sections/CTASection/CTASection";
import FAQ from "@/components/sections/FAQ/FAQ";
import type { VideoEditingPageData } from "@/data/video-editing";
import { assets } from "@/data/assets";

interface VideoEditingPageProps {
  data: VideoEditingPageData;
}

export default function VideoEditingPage({ data }: VideoEditingPageProps) {
  const hasCaseStudies = data.caseStudies.length > 0;
  const midCtaAfterStories =
    data.midCta && (data.midCta.placement ?? "content") === "afterStories"
      ? data.midCta
      : null;

  return (
    <>
      <VideoEditingBanner
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        image={data.hero.image}
        backgroundImage={data.hero.backgroundImage}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
      />
      <Stats variant="light" />
      <VideoEditingContent data={data} />
      <Testimonials />
      {data.slug !== "360" ? <TrialForm /> : null}
      {hasCaseStudies ? (
        <SuccessStories
          variant="caseStudies"
          caseStudies={{
            eyebrow: data.caseStudiesSection?.eyebrow ?? "SUCCESS STORIES",
            title: data.caseStudiesSection?.title ?? "OUR RECENT CASE STUDIES",
            viewAll: data.caseStudiesSection?.viewAll ?? {
              label: "View all",
              href: "/portfolio",
            },
            items: data.caseStudies.map((item, index) => ({
              title: item.title,
              href: item.href,
              description: item.description,
              variant:
                item.variant ??
                (data.caseStudies.length >= 3
                  ? index % 3 === 1
                    ? "middle"
                    : "white"
                  : index % 2 === 0
                    ? "white"
                    : "middle"),
            })),
          }}
        />
      ) : (
        <SuccessStories />
      )}
      {midCtaAfterStories ? <VideoMidCta data={midCtaAfterStories} /> : null}
      <CTASection variant="light" image={assets.serviceCtaImg} />
      {data.slug === "360" ? <TrialForm /> : null}
      {data.faqs.length > 0 ? <FAQ items={data.faqs} /> : null}
    </>
  );
}
