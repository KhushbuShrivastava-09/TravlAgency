import Hero from '../components/pages/Home/Hero';
import WhyBest from '../components/pages/Home/WhyBest';
import GallerySlider from '../components/pages/Home/GallerySlider';
import Contact from '@/components/pages/Contact/contact';
import UpcomingTripsSlider from '../components/pages/Home/Upcomingtrip';
import FeaturedPackages from '../components/pages/Home/FeaturedPackages';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyBest />
      <UpcomingTripsSlider/>
      <FeaturedPackages/>
      <GallerySlider/>
      <Contact />
    </>
  );
}
