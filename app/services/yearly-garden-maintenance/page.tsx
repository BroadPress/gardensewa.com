"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const YearlyGardenMaintenance = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is yearly garden maintenance?", 
      answer: "Yearly garden maintenance is a comprehensive program that ensures your garden remains healthy, vibrant, and well-managed throughout the year. It includes seasonal pruning, fertilization, pest management, and soil care." 
    },
    { 
      id: 2, 
      question: "Do you maintain all types of gardens?", 
      answer: "Yes! We maintain residential gardens, commercial landscapes, public parks, rooftop gardens, and institutional green spaces." 
    },
    { 
      id: 3, 
      question: "What services are included in yearly garden maintenance?", 
      answer: "Our services include seasonal pruning, mowing, fertilization, irrigation management, pest and disease control, soil improvement, and landscape health assessments." 
    },
    { 
      id: 4, 
      question: "Do you customize maintenance plans?", 
      answer: "Absolutely. Each garden is different, so our maintenance plans are tailored based on plant types, climate, soil condition, and client preferences for optimal results." 
    },
    { 
      id: 5, 
      question: "Why is yearly maintenance important?", 
      answer: "Regular yearly maintenance keeps plants healthy, prevents disease, promotes growth, ensures aesthetic appeal, and extends the life of your garden and landscape features." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Yearly Garden Maintenance Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional yearly garden maintenance services in Kathmandu Nepal, including seasonal pruning, fertilization, pest control, soil care, and overall garden health management." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/20.jpg"
          alt="Yearly Garden Maintenance Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Yearly Garden Maintenance</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Yearly Garden Maintenance Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your garden healthy, vibrant, and beautiful all year round with our professional yearly maintenance services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Yearly Garden Maintenance in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional yearly garden maintenance services to ensure your outdoor space remains thriving and well-managed. We handle seasonal pruning, fertilization, pest control, soil care, and overall landscape health.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our team uses eco-friendly treatments, proper garden care techniques, and tailored maintenance plans to promote plant health, aesthetics, and long-term garden sustainability.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We serve residential, commercial, and institutional gardens, customizing services to the unique needs of each garden, plant types, and property size.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Comprehensive care including pruning, mowing, fertilization, and seasonal management for all types of gardens." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Mowing, fertilization, aeration, and pest management to keep lawns lush and healthy." },
            { img: "/services/6.jpg", title: "Pest and Disease Control Services", desc: "Preventive and corrective treatments to keep plants free from pests and diseases." },
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

export default YearlyGardenMaintenance;