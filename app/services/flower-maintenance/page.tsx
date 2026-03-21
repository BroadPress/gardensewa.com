"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const FlowerMaintenance = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is flower maintenance and why is it important?", 
      answer: "Flower maintenance involves regular care, pruning, watering, and fertilization to ensure flowers remain healthy, vibrant, and bloom throughout the season." 
    },
    { 
      id: 2, 
      question: "Do you offer customized maintenance for different flower types?", 
      answer: "Yes! We provide care plans tailored to specific flower species, soil type, and environmental conditions, ensuring optimal growth and longevity." 
    },
    { 
      id: 3, 
      question: "Can you help with seasonal flower planning?", 
      answer: "Absolutely. We suggest flowers suitable for each season to keep your garden colorful and thriving year-round." 
    },
    { 
      id: 4, 
      question: "Do you provide ongoing guidance for flower care?", 
      answer: "Yes. Along with maintenance services, we guide on watering schedules, fertilization, pest control, and seasonal pruning to keep your flowers in perfect condition." 
    },
    { 
      id: 5, 
      question: "Are your flower maintenance services eco-friendly?", 
      answer: "Yes. We prioritize organic fertilizers, safe pest control methods, and sustainable gardening practices to protect the environment." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Flower Maintenance Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional flower maintenance services in Kathmandu Nepal, including planting, seasonal care, and temporary gardening services for vibrant, healthy flowers." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/18.jpg"
          alt="Flower Maintenance Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Flower Maintenance</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Flower Maintenance Services in Kathmandu
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your flowers vibrant, healthy, and blooming all year with our expert maintenance services, seasonal guidance, and professional care.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Flower Maintenance in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional flower maintenance services designed to keep your garden colorful and flourishing. From daily care routines to seasonal planning, we ensure your flowers remain vibrant and healthy.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our experts handle watering schedules, fertilization, pruning, and pest management, all tailored to your specific flower types and garden conditions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you have a residential garden, commercial landscape, or decorative flower displays, our flower maintenance services help you achieve long-lasting beauty with minimal effort.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/2.jpg", title: "Planting and Transplanting Services", desc: "Professional planting and relocation of flowers to ensure healthy growth and beautiful arrangements." },
            { img: "/services/17.jpg", title: "Temporary Gardening Services", desc: "Short-term gardening solutions for events, displays, or seasonal decoration." },
            { img: "/services/8.jpg", title: "Seasonal Services", desc: "Season-specific flower care, planting suggestions, and maintenance for vibrant year-round gardens." },
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

export default FlowerMaintenance;