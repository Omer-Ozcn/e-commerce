import React from "react";
import AboutHero from "../components/about/AboutHero";
import Team from "../components/team/Team";
import AboutStats from "../components/about/AboutStats";
import AboutVideo from "../components/about/AboutVideo";
import Logos from "../components/about/LogoList";
import HiringBanner from "../components/about/HiringBanner";


export default function AboutUs() {
  return (
    <div className="font-[Montserrat]">
      <AboutHero />
      <AboutStats />
      <AboutVideo /> 
      <Team />
      <Logos />
      <HiringBanner />
    </div>
  );
}
