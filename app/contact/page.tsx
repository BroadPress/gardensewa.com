// pages/contact.tsx
import React from "react";
import Head from "next/head";
import { User, Mail, Phone, ArrowRight, Globe, MapPin } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface Expert {
  name: string;
  role: string;
  imageUrl: string;
}

const experts: Expert[] = [
  {
    name: "Shambhu Thapa",
    role: "Project Manager",
    imageUrl: "/contact/1.png",
  },
  {
    name: "Dinesh Poudel",
    role: "Business Developer",
    imageUrl: "/contact/2.png",
  },
  {
    name: "Mantesh Dubey",
    role: "Information Officer",
    imageUrl: "/contact/3.png",
  },
];

const ContactPage = () => {
  return (
    <>
     <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/contact.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      <div className="bg-white min-h-screen flex flex-col items-center justify-center w-full gap-30 mb-30">
        {/* Header Section */}
        <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] flex items-center justify-center text-white mb-8 sm:mb-12 lg:mb-20">
          <img
            src="/contact/contactbg.jpg"
            alt="A large green plant"
            className="absolute inset-0 z-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center h-full py-8">
              {/* Breadcrumb navigation */}
              <div className="mb-4 text-sm w-full">
                <span className="text-light flex items-center justify-center text-[#616161] text-sm sm:text-base">
                  Home{" "}
                  <ChevronRight
                    width={16}
                    height={16}
                    className="sm:w-5 sm:h-5"
                  />
                  <span className="text-primary ml-2 font-semibold">
                    Contact Us
                  </span>
                </span>
              </div>

              {/* Section title */}
              <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Contact Us
              </h1>

              {/* Section description */}
              <p className="max-w-[858px] mb-8 text-sm sm:text-base lg:text-lg leading-relaxed text-white px-2">
                We're here to help your garden grow smoothly. Whether you have
                questions, feedback, or want to partner with us, feel free to
                reach out.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-white gap-8 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-6 lg:mb-8">
                Contact Information
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 lg:mb-12">
                If you have any questions or need further assistance, please
                feel free to reach out to us. We are committed to providing you
                with the best service and support. Your satisfaction is our
                priority.
              </p>

              <div className="space-y-6 lg:space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Email
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg break-all">
                      gardensewa@sriyog.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                    <a href="tel:+9779852025735" className="hover:underline">
                      +977-9852025735
                    </a>
                  </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                    <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Website Link
                    </h3>
                    <a
                      href="https://gardensewa.com"
                      className="text-body hover:underline text-base sm:text-lg break-all"
                    >
                      https://gardensewa.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 sm:p-4 mr-4 sm:mr-6 flex-shrink-0">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg">
                      Kamalpokhari, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full lg:w-1/2 flex justify-center items-start">
              <div className="rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 w-full border border-card-stroke-light">
                <div className="space-y-4 lg:space-y-3">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-base sm:text-lg font-semibold text-body mb-2 lg:mb-3"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-body" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name..."
                        className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-base sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base sm:text-lg font-semibold text-body mb-2 lg:mb-3"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-body" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email address..."
                        className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-base sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-base sm:text-lg font-semibold text-body mb-2 lg:mb-3"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-body" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number..."
                        className="w-full h-12 sm:h-14 pl-10 sm:pl-12 pr-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors text-base sm:text-lg"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-base sm:text-lg font-semibold text-body mb-2 lg:mb-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-[#2F4F2F] rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-colors resize-none text-base sm:text-lg"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-4">
                    <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 buttonColorFill text-white font-semibold rounded-full transition-colors duration-200 flex items-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl text-base sm:text-lg">
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Location & Experts Section */}
        <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-16 sm:gap-24 lg:gap-40">
          {/* Our Location */}
          <section className="container mx-auto px-0 sm:px-8 max-w-7xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-secondary mb-6 sm:mb-8">
              Our Location
            </h2>
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.197557059727!2d85.32069221171379!3d27.711185976081037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e024ab677d%3A0x8079366964ad9d06!2sGarden%20Sewa!5e0!3m2!1sen!2snp!4v1773803300645!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-2xl"
              ></iframe>
            </div>
          </section>

          {/* Our Experts */}
          <section className="container mx-auto max-w-7xl px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-secondary mb-6 sm:mb-8">
              Our Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center px-4 sm:px-6 py-6 sm:py-8 lg:py-12 bg-white "
                >
                  <img
                    src={expert.imageUrl}
                    alt={expert.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full object-cover mb-4"
                  />
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-dark bg-green-50 rounded-lg p-2 font-medium mb-2 sm:mb-4">
                      {expert.role}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-dark">
                      {expert.name}
                    </p>
                  </div>
                  <a
                href="https://d.sriyog.com/gSewa" 
                target="_blank" 
                rel="noopener"
              >
                <button className="border rounded px-4 py-2 border-primary text-primary mt-4 hover:bg-primary hover:text-white cursor-pointer transition-colors duration-300">
                  WhatsApp
                </button>
              </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
