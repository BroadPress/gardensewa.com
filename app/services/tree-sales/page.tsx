"use client";

import React, { useState } from "react";
import Head from "next/head";
import { ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

const TreeSales = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqs = [
    { 
      id: 1, 
      question: "What types of trees do you sell?", 
      answer: "We offer a wide range of trees including fruit trees, ornamental trees, flowering trees, shade trees, and native species suitable for various landscapes." 
    },
    { 
      id: 2, 
      question: "Do you provide guidance on selecting the right tree?", 
      answer: "Yes! Our experts help you choose trees based on soil type, climate, available space, and your aesthetic or functional requirements." 
    },
    { 
      id: 3, 
      question: "Can you deliver and plant the trees?", 
      answer: "Absolutely. We offer delivery and professional planting services to ensure your trees are installed safely and thrive in their new environment." 
    },
    { 
      id: 4, 
      question: "Are the trees healthy and disease-free?", 
      answer: "Yes. All our trees are carefully grown, inspected for health, and treated for pests and diseases to guarantee strong growth and longevity." 
    },
    { 
      id: 5, 
      question: "Do you offer bulk sales for landscaping projects?", 
      answer: "Yes. We cater to large-scale landscaping projects, commercial developments, and nurseries, providing competitive pricing and delivery options." 
    },
  ];

  return (
    <div className="flex flex-col gap-0 mb-40">
      <Head>
        <title>Tree Sales Services in Kathmandu Nepal</title>
        <meta 
          name="description" 
          content="Professional tree sales services in Kathmandu Nepal, offering a wide variety of healthy trees, delivery, planting, and guidance for residential and commercial landscapes." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div className="relative w-full h-[560px] flex items-center justify-center text-white mb-20">
        <img
          src="/services/10.jpg"
          alt="Tree Sales Services in Nepal"
          className="absolute inset-0 z-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            <div className="mb-4 text-sm w-full flex justify-center items-center text-card">
              Home <ChevronRight width={20} height={20} />Services <ChevronRight width={20} height={20} />
              <span className="text-text ml-2 font-semibold">Tree Sales</span>
            </div>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-[52px]">
              Tree Sales Services in Nepal
            </h1>
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Buy healthy, vibrant trees for your garden, home, or commercial project with our expert tree sales and planting services.
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mx-auto px-5 py-10 max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Expert Tree Sales in Nepal
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Garden Sewa offers a wide variety of healthy trees for sale, including fruit, ornamental, flowering, and shade trees. We provide guidance on selection, delivery, and planting to ensure your trees thrive.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          All our trees are carefully grown, disease-free, and treated for pests to guarantee longevity and robust growth in your landscape.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          We cater to individual buyers, residential gardens, commercial projects, and bulk landscaping orders, providing customized solutions for every requirement.
        </p>

        <h2 className="text-3xl font-bold text-teal-800 mb-5">
          Related Services
        </h2>

        {/* Related Services Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 text-center">
          {[
            { img: "/services/14.jpg", title: "Tree Pruning & Removal Services", desc: "Professional pruning and removal to maintain tree health and safety." },
            { img: "/services/2.jpg", title: "Planting & Transplanting Services", desc: "Expert planting and relocation services for healthy tree establishment." },
            { img: "/services/13.jpg", title: "Tree Consultation Services", desc: "Guidance on tree selection, care, and landscape planning for optimal growth." },
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

export default TreeSales;