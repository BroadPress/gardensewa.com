"use client";

import { ChevronRight } from "lucide-react";
import Head from "next/head";
import React from "react";
import Roadblock from "@/components/Roadblock";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SEO */}
      <Head>
        <meta name="keywords" content="gardening services Nepal, GardenSewa" />
        <meta property="og:title" content="Career in Gardening Service" />
      </Head>

      {/* Header */}
      <div className="px-4 py-4 text-center">
        <div className="text-sm flex items-center justify-center text-gray-500 mb-2">
          Home <ChevronRight size={18} className="mx-1" />
          <span className="font-semibold text-gray-800">
            Book a Service
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Vacancy in Gardening Service
        </h1>
      </div>

      {/* Roadblock */}
        <Roadblock />

      {/* Airtable */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://airtable.com/embed/appm7aDMLp2LtR1gX/pagsQUmriTA6BL8PB/form"
            className="w-full"
            style={{
              height: "2600px",
              border: "none",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
