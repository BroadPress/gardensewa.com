"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const SoilImprovements = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "Why is soil improvement important for gardens?", 
      answer: "Healthy soil is the foundation of thriving plants. Improving soil structure, fertility, and water retention ensures strong roots, better nutrient absorption, and vibrant garden growth." 
    },
    { 
      id: 2, 
      question: "Do you provide soil improvement services for all types of gardens?", 
      answer: "Yes! Our services cover residential gardens, commercial landscapes, lawns, rooftop gardens, and public green spaces." 
    },
    { 
      id: 3, 
      question: "Which soil improvement services do you provide?", 
      answer: "Our services include soil testing, nutrient management, composting, mulching, organic and chemical amendments, and conditioning to optimize soil health." 
    },
    { 
      id: 4, 
      question: "Are your soil improvement methods eco-friendly?", 
      answer: "Absolutely. We use organic fertilizers, natural soil conditioners, and sustainable practices to improve soil fertility without harming the environment." 
    },
    { 
      id: 5, 
      question: "Can you customize soil improvement plans?", 
      answer: "Yes. Plans are tailored based on soil type, plant species, climate, and garden layout to maximize growth, aesthetics, and long-term soil health." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Soil Improvement Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional soil improvement services in Kathmandu Nepal, including soil testing, nutrient management, composting, mulching, and soil conditioning for healthy gardens." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/4.jpg"
          alt="Soil Improvement Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Soil Improvements</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Soil Improvement Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Enhance your garden’s growth and vitality with professional soil improvement services for fertile, nutrient-rich, and well-structured soil.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Soil Improvement in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa offers professional soil improvement services to optimize soil health and plant growth. We provide soil testing, nutrient management, composting, mulching, and conditioning to create fertile, thriving gardens.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly practices, including natural soil amendments and organic fertilizers, improve soil structure and fertility while protecting the environment.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized soil improvement plans are tailored to soil type, garden layout, plant species, and climate to ensure strong roots, healthy plants, and long-term soil vitality.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/12.jpg", title: "Soil & Fertilizer Services", desc: "Improve soil fertility with testing, fertilization, and nutrient management for vibrant plant growth." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Comprehensive lawn maintenance including soil aeration, fertilization, and weed control." },
            { img: "/services/2.jpg", title: "Planting & Transplanting Services", desc: "Professional planting and relocation of plants for optimal soil and landscape health." },
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

export default SoilImprovements;