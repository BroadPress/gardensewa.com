"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Type definitions for service data
interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
}

// Data for the "Top Services" section
const topServices: Service[] = [
  {
    id: 1,
    title: "Lawn Care",
    description:
      "Professional lawn maintenance including mowing, edging, fertilizing, and regular upkeep to keep your grass healthy and green year-round.",
    imageUrl: "/services/1.jpg",
    altText: "Lawn Care Services",
  },
  {
    id: 2,
    title: "Planting and Transplanting",
    description:
      "Expert planting services for trees, shrubs, flowers, and vegetables, including transplanting existing plants to new locations for optimal growth.",
    imageUrl: "/services/2.jpg",
    altText: "Planting and Transplanting Services",
  },
  {
    id: 3,
    title: "Garden Maintenance",
    description:
      "Comprehensive garden care including weeding, pruning, mulching, and seasonal maintenance to keep your garden flourishing throughout the year.",
    imageUrl: "/services/3.jpg",
    altText: "Garden Maintenance Services",
  },
  {
    id: 4,
    title: "Soil Improvement",
    description:
      "Soil testing, amendment, and preparation services to ensure optimal growing conditions for all your plants and landscaping projects.",
    imageUrl: "/services/4.jpg",
    altText: "Soil Improvement Services",
  },
  {
    id: 5,
    title: "Irrigation Services",
    description:
      "Installation, repair, and maintenance of irrigation systems including sprinklers and drip systems to ensure efficient water distribution.",
    imageUrl: "/services/5.jpg",
    altText: "Irrigation Services",
  },
  {
    id: 6,
    title: "Pest and Disease Control",
    description:
      "Integrated pest management and disease prevention services to protect your plants and maintain a healthy landscape environment.",
    imageUrl: "/services/6.jpg",
    altText: "Pest and Disease Control Services",
  },
  {
    id: 7,
    title: "Hardscaping",
    description:
      "Installation of patios, walkways, retaining walls, stone features, and other non-living landscape elements to enhance outdoor spaces.",
    imageUrl: "/services/7.jpg",
    altText: "Hardscaping Services",
  },
  {
    id: 8,
    title: "Seasonal Services",
    description:
      "Season-specific maintenance including spring cleanups, fall leaf removal, winter preparation, and holiday decoration services.",
    imageUrl: "/services/8.jpg",
    altText: "Seasonal Services",
  },
  {
    id: 9,
    title: "Landscape Design",
    description:
      "Professional landscape design and planning services to create beautiful, functional outdoor spaces tailored to your needs and preferences.",
    imageUrl: "/services/9.jpg",
    altText: "Landscape Design Services",
  },
  {
    id: 10,
    title: "Tree Sales",
    description:
      "Wide selection of quality trees for sale including shade trees, ornamental trees, and fruit trees with expert advice on selection and care.",
    imageUrl: "/services/10.jpg",
    altText: "Tree Sales Services",
  },
  {
    id: 11,
    title: "Plant Propagation",
    description:
      "Professional plant propagation services including seed starting, cutting propagation, and grafting to expand your plant collection.",
    imageUrl: "/services/11.jpg",
    altText: "Plant Propagation Services",
  },
  {
    id: 12,
    title: "Soil and Fertilizers",
    description:
      "Premium soil blends, compost, fertilizers, and soil amendments to nourish your plants and improve growing conditions.",
    imageUrl: "/services/12.jpg",
    altText: "Soil and Fertilizers Services",
  },
  {
    id: 13,
    title: "Consultation Services",
    description:
      "Expert consultation on landscape planning, plant selection, garden design, and maintenance strategies for optimal results.",
    imageUrl: "/services/13.jpg",
    altText: "Consultation Services",
  },

  {
  id: 14,
  title: "Tree Pruning & Removal",
  description:
    "Professional tree pruning, trimming, and safe removal services to maintain tree health, improve appearance, and eliminate hazardous or damaged trees from your property.",
  imageUrl: "/services/14.jpg",
  altText: "Tree Pruning and Removal Services",
},
{
  id: 15,
  title: "Landscape Lighting",
  description:
    "Design and installation of outdoor landscape lighting including pathway lights, garden lighting, and accent illumination to enhance safety, beauty, and nighttime usability of your outdoor spaces.",
  imageUrl: "/services/15.jpg",
  altText: "Landscape Lighting Services",
},
{
  id: 16,
  title: "Turfing Service",
  description:
    "Professional turf installation and maintenance including laying new grass, repairing damaged turf, and ensuring a lush, healthy lawn for residential and commercial spaces.",
  imageUrl: "/services/16.jpg",
  altText: "Turfing Service"
},
{
  id: 17,
  title: "Temporary Gardening",
  description:
    "Short-term gardening solutions for events, seasonal displays, or temporary landscaping projects, including plant setup, maintenance, and removal services.",
  imageUrl: "/services/17.jpg",
  altText: "Temporary Gardening Services"
},
{
  id: 18,
  title: "Flower Maintenance",
  description:
    "Comprehensive care for flowering plants including planting, pruning, fertilizing, pest management, and seasonal flower arrangement services to keep your garden vibrant.",
  imageUrl: "/services/18.jpg",
  altText: "Flower Maintenance Services"
},
{
  id: 19,
  title: "Rooftop Gardening",
  description:
    "Design, installation, and maintenance of rooftop gardens including container planting, irrigation setup, and soil management to transform rooftops into green spaces.",
  imageUrl: "/services/19.jpg",
  altText: "Rooftop Gardening Services"
},
{
  id: 20,
  title: "Yearly Garden Maintenance",
  description:
    "Comprehensive year-round garden maintenance services including seasonal care, pruning, fertilization, pest control, and regular upkeep to keep your garden flourishing.",
  imageUrl: "/services/20.jpg",
  altText: "Yearly Garden Maintenance Services"
},
{
  id: 21,
  title: "Artificial Gardening",
  description:
    "Installation and maintenance of artificial plants, turf, and landscaping elements for low-maintenance, durable, and aesthetically pleasing green spaces.",
  imageUrl: "/services/21.jpg",
  altText: "Artificial Gardening Services"
}
];

// Data for the "Recent Services" section

// Reusable Service Card component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="flex flex-col items-center w-full rounded-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[380px] border-2 border-border lg:max-w-[412px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:h-[509px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
    <div className="relative w-full h-1/2 overflow-hidden mb-3 sm:mb-4 flex-shrink-0">
      <img
        src={service.imageUrl}
        alt={service.altText}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-2xl"
        style={{
          clipPath: "ellipse(100% 95% at 50% 0%)",
        }}
      />
    </div>

    <div className=" flex flex-col items-center justify-center">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark text-center mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
        {service.title}
      </h3>

      <p className="text-dark text-center text-xs sm:text-sm md:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed px-2 flex-grow">
        {service.description}
      </p>

      <a href="https://d.sriyog.com/gSewa" target="_blank" rel="noopener noreferrer">
      <button className="buttonColorFill text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base cursor-pointer">
        Book a Service
      </button>
    </a>
    </div>
  </div>
);

// Main Services Page component
const ServicesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center w-full">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/services.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      {/* Header section */}
      <div className="w-full bg-card-stroke-light">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[240px] md:min-h-[277px] px-4 sm:px-6 md:px-8 py-6 sm:py-7 md:py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-3 sm:mb-4 text-sm w-full">
            <div className="text-[#616161] flex items-center justify-center text-sm sm:text-base">
              <span>Home</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 mx-1" />
              <span className="text-primary font-semibold">Services</span>
            </div>
          </div>

          {/* Section title */}
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-text leading-tight">
            Professional Gardening Services in Nepal
          </h1>

          {/* Section description */}
          <p className="max-w-[280px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[858px] mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#7C7F7A] px-2">
            At Garden Sewa, we believe a beautiful garden is more than just plants — it is a peaceful outdoor space that enhances your lifestyle and environment. We provide professional gardening services in Nepal, including garden maintenance, landscaping, lawn care, and plant care solutions designed to keep your outdoor spaces healthy and vibrant. Our expert team delivers eco-friendly and organic gardening services, tailored to your garden’s size, style, and specific needs, helping you create a greener, cleaner, and more relaxing living space.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
        {/* Main content sections */}
        <div className="container mx-auto py-8 sm:py-10 md:py-12 space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32 xl:space-y-40 mb-30">
          {/* Top Services Section */}
          <main>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] font-semibold text-secondary text-center mb-6 sm:mb-8 md:mb-10 leading-tight px-4">
              Common Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {topServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
