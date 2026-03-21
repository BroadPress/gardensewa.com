"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const TreePruningRemoval = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "Why is tree pruning important?", 
      answer: "Tree pruning removes dead, damaged, or overgrown branches to promote healthy growth, improve tree shape, prevent disease, and enhance safety around your property." 
    },
    { 
      id: 2, 
      question: "When is the best time to prune trees?", 
      answer: "The ideal timing depends on the tree species. Generally, late winter or early spring before new growth is optimal, but we assess each tree individually for the best results." 
    },
    { 
      id: 3, 
      question: "Do you provide tree removal services?", 
      answer: "Yes. We safely remove trees that are dead, diseased, hazardous, or unsuitable for your landscape while minimizing disruption to surrounding plants and property." 
    },
    { 
      id: 4, 
      question: "Are your pruning and removal methods safe and eco-friendly?", 
      answer: "Absolutely. We use professional equipment, follow safety protocols, and recycle or repurpose wood and branches whenever possible to reduce environmental impact." 
    },
    { 
      id: 5, 
      question: "Can you customize pruning and removal plans?", 
      answer: "Yes. Each project is tailored based on tree species, size, location, and client preferences to ensure health, aesthetics, and safety." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Tree Pruning & Removal Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional tree pruning and removal services in Kathmandu Nepal, including branch trimming, tree shaping, safe removal, and landscape management." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/14.jpg"
          alt="Tree Pruning & Removal Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Tree Pruning & Removal</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Tree Pruning & Removal Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Maintain healthy, safe, and beautiful trees with our professional pruning and removal services for residential and commercial landscapes.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Tree Pruning & Removal in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional tree pruning and removal services to maintain tree health, safety, and aesthetics. We handle branch trimming, shaping, and safe removal of trees that are hazardous or unsuitable for your landscape.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our team uses safe and eco-friendly practices, recycling removed wood and branches and ensuring minimal disruption to your property and surrounding plants.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized pruning and removal plans are designed based on tree species, size, location, and client requirements to optimize health, beauty, and safety.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/10.jpg", title: "Tree Sales Services", desc: "Expert evaluation of tree health to determine pruning, treatment, or removal needs." },
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Comprehensive garden care including tree pruning, plant care, and seasonal adjustments." },
            { img: "/services/2.jpg", title: "Planting & Transplanting Services", desc: "Professional planting, relocation, and care of trees and plants for optimal landscape health." },
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

export default TreePruningRemoval;