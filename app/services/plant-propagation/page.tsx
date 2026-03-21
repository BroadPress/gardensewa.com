"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const PlantPropagation = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is plant propagation and why is it important?", 
      answer: "Plant propagation is the process of creating new plants from seeds, cuttings, or other plant parts. It helps increase plant numbers, preserve species, and ensure healthy, vigorous growth for gardens and landscapes." 
    },
    { 
      id: 2, 
      question: "Do you provide propagation for all types of plants?", 
      answer: "Yes! We propagate flowers, shrubs, fruit plants, ornamental plants, and trees for residential gardens, commercial landscapes, and nurseries." 
    },
    { 
      id: 3, 
      question: "Which propagation methods do you use?", 
      answer: "We use seed sowing, cuttings, grafting, layering, and tissue culture depending on the plant type and desired outcome." 
    },
    { 
      id: 4, 
      question: "Are your methods eco-friendly and safe for the environment?", 
      answer: "Absolutely. We use natural propagation techniques and organic media to ensure sustainable, healthy growth without harming the environment." 
    },
    { 
      id: 5, 
      question: "Can you provide customized propagation plans?", 
      answer: "Yes. We tailor propagation techniques based on plant species, climate, soil type, and your garden or landscape requirements to ensure successful results." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Plant Propagation Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional plant propagation services in Kathmandu Nepal, including propagation of flowers, shrubs, trees, and ornamental plants using eco-friendly and effective methods." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/8.jpg"
          alt="Plant Propagation Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Plant Propagation</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Plant Propagation Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Grow your garden and landscape efficiently with professional plant propagation services for flowers, shrubs, trees, and ornamental plants.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Plant Propagation in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional plant propagation services to help you grow healthy and vibrant plants. We use seeds, cuttings, grafting, and layering methods to ensure successful plant growth and expansion of your garden or landscape.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly and sustainable propagation techniques promote strong root development, disease resistance, and long-lasting plants for residential and commercial properties.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized propagation plans are created for each plant type, considering climate, soil, and your landscape needs to ensure optimal results.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/2.jpg", title: "Planting and Transplanting Services", desc: "Professional planting and moving of plants to ensure healthy growth and proper landscape placement." },
            { img: "/services/18.jpg", title: "Flower Maintenance Services", desc: "Comprehensive care for flowers including watering, pruning, fertilization, and seasonal upkeep." },
            { img: "/services/10.jpg", title: "Tree Sales Services", desc: "High-quality trees for sale with guidance on planting, growth, and maintenance." },
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

export default PlantPropagation;