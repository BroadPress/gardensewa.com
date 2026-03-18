"use client";
import Homepage from "@/components/Homepage";
import Roadblock from "@/components/Roadblock";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/home.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
          {/* Roadblock */}
          <Roadblock />
    <section className="mx-auto lg:w-full max-md:p-3">
      <Homepage />
    </section>
    </>
  );
}
