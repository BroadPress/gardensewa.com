"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const GardenMaintenance = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is garden maintenance and why is it important?", 
      answer: "Garden maintenance involves regular care of plants, lawns, and flowers to keep gardens healthy, vibrant, and visually appealing throughout the year." 
    },
    { 
      id: 2, 
      question: "Do you offer customized maintenance plans for different garden types?", 
      answer: "Yes! Our services are tailored to the specific needs of your garden, whether it's a small residential space, rooftop garden, or large commercial landscape." 
    },
    { 
      id: 3, 
      question: "Can you help with seasonal planning for my garden?", 
      answer: "Absolutely. We provide guidance on seasonal planting, pruning, fertilization, and pest control to ensure your garden remains beautiful year-round." 
    },
    { 
      id: 4, 
      question: "Do you offer ongoing guidance and support?", 
      answer: "Yes. Along with maintenance services, we provide tips and instructions for watering, soil care, pruning, and seasonal adjustments to keep your garden thriving." 
    },
    { 
      id: 5, 
      question: "Are your garden maintenance services eco-friendly?", 
      answer: "Yes. We prioritize sustainable practices, including organic fertilizers, safe pest control methods, and water-efficient irrigation systems." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Garden Maintenance Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional garden maintenance services in Kathmandu Nepal, including yearly maintenance, seasonal care, and flower maintenance for homes and businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/3.jpg"
          alt="Garden Maintenance Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Garden Maintenance</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Garden Maintenance Services in Kathmandu
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your garden lush, healthy, and well-maintained all year with our expert garden maintenance services, seasonal planning, and professional guidance.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Garden Maintenance in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa offers comprehensive garden maintenance services for residential and commercial gardens. We provide care for lawns, flowers, shrubs, and trees, ensuring your outdoor space remains vibrant and healthy throughout the year.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our services include watering, fertilization, pruning, pest control, and seasonal adjustments. We also offer customized plans for specific plants, soil types, and environmental conditions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you have a small garden, rooftop greenery, or a large landscape, our garden maintenance services combine professional expertise with eco-friendly practices to keep your garden thriving effortlessly.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/20.jpg", title: "Yearly Garden Maintenance Services", desc: "Comprehensive annual garden care plans including lawn care, pruning, and soil management." },
            { img: "/services/8.jpg", title: "Seasonal Services", desc: "Season-specific garden care, planting suggestions, and maintenance to keep gardens vibrant year-round." },
            { img: "/services/18.jpg", title: "Flower Maintenance Services", desc: "Expert flower care including watering, fertilization, pruning, and pest management for healthy blooms." },
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

export default GardenMaintenance;