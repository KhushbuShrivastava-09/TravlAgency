import Hero from '../components/pages/Home/Hero';
import WhyBest from '../components/pages/Home/WhyBest';
import CruiseSlider from '../components/pages/Home/CruiseSlider';
import Customers from '../components/pages/Home/Customers';
import PartnerLogos from '../components/pages/Home/PartnerLogos';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyBest />
      <CruiseSlider />
      <Customers />
      <PartnerLogos />
    </>
  );
}
