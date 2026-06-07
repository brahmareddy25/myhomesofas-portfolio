import PageWrapper from "@/components/ui/PageWrapper";
import HeroSection from "@/components/sections/HeroSection";
import StorytellingSection from "@/components/sections/StorytellingSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import StoreLocationsSection from "@/components/sections/StoreLocationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <StorytellingSection />
      <AchievementsSection />
      <WhyChooseUsSection />
      <MaterialsSection />
      <ServicesSection />
      <StoreLocationsSection />
      <TestimonialsSection />
      <GallerySection />
      <AboutUsSection />
      <ContactSection />
    </PageWrapper>
  );
}
