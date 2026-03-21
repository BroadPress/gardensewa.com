"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const LandscapeLighting = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is landscape lighting and why is it important?", 
      answer: "Landscape lighting enhances the beauty, safety, and functionality of outdoor spaces. It highlights gardens, pathways, architectural features, and water elements while creating ambiance at night." 
    },
    { 
      id: 2, 
      question: "Do you provide lighting solutions for all property sizes?", 
      answer: "Yes! We design and install lighting systems for small residential gardens, large estates, commercial landscapes, and rooftop green spaces." 
    },
    { 
      id: 3, 
      question: "What types of lighting do you install?", 
      answer: "We offer pathway lighting, spotlights, accent lighting, underwater lights, solar lights, and smart lighting solutions tailored to enhance your landscape and outdoor features." 
    },
    { 
      id: 4, 
      question: "Do you offer maintenance and energy-efficient options?", 
      answer: "Absolutely. We provide regular maintenance, LED upgrades, timer setups, and energy-efficient lighting solutions to ensure safety and sustainability." 
    },
    { 
      id: 5, 
      question: "Are your lighting solutions eco-friendly?", 
      answer: "Yes. We use energy-efficient LED fixtures, solar-powered options, and smart controls to minimize environmental impact while enhancing outdoor beauty." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Landscape Lighting Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional landscape lighting services in Kathmandu Nepal, including pathway lighting, accent lights, spotlights, underwater lights, and energy-efficient outdoor illumination solutions." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/15.jpg"
          alt="Landscape Lighting Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Landscape Lighting</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Landscape Lighting Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Illuminate your outdoor spaces beautifully and safely with professional landscape lighting solutions for residential and commercial properties.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Landscape Lighting in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional landscape lighting services to enhance the beauty, safety, and usability of your outdoor spaces. We design, install, and maintain lighting systems that highlight gardens, pathways, patios, water features, and architectural elements.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Our services include LED lighting, solar-powered options, accent lights, underwater lights, and smart automated controls for energy efficiency and long-lasting performance.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We combine aesthetics, functionality, and eco-friendly technology to ensure your landscape looks stunning day and night while minimizing energy consumption.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/7.jpg", title: "Hardscaping Services", desc: "Patios, walkways, retaining walls, and stone features to enhance outdoor aesthetics and functionality." },
            { img: "/services/9.jpg", title: "Landscape Design Services", desc: "Professional planning and design of outdoor spaces including gardens, water features, and hardscape elements." },
            { img: "/services/19.jpg", title: "Rooftop Gardening Services", desc: "Design and installation of rooftop gardens with proper irrigation and lighting solutions for greenery and relaxation." },
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

export default LandscapeLighting;