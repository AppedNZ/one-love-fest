import Footer from "../components/Footer";
import CampingSection from "../components/Sections/CampingSection";
import EarlyBirdDiscounts from "../components/Sections/EarlyBirdDiscounts";
import FestivalHighlights from "../components/Sections/FestivalHighlights";
import FreeTee from "../components/Sections/FreeTee";
import HeroSection from "../components/Sections/HeroSection";
import PaymentPlansSection from "../components/Sections/PaymentPlansSection";
import PromoVideoSection from "../components/Sections/PromoVideoSection";

export default function page() {
  return (
    <>
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
            Join us at one love earning site for great vibes and a fantastic time , all managed by
            our super friendly staff team. We can&apos;t wait to see you there!
          </p>
        </div>
      </section>
      <CampingSection />
      <Footer />
    </>
  );
}
