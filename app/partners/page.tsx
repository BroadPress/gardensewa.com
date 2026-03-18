"use client";

import Head from "next/head";
import Link from "next/link";

const partners = [
  {
    name: "Home Garden Restoration",
    description:
      "Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.",
    logo: "/partners/1.png",
    link: "https://www.homegardenrestoration.co.uk/",
  },
  {
    name: "Home Park Gardens",
    description:
      "Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.",
    logo: "/partners/2.png",
    link: "https://homeparkgardens.co.uk/",
  },
  {
    name: "Pristine Gardens",
    description:
      "Home Garden Restoration’s expertise in reviving and transforming outdoor spaces has made them a valuable extension of the GardenSewa mission. Their dedication to quality restoration has brought life and charm back to many residential and commercial gardens.",
    logo: "/partners/3.png",
    link: "https://pristinegardensllc.com/",
  },
    
  
];
export default function App() {
  return (
    <div className="flex flex-col gap-30">
      <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center bg-card-stroke-light">
        {/* Breadcrumb navigation */}
        <div className="mb-4 text-sm w-full">
          <span className="text-light">
            Home &gt;
            <span className="text-primary ml-2">Our Partners</span>
          </span>

          <h2 className="text-5xl font-bold text-center text-primary m-4 mt-4">
            Our Partners
          </h2>
        </div>

        {/* Section title */}
        <p className="max-w-3xl mx-auto mt-4 text-dark px-4 text-light-body">
          At Garden Sewa, we partner with like-minded individuals and
          organizations to make green living simple and accessible. Together, we
          bring plants, people, and peace closer than ever
        </p>
      </div>
      <section className="mb-30 p-4 flex">
        <div className="flex flex-wrap gap-8 mx-auto items-center justify-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-lg w-auto sm:w-[417px] p-6 flex flex-col items-center justify-between text-center border-2 border-[#0D5D59]"
              style={{ minHeight: "100px" }}
            >
              <div className="flex-grow flex items-center justify-center">
                <div className="relative w-38 h-38">
                  {" "}
                  {/* Adjust size as needed */}
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    height={128}
                    width={192}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <p className="mb-6 text-left p-2">{partner.description}</p>
              <Link href={partner.link} passHref>
                <button className="buttonColorFill mt-auto px-6 py-3 font-semibold text-white rounded-xl hover:bg-secondary transition-colors duration-200 text-sm">
                  Visit Site
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
