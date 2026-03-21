"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const SoilFertilizers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "Why is soil and fertilizer management important for gardens?", 
      answer: "Healthy soil is the foundation of a thriving garden. Proper fertilizers and soil treatments improve nutrient content, structure, and water retention, promoting strong plant growth and vibrant landscapes." 
    },
    { 
      id: 2, 
      question: "Do you provide soil and fertilizer services for all garden types?", 
      answer: "Yes! We provide services for residential gardens, commercial landscapes, lawns, rooftop gardens, and public green spaces." 
    },
    { 
      id: 3, 
      question: "Which services are included in soil and fertilizer management?", 
      answer: "Our services include soil testing, nutrient analysis, organic and chemical fertilization, composting, mulching, and soil conditioning to optimize plant health." 
    },
    { 
      id: 4, 
      question: "Are your methods eco-friendly?", 
      answer: "Absolutely. We prioritize organic fertilizers, natural soil conditioners, and sustainable practices to maintain garden health without harming the environment." 
    },
    { 
      id: 5, 
      question: "Can you customize soil and fertilizer plans?", 
      answer: "Yes. Plans are tailored based on soil type, plant species, climate, and garden layout to ensure optimal nutrient availability and long-term garden vitality." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Soil & Fertilizer Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional soil and fertilizer services in Kathmandu Nepal, including soil testing, nutrient management, organic fertilization, and soil conditioning for healthy gardens and lawns." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/12.jpg"
          alt="Soil & Fertilizer Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Soil & Fertilizers</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Soil & Fertilizer Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Enhance your garden's growth and health with professional soil improvement and fertilizer services for lush, vibrant plants all year round.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Soil & Fertilizer Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional soil and fertilizer services to improve soil quality and plant health. We handle soil testing, nutrient management, organic and chemical fertilization, and soil conditioning to ensure your garden thrives.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly practices, including organic fertilizers and sustainable soil treatments, enhance soil fertility without harming the environment.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized soil and fertilizer plans are designed for each garden based on soil type, plant species, climate, and landscape layout to maximize growth, aesthetics, and sustainability.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/4.jpg", title: "Soil Improvement Services", desc: "Testing and improving soil structure and fertility for optimal plant growth." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Complete lawn care including fertilization, aeration, and soil management for lush, green lawns." },
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Regular garden upkeep including fertilization, soil conditioning, and seasonal adjustments." },
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

export default SoilFertilizers;