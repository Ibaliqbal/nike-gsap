import AboutSection from "./_components/about-section";
import Header from "./_components/header";
import SmoothScroll from "./_components/smooth-scroll";
import HeroSection from "./_components/hero-section";
import PopularProductsSection from "./_components/popular-products-section";
import UpcomingSection from "./_components/upcoming-section";
import AthletsSection from "./_components/athlets-section";

export default function Home() {
  return (
    <SmoothScroll>
      <Header />
      <HeroSection />
      <AboutSection />
      <PopularProductsSection />
      <UpcomingSection />
      <AthletsSection />
    </SmoothScroll>
  );
}
