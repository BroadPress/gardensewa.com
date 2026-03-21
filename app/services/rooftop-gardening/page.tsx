"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const RoofTopGardening = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is rooftop gardening and why is it important?", 
      answer: "Rooftop gardening involves growing plants on the roof of a building. It improves air quality, reduces heat, conserves energy, and provides aesthetic and environmental benefits." 
    },
    { 
      id: 2, 
      question: "Do you provide rooftop gardening for all types of buildings?", 
      answer: "Yes! We design and implement rooftop gardens for residential homes, commercial buildings, offices, hotels, and apartments." 
    },
    { 
      id: 3, 
      question: "Which services are included in rooftop gardening?", 
      answer: "Our services include structural assessment, soil preparation, plant selection, irrigation setup, planting, maintenance, and seasonal care." 
    },
    { 
      id: 4, 
      question: "Are your methods eco-friendly?", 
      answer: "Absolutely. We use organic soil, sustainable watering techniques, and eco-friendly materials to create green, healthy, and safe rooftop gardens." 
    },
    { 
      id: 5, 
      question: "Can you customize rooftop gardening plans?", 
      answer: "Yes. We design customized rooftop gardens based on roof size, sunlight, structural capacity, plant preferences, and aesthetic requirements." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Rooftop Gardening Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional rooftop gardening services in Kathmandu Nepal, including soil preparation, plant selection, irrigation, planting, and maintenance for homes and commercial buildings." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/19.jpg"
          alt="Rooftop Gardening Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Rooftop Gardening</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Rooftop Gardening Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Transform your rooftop into a green, sustainable, and beautiful garden with professional rooftop gardening services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Rooftop Gardening in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional rooftop gardening services to create green spaces on any roof. We handle soil preparation, plant selection, irrigation, planting, and ongoing maintenance for vibrant and sustainable gardens.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly and sustainable practices improve air quality, reduce heat, and enhance the aesthetic and environmental value of your building.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized rooftop gardening plans are tailored according to roof structure, sunlight, plant preferences, and design requirements to ensure the best results.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/9.jpg", title: "Landscape Design Services", desc: "Professional landscape design to complement rooftop gardens and outdoor spaces." },
            { img: "/services/5.jpg", title: "Irrigation Services", desc: "Efficient irrigation systems for rooftop gardens and green spaces ensuring proper watering and plant health." },
            { img: "/services/7.jpg", title: "Hardscaping Services", desc: "Design and installation of walkways, seating, planters, and other structures for rooftop gardens." },
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

export default RoofTopGardening;