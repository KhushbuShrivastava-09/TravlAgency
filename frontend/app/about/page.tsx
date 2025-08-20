import WhyBest from '@/components/pages/Home/WhyBest';
import Hero from '../../components/pages/About/Hero';
import WhatWeOffer from "../../components/pages/About/WhatWeOffer";
import AboutCompany from "../../components/pages/About/AboutCompany";
import OurTeams from "../../components/pages/About/Ourteams";
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyBest />
      <WhatWeOffer/>
      <AboutCompany/>
      <OurTeams/>
    </>
  );
}
