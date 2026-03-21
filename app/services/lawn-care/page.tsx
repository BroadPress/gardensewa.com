"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const LawnCare = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is lawn care and why is it important?", 
      answer: "Lawn care involves regular maintenance, fertilization, mowing, and pest control to keep lawns healthy, green, and aesthetically pleasing. Proper care improves soil quality and prevents diseases." 
    },
    { 
      id: 2, 
      question: "Do you provide lawn care for all sizes of lawns?", 
      answer: "Yes! We provide professional lawn care for small residential yards, large estates, commercial landscapes, and rooftop green areas." 
    },
    { 
      id: 3, 
      question: "What services are included in lawn care?", 
      answer: "Our services include mowing, aeration, fertilization, weed control, pest management, soil improvement, and seasonal maintenance to keep your lawn lush and healthy." 
    },
    { 
      id: 4, 
      question: "Do you offer eco-friendly and sustainable solutions?", 
      answer: "Absolutely. We use organic fertilizers, environmentally safe pest control, and water-efficient practices to maintain a healthy and sustainable lawn." 
    },
    { 
      id: 5, 
      question: "Can you customize lawn care plans?", 
      answer: "Yes. Our plans are tailored to your lawn size, soil type, grass variety, and environmental conditions to ensure optimal growth and appearance." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Lawn Care Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional lawn care services in Kathmandu Nepal, including mowing, fertilization, soil improvement, weed and pest control, and seasonal lawn maintenance for homes and businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/1.jpg"
          alt="Lawn Care Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Lawn Care</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Lawn Care Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your lawn lush, green, and healthy all year round with our professional lawn care and maintenance services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Lawn Care in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional lawn care services to maintain beautiful and healthy lawns. Our team takes care of mowing, fertilization, soil improvement, weed and pest control, and seasonal maintenance to ensure your lawn stays green and vibrant.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We use modern equipment, organic fertilizers, and eco-friendly pest control methods to provide sustainable lawn care for residential and commercial properties.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our customized plans ensure your lawn grows strong, remains disease-free, and complements the overall landscape design.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/16.jpg", title: "Turfing Service", desc: "Professional turf installation and replacement to create perfect lawns and green spaces." },
            { img: "/services/4.jpg", title: "Soil Improvement Services", desc: "Enhance soil health, fertility, and drainage to promote strong and lush lawn growth." },
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Comprehensive care for gardens, including plants, shrubs, and seasonal maintenance." },
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

export default LawnCare;