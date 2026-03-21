"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const SeasonalServices = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What are seasonal gardening services and why are they important?", 
      answer: "Seasonal services include planting, pruning, fertilization, pest control, and maintenance activities tailored to the specific needs of each season. They keep gardens healthy, vibrant, and prepared for changing weather conditions." 
    },
    { 
      id: 2, 
      question: "Do you provide seasonal services for all garden types?", 
      answer: "Yes! We offer seasonal services for residential gardens, commercial landscapes, lawns, rooftop gardens, and public green spaces." 
    },
    { 
      id: 3, 
      question: "Which activities are included in seasonal services?", 
      answer: "Our services include seasonal planting, pruning, fertilization, pest and disease management, soil preparation, mulching, irrigation adjustment, and winter/summer care." 
    },
    { 
      id: 4, 
      question: "Are your seasonal methods eco-friendly?", 
      answer: "Absolutely. We use organic fertilizers, sustainable watering practices, and environmentally safe pest control to maintain healthy gardens throughout the year." 
    },
    { 
      id: 5, 
      question: "Can you customize seasonal service plans?", 
      answer: "Yes. Our plans are tailored based on plant types, garden size, climate, soil conditions, and client requirements to ensure optimal growth and aesthetics throughout the year." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Seasonal Gardening Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional seasonal gardening services in Kathmandu Nepal, including planting, pruning, fertilization, pest control, and maintenance for residential and commercial gardens." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/8.jpg"
          alt="Seasonal Gardening Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Seasonal Services</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Seasonal Gardening Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your garden healthy, vibrant, and thriving all year with our professional seasonal gardening services tailored for each season.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Seasonal Gardening Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional seasonal gardening services to maintain healthy gardens throughout the year. We handle seasonal planting, pruning, fertilization, pest control, and soil preparation to keep your outdoor spaces lush and vibrant.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly practices ensure your garden thrives without harming the environment, providing long-lasting beauty and sustainability.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized seasonal service plans are designed according to plant types, soil conditions, climate, and your garden layout to maximize growth, aesthetics, and resilience.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Regular garden upkeep including pruning, fertilization, watering, and seasonal adjustments." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Comprehensive lawn maintenance to ensure green, healthy, and thriving lawns year-round." },
            { img: "/services/18.jpg", title: "Flower Maintenance Services", desc: "Care for flowers including seasonal planting, pruning, watering, and fertilization." },
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

export default SeasonalServices;