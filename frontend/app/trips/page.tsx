import HeroCarousel from "@/components/pages/Trips/Hero";
import SectionsContainer from "@/components/pages/Trips/SectionsContainer";
export default async function HomePage() {
  
  const slides = [
    {
      image: "/images/leh.jpg",
      title: "Europe Tour Packages",
      subtitle: "Europe: The Land Of Endless Discoveries - Upto 30% Off",
      price: "Rs. 1,44,990/-",
    },
    {
      image: "/images/europe.jpg",
      title: "Bali Tour Packages",
      subtitle: "Island of Gods - Special Discounts",
      price: "Rs. 89,990/-",
    },
  ];
  const aboutData = {
    heading: "About Europe Tour Packages",
    shortText:
      "How long have you been planning a Europe Trip, and struggling with choosing the right Europe Tour Packages...",
    fullText:
      "How long have you been planning a Europe Trip, and struggling with choosing the right Europe Tour Packages from India? If it’s been too long, then it’s time to stop worrying about the hassles in planning your perfect Europe travel package, because now you have WanderOn to the rescue, with luxury as well as budget-friendly options...",
  };

  const tripsData = {
    heading: "Best-Selling Community Trips",
    subheading:
      "Discover Europe with WanderOn: Epic Journeys, New Bonds, Unforgettable Memories!",
    trips: [
      {
        image: "/images/spain.jpg",
        title: "11 Days European Pathways - France, Netherlands",
        oldPrice: "₹2,19,990/-",
        newPrice: "₹1,69,990/-",
        tag: "Recommended",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "10N/11D | Paris Airport - Prague",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
    ],
  };

  const deals = {
    heading: "Exclusive Europe Summer Deals 2025",
    subheading:
      "Spend a perfect summer soaking in the scenic landscapes of Europe with our best deals on Europe Summer packages. Combined with best experiences, outdoor activities, city tours and adventures, these trips are perfect for a memorable summer vacation.",
    trips: [
      {
        image: "/images/spain.jpg",
        title: "11 Days European Pathways - France, Netherlands",
        oldPrice: "₹2,19,990/-",
        newPrice: "₹1,69,990/-",
        tag: "Recommended",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "10N/11D | Paris Airport - Prague",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
    ],
  };


  const trips={
    heading: "Europe with UK",
    subheading:
      "Explore Timeless Europe, Embrace Royal UK - One Epic Journey Awaits!",
    trips: [
      {
        image: "/images/spain.jpg",
        title: "11 Days European Pathways - France, Netherlands",
        oldPrice: "₹2,19,990/-",
        newPrice: "₹1,69,990/-",
        tag: "Recommended",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "10N/11D | Paris Airport - Prague",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      {
        image: "/images/shimla.jpg",
        title: "10 Days Finland & Sweden - Northern Lights",
        oldPrice: "₹2,24,990/-",
        newPrice: "₹1,89,990/-",
        tag: "Popular",
        duration: "4N/5D",
        date: "Sept 05 2025",
        location: "9N/10D | Helsinki - Stockholm",
      },
      
    ],
  }
  return(
    <>
     <HeroCarousel slides={slides} />
     <SectionsContainer aboutData={aboutData} tripsData={tripsData} deals={deals} trips={trips}/>
  </>
  )   
  
}
