import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Heart, ShoppingCart } from "lucide-react";

// Define interfaces for data types
interface Service {
  id: string;
  title: string;
  imageUrl: string;
}

interface Plant {
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  tags: string[];
  difficulty: string;
}

// Dummy data for services
const services: Service[] = [
  {
    id: "1",
    title: "Gardening Service",
    imageUrl: "/image/home/top-services/services/1.png",
  },
  {
    id: "2",
    title: "Landscaping Services",
    imageUrl: "/image/home/top-services/services/2.png",
  },
  {
    id: "3",
    title: "Turfing Service",
    imageUrl: "/image/home/top-services/services/3.png",
  },
  {
    id: "4",
    title: "Gardening Makeovers",
    imageUrl: "/image/home/top-services/services/4.png",
  },
  {
    id: "5",
    title: "Seasonal Service",
    imageUrl: "/image/home/top-services/services/5.png",
  },
  {
    id: "6",
    title: "Lawn Care",
    imageUrl: "/image/home/top-services/services/6.png",
  },
];

// Dummy data for plants updated to match the image
const plants: Plant[] = [
  {
    imageUrl: "/image/home/top-services/services/plants/1.png",
    name: "Rubber Plant",
    price: "1000",
    oldPrice: "1289",
    tags: ["Low Light", "Outdoor", "Indoor"],
    difficulty: "bg-green-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/2.png",
    name: "Jasmine Plant",
    price: "990",
    tags: ["Air Purifier", "Pet Safe", "Outdoor"],
    difficulty: "bg-yellow-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/3.png",
    name: "Red Rose Plant",
    price: "1700",
    tags: ["Pet Safe", "Low Light", "Indoor"],
    difficulty: "bg-red-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/4.png",
    name: "Daisy Plant",
    price: "1200",
    tags: ["Pet Safe", "Low Light", "Indoor"],
    difficulty: "bg-red-500",
  },
];

// Service Card Component
const ServiceCard: React.FC<Service> = ({ title, imageUrl }) => (
  <div className="relative w-[417px] h-[320] rounded-xl overflow-hidden group">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
    <div className="absolute top-3 left-3 bg-card bg-opacity-80 text-black text-sm font-semibold px-3 py-1 rounded-full">
      {title}
    </div>
  </div>
);

const PlantCard: React.FC<Plant> = ({
  name,
  price,
  oldPrice,
  imageUrl,
  tags,
  difficulty,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const getDifficultyColors = () => {
    switch (difficulty) {
      case "easy":
        return ["bg-green-500", "bg-gray-300"];
      case "medium":
        return ["bg-green-500", "bg-yellow-500"];
      case "hard":
        return ["bg-green-500", "bg-red-500"];
      default:
        return ["bg-green-500", "bg-gray-300"];
    }
  };

  const [color1, color2] = getDifficultyColors();

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden border-[3px] border-gray-200 hover:border-border transition-all duration-300 cursor-pointer hover:shadow-lg relative"
      style={{ width: "306px", height: "469px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative bg-gray-100" style={{ height: "320px" }}>
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/320x224/e5f3e5/4a7c59?text=Plant+Image";
          }}
        />
      </div>

      {/* Content Section */}
      <div className="relative">
        {/* Default Content */}
        <div className="p-4 relative">
          {/* Difficulty Indicators */}
          <div className="absolute top-4 right-4 flex space-x-1">
            <div className={`w-3 h-3 rounded-full ${color1}`}></div>
            <div className={`w-3 h-3 rounded-full ${color2}`}></div>
          </div>

          {/* Title and Price */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                NPR. {price}
              </span>
              {oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  NPR. {oldPrice}
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-card text-text text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
              >
                {tag}
              </span>
            ))}
          </div>
          {/*<button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 sm:hidden">
            Add to Cart
          </button>*/}
        </div>
      </div>

      {/* Hover Content - Slides up from bottom covering half the card */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-transform duration-500 ease-in-out ${
          isHovered ? "transform translate-y-0" : "transform translate-y-full"
        }`}
        style={{ height: "235px" }} // Half of the total card height (469px / 2)
      >
        <div className="p-2 h-full flex flex-col">
          {/* Title and Price */}
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-800 mb-1 flex">
              {name}{" "}
              <div className="flex space-x-1 ml-auto">
                <div className={`w-3 h-3 rounded-full ${color1}`}></div>
                <div className={`w-3 h-3 rounded-full ${color2}`}></div>
              </div>
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                NPR. {price}
              </span>
              {oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  NPR. {oldPrice}
                </span>
              )}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-card text-text text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-3">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-gray-300 text-gray-700 bg-gray-50 hover:bg-green-700 hover:text-white transition-colors duration-200"
            >
              Add to Favorite
            </button>

            <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// Main Component
const ServicesAndPlants: React.FC = () => {
  return (
    <div className="min-h-screen w-full font-sans text-gray-900  max-w-[1300px]">
      {/* Our Services Section */}
      <section className="mb-30">
        <div className="flex flex-row justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            Our Services
          </h2>
          <a
            href="/services"
            className="border border-secondary max-sm:py-1 max-sm:px-3 py-2.5 px-6 rounded-md flex items-center justify-center text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white"
          >
            View All <ArrowRight />
          </a>
        </div>
        <div className=" flex gap-6 items-center justify-center flex-wrap">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Explore Plants Section
      <section className="mb-20">
        <div className="flex flex-row justify-between items-center mb-10  mx-auto p-2">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            New Arrivals
          </h2>
          <a
            href="/plants"
            className="border border-secondary py-2.5 px-6 rounded-md flex items-center justify-center text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white"
          >
            View All <ArrowRight />
          </a>
        </div>
        <div className="flex gap-6  mx-auto items-center justify-center flex-wrap">
          {plants.map((plant, key) => (
            <PlantCard key={key} {...plant} />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default ServicesAndPlants;
