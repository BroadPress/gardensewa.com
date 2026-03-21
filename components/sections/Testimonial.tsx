"use client";

import React from "react";
import Image from "next/image";

// TYPES
interface TestimonialCardProps {
  name: string;
  title: string;
  comment: string;
  imageAlt: string;
  imageSrc: string;
}

// CARD
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  comment,
  imageAlt,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border hover:shadow-lg transition duration-300 flex flex-col h-full">
      {/* QUOTE */}
      <span className="text-3xl sm:text-4xl text-primary font-bold mb-3">
        "
      </span>

      {/* COMMENT */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
        {comment}
      </p>

      {/* USER */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-semibold truncate">
            {name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

// MAIN
const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: "Smarika Karki",
      title: "Gokarna Forest Resort",
      comment:
        "I contacted GardenSewa to manage our garden, and I am very satisfied with their work. They cleaned everything, planted new flowers, and even gave tips on how to take care of plants.",
      imageAlt: "Smarika Karki",
      imageSrc: "/testimonials/1.png",
    },
    {
      name: "Gurpreet Singh",
      title: "Aloft Hotel",
      comment:
        "We renovated our garden with GardenSewa. The team was friendly and understood exactly what we wanted. Now it feels like a resort. Highly recommended!",
      imageAlt: "Gurpreet Singh",
      imageSrc: "/testimonials/2.png",
    },
    {
      name: "Rizan Niroula",
      title: "Kathmandu Guest House",
      comment:
        "Our lawn was in bad condition. GardenSewa handled turfing and care. Within weeks, everything turned green and fresh again.",
      imageAlt: "Rizan Niroula",
      imageSrc: "/testimonials/3.png",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
        Testimonials
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;