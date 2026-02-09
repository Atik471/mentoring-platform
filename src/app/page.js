import Hero from "@/components/Hero";
import ExplainerSection from "@/components/ExplainerSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ExploreMentorsSection from "@/components/ExploreMentorsSection";

export default function Home() {
  return (
    <div className="bg-noise">
      <Hero />
      <ExplainerSection />
      <StatsSection />
      <TestimonialSection />
      <FeaturesSection />
      <ExploreMentorsSection />
    </div>
  );
}
