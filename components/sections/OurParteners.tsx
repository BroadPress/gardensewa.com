"use client";
import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    name: "Home Garden Restoration",
    description: "LANDSCAPE & HORTICULTURE - Bringing Future Home -",
    logo: "/home/partners/1.png",
    link: "https://homeparkgardens.co.uk/",
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
    <section className="flex flex-col gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 w-full max-w-[1300px] px-4 sm:px-6 lg:px-8 mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] text-secondary font-bold text-center leading-tight">
        Our Partners
      </h2>

      <div className="flex flex-wrap gap-6 justify-center items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white flex flex-col items-center gap-3 sm:gap-4 text-center w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] h-auto min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:h-[480px] rounded-2xl border-2 border-[#E8E8E8] p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[369px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[369px] flex-1 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="object-contain w-[300px] h-[300px] rounded-lg"
              />
            </div>

            {/* Partner name - hidden on very small screens to save space */}

            <Link
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-secondary py-2 sm:py-2.5 px-4 sm:px-6 rounded-md flex items-center justify-center text-secondary text-sm sm:text-base md:text-lg gap-1.5 hover:bg-secondary hover:text-white transition-all duration-300 w-full max-w-[200px] font-medium"
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
