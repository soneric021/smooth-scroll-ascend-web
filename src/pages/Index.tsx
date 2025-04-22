
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AdvantageSection from "@/components/AdvantageSection";
import FooterSection from "@/components/FooterSection";
import BackToTopButton from "@/components/BackToTopButton";

const Index = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans scroll-smooth">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AdvantageSection />
      </main>
      <FooterSection />
      <BackToTopButton />
    </div>
  );
};
export default Index;
