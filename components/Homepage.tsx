"use client";

import "swiper/css";
import "swiper/css/pagination";
import HomeHero from "./sections/HomeHero";
import ChooseUs from "./sections/ChooseUsAndClients";
import ServicesAndPlants from "./sections/ServicesAndPlants";
import LatestUpdates from "./sections/LatestUpdates";
import Testimonial from "./sections/Testimonial";
import OurPartners from "./sections/OurPartners";

export default function HeroSlider() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <HomeHero />
      <ChooseUs />
      <ServicesAndPlants />
      <OurPartners />
      <LatestUpdates />
      <Testimonial />
    </div>
  );
}
