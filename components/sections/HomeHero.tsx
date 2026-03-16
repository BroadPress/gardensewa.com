"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    img: "/image/home/slider/1.jpg",
    alt: "sliderimg1",
    title: "Gardening Services in Nepal ",
    subtitle:
      "Our team offers personalized gardening services from one time cleanups to regular maintenance, tailored to keep your garden fresh, vibrant, and well cared for.",
    button: "Read More",
    button2: "Explore Plants",
    button2link: "/plants",
  },
  {
    id: 2,
    img: "/image/home/slider/2.jpg",
    alt: "sliderimg2",
    title: "Gardening Services for Hotels and Resorts in Nepal",
    subtitle:
      "We help hotels and resorts maintain inviting green spaces with plant care, landscaping, and seasonal upkeep that enhance guest experiences.",
    button: "Read More",
    button2: "Book a Service",
    button2link: "/book",
  },
  {
    id: 3,
    img: "/image/home/slider/3.jpg",
    alt: "sliderimg3",
    title: "Best Gardening Services in Kathmandu",
    subtitle:
      "Discover a variety of plants indoor, outdoor, air purifying, and more, delivered with care",
    button: "Read More",
    button2: "Explore Plants",
    button2link: "/plants",
  },
];

const HomeHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gradient-to-l from-[#1F1F1F] via-[#39393980] to-[#39393900] mb-30">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] via-[#39393980] to-[#39393900] z-5 pointer-events-none"></div>

          {/* Text content */}
          <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
            <div className="container max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
              <div className="w-full max-w-[611px] lg:max-w-[700px]">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 tiktok-sans drop-shadow-lg leading-tight"
                  style={{ color: "#ffffff" }}
                >
                  {slide.title}
                </h2>
                <p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-4 sm:mb-5 md:mb-6 lg:mb-8 drop-shadow-md leading-relaxed"
                  style={{ color: "#ffffff" }}
                >
                  {slide.subtitle}
                </p>

                {/* Responsive button layout */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="buttonColorFill font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-lg transition text-white text-sm sm:text-base w-full sm:w-auto">
                    {slide.button}
                  </button>

                  <Link href={slide.button2link} className="w-full sm:w-auto">
                    <button className="font-semibold border border-white text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 rounded-lg transition text-sm sm:text-base w-full hover:bg-primary hover:border-primary duration-300">
                      {slide.button2}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex items-center z-20 space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile swipe indicators (optional) */}
      <div className="absolute bottom-16 sm:hidden left-1/2 -translate-x-1/2 flex items-center space-x-1 text-white/60 text-xs">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12l-6-6h12l-6 6z" />
        </svg>
        <span>Swipe for more</span>
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 8l6 6H4l6-6z" />
        </svg>
      </div>
    </div>
  );
};

export default HomeHero;
