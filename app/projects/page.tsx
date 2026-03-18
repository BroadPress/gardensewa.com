"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import Head from "next/head";

const clients = [
  { image: "/projects/1.jpg", name: "Solatee Westend", text: "Designed and maintained luxury hotel gardens with elegant landscaping, water features, and premium greenery to enhance guest experience." },
  { image: "/projects/2.jpg", name: "Bajeko Sekuwa", text: "Developed stylish outdoor dining greenery with decorative plants and low-maintenance landscaping for a vibrant restaurant ambiance." },
  { image: "/projects/3.jpg", name: "Sudarshan Resort", text: "Maintained resort landscapes with lush lawns, seasonal plants, and relaxing green spaces for a premium hospitality experience." },
  { image: "/projects/4.jpg", name: "Pokhara Airport", text: "Enhanced airport surroundings with structured landscaping, greenery zones, and clean, welcoming outdoor environments." },
  { image: "/projects/5.jpg", name: "Gokarna Forest Resort", text: "Preserved natural forest resort beauty with eco-friendly landscaping and sustainable garden maintenance practices." },
  { image: "/projects/6.jpg", name: "Ncell", text: "Upgraded corporate office spaces with modern landscaping, decorative plants, and low-maintenance green environments." },
  { image: "/projects/7.jpg", name: "Dusit Thani Himalaya Resort", text: "Created premium resort landscapes with luxury garden design, water features, and curated greenery." },
  { image: "/projects/8.jpg", name: "Club Himalaya", text: "Maintained hilltop resort greenery with scenic landscaping and climate-friendly plantation systems." },
  { image: "/projects/9.jpg", name: "Hotel Bhadgaon", text: "Enhanced boutique hotel ambiance with traditional garden designs and heritage-style landscaping." },
  { image: "/projects/10.jpg", name: "Kavya Himalayas", text: "Developed eco-luxury retreat landscapes with natural elements, organic plants, and peaceful green zones." },
  { image: "/projects/11.jpg", name: "Mercure Kathmandu", text: "Designed contemporary hotel landscaping with structured lawns, decorative plants, and modern outdoor aesthetics." },
  { image: "/projects/12.jpg", name: "Kathmandu Guest House", text: "Maintained iconic hotel gardens with vibrant flowers and relaxing green courtyards for guests." },
  { image: "/projects/13.jpg", name: "Sankha Park", text: "Upgraded public park greenery with organized plantations, walking paths, and recreational landscaping." },
  { image: "/projects/14.jpg", name: "Hotel Aikawa, Sauraha", text: "Developed resort garden spaces with tropical plants and wildlife-friendly landscaping in a tourism hub." },
  { image: "/projects/15.jpg", name: "The British School", text: "Created safe and green educational environments with playground lawns and student-friendly landscaping." },
  { image: "/projects/16.jpg", name: "Ramesh Corp", text: "Designed corporate green zones with professional landscaping to enhance office aesthetics and productivity." },
  { image: "/projects/17.jpg", name: "Nabil Bank", text: "Improved banking premises with clean, modern greenery and low-maintenance landscape design." },
  { image: "/projects/18.jpg", name: "Budhanilkantha School", text: "Maintained large school campuses with healthy lawns, shaded areas, and structured plantation systems." },
  { image: "/projects/19.jpg", name: "Shankhamul Park", text: "Revitalized urban park spaces with sustainable landscaping and community-friendly greenery." },
  { image: "/projects/20.jpg", name: "Ullens School", text: "Developed eco-friendly school landscapes with innovative green spaces for learning and recreation." },
  { image: "/projects/21.jpg", name: "Alice Receptions", text: "Designed elegant banquet gardens with decorative plants and floral arrangements for events." },
  { image: "/projects/22.jpg", name: "Grande International Hospital", text: "Created healing garden environments with calming greenery for patient wellness and recovery." },
  { image: "/projects/23.jpg", name: "Silver Oak Banquet", text: "Enhanced banquet venues with premium landscaping and decorative outdoor event spaces." },
  { image: "/projects/24.jpg", name: "The British College", text: "Upgraded college campuses with modern landscaping and structured green areas." },
  { image: "/projects/25.jpg", name: "Rani Mahal Banquet", text: "Developed luxury event garden spaces with premium lawns and floral setups." },
  { image: "/projects/26.jpg", name: "Nepal Mediciti Hospital", text: "Built peaceful hospital landscapes focused on patient comfort and green healing environments." },
  { image: "/projects/27.jpg", name: "Frontline Hospital", text: "Maintained clean and green hospital surroundings with organized landscaping." },
  { image: "/projects/28.jpg", name: "Waterfront Resort", text: "Designed scenic waterfront resort landscapes with relaxing greenery and natural elements." },
  { image: "/projects/29.jpg", name: "Rupy’s International School", text: "Created child-friendly green campuses with safe lawns and educational outdoor spaces." },
  { image: "/projects/30.jpg", name: "Norvic Hospital", text: "Enhanced hospital gardens with structured greenery for a clean and calming environment." },
  { image: "/projects/31.jpg", name: "Fortune Resort", text: "Developed resort landscapes with premium greenery and luxury outdoor aesthetics." },
  { image: "/projects/32.jpg", name: "Kathmandu Dhumbarahi", text: "Maintained international hotel landscaping with elegant lawns and decorative outdoor designs." },
  { image: "/projects/33.jpg", name: "Tribhuwan Park", text: "Developed public recreational parks with organized greenery and visitor-friendly landscaping." },
  { image: "/projects/34.jpg", name: "Basundhara Park", text: "Upgraded urban park spaces with improved plantation and green infrastructure." },
  { image: "/projects/35.jpg", name: "Garden of Dreams", text: "Maintained heritage garden spaces with artistic landscaping and historical preservation." },
  { image: "/projects/36.jpg", name: "Rem.Work", text: "Nepal's Top Co-working space indoor gardening services were managed to provide a serene and productive environment." },
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
          src="/projects/pgbg.jpg"
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
              Garden Development Projects
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
            src="/projects/footer-bg.jpg"
            alt="A large green plant"
            height={400}
            width={400}
            className="absolute inset-0 z-0 object-cover h-90 w-full"
          />
          <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

          <div className="relative z-10 max-w-4xl text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Want to grow with Gardensewa?
            </h2>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
              Join our growing network of satisfied clients.
            </p>
            <Link href="book">
              <button className="cursor-pointer buttonColorFill text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-4xl hover:bg-secondary transition">
                Book a Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
