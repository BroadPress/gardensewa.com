"use client";

import { useState } from "react";
import Head from "next/head";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Wrench,
  Sprout,
  Package,
  PhoneIncoming,
} from "lucide-react";

// Services FAQ (existing)
const faqData = [
  {
    id: "faq-1",
    question: "What kind of services do you provide ?",
    answer:
      "We provide a comprehensive range of gardening and landscaping services, including lawn care, plant maintenance, garden design, and pest control.",
  },
  {
    id: "faq-2",
    question: "How can I book a Garden Service ?",
    answer:
      "Booking is easy via our website or by calling support.",
  },
  {
    id: "faq-3",
    question: "Do I need to prepare anything before the gardener arrives ?",
    answer:
      "Please clear obstacles and inform us of any special instructions.",
  },
  {
    id: "faq-4",
    question: "Can I cancel or reschedule a booking ?",
    answer:
      "Yes, at least 24 hours in advance.",
  },
  {
    id: "faq-5",
    question: "Are your gardeners trained and verified ?",
    answer:
      "Yes, all professionals are trained and verified.",
  },
];

// Plants FAQ
const plantsFAQ = [
  {
    id: "plants-1",
    question: "What plants do you offer?",
    answer: "Indoor, outdoor, flowering, and seasonal plants.",
  },
  {
    id: "plants-2",
    question: "Are plants healthy?",
    answer: "Yes, all plants are quality checked.",
  },
  {
    id: "plants-3",
    question: "Do you give care tips?",
    answer: "Yes, basic care instructions are provided.",
  },
  {
    id: "plants-4",
    question: "Bulk orders available?",
    answer: "Yes, for homes, offices, and events.",
  },
  {
    id: "plants-5",
    question: "Rare plants available?",
    answer: "Occasionally, depending on stock.",
  },
];

// Delivery FAQ
const deliveryFAQ = [
  {
    id: "delivery-1",
    question: "Where do you deliver?",
    answer: "Major cities and expanding areas.",
  },
  {
    id: "delivery-2",
    question: "Delivery time?",
    answer: "Usually 1–3 days.",
  },
  {
    id: "delivery-3",
    question: "Delivery charges?",
    answer: "Depends on location and order.",
  },
  {
    id: "delivery-4",
    question: "Packaging method?",
    answer: "Secure packaging for plant safety.",
  },
  {
    id: "delivery-5",
    question: "Scheduled delivery?",
    answer: "Yes, on request.",
  },
];

// Support FAQ
const supportFAQ = [
  {
    id: "support-1",
    question: "How to contact support?",
    answer: "Via phone, email, or website.",
  },
  {
    id: "support-2",
    question: "Support hours?",
    answer: "9 AM – 6 PM.",
  },
  {
    id: "support-3",
    question: "After-service support?",
    answer: "Yes, we provide ongoing help.",
  },
  {
    id: "support-4",
    question: "Not satisfied?",
    answer: "We resolve issues quickly.",
  },
  {
    id: "support-5",
    question: "Expert advice?",
    answer: "Yes, before booking.",
  },
];

// Navigation
const navigationItems = [
  { id: 1, label: "Services", icon: Wrench, color: "bg-primary hover:bg-secondary" },
  { id: 2, label: "Plants", icon: Sprout, color: "bg-primary hover:bg-secondary" },
  { id: 3, label: "Delivery", icon: Package, color: "bg-primary hover:bg-secondary" },
  { id: 4, label: "Support", icon: PhoneIncoming, color: "bg-primary hover:bg-secondary" },
];

const FAQPage = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(1);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Switch FAQs
  const getActiveFAQ = () => {
    if (activeTab === 1) return faqData;
    if (activeTab === 2) return plantsFAQ;
    if (activeTab === 3) return deliveryFAQ;
    if (activeTab === 4) return supportFAQ;
    return faqData;
  };

  return (
    <>
      <Head>
        <title>FAQ's</title>
      </Head>

      {/* Header */}
      <div className="text-center mb-12 bg-card-stroke-light p-12">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; <span className="ml-2 text-primary"> FAQ's</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Frequently Asked Questions (FAQ's)
        </h1>
      </div>

      <main className="container mx-auto px-4 py-12 pb-32">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mb-12">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setOpenFAQ(null);
                }}
                className={`flex flex-col px-16 py-8 items-center justify-center rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                  activeTab === item.id
                    ? "bg-secondary text-white"
                    : `${item.color} text-white`
                }`}
              >
                <Icon size={28} />
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {getActiveFAQ().map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div
                className="flex items-center justify-between p-5 cursor-pointer bg-card hover:bg-green-100 transition"
                onClick={() => toggleFAQ(item.id)}
              >
                <span className="font-semibold text-lg text-primary">
                  {item.question}
                </span>
                {openFAQ === item.id ? (
                  <ChevronUpIcon className="h-6 w-6 text-primary" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-primary" />
                )}
              </div>

              {openFAQ === item.id && (
                <div className="p-5 border-t border-green-200">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FAQPage;