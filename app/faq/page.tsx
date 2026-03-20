"use client";

import { useState } from "react";
import Head from "next/head";
import { ChevronDownIcon, ChevronUpIcon, Wrench, Sprout, Package, PhoneIncoming } from "lucide-react";

const faqData = [
  {
    id: "faq-1",
    question: "What types of gardening and landscaping services do you provide?",
    answer: "We offer a full range of professional gardening and landscaping services including lawn maintenance, plant care, garden design, tree pruning, and pest control. Our team ensures your garden remains healthy and aesthetically pleasing all year round.",
  },
  {
    id: "faq-2",
    question: "How can I book a gardening service?",
    answer: "You can easily book a gardening service either through our website by filling out the booking form, or by contacting our support team via phone or email for personalized assistance.",
  },
  {
    id: "faq-3",
    question: "Do I need to prepare anything before the gardener arrives?",
    answer: "Please ensure that any obstacles are cleared and provide any specific instructions, such as sensitive plants or areas to avoid. This helps our team work efficiently and safely.",
  },
  {
    id: "faq-4",
    question: "Can I cancel or reschedule my booking?",
    answer: "Yes, you can cancel or reschedule your appointment as long as you inform us at least 24 hours in advance. This allows us to adjust our schedule and accommodate other clients.",
  },
  {
    id: "faq-5",
    question: "Are your gardeners trained and verified?",
    answer: "Absolutely. All our gardening professionals are fully trained, background-verified, and experienced in providing high-quality services.",
  },
];

const plantsFAQ = [
  {
    id: "plants-1",
    question: "What types of plants do you offer?",
    answer: "We offer a wide variety of indoor, outdoor, flowering, and seasonal plants suitable for homes, offices, and outdoor gardens.",
  },
  {
    id: "plants-2",
    question: "Are your plants healthy and well-maintained?",
    answer: "Yes, all our plants are carefully grown, quality-checked, and delivered in healthy condition to ensure longevity.",
  },
  {
    id: "plants-3",
    question: "Do you provide care instructions for the plants?",
    answer: "Yes, each plant comes with basic care instructions, including watering, sunlight, and fertilization tips to help you maintain it properly.",
  },
  {
    id: "plants-4",
    question: "Can I place a bulk order of plants?",
    answer: "Yes, bulk orders are available for homes, offices, events, or landscaping projects. Please contact our support for a customized quote.",
  },
  {
    id: "plants-5",
    question: "Do you offer rare or exotic plants?",
    answer: "Occasionally, we offer rare or exotic plants depending on seasonal availability. Contact us to inquire about current stock.",
  },
];

const deliveryFAQ = [
  {
    id: "delivery-1",
    question: "Which locations do you deliver to?",
    answer: "We currently deliver to major cities and surrounding areas, with plans to expand to more regions. Shipping availability depends on your location.",
  },
  {
    id: "delivery-2",
    question: "What is the usual delivery time?",
    answer: "Most orders are delivered within 1–3 business days. Scheduled delivery options are available for special requests.",
  },
  {
    id: "delivery-3",
    question: "Are there delivery charges?",
    answer: "Delivery charges depend on the order size and your location. Charges are calculated during checkout for transparency.",
  },
  {
    id: "delivery-4",
    question: "How are the plants packaged for delivery?",
    answer: "Plants are securely packaged with protective materials to prevent damage during transit. Our packaging ensures safe arrival in excellent condition.",
  },
  {
    id: "delivery-5",
    question: "Can I schedule a specific delivery date?",
    answer: "Yes, scheduled delivery is available upon request. You can specify a convenient date and time during booking.",
  },
];

const supportFAQ = [
  {
    id: "support-1",
    question: "How can I contact customer support?",
    answer: "You can reach our support team via phone, email, or through our website’s contact form. We strive to respond promptly.",
  },
  {
    id: "support-2",
    question: "What are your support hours?",
    answer: "Our support team is available from 9 AM to 6 PM, Monday through Saturday.",
  },
  {
    id: "support-3",
    question: "Do you provide support after the service is completed?",
    answer: "Yes, we provide ongoing assistance for any questions or concerns after our service has been delivered.",
  },
  {
    id: "support-4",
    question: "What if I am not satisfied with the service?",
    answer: "If you are not completely satisfied, we take immediate action to resolve any issues to ensure your satisfaction.",
  },
  {
    id: "support-5",
    question: "Can I get expert advice before booking?",
    answer: "Yes, our team of experts is available to provide guidance and recommendations before you book any service or purchase.",
  },
];

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

      <div className="text-center mb-12 bg-card-stroke-light p-12">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; <span className="ml-2 text-primary">FAQ's</span>
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
                  activeTab === item.id ? "bg-secondary text-white" : `${item.color} text-white`
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
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
              <div
                className="flex items-center justify-between p-5 cursor-pointer bg-card hover:bg-green-100 transition"
                onClick={() => toggleFAQ(item.id)}
              >
                <span className="font-semibold text-lg text-primary">{item.question}</span>
                {openFAQ === item.id ? (
                  <ChevronUpIcon className="h-6 w-6 text-primary transition-transform duration-300" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6 text-primary transition-transform duration-300" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openFAQ === item.id ? "max-h-96 p-5 border-t border-green-200" : "max-h-0 p-0 border-0"
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FAQPage;