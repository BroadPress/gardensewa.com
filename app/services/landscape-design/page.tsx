"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const LandscapeDesign = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What is landscape design and why is it important?", 
      answer: "Landscape design involves planning and creating functional and aesthetically pleasing outdoor spaces. It enhances the beauty, usability, and value of residential and commercial properties." 
    },
    { 
      id: 2, 
      question: "Do you provide landscape design for all property sizes?", 
      answer: "Yes! We create designs for small residential gardens, large estates, commercial landscapes, and rooftop green spaces, ensuring each design complements the property and surroundings." 
    },
    { 
      id: 3, 
      question: "What elements are included in your landscape designs?", 
      answer: "Our designs include lawns, plants, trees, walkways, patios, water features, hardscaping elements, lighting, and sustainable practices for a complete and harmonious landscape." 
    },
    { 
      id: 4, 
      question: "Do you offer guidance for implementing the design?", 
      answer: "Absolutely. We provide detailed plans, material recommendations, and step-by-step guidance to ensure the design is executed efficiently and beautifully." 
    },
    { 
      id: 5, 
      question: "Are your landscape designs eco-friendly?", 
      answer: "Yes. We prioritize sustainable materials, native plants, water-efficient irrigation, and eco-conscious practices to create beautiful yet environmentally responsible landscapes." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Landscape Design Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional landscape design services in Kathmandu Nepal, including gardens, patios, walkways, hardscaping, and eco-friendly outdoor solutions for homes and businesses." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/9.jpg"
          alt="Landscape Design Service in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Landscape Design</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Landscape Design Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Transform your outdoor space with professional landscape designs that are functional, beautiful, and sustainable.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Landscape Design in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa provides professional landscape design services to create stunning and functional outdoor spaces. Our team plans and designs gardens, patios, walkways, water features, and hardscaping elements tailored to your property and lifestyle.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We combine aesthetics, functionality, and sustainability to ensure each landscape is visually appealing, easy to maintain, and environmentally friendly.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether for a residential garden, commercial property, or rooftop green space, our designs enhance outdoor living while complementing the natural surroundings.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/7.jpg", title: "Hardscaping Services", desc: "Patios, walkways, retaining walls, and stone features to enhance outdoor aesthetics and functionality." },
            { img: "/services/15.jpg", title: "Landscape Lighting Services", desc: "Professional lighting solutions to illuminate gardens, pathways, and outdoor features." },
            { img: "/services/19.jpg", title: "Rooftop Gardening Services", desc: "Design and installation of rooftop gardens for greenery, relaxation, and urban sustainability." },
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

export default LandscapeDesign;