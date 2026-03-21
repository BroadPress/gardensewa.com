"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const GardenIrrigation = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is garden irrigation and why is it important?", 
      answer: "Garden irrigation involves supplying water efficiently to plants, lawns, and gardens to ensure healthy growth, conserve water, and maintain a vibrant landscape." 
    },
    { 
      id: 2, 
      question: "Do you provide irrigation solutions for all garden sizes?", 
      answer: "Yes! We design irrigation systems for small residential gardens, large landscapes, rooftop gardens, and commercial green spaces." 
    },
    { 
      id: 3, 
      question: "What types of irrigation systems do you install?", 
      answer: "We offer sprinkler systems, drip irrigation, automated timers, and smart irrigation solutions tailored to your plants, soil type, and water needs." 
    },
    { 
      id: 4, 
      question: "Do you offer maintenance and monitoring of irrigation systems?", 
      answer: "Yes. We provide system setup, regular maintenance, seasonal adjustments, and troubleshooting to ensure optimal performance and water efficiency." 
    },
    { 
      id: 5, 
      question: "Are your irrigation solutions eco-friendly?", 
      answer: "Absolutely. Our systems are designed to conserve water, reduce runoff, and deliver precise watering to protect the environment and promote sustainable gardening." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Garden Irrigation Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional garden irrigation services in Kathmandu Nepal, including sprinkler systems, drip irrigation, and automated watering solutions for lawns, gardens, and rooftops." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/5.jpg"
          alt="Garden Irrigation Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Garden Irrigation</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Garden Irrigation Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Keep your garden lush and healthy with efficient watering solutions, automated systems, and professional irrigation planning.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Garden Irrigation Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional garden irrigation solutions to ensure your lawns, plants, and gardens receive the right amount of water efficiently. We design, install, and maintain irrigation systems to keep landscapes vibrant while conserving water.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our services include sprinklers, drip irrigation, automated timers, and smart watering systems tailored to your garden size, soil type, and plant needs.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We combine modern technology with eco-friendly practices to create irrigation solutions that save time, reduce water wastage, and promote healthy, thriving gardens.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/3.jpg", title: "Garden Maintenance Services", desc: "Comprehensive care for plants, lawns, and flowers to keep your garden vibrant and healthy." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Professional lawn maintenance including mowing, fertilization, aeration, and soil management." },
            { img: "/services/19.jpg", title: "Rooftop Gardening Services", desc: "Specialized irrigation and care solutions for rooftop gardens and container plants." },
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

export default GardenIrrigation;