import TeamHero from "../components/team/TeamHero";
import TeamGallery from "../components/team/TeamGallery";
import TeamGrid from "../components/team/TeamGrid";
import FreeTrialSection from "../components/pricing/FreeTrialSection";

export default function TeamPage() {
  return (
    <main className="bg-white">
      <TeamHero />
      <TeamGallery />
      <TeamGrid />
      {/* FreeTrialSection zaten footer ile arasında 50px boşluk bırakacak şekilde ayarlı */}
      <FreeTrialSection />
    </main>
  );
}
