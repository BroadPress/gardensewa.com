"use client";
import React from "react";
import Head from "next/head";

// Reusable Service Card component
const ServiceCard: React.FC<{
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  link: string;
}> = ({ title, description, imageUrl, altText, link }) => (
  <a href={link} className="flex flex-col items-center w-full rounded-2xl max-w-[280px] sm:max-w-[320px] md:max-w-[380px] border-2 border-border lg:max-w-[412px] h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:h-[509px] shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
    <div className="relative w-full h-1/2 overflow-hidden mb-3 sm:mb-4 flex-shrink-0">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-2xl"
        style={{ clipPath: "ellipse(100% 95% at 50% 0%)" }}
      />
    </div>
    <div className="flex flex-col items-center justify-center px-2">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark text-center mb-3 sm:mb-4 md:mb-6 leading-tight">
        {title}
      </h3>
      <p className="text-dark text-center text-xs sm:text-sm md:text-sm mb-4 sm:mb-5 md:mb-6 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="buttonColorFill text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-sm sm:text-base cursor-pointer text-center">
        Browse More
      </div>
    </div>
  </a>
);

// Main Services Page
const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Head>
        <title>Gardening Services in Nepal</title>
        <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care" />
      </Head>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-8 py-8  pb-40">
        <h2 className="text-3xl font-semibold text-secondary text-center mb-10">
          Featured Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

          {/* 1 */}
          <ServiceCard
            title="Lawn Care"
            description="Professional lawn maintenance including mowing, edging, fertilizing, and regular upkeep to keep your grass healthy and green year-round."
            imageUrl="/services/1.jpg"
            altText="Lawn Care Services"
            link="/services/lawn-care"
          />

          {/* 2 */}
          <ServiceCard
            title="Planting and Transplanting"
            description="Expert planting services for trees, shrubs, flowers, and vegetables, including transplanting existing plants to new locations for optimal growth."
            imageUrl="/services/2.jpg"
            altText="Planting and Transplanting Services"
            link="/services/planting-transplanting"
          />

          {/* 3 */}
          <ServiceCard
            title="Garden Maintenance"
            description="Comprehensive garden care including weeding, pruning, mulching, and seasonal maintenance to keep your garden flourishing throughout the year."
            imageUrl="/services/3.jpg"
            altText="Garden Maintenance Services"
            link="/services/garden-maintenance"
          />

          {/* 4 */}
          <ServiceCard
            title="Soil Improvement"
            description="Soil testing, amendment, and preparation services to ensure optimal growing conditions for all your plants and landscaping projects."
            imageUrl="/services/4.jpg"
            altText="Soil Improvement Services"
            link="/services/soil-improvement"
          />

          {/* 5 */}
          <ServiceCard
            title="Irrigation Services"
            description="Installation, repair, and maintenance of irrigation systems including sprinklers and drip systems to ensure efficient water distribution."
            imageUrl="/services/5.jpg"
            altText="Irrigation Services"
            link="/services/irrigation-services"
          />

          {/* 6 */}
          <ServiceCard
            title="Pest and Disease Control"
            description="Integrated pest management and disease prevention services to protect your plants and maintain a healthy landscape environment."
            imageUrl="/services/6.jpg"
            altText="Pest and Disease Control Services"
            link="/services/pest-disease-control"
          />

          {/* 7 */}
          <ServiceCard
            title="Hardscaping"
            description="Installation of patios, walkways, retaining walls, stone features, and other non-living landscape elements to enhance outdoor spaces."
            imageUrl="/services/7.jpg"
            altText="Hardscaping Services"
            link="/services/hardscaping"
          />

          {/* 8 */}
          <ServiceCard
            title="Seasonal Services"
            description="Season-specific maintenance including spring cleanups, fall leaf removal, winter preparation, and holiday decoration services."
            imageUrl="/services/8.jpg"
            altText="Seasonal Services"
            link="/services/seasonal-services"
          />

          {/* 9 */}
          <ServiceCard
            title="Landscape Design"
            description="Professional landscape design and planning services to create beautiful, functional outdoor spaces tailored to your needs and preferences."
            imageUrl="/services/9.jpg"
            altText="Landscape Design Services"
            link="/services/landscape-design"
          />

          {/* 10 */}
          <ServiceCard
            title="Tree Sales"
            description="Wide selection of quality trees for sale including shade trees, ornamental trees, and fruit trees with expert advice on selection and care."
            imageUrl="/services/10.jpg"
            altText="Tree Sales Services"
            link="/services/tree-sales"
          />

          {/* 11 */}
          <ServiceCard
            title="Plant Propagation"
            description="Professional plant propagation services including seed starting, cutting propagation, and grafting to expand your plant collection."
            imageUrl="/services/11.jpg"
            altText="Plant Propagation Services"
            link="/services/plant-propagation"
          />

          {/* 12 */}
          <ServiceCard
            title="Soil and Fertilizers"
            description="Premium soil blends, compost, fertilizers, and soil amendments to nourish your plants and improve growing conditions."
            imageUrl="/services/12.jpg"
            altText="Soil and Fertilizers Services"
            link="/services/soil-fertilizers"
          />

          {/* 13 */}
          <ServiceCard
            title="Consultation Services"
            description="Expert consultation on landscape planning, plant selection, garden design, and maintenance strategies for optimal results."
            imageUrl="/services/13.jpg"
            altText="Consultation Services"
            link="/services/consultation-services"
          />

          {/* 14 */}
          <ServiceCard
            title="Tree Pruning & Removal"
            description="Professional tree pruning, trimming, and safe removal services to maintain tree health, improve appearance, and eliminate hazardous or damaged trees from your property."
            imageUrl="/services/14.jpg"
            altText="Tree Pruning and Removal Services"
            link="/services/tree-pruning-removal"
          />

          {/* 15 */}
          <ServiceCard
            title="Landscape Lighting"
            description="Design and installation of outdoor landscape lighting including pathway lights, garden lighting, and accent illumination to enhance safety, beauty, and nighttime usability of your outdoor spaces."
            imageUrl="/services/15.jpg"
            altText="Landscape Lighting Services"
            link="/services/landscape-lighting"
          />

          {/* 16 */}
          <ServiceCard
            title="Turfing Service"
            description="Professional turf installation and maintenance including laying new grass, repairing damaged turf, and ensuring a lush, healthy lawn for residential and commercial spaces."
            imageUrl="/services/16.jpg"
            altText="Turfing Service"
            link="/services/turfing-service"
          />

          {/* 17 */}
          <ServiceCard
            title="Temporary Gardening"
            description="Short-term gardening solutions for events, seasonal displays, or temporary landscaping projects, including plant setup, maintenance, and removal services."
            imageUrl="/services/17.jpg"
            altText="Temporary Gardening Services"
            link="/services/temporary-gardening"
          />

          {/* 18 */}
          <ServiceCard
            title="Flower Maintenance"
            description="Comprehensive care for flowering plants including planting, pruning, fertilizing, pest management, and seasonal flower arrangement services to keep your garden vibrant."
            imageUrl="/services/18.jpg"
            altText="Flower Maintenance Services"
            link="/services/flower-maintenance"
          />

          {/* 19 */}
          <ServiceCard
            title="Rooftop Gardening"
            description="Design, installation, and maintenance of rooftop gardens including container planting, irrigation setup, and soil management to transform rooftops into green spaces."
            imageUrl="/services/19.jpg"
            altText="Rooftop Gardening Services"
            link="/services/rooftop-gardening"
          />

          {/* 20 */}
          <ServiceCard
            title="Yearly Garden Maintenance"
            description="Comprehensive year-round garden maintenance services including seasonal care, pruning, fertilization, pest control, and regular upkeep to keep your garden flourishing."
            imageUrl="/services/20.jpg"
            altText="Yearly Garden Maintenance Services"
            link="/services/yearly-garden-maintenance"
          />

          {/* 21 */}
          <ServiceCard
            title="Artificial Gardening"
            description="Installation and maintenance of artificial plants, turf, and landscaping elements for low-maintenance, durable, and aesthetically pleasing green spaces."
            imageUrl="/services/21.jpg"
            altText="Artificial Gardening Services"
            link="/services/artificial-gardening"
          />

        </div>
      </div>
    </div>
  );
};

export default ServicesPage;