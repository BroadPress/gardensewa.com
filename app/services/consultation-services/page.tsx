"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const GardenConsultation = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is garden consultation and why is it important?", 
      answer: "Garden consultation provides expert guidance on planning, designing, and maintaining gardens. It ensures your outdoor spaces are functional, aesthetically pleasing, and environmentally sustainable." 
    },
    { 
      id: 2, 
      question: "Do you provide customized garden plans for small spaces?", 
      answer: "Yes! Our garden consultation services are tailored to your space, whether it's a small balcony, rooftop garden, or large backyard, maximizing beauty and usability." 
    },
    { 
      id: 3, 
      question: "Can you help with plant selection and soil health?", 
      answer: "Absolutely. We recommend plants suited to your climate, soil type, and maintenance preferences, ensuring long-term growth and a thriving garden." 
    },
    { 
      id: 4, 
      question: "Do you offer ongoing maintenance guidance?", 
      answer: "Yes. Along with planning and design, we provide guidance on watering, pruning, fertilization, and seasonal care to keep your garden healthy year-round." 
    },
    { 
      id: 5, 
      question: "Are your garden consultation services eco-friendly?", 
      answer: "Yes, we prioritize sustainable practices, including native plant recommendations, water-efficient irrigation, and organic care methods." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Garden Consultation Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional garden consultation services in Kathmandu Nepal, offering expert advice on garden design, landscaping, tree sales, and lawn care for homes and businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/16.jpg"
          alt="Garden Consultation Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Garden Consultation</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Garden Consultation Services in Kathmandu
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Transform your garden into a lush, sustainable, and beautiful space with professional guidance, customized planning, and expert landscaping advice.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Garden Consultation in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa offers comprehensive garden consultation services to help homeowners and businesses design, plan, and maintain their outdoor spaces. From selecting the right plants to designing layouts and advising on soil and irrigation, we provide everything needed to create stunning and functional gardens.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our team combines creativity with environmental awareness to deliver gardens that are not only beautiful but also sustainable and low-maintenance. We help you achieve the perfect balance of aesthetics, functionality, and ecology.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you are planning a residential garden, commercial landscape, or rooftop greenery, our expert consultation ensures optimal design, proper plant selection, and long-term care strategies.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/9.jpg", title: "Landscape Design Services", desc: "Professional landscape design to create functional, beautiful, and sustainable outdoor spaces." },
            { img: "/services/10.jpg", title: "Tree Sales Services", desc: "High-quality tree selection and delivery for gardens, parks, and residential landscapes." },
            { img: "/services/1.jpg", title: "Lawn Care Services", desc: "Expert lawn maintenance including mowing, fertilization, and soil care for a healthy, green lawn." },
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

export default GardenConsultation;