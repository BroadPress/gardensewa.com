// pages/index.js or components/LawnCareService.js
"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const LawnCareService = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const services = [
    { id: 1, title: "Mowing the Lawn", icon: "/services/icons/lawn-care/lawn-mowing.png" },
    { id: 2, title: "Edge Trimming", icon: "/services/icons/lawn-care/edge-trimming.png" },
    { id: 3, title: "Aerating Soil", icon: "/services/icons/lawn-care/aerating-soil.png" },
    { id: 4, title: "Fertilization and Soil Conditioning", icon: "/services/icons/lawn-care/fertillization-soil-conditioning.png" },
    { id: 5, title: "Lawn Reseeding", icon: "/services/icons/lawn-care/lawn-reseeding.png" },
    { id: 6, title: "Weeding", icon: "/services/icons/lawn-care/weeding.png" },
  ];

  const faqs = [
    { id: 1, question: "How do I schedule a lawn care service?" },
    { id: 2, question: "What is included in a standard lawn maintenance visit?" },
    { id: 3, question: "How often should my lawn be mowed or fertilized?" },
    { id: 4, question: "Do you provide services for residential and commercial lawns?" },
    { id: 5, question: "Are your lawn care methods eco-friendly?" },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Lawn Care Service in Kathmandu Nepal</title>
        <meta name="description" content="Professional lawn care services in Nepal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[360px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/1.jpg"
          alt="Lawn Care"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Lawn Care</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Lawn Care Services in Kathmandu
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Showcasing our finest lawn care and landscaping services — from residential gardens to commercial lawns, each project is a step towards greener living.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-justify">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Professional Lawn Care Services in Nepal
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Garden Sewa, we provide expert lawn care services to keep your outdoor spaces vibrant, healthy, and beautiful all year round. Our services include mowing, edging, fertilization, aeration, reseeding, and weeding. We also ensure soil health and implement eco-friendly practices to maintain sustainable, lush green lawns.
        </p>

        {/* 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 text-center">
            <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Expert Lawn Mowing</h3>
            <p>Precise and regular mowing for a well-maintained lawn throughout the year.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 text-center">
            <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Soil & Fertilization</h3>
            <p>Enhancing soil health and using fertilizers to promote strong, green growth.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 text-center">
            <div className="bg-gray-200 h-40 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Lawn Reseeding</h3>
            <p>Revitalizing your lawn with reseeding for thick, healthy, and uniform grass coverage.</p>
          </div>
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
                    {faq.id === 1 && "You can schedule a lawn care service by contacting Garden Sewa via phone, email, or our website booking form."}
                    {faq.id === 2 && "A standard lawn maintenance visit includes mowing, edging, fertilization, weeding, and inspection of soil health."}
                    {faq.id === 3 && "The frequency of mowing and fertilization depends on the lawn type, season, and growth rate; our experts create a customized schedule."}
                    {faq.id === 4 && "Yes, we provide services for both residential and commercial lawns, including hotels, offices, and public spaces."}
                    {faq.id === 5 && "Absolutely, we follow eco-friendly practices including organic fertilizers and sustainable lawn care techniques."}
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

export default LawnCareService;