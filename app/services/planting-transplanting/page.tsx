"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const PlantingTransplanting = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is planting and transplanting and why is it important?", 
      answer: "Planting and transplanting involve placing new plants into the ground and relocating existing plants to optimal locations. Proper techniques ensure healthy growth, strong roots, and beautiful landscapes." 
    },
    { 
      id: 2, 
      question: "Do you provide planting and transplanting for all plant types?", 
      answer: "Yes! We handle flowers, shrubs, ornamental plants, fruit plants, and trees for residential, commercial, and public gardens." 
    },
    { 
      id: 3, 
      question: "Which services are included?", 
      answer: "Our services include site preparation, planting, transplanting, soil conditioning, staking, watering, and aftercare guidance to ensure plant survival and growth." 
    },
    { 
      id: 4, 
      question: "Are your methods eco-friendly?", 
      answer: "Absolutely. We use organic soil amendments, natural fertilizers, and sustainable techniques to maintain healthy plants without harming the environment." 
    },
    { 
      id: 5, 
      question: "Can you customize planting and transplanting plans?", 
      answer: "Yes. We create plans based on plant type, soil condition, climate, and your landscape design to ensure the best growth and aesthetic results." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Planting & Transplanting Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional planting and transplanting services in Kathmandu Nepal, including flowers, shrubs, trees, and ornamental plants with eco-friendly and effective techniques." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/2.jpg"
          alt="Planting & Transplanting Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Planting & Transplanting</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Planting & Transplanting Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Ensure healthy plant growth and beautiful landscapes with professional planting and transplanting services for all types of plants.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Planting & Transplanting in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional planting and transplanting services to establish and relocate plants efficiently. Our team ensures strong root systems, optimal soil conditions, and proper plant placement for vibrant, healthy landscapes.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We use eco-friendly techniques, organic soil amendments, and sustainable care practices to promote plant health, longevity, and aesthetic appeal.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized planting and transplanting plans are created according to plant species, climate, soil type, and your garden design for optimal growth and beauty.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/8.jpg", title: "Plant Propagation Services", desc: "Grow flowers, shrubs, trees, and ornamental plants using professional propagation methods." },
            { img: "/services/7.jpg", title: "Tree Sales Services", desc: "High-quality trees for sale with guidance on planting, growth, and maintenance." },
            { img: "/services/18.jpg", title: "Flower Maintenance Services", desc: "Comprehensive flower care including watering, pruning, fertilization, and seasonal upkeep." },
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

export default PlantingTransplanting;