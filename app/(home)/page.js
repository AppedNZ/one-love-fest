import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CampingSection from "@/components/Sections/CampingSection";
import EarlyBirdDiscounts from "@/components/Sections/EarlyBirdDiscounts";
import FestivalHighlights from "@/components/Sections/FestivalHighlights";
import FreeTee from "@/components/Sections/FreeTee";
import HeroSection from "@/components/Sections/HeroSection";
import PaymentPlansSection from "@/components/Sections/PaymentPlansSection";
import PromoVideoSection from "@/components/Sections/PromoVideoSection";

export default function page() {
  return (
    <>
      <Header />
      <HeroSection />
      <PromoVideoSection />
      <EarlyBirdDiscounts />
      <FreeTee />
      <PaymentPlansSection />
      <FestivalHighlights />
      <section className="bg-mustard py-5 lg:py-8">
        <div className="wrapper flex justify-center text-center">
          <p
            style={{ letterSpacing: "0.04em" }}
            className="text-white uppercase text-stroke lg:text-lg  ">
            JOIN US AT ONE LOVE 2025 FOR GREAT MUSIC AND UNITY.
          </p>
        </div>
      </section>
      <CampingSection />
      <Footer />
    </>
  );
}
