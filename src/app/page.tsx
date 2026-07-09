import Hero from "@/components/sections/Hero/Hero";
import Stats from "@/components/sections/Stats/Stats";
import Services from "@/components/sections/Services/Services";
import VideoCategories from "@/components/sections/VideoCategories/VideoCategories";
import Process from "@/components/sections/Process/Process";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import TrialForm from "@/components/sections/TrialForm/TrialForm";
import Software from "@/components/sections/Software/Software";
import SuccessStories from "@/components/sections/SuccessStories/SuccessStories";
import Approach from "@/components/sections/Approach/Approach";
import CTASection from "@/components/sections/CTASection/CTASection";
import Industries from "@/components/sections/Industries/Industries";
import FAQ from "@/components/sections/FAQ/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <VideoCategories />
      <Process />
      <Testimonials />
      <TrialForm />
      <Software />
      <SuccessStories />
      <Approach />
      <CTASection />
      <Industries />
      <FAQ />
    </>
  );
}
