"use client";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

// TYPES
interface Service {
  slug: string;
  title: string;
  imageUrl: string;
}

// DATA (clean URLs via slug)
const services: Service[] = [
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    imageUrl: "/services/3.jpg",
  },
  {
    slug: "irrigation-services",
    title: "Irrigation Services",
    imageUrl: "/services/5.jpg",
  },
  {
    slug: "landscape-design",
    title: "Landscape Design",
    imageUrl: "/services/9.jpg",
  },
  {
    slug: "consultation-services",
    title: "Consultation Services",
    imageUrl: "/services/13.jpg",
  },
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    imageUrl: "/services/15.jpg",
  },
  {
    slug: "temporary-gardening",
    title: "Temporary Gardening",
    imageUrl: "/services/17.jpg",
  },
];

// SERVICE CARD
const ServiceCard: React.FC<Service> = ({ title, imageUrl }) => (
  <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[300px] rounded-xl overflow-hidden group cursor-pointer">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

    <div className="absolute top-3 left-3 bg-white/90 text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
      {title}
    </div>
  </div>
);

// MAIN COMPONENT
const ServicesSection: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-10">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            Our Services
          </h2>

          <Link
            href="/services"
            className="flex items-center gap-1 border px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm hover:bg-black hover:text-white"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="block"
            >
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;