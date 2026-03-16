"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Head from "next/head";

const clients = [
  {
    image: "/image/project/project1.jpg",
    name: "Jorpati Project",
    text: "Built a Zen-style garden at a wellness retreat, incorporating smooth river stones, calming water features, and minimalistic greenery to create a peaceful space for relaxation and meditation.",
  },
  {
    image: "/image/project/project2.jpg",
    name: "Baneshwor Project",
    text: "Designed and planted a vibrant flower garden at a corporate office, combining seasonal blooms, creative color patterns, and low-maintenance greenery to provide a visually stunning and professional outdoor space.",
  },
  {
    image: "/image/project/project3.jpg",
    name: "Jawalakhel Project",
    text: "Maintained a lush green lawn at a residential villa, ensuring every blade of grass stayed healthy through regular mowing, precise watering schedules, and nutrient-rich fertilizing to keep it vibrant all year.",
  },
  {
    image: "/image/project/project4.jpg",
    name: "Sano Thimi Project",
    text: "Pruned and shaped decorative hedges at a luxury hotel, creating artistic patterns, removing overgrowth, and enhancing curb appeal to maintain a polished and inviting outdoor environment for guests.",
  },
  {
    image: "/image/project/project5.jpg",
    name: " Anamnagar Project",
    text: "Installed an automatic irrigation system for a farmhouse, using water-saving technology, adjustable timers, and strategic placement to optimize coverage while maintaining plant health in all weather conditions.",
  },
  {
    image: "/image/project/project6.jpg",
    name: "Budhanilkantha Project",
    text: "Restored a community park’s flower beds, removing old and faded plants, introducing fresh seasonal flowers, and enriching the soil to promote long-lasting, healthy blooms throughout the year.",
  },
  {
    image: "/image/project/project7.jpg",
    name: "Gathaghar Project",
    text: "Revitalized a backyard vegetable patch, enriching the soil with organic compost, planting fresh seedlings, and installing proper irrigation to ensure a consistent and healthy supply of homegrown produce.",
  },
  {
    image: "/image/project/project8.jpg",
    name: "Dhulikhel Project",
    text: "Renovated a school playground with safe, eco-friendly greenery, replacing worn-out turf, planting soft grass varieties, and adding shaded plant areas to create a healthy and child-friendly outdoor learning space.",
  },
  {
    image: "/image/project/project9.jpg",
    name: "Naikap Project",
    text: "Created a rooftop herb garden for an apartment, using vertical planters, organic soil blends, and smart sun positioning to maximize growth while keeping fresh herbs within easy reach for daily use.",
  },
  {
    image: "/image/project/project10.jpg",
    name: "Kamalpokhari Project",
    text: "Landscaped a beachfront garden with tropical plants, carefully selecting salt-tolerant species, adding decorative pathways, and incorporating shaded seating areas to create a relaxing coastal retreat.",
  },
  {
    image: "/image/project/project11.jpg",
    name: "Banepa Project",
    text: "Planted palm trees along a villa driveway, arranging them for symmetrical balance, adding decorative ground cover, and integrating lighting to highlight their beauty both day and night.",
  },
  {
    image: "/image/project/project12.jpg",
    name: "Naxal Project",
    text: "Added seasonal blooms to a shopping mall entrance, arranging vibrant floral displays, matching colors to brand themes, and ensuring a fresh, welcoming look for shoppers and visitors alike.",
  },
];

export default function ClientPage() {
  return (
    <main>
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
        <meta
          property="og:image"
          content="https://www.gardensewa.com/og/default.jpg"
        />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />
      </Head>
      <div
        className={`relative h-[360px] overflow-hidden flex items-center justify-center text-white mb-20`}
      >
        <img
          src="/image/project/projectImage.png"
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
              Our Projects
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
      {/* Cards */}
      <section className="px-4 lg:px-16 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white border-2 border-border rounded-3xl overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
              {/* Image section */}
              <div className="w-full h-[300px] relative">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: "ellipse(100% 85% at 50% 0%)",
                  }}
                />
              </div>

              {/* Content section */}
              <div className="px-6 py-5 flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {client.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*image bg */}
      <div className="mb-30 py-12">
        <div
          className={`relative w-full h-[360px] flex items-center justify-center text-white`}
        >
          <img
            src="/image/project/projectimage2.png"
            alt="A large green plant"
            height={400}
            width={400}
            className="absolute inset-0 z-0 object-cover h-90 w-full"
          />
          <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Want to grow with Gardensewa?
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Join our growing network of satisfied clients.
            </p>
            <Link href="book">
              <button className="buttonColorFill text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-4xl hover:bg-secondary transition">
                Become a client
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
