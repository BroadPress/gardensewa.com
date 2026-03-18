import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Define the interface for a gallery item
interface GalleryItem {
  id: number;
  imageUrl: string;
  altText: string;
}

// Dummy data for the two gallery sections
const topServices: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/gallery/1.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 2,
    imageUrl: "/gallery/2.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 3,
    imageUrl: "/gallery/3.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 4,
    imageUrl: "/gallery/4.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 5,
    imageUrl: "/gallery/5.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 6,
    imageUrl: "/gallery/6.jpg",
    altText: "GardenSewa gallery",
  },
];

const indoorOutdoorPlants: GalleryItem[] = [
  {
    id: 7,
    imageUrl: "/gallery/7.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 8,
    imageUrl: "/gallery/8.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 9,
    imageUrl: "/gallery/9.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 10,
    imageUrl: "/gallery/10.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 11,
    imageUrl: "/gallery/11.jpg",
    altText: "Potted succulent on the floor",
  },
  {
    id: 12,
    imageUrl: "/gallery/12.jpg",
    altText: "Field of cacti",
  },
];

const rarePlants: GalleryItem[] = [
  {
    id: 1,
    imageUrl: "/gallery/13.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 2,
    imageUrl: "/gallery/14.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 3,
    imageUrl: "/gallery/15.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 4,
    imageUrl: "/gallery/16.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 5,
    imageUrl: "/gallery/17.jpg",
    altText: "Potted succulent on the floor",
  },
  {
    id: 6,
    imageUrl: "/gallery/18.jpg",
    altText: "Field of cacti",
  },
];

const morePlants: GalleryItem[] = [
  {
    id: 19,
    imageUrl:
      "/gallery/19.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 20,
    imageUrl:
      "/gallery/20.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 21,
    imageUrl:
      "/gallery/21.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 22,
    imageUrl:
      "/gallery/22.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 23,
    imageUrl:
      "/gallery/23.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 24,
    imageUrl:
      "/gallery/24.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 25,
    imageUrl:
      "/gallery/25.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 26,
    imageUrl:
      "/gallery/26.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 27,
    imageUrl:
      "/gallery/27.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 28,
    imageUrl:
      "/gallery/28.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 29,
    imageUrl:
      "/gallery/29.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 30,
    imageUrl:
      "/gallery/30.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 31,
    imageUrl:
      "/gallery/31.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 32,
    imageUrl:
      "/gallery/32.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 33,
    imageUrl:
      "/gallery/33.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 34,
    imageUrl:
      "/gallery/34.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 35,
    imageUrl:
      "/gallery/35.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 36,
    imageUrl:
      "/gallery/36.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 37,
    imageUrl:
      "/gallery/37.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 38,
    imageUrl:
      "/gallery/38.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 39,
    imageUrl:
      "/gallery/39.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 40,
    imageUrl:
      "/gallery/40.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 41,
    imageUrl:
      "/gallery/41.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 42,
    imageUrl:
      "/gallery/42.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 43,
    imageUrl:
      "/gallery/43.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 44,
    imageUrl:
      "/gallery/44.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 45,
    imageUrl:
      "/gallery/45.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 46,
    imageUrl:
      "/gallery/46.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 47,
    imageUrl:
      "/gallery/47.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 48,
    imageUrl:
      "/gallery/48.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 49,
    imageUrl:
      "/gallery/49.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 50,
    imageUrl:
      "/gallery/50.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 51,
    imageUrl:
      "/gallery/51.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 52,
    imageUrl:
      "/gallery/52.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 53,
    imageUrl:
      "/gallery/53.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 54,
    imageUrl:
      "/gallery/54.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 55,
    imageUrl:
      "/gallery/55.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 56,
    imageUrl:
      "/gallery/56.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 57,
    imageUrl:
      "/gallery/57.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 58,
    imageUrl:
      "/gallery/58.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 59,
    imageUrl:
      "/gallery/59.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 60,
    imageUrl:
      "/gallery/60.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 61,
    imageUrl:
      "/gallery/61.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 62,
    imageUrl:
      "/gallery/62.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 63,
    imageUrl:
      "/gallery/63.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 64,
    imageUrl:
      "/gallery/64.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 65,
    imageUrl:
      "/gallery/65.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 66,
    imageUrl:
      "/gallery/66.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 67,
    imageUrl:
      "/gallery/67.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 68,
    imageUrl:
      "/gallery/68.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 69,
    imageUrl:
      "/gallery/69.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 70,
    imageUrl:
      "/gallery/70.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 71,
    imageUrl:
      "/gallery/71.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 72,
    imageUrl:
      "/gallery/72.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 73,
    imageUrl:
      "/gallery/73.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 74,
    imageUrl:
      "/gallery/74.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 75,
    imageUrl:
      "/gallery/75.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 76,
    imageUrl:
      "/gallery/76.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 77,
    imageUrl:
      "/gallery/77.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 78,
    imageUrl:
      "/gallery/78.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 79,
    imageUrl:
      "/gallery/79.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 80,
    imageUrl:
      "/gallery/80.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 81,
    imageUrl:
      "/gallery/81.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 82,
    imageUrl:
      "/gallery/82.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 83,
    imageUrl:
      "/gallery/83.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 84,
    imageUrl:
      "/gallery/84.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 85,
    imageUrl:
      "/gallery/85.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 86,
    imageUrl:
      "/gallery/86.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 87,
    imageUrl:
      "/gallery/87.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 88,
    imageUrl:
      "/gallery/88.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 89,
    imageUrl:
      "/gallery/89.jpg",
    altText: "GardenSewa gallery",
  },
  {
    id: 90,
    imageUrl:
      "/gallery/90.jpg",
    altText: "GardenSewa gallery",
  },
  
];

// Reusable Gallery Grid component
const GalleryGrid: React.FC<{ items: GalleryItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative w-full h-78 rounded-xl overflow-hidden shadow-md"
      >
        <Image
          src={item.imageUrl}
          alt={item.altText}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
);

const GalleryPage: React.FC = () => {
  return (
    <div className="mb-40">
      <Head>
        <title>Gallery</title>
      <meta name="keywords" content="GardenSewa gallerys Nepal, GardenSewa gallery, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular GardenSewa gallery, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="GardenSewa gallerys in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert GardenSewa gallerys, plant care, landscaping, and GardenSewa gallery to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/gallery.jpg" />
      <meta property="og:image:alt" content="GardenSewa gallerys in Nepal" />

      </Head>
      <div className="h-[209px] bg-card-stroke-light">
        {/* Main content container */}
        <div className="flex flex-col items-center justify-center h-full px-4 py-8 text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-4 text-sm w-full">
            <div className="flex flex-col items-center justify-center h-[277px] px-4 py-8 text-center">
              {/* Breadcrumb navigation */}
              <div className="mb-4 text-sm w-full">
                <span className="text-light flex items-center justify-center text-[#616161] text-base">
                  Home <ChevronRight width={20} height={20} />
                  <span className="text-primary ml-2 font-semibold">
                    {" "}
                    Gallery
                  </span>
                </span>
              </div>

              {/* Section title */}
              <h1 className="mb-4 text-5xl font-bold text-primary md:text- [52px]">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-screen max-w-7xl mx-auto px-8 ">
        <main className="container mx-auto px-4 py-12 space-y-12 flex flex-col gap-30">
          {/* Top Services Section */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Top Services
            </h2>
            <GalleryGrid items={topServices} />
          </section>

          {/* Indoor Outdoor Plants Section */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Indoor/Outdoor Plants
            </h2>
            <GalleryGrid items={indoorOutdoorPlants} />
          </section>

          {/* Rare Plants */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Rare Plants
            </h2>
            <GalleryGrid items={rarePlants} />
          </section>

          {/* more Plants */}
          <section className="py-2">
            <h2 className="text-2xl font-bold text-primary mb-6">Gallery</h2>
            <GalleryGrid items={morePlants} />
          </section>
        </main>
      </div>
      <div
        className={`relative w-full h-[350px] flex items-center justify-center text-white my-12`}
      >
        {/* Background image with a dark overlay */}
        <img
          src="/gallery/1.jpg"
          alt="A large green plant"
          height={350}
          width={400}
          className="absolute inset-0 z-0 object-cover h-[350px] w-full"
        />
        <div className="absolute inset-0 bg-black/30 opacity-60 z-10"></div>

        {/* Main content container */}
        <div className="relative z-10 max-w-4xl text-center px-4">
          {/* Section title */}
          <h1 className="text-5xl md:text-4xl font-bold mb-4">
            Visit our FAQ page
          </h1>

          {/* Section description */}
          <p className="text-lg md:text-lg text-gray-200 leading-relaxed mb-8">
            get answers to common services questions - save time and stay
            informed{" "}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="/faq">
              <button className="bg-primary text-white font-semibold px-6 py-2 md:px-8 md:py-3 rounded-full hover:bg-secondary transition">
                View FAQ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
