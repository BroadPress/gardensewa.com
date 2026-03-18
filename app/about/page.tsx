"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Head from "next/head";
import Roadblock from "@/components/Roadblock";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

// A reusable card component to keep the code clean
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="flex flex-col items-center p-8  m-2 rounded-2xl border border-border bg-white">
    {/* Icon Container */}
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-card text-green-700 overflow-hidden">
      <img src={icon} alt={title} width={40} height={40} />
    </div>
    {/* Card Title */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    {/* Card Description */}
    <p className="text-center text-gray-500 leading-relaxed">{description}</p>
  </div>
);

// Define the data for the cards
const features = [
  {
    title: "Mission",
    description:
      "Our mission is to provide high-quality plants, gardening resources, and expert support to every corner of Nepal.",
    icon: "/about/mission.png",
  },
  {
    title: "Motive",
    description:
      "We aim to be the go-to place for all gardening needs, offering easy access to plants and expert advice for every gardener and farmer.",
    icon: "/about/motive.png",
  },
  {
    title: "Vision",
    description:
      "Our vision is to cultivate a greener Nepal by promoting responsible gardening practices and reconnecting people with nature.",
    icon: "/about/vision.png",
  },
];
export default function AboutPage() {
  return (
    <main className="flex flex-col gap-30">
    <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/about.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      <div className="h-full bg-[#F4FFFE]">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-4 text-sm w-full">
            <span className="text-light flex items-center justify-center text-[#616161] text-base">
              Home <ChevronRight width={20} height={20} />
              <span className="text-primary ml-2 font-semibold"> About Us</span>
            </span>
          </div>

          {/* Section title */}
          <h1 className="mb-4 text-5xl font-bold text-text md:text- [52px]">
            About Us
          </h1>

          {/* Section description */}
          <p className="max-w-[858px] mb-8 text-base leading-relaxed md:text-lg text-[#333333]">
            We believe every home and workspace deserves a beautiful green space. Garden Sewa provides professional gardening services in Nepal. Our mission is to bring plants, people, and nature together by creating healthy, well-maintained gardens that add beauty, relaxation, and sustainability to everyday life.

          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="px-2 md:px-5 lg:px-8 py-8 md:py-16 lg:py-12 flex items-center justify-center w-full ">
        <div className="flex flex-col lg:flex-row overflow-hidden justify-center">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col justify-between p-6 md:p-10 lg:p-12 bg-white">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
                Best Garden Maintenance  <br /> Services in Nepal
              </h1>
              <p className="text-[#444444] text-base md:text-lg leading-relaxed mb-10">
                Every project we've worked on has been a shared journey — from
                planting ideas to watching them bloom. Together with our
                customers, we've grown not just gardens, but meaningful
                relationships rooted in care, trust, and a love for greenery.
                Whether it's a small balcony plant or a full backyard
                transformation, we're here to make every space greener, one
                plant at a time.
              </p>
            </div>

            {/* Stats Section */}
            <div className="relative ">
              <div className="bg-card w-[125%] -ml-4 rounded-xl p-4 md:p-5 grid grid-cols-3 text-start gap-x-10 z-10 skew-x-6">
                <div className="-skew-x-6">
                  <p className="text-3xl md:text-[52px] font-bold text-primary">
                    25+
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Years of Experience
                  </p>
                </div>
                <div className="-skew-x-6">
                  <p className="text-3xl md:text-[52px] font-bold text-primary">
                    150+
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Garden Transformed
                  </p>
                </div>
                <div className="-skew-x-6">
                  <p className="text-3xl md:text-[52px] font-bold text-primary">
                    175 +
                  </p>
                  <p className="text-black text-sm md:text-base">
                    Successful Projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Image
              src="/about/1.jpg"
              alt="Two potted plants on a wooden table"
              height={600}
              width={600}
              className="object-cover w-[600px] h-[480px] rounded-2xl lg:mt-8"
            />
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="py-4 px-4 sm:px-6 lg:px-16">
        {/* Section Title */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-secondary tracking-tight leading-tight">
            Making Garden of Dreams
          </h2>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-extrabold text-secondary tracking-tight leading-tight">
            Our Mission
          </h2>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-full">
          <div
            className="relative w-full max-w-full mx-0 overflow-hidden py-12"
            style={{
              backgroundImage: "url(/about/bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 opacity-60 bg-black/50"></div>

            <div
              className="relative z-10 flex flex-col items-center justify-center
                       p-8 md:p-16 text-white text-center"
            >
              <h1 className="text-xl md:text-2xl text-[#A8E6E2] mb-2 font-bold leading-tight">
                To reconnect people with nature
              </h1>
              <h1 className="text-3xl md:text-6xl text-[#DDFFDA] font-bold mb-6 leading-tight max-w-[1048px]">
                one plant, one garden, one moment at a time.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Roadblock */}
      <Roadblock />

      {/* Call to Action Section */}
      <main className="flex items-center justify-center bg-green-50 mb-40">
        <div className="flex w-full max-w-7xl flex-col items-center px-10 md:flex-row md:items-stretch">
          {/* Left Section */}
          <div className="flex flex-1 flex-col py-10 justify-center text-center md:text-left">
            <h1 className=" text-4xl font-bold text-secondary md:text-5xl mb-8">
              Got Plants to <br className="hidden md:block" /> Share?
            </h1>
            <p className="mb-6 text-sm text-gray-600 md:text-base">
              Turn your homegrown plants into something more. Join{" "}
              <br className="hidden md:block" />
              GardenSewa and sell your greens to plant lovers across{" "}
              <br className="hidden md:block" />
              Nepal!
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="/partnership"
                className="rounded-full px-6 py-3 font-semibold text-white transition duration-300 ease-in-out buttonColorFill"
              >
                Become a Partner
              </a>
            </div>
          </div>

          {/* Right Section - Images */}
          <div className="mt-8 flex flex-1 flex-col items-end gap-10 md:mt-0 md:flex-row md:items-stretch ">
            {/* Left Image - Cactus */}
            <div className="relative h-64 w-full overflow-hidden rounded-b-none rounded-xl md:h-auto md:w-1/2 mt-20">
              <img
                src="/about/2.jpg"
                alt="Cactus growing by the sea"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Right Image - Potted Plants */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-none rounded-xl md:h-auto md:w-1/2">
              <img
                src="/about/3.jpg"
                alt="Two plants in wooden vases"
                className="h-64 w-full object-cover rounded-b-xl"
              />
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}
