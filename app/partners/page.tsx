"use client";

import Head from "next/head";

const partners = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  logo: `/partners/${i + 1}.png`,
}));

export default function App() {
  return (
    <div className="flex flex-col gap-20 pb-32">
      <Head>
        <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal" />
      </Head>

      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4 py-10 text-center bg-card-stroke-light">
        <div className="mb-4 text-sm w-full">
          <span className="text-light">
            Home &gt;
            <span className="text-primary ml-2">Our Partners</span>
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold text-primary mt-4">
            Our Partners
          </h2>
        </div>

        <p className="max-w-2xl mt-4 text-light-body">
          We collaborate with partners to make green living simple and accessible.
        </p>
      </div>

      {/* Grid */}
      <section className="px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl p-8 min-h-[200px] flex flex-col items-center justify-center text-center border border-gray-300 hover:shadow-md transition"
            >
              {/* Logo */}
              <div className="w-64 h-64 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}