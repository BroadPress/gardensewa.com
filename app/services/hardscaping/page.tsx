"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const Hardscaping = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is hardscaping and why is it important?", 
      answer: "Hardscaping involves designing and installing non-living elements in a landscape, such as patios, walkways, retaining walls, and decorative stone features, to enhance functionality and aesthetics." 
    },
    { 
      id: 2, 
      question: "Can you design hardscaping for small and large spaces?", 
      answer: "Yes! Our hardscaping services are customized for any space, from small residential gardens to large commercial landscapes, ensuring functional and beautiful designs." 
    },
    { 
      id: 3, 
      question: "Do you provide material selection guidance?", 
      answer: "Absolutely. We help select the best materials, including stone, concrete, wood, and tiles, based on durability, aesthetics, and maintenance requirements." 
    },
    { 
      id: 4, 
      question: "Do you offer ongoing maintenance for hardscapes?", 
      answer: "Yes. We provide guidance and services for cleaning, sealing, and repairing hardscape elements to maintain their appearance and longevity." 
    },
    { 
      id: 5, 
      question: "Are your hardscaping practices eco-friendly?", 
      answer: "Yes. We incorporate sustainable materials, efficient water management, and environmentally responsible installation techniques." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Hardscaping Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional hardscaping services in Kathmandu Nepal, including patios, walkways, retaining walls, landscape lighting, and seasonal enhancements for homes and businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/7.jpg"
          alt="Hardscaping Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Hardscaping</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Hardscaping Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Enhance your outdoor space with durable and stylish hardscaping solutions — from patios and walkways to retaining walls and landscape lighting.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Hardscaping Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa offers professional hardscaping services for residential and commercial landscapes. We design and install patios, walkways, retaining walls, and decorative stone features to enhance both functionality and beauty.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our team guides you through material selection, design planning, and installation, ensuring every hardscape element is durable, aesthetically pleasing, and tailored to your space.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We combine professional craftsmanship with sustainable practices to create long-lasting landscapes that elevate outdoor spaces and complement natural elements.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/9.jpg", title: "Landscape Design Services", desc: "Comprehensive design solutions to create functional, beautiful, and sustainable outdoor spaces." },
            { img: "/services/15.jpg", title: "Landscape Lighting Services", desc: "Professional lighting installation to enhance safety, ambiance, and beauty of your landscape." },
            { img: "/services/8.jpg", title: "Seasonal Services", desc: "Season-specific hardscape maintenance, installation updates, and aesthetic enhancements." },
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

export default Hardscaping;