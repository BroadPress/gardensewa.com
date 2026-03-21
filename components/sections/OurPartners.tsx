"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Home Garden Restoration",
    description: "LANDSCAPE & HORTICULTURE - Bringing Future Home -",
    logo: "/home/partners/1.png",
    link: "https://www.homegardenrestoration.co.uk/",
  },
  {
    name: "Home Park Gardens",
    description: "& Landscaping",
    logo: "/home/partners/2.png",
    link: "https://homeparkgardens.co.uk/",
  },
  {
    name: "Pristine Gardens",
    description: "hello",
    logo: "/home/partners/3.png",
    link: "https://pristinegardensllc.com/",
  },
];

export default function OurPartners() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
        Our Partners
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white border rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
          >
            {/* LOGO */}
            <div className="relative w-full h-40 sm:h-48 md:h-56 mb-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>

            {/* NAME */}
            <h3 className="text-base sm:text-lg font-semibold mb-1">
              {partner.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              {partner.description}
            </p>

            {/* BUTTON */}
            <Link
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto flex items-center gap-1 border px-4 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition"
            >
              Visit Site
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}