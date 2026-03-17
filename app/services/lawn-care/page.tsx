// pages/index.js or components/LawnCareService.js
import React from "react";
import Head from "next/head";
import { ChevronRight } from "lucide-react";

const LawnCareService = () => {
  const services = [
    { id: 1, title: "Mowing the Lawn", icon: "/services/icons/lawn-care/lawn-mowing.png" },
    { id: 2, title: "Edge trimming", icon: "/services/icons/lawn-care/edge-trimming.png" },
    { id: 3, title: "Aerating soil", icon: "/services/icons/lawn-care/aerating-soil.png" },
    {
      id: 4,
      title: "Fertilization and soil conditioning",
      icon: "/services/icons/lawn-care/fertillization-soil-conditioning.png",
    },
    { id: 5, title: "Lawn reseeding", icon: "/services/icons/lawn-care/lawn-reseeding.png" },
    { id: 6, title: "Weeding", icon: "/services/icons/lawn-care/weeding.png" },
  ];

  const faqs = [
    { id: 1, question: "How to book a free lawn inspection ?" },
    { id: 2, question: "How do experts assess my lawns ?" },
    { id: 3, question: "How do you make visits for lawn treatments. ?" },
  ];

  return (
    <div className="flex flex-col gap-20 mb-40">
      {" "}
      <Head>
        <title>Lawn Care Service in Nepal</title>
        <meta
          name="description"
          content="Professional lawn care services in Nepal"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <meta
          property="og:image"
          content="https://www.gardensewa.com/og/default.jpg"
        />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />
      </Head>
      <div
        className={`relative w-full h-[360px] flex items-center justify-center text-white mb-20`}
      >
        <img
          src="/services/1.jpg"
          alt="A large green plant"
          height={400}
          width={400}
          className="absolute inset-0 z-0 object-cover h-90 w-full"
        />
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        <div className="relative z-10 max-w-4xl text-center px-4">
          <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
            {/* Breadcrumb navigation */}
            <div className="mb-4 text-sm w-full">
              <span className="text-light flex items-center justify-center text-card text-base">
                Home <ChevronRight width={20} height={20} />
                <span className="text-text ml-2 font-semibold">Projects</span>
              </span>
            </div>

            {/* Section title */}
            <h1 className="mb-4 text-5xl font-bold text-white md:text- [52px]">
              Lawn Care Services in Kathmandu, Nepal
            </h1>

            {/* Section description */}
            <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-white">
              Showcasing our finest gardening and landscaping works — from home
              gardens to corporate spaces, each project is a step towards
              greener living.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen ">
        <div className="mx-auto px-5 py-10 ">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-teal-800 mb-5">
              Lawn Care Service in Nepal
            </h1>
            <p className="text-base text-gray-600 leading-relaxed max-w-4xl mx-auto text-justify">
              At Garden Sewa, we provide professional lawn care services
              designed to keep your green spaces healthy, vibrant, and beautiful
              all year round. Whether it's a residential garden, a hotel
              courtyard, an office lawn, or a public park, we understand that
              maintaining a perfect lawn in Nepal's climate requires more than
              just occasional mowing. Our services include everything from soil
              preparation and grass planting to regular mowing, edging,
              fertilizing, and weed control. We also install efficient
              irrigation systems to ensure your lawn stays fresh even during the
              dry season, and we provide seasonal care to protect it from heavy
              monsoon rains and winter dryness. Using eco-friendly methods and
              skilled techniques, we help your lawn not only look great but also
              thrive in the long run. With Garden Sewa, you can enjoy a lush,
              green, and inviting outdoor space without the hassle—leaving all
              the hard work to us.
            </p>
          </div>

          {/* Services Section */}
          <div className="my-20 flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
              Why Lawn Care Services is the Best Choice for You ?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 w-5xl items-center justify-center">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-border rounded-lg p-8 text-center h-[225px] flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-[90px] h-[90px] bg-teal-800 rounded-full flex items-center justify-center text-white">
                    <img src={service.icon} className="h-90px] w-[90px]" />
                  </div>
                  <h3 className="text-base font-bold text-teal-800 mt-3">
                    {service.id === 4 ? (
                      <>
                        Fertilization and soil
                        <br />
                        conditioning
                      </>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 flex flex-col items-center justify-center ">
            <h2 className="text-center text-3xl font-bold text-teal-800 mb-10">
              FAQ's related to Lawn Care Service
            </h2>

            <div className="space-y-3 w-full max-w-4xl">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-card border border-gray-200 rounded-lg overflow-hidden w-full"
                >
                  <button className="w-full px-5 py-5 text-left text-sm text-primary  font-bold hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center">
                    <span>
                      {faq.id}. {faq.question}
                    </span>
                    <span className="text-lg text-gray-500">⌄</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawnCareService;
