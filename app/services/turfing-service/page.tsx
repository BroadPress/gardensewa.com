"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const TurfingServices = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is turfing and why is it important?", 
      answer: "Turfing is the process of laying pre-grown grass (turf) or sowing new grass to create a lush, green lawn. It provides immediate aesthetic appeal, prevents soil erosion, and improves outdoor usability." 
    },
    { 
      id: 2, 
      question: "Do you offer turfing for all types of properties?", 
      answer: "Yes! We provide turfing services for residential lawns, commercial landscapes, sports fields, parks, and rooftop gardens." 
    },
    { 
      id: 3, 
      question: "What types of turf do you provide?", 
      answer: "We offer a variety of turf types including warm-season grass, cool-season grass, ornamental grass, and hybrid blends suitable for different climates and usage requirements." 
    },
    { 
      id: 4, 
      question: "Do you handle soil preparation and turf installation?", 
      answer: "Absolutely. Our turfing service includes soil assessment, grading, nutrient enrichment, leveling, and professional turf laying for healthy, long-lasting lawns." 
    },
    { 
      id: 5, 
      question: "Do you provide maintenance guidance after turf installation?", 
      answer: "Yes. We provide expert advice on watering, mowing, fertilization, and pest control to ensure your turf remains green, thick, and healthy throughout the year." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Turfing Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional turfing services in Kathmandu Nepal, including lawn installation, soil preparation, turf selection, and maintenance for residential and commercial properties." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/16.jpg"
          alt="Turfing Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Turfing Services</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Turfing Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Create lush, green lawns with professional turfing services, including soil preparation, turf installation, and maintenance for a healthy, beautiful lawn.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Turfing Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional turfing services to transform outdoor spaces with healthy, green lawns. We handle soil preparation, turf selection, installation, and expert guidance to ensure a long-lasting lawn.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our services use high-quality turf varieties, eco-friendly soil treatments, and proper installation techniques to guarantee thick, vibrant, and resilient lawns.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We serve residential, commercial, and sports properties, customizing our turfing solutions to suit property size, usage, and aesthetic preferences.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Regular maintenance including mowing, fertilization, aeration, and weed control for vibrant lawns." },
            { img: "/services/12.jpg", title: "Soil Improvement Services", desc: "Enhancing soil quality and fertility to ensure optimal turf growth and lawn health." },
            { img: "/services/3.jpg", title: "Yearly Garden Maintenance Services", desc: "Comprehensive garden upkeep including seasonal turf management, fertilization, and soil care." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-5">
              <div className="h-40 mb-4 overflow-hidden rounded-lg">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 w-full max-w-4xl">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card border border-gray-200 rounded-lg overflow-hidden w-full">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 py-5 text-left text-sm text-primary font-bold hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span>{faq.id}. {faq.question}</span>
                  {openFAQ === faq.id ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFAQ === faq.id && (
                  <div className="p-5 border-t border-gray-200 text-gray-700 transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfingServices;