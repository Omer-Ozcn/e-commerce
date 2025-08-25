import PricingSection from "../components/pricing/PricingSection";
import LogoList from "../components/shop/Icons";
import FAQ from "../components/pricing/FAQ";
import FreeTrialSection from "../components/pricing/FreeTrialSection";

export default function Pricing() {
  return (
    <main>
      <PricingSection />

      <section className="font-[Montserrat] bg-white py-14">
        <p className="w-[60vw] mx-auto text-center text-xl text-[#252B42]">
          Trusted By Over 4000 Big Companies
        </p>
        <LogoList />
      </section>

      <FAQ />
      <FreeTrialSection />
    </main>
  );
}
