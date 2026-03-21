"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// FEATURE CARD
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center p-5 sm:p-6 bg-card rounded-xl hover:shadow-md transition">
    <div className="bg-white p-3 sm:p-4 rounded-2xl mb-4 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <img src={icon} alt={title} className="w-full h-full object-contain" />
    </div>

    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
      {title}
    </h3>

    <p className="text-sm sm:text-base text-text">{description}</p>
  </div>
);

// CLIENT CARD (fixed hover logic)
interface ClientCardProps {
  image: string;
  name: string;
  text: string;
}

const ClientCard: React.FC<ClientCardProps> = ({
  image,
  name,
  text,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white border rounded-2xl p-4 sm:p-5 overflow-hidden cursor-pointer group h-[260px] sm:h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO */}
      <div
        className={`flex items-center justify-center h-full transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="max-h-32 sm:max-h-40 object-contain"
        />
      </div>

      {/* TEXT (hover on desktop, always visible on mobile) */}
      <div
        className={`absolute inset-0 p-4 sm:p-5 flex flex-col justify-center transition-all duration-500 
        ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-100 sm:opacity-0 sm:translate-y-6"
        }`}
      >
        <span className="text-green-600 text-3xl font-bold">"</span>
        <p className="text-xs sm:text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

// MAIN COMPONENT
const ChooseUs: React.FC = () => {
  const features = [
    {
      icon: "/icons/shield.png",
      title: "Trusted Gardeners",
      description: "All gardeners are verified and experienced.",
    },
    {
      icon: "/icons/solaruser.png",
      title: "Expert Professionals",
      description: "Garden landscaping and design services in Nepal",
    },
    {
      icon: "/icons/gardener.png",
      title: "Hire a Gardener",
      description: "Hire a gardener for your home in Kathmandu",
    },
    {
      icon: "/icons/dig.png",
      title: "Landscapping",
      description: "Best Landscapping & Park Planner in Nepal",
    },
  ];

  const clients = [
    {
      image: "home/client/1.png",
      name: "Aloft Hotel Kathmandu",
      text: "A modern lifestyle hotel offering stylish stays and premium hospitality experiences.",
    },
    {
      image: "home/client/2.png",
      name: "Bajeko Sekuwa",
      text: "A popular Nepali restaurant brand known for authentic flavors and lively dining.",
    },
    {
      image: "home/client/3.png",
      name: "Club Himalaya",
      text: "A scenic hilltop resort with panoramic mountain views and relaxing stays.",
    },
    {
      image: "home/client/4.png",
      name: "Soaltee Westend Itahari",
      text: "A premium hotel delivering refined accommodations and high-quality service.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* WHY CHOOSE US */}
      <section className="py-10 sm:py-14 lg:py-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Why Choose Us?
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-10 sm:py-14">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Our Projects
          </h2>

          <Link
            href="/projects"
            className="flex items-center gap-1 border px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm hover:bg-black hover:text-white"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {clients.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;