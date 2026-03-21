"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const ArtificialGardening = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { id: 1, question: "What is artificial gardening and how does it work?", answer: "Artificial gardening uses high-quality synthetic grass, vertical gardens, and decorative greenery to create lush, low-maintenance outdoor or indoor spaces without the need for watering, mowing, or fertilization." },
    { id: 2, question: "Why should I choose artificial grass over natural grass?", answer: "Artificial grass is durable, water-saving, and low-maintenance. It stays green year-round, reduces upkeep costs, and is ideal for homes, offices, rooftops, and commercial areas." },
    { id: 3, question: "Can artificial gardening be installed in small spaces or balconies?", answer: "Yes! Artificial gardening is perfect for compact spaces, balconies, rooftops, and vertical walls, allowing you to enjoy greenery even in urban settings with limited outdoor area." },
    { id: 4, question: "How long does artificial gardening last?", answer: "With proper installation and care, artificial gardening can last 8–15 years. It is resistant to weather, pests, and wear, making it a long-term landscaping solution." },
    { id: 5, question: "Is artificial gardening eco-friendly?", answer: "Absolutely. It saves water, reduces chemical usage, and eliminates the need for fertilizers and pesticides, offering an environmentally friendly way to enjoy green spaces." },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Artificial Gardening Service in Kathmandu Nepal</title>
        <meta name="description" content="Professional artificial gardening services in Kathmandu Nepal including artificial grass installation, vertical gardens, and low-maintenance landscaping solutions for homes and businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/21.jpg"
          alt="Artificial Gardening Service in Kathmandu, Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold"> Artificial Gardening</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Artificial Gardening Services in Kathmandu
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Upgrade your space with modern artificial gardening solutions — from artificial grass and vertical gardens to stylish indoor greenery, designed for beauty without maintenance.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Professional Artificial Gardening Services in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          At Garden Sewa, we specialize in delivering expert artificial gardening services designed to transform your indoor and outdoor spaces into lush, visually appealing environments. Our solutions are perfect for modern homes, offices, hotels, and commercial properties that seek greenery without the ongoing maintenance. With a focus on quality and aesthetics, we create spaces that remain vibrant and beautiful throughout the year, regardless of weather conditions.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our services include high-quality artificial grass installation that provides a natural look and feel, along with customized vertical gardens that enhance walls and compact spaces. We also offer stylish indoor plant arrangements and decorative greenery that elevate the ambiance of any setting. Every project is carefully planned and executed to match your space, design preferences, and functional needs.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          With low-maintenance and long-lasting solutions, artificial gardening is an ideal choice for urban living. It saves water, reduces upkeep costs, and eliminates the need for regular care such as watering, trimming, or fertilizing. At Garden Sewa, we combine creativity, durability, and eco-conscious practices to deliver landscaping solutions that are both practical and visually impressive.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/7.jpg", title: "Hardscaping Services", desc: "Installation of patios, walkways, retaining walls, stone features, and other non-living landscape elements to enhance outdoor spaces." },
            { img: "/services/16.jpg", title: "Turfing Service", desc: "Professional turf installation and maintenance including laying new grass, repairing damaged turf, and ensuring a lush, healthy lawn." },
            { img: "/services/9.jpg", title: "Landscape Design Services", desc: "Professional landscape design and planning services to create beautiful, functional outdoor spaces tailored to your needs and preferences." },
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

export default ArtificialGardening;