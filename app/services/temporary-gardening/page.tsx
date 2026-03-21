"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const TemporaryGardening = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is temporary gardening and why is it needed?", 
      answer: "Temporary gardening involves creating short-term gardens for events, exhibitions, festivals, or seasonal displays. It allows for flexible, visually appealing green spaces without permanent commitment." 
    },
    { 
      id: 2, 
      question: "Do you provide temporary gardening for all types of events?", 
      answer: "Yes! We offer services for weddings, corporate events, public exhibitions, seasonal festivals, rooftop parties, and commercial promotions." 
    },
    { 
      id: 3, 
      question: "Which services are included in temporary gardening?", 
      answer: "Our services include garden design, plant selection, installation, decorative elements, watering and maintenance during the event, and removal or relocation afterward." 
    },
    { 
      id: 4, 
      question: "Are your temporary gardening methods eco-friendly?", 
      answer: "Absolutely. We use potted plants, reusable materials, organic soil, and sustainable décor elements to create environmentally responsible temporary gardens." 
    },
    { 
      id: 5, 
      question: "Can you customize temporary gardening plans?", 
      answer: "Yes. Each project is customized based on event type, location, duration, plant preferences, and aesthetic requirements to create a beautiful and functional garden space." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Temporary Gardening Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional temporary gardening services in Kathmandu Nepal, including event gardens, seasonal displays, and short-term landscaping for weddings, exhibitions, and festivals." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/17.jpg"
          alt="Temporary Gardening Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Temporary Gardening</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Temporary Gardening Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Create stunning short-term gardens for events, exhibitions, or seasonal displays with our professional temporary gardening services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Temporary Gardening in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional temporary gardening services for events, exhibitions, and seasonal displays. We handle design, plant selection, installation, maintenance, and post-event removal for flexible, beautiful green spaces.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our eco-friendly approach uses potted plants, organic soil, reusable materials, and sustainable décor to create visually stunning gardens responsibly.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Customized temporary gardening plans are tailored to event type, location, duration, plant choices, and design requirements for maximum visual impact and functionality.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/18.jpg", title: "Flower Maintenance Services", desc: "Short-term flower care and seasonal plant setup for events and temporary gardens." },
            { img: "/services/8.jpg", title: "Seasonal Services", desc: "Season-specific gardening services including planting, pruning, and fertilization for temporary displays." },
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Ongoing care and management for temporary or short-term gardens during events or exhibitions." },
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

export default TemporaryGardening;