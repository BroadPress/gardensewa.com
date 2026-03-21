"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const PestDiseaseControl = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is pest and disease control and why is it important?", 
      answer: "Pest and disease control involves identifying, treating, and preventing infestations and plant diseases. Proper care protects lawns, gardens, and plants, maintaining their health and aesthetic appeal." 
    },
    { 
      id: 2, 
      question: "Do you provide pest and disease control for all property types?", 
      answer: "Yes! We provide professional services for residential gardens, commercial landscapes, large estates, and rooftop green areas." 
    },
    { 
      id: 3, 
      question: "Which services are included in pest and disease control?", 
      answer: "Our services include pest identification, fungal and disease treatment, preventive spraying, eco-friendly solutions, regular monitoring, and expert advice." 
    },
    { 
      id: 4, 
      question: "Are your solutions eco-friendly and safe for children and pets?", 
      answer: "Absolutely. We use organic and environmentally safe products to ensure effective treatments without harming children, pets, or beneficial insects." 
    },
    { 
      id: 5, 
      question: "Can you customize pest and disease control plans?", 
      answer: "Yes. Our plans are tailored based on plant types, garden size, soil conditions, and local pest risks to ensure effective protection and healthy growth." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Pest & Disease Control Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional pest and disease control services in Kathmandu Nepal, including pest identification, fungal treatment, preventive spraying, and eco-friendly solutions for lawns and gardens." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/6.jpg"
          alt="Pest & Disease Control Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Pest & Disease Control</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Pest & Disease Control Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Protect your garden, lawn, and plants from pests and diseases with our professional, eco-friendly, and preventive care services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Pest & Disease Control in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional pest and disease control services to maintain healthy, vibrant gardens and lawns. We identify pests, treat fungal and bacterial infections, and implement preventive measures to avoid infestations.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly solutions and monitoring practices ensure safe treatment for children, pets, and beneficial insects while keeping your outdoor spaces healthy and aesthetically pleasing.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized control plans based on your garden type, plant variety, and environmental conditions ensure long-term protection and sustainable growth.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Regular care for gardens including pruning, watering, and seasonal upkeep." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Comprehensive lawn care including mowing, fertilization, and soil health management." },
            { img: "/services/20.jpg", title: "Yearly Garden Maintenance Services", desc: "Annual planning and maintenance to ensure your garden stays vibrant and healthy year-round." },
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

export default PestDiseaseControl;