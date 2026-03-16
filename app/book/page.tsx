"use client";

import { ChevronRight } from "lucide-react";
import Head from "next/head";
import React, { useState } from "react";

interface FormData {
  email: string;
  phone: string;
  scheduledDate: string;
  province: string;
  city: string;
  ward: string;
  detailedAddress: string;
  price: string;
  customPrice: string;
  serviceType: string;
  notes: string;
  termsAccepted: boolean;
}

export default function App() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    phone: "",
    scheduledDate: "",
    province: "",
    city: "",
    ward: "",
    detailedAddress: "",
    price: "",
    customPrice: "",
    serviceType: "",
    notes: "",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const sectionTitleStyle =
    "text-[#0E3A0E] font-semibold text-lg pb-2 border-b border-gray-200 mb-6";
  const labelStyle = "text-sm font-medium text-gray-700 mb-1 block";
  const inputStyle =
    "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2E8B57]";
  const inputStyle1 =
    "w-full p-2 bg-[#F5F5F5] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2E8B57]";

  const RequiredMark = () => <span className="text-red-500">*</span>;

  return (
    <div className="mb-40">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/book-a-service.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      <Head>
        <meta
          name="keywords"
          content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"
        />
        <meta property="og:url" content="https://www.gardensewa.com/" />
        <meta property="og:title" content="Gardening Services in Nepal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!"
        />
        <meta property="og:image" content="/images/og/book-a-service.jpg" />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />
      </Head>
      <div className="flex flex-col items-center justify-center h-[209] px-4 py-12 text-center bg-[#F6F9F6]">
        <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
          <div className="mb-4 text-sm w-full">
            <span className="text-light flex items-center justify-center text-[#616161] text-base">
              Home <ChevronRight width={20} height={20} />
              <span className="text-primary ml-2 font-semibold">
                {" "}
                Book a Service{" "}
              </span>
            </span>
          </div>

          <h1 className="mb-4 text-3xl md:text-5xl font-bold text-primary md:text-[52px]">
            Book a Gardening Service
          </h1>
        </div>
      </div>

      <main className="min-h-screen bg-[#FFFFFF] p-4 flex justify-center items-start pt-10">
        <div className="bg-white p-8 rounded-lg w-full max-w-4xl">
          <form onSubmit={handleSubmit}>
            {/* Contact Information Section */}
            <section className="mb-8">
              <h2 className={sectionTitleStyle}>Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className={labelStyle}>
                    Email Address <RequiredMark />
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelStyle}>
                    Phone Number <RequiredMark />
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="scheduledDate" className={labelStyle}>
                    Scheduled Date <RequiredMark />
                  </label>
                  <input
                    type="date"
                    id="scheduledDate"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleChange}
                    className={inputStyle1}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Location Details Section */}
            <section className="mb-8">
              <h2 className={sectionTitleStyle}>Location Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label htmlFor="province" className={labelStyle}>
                    Province <RequiredMark />
                  </label>
                  <select
                    id="province"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className={inputStyle1}
                    required
                  >
                    <option value="">Select Province</option>
                    <option value="Koshi Province">Koshi Province</option>
                    <option value="Madhesh Province">Madhesh Province</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Lumbini Province">Lumbini Province</option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpaschim Province">
                      Sudurpaschim Province
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className={labelStyle}>
                    City <RequiredMark />
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={inputStyle1}
                    required
                  >
                    <option value="">Select City</option>
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Janakpur">Janakpur</option>
                    <option value="Biratnagar">Biratnagar</option>
                    <option value="Pokhara">Pokhara</option>
                    <option value="Birgunj">Birgunj</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="ward" className={labelStyle}>
                    Ward No <RequiredMark />
                  </label>
                  <input
                    type="text"
                    id="ward"
                    name="ward"
                    value={formData.ward}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="detailedAddress" className={labelStyle}>
                  Detailed Address
                </label>
                <input
                  type="text"
                  id="detailedAddress"
                  name="detailedAddress"
                  value={formData.detailedAddress}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>
            </section>

            {/* Service Details Section */}
            <section className="mb-8">
              <h2 className={sectionTitleStyle}>Service Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="price" className={labelStyle}>
                    Price <RequiredMark />
                  </label>
                  <select
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className={inputStyle1}
                    required
                  >
                    <option value="">Select Price</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="2000-5000">2000-5000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="customPrice" className={labelStyle}>
                    Custom Price
                  </label>
                  <input
                    type="text"
                    id="customPrice"
                    name="customPrice"
                    value={formData.customPrice}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="serviceType" className={labelStyle}>
                  Service Type <RequiredMark />
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={inputStyle1}
                  required
                >
                  <option value="">Select Service Type</option>
                  <option value="Gardening Service">Gardening Service</option>
                  <option value="Lawn Care">Lawn Care</option>
                  <option value="Seasonal Service">Seasonal Service</option>
                  <option value="Turfing Service">Turfing Service</option>
                  <option value="Landscaping Services">
                    Landscaping Services
                  </option>
                </select>
              </div>
            </section>

            {/* Additional Details Section */}
            <section className="mb-8">
              <h2 className={sectionTitleStyle}>Additional Details</h2>
              <div>
                <label htmlFor="notes" className={labelStyle}>
                  Notes or Special Requests
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className={inputStyle}
                  placeholder="Mention tools required, preferred gardener, plant types, etc."
                />
              </div>
            </section>

            {/* Footer and Submit Button */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <div className="flex items-start mb-4 md:mb-0">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1 accent-primary"
                />

                <label
                  htmlFor="termsAccepted"
                  className="ml-2 text-xs text-gray-500"
                >
                  Your details are kept confidential. We use your information
                  only to coordinate your gardening service.
                </label>
              </div>
              <button
                type="submit"
                className="flex items-center space-x-2 bg-primary text-white py-2 px-6 rounded-md font-semibold hover:bg-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
