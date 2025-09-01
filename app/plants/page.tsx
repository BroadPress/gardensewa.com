"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown, RotateCcw } from "lucide-react";
import Head from "next/head";

interface Plant {
  name: string;
  price: string;
  oldPrice?: string;
  imageUrl: string;
  tags: string[];
  difficulty: string;
}

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
  {
    imageUrl: "/image/home/top-services/services/plants/5.png",
    name: "Snake Plant",
    price: "1350",
    oldPrice: "1600",
    tags: ["Air Purifier", "Low Light", "Indoor"],
    difficulty: "bg-green-600",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/6.png",
    name: "Aloe Vera",
    price: "800",
    tags: ["Medicinal", "Outdoor", "Easy Care"],
    difficulty: "bg-green-400",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/7.png",
    name: "Money Plant",
    price: "950",
    tags: ["Indoor", "Easy Care", "Good Luck"],
    difficulty: "bg-yellow-400",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/8.png",
    name: "Tulip Plant",
    price: "2200",
    tags: ["Flowering", "Outdoor", "Pet Safe"],
    difficulty: "bg-pink-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/9.png",
    name: "Lavender Plant",
    price: "1800",
    oldPrice: "2000",
    tags: ["Aromatic", "Outdoor", "Pet Safe"],
    difficulty: "bg-purple-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/10.png",
    name: "Orchid Plant",
    price: "2500",
    tags: ["Indoor", "Flowering", "Decorative"],
    difficulty: "bg-pink-600",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/11.png",
    name: "Cactus",
    price: "700",
    tags: ["Low Water", "Outdoor", "Indoor"],
    difficulty: "bg-green-700",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/12.png",
    name: "Bonsai Tree",
    price: "3500",
    tags: ["Indoor", "Decorative", "Careful Watering"],
    difficulty: "bg-yellow-600",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/13.png",
    name: "Fern Plant",
    price: "1100",
    tags: ["Indoor", "Low Light", "Pet Safe"],
    difficulty: "bg-green-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/14.png",
    name: "Sunflower",
    price: "1400",
    tags: ["Outdoor", "Flowering", "Fast Growth"],
    difficulty: "bg-yellow-500",
  },
  {
    imageUrl: "/image/home/top-services/services/plants/15.png",
    name: "Peace Lily",
    price: "1600",
    oldPrice: "1900",
    tags: ["Air Purifier", "Indoor", "Low Light"],
    difficulty: "bg-white",
  },
];

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
      className="bg-white rounded-2xl overflow-hidden border-[3px] border-gray-200 hover:border-green-300 transition-all duration-300 cursor-pointer hover:shadow-lg relative"
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
              "https://garden.com/plant.jpg";
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
                className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
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
                className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-200"
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

interface PlantFilterProps {
  onFilterChange?: (filters: Record<string, string>) => void;
  onApply?: (filters: Record<string, string>) => void;
  onClear?: (filters: Record<string, string>) => void;
}

const PlantFilter: React.FC<PlantFilterProps> = ({
  onFilterChange,
  onApply,
  onClear,
}) => {
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    type: "",
    water: "",
    sunlight: "",
    care: "",
    sortBy: "",
  });

  const filterOptions = {
    category: [
      "Indoor Plants",
      "Outdoor Plants",
      "Succulents",
      "Flowering Plants",
      "Medicinal Plants",
    ],
    size: ["Small", "Medium", "Large", "Extra Large"],
    type: ["Flowering", "Non-Flowering", "Climbing", "Shrub", "Tree"],
    water: ["Low", "Medium", "High"],
    sunlight: ["Full Sun", "Partial Sun", "Shade", "Indirect Light"],
    care: ["Easy", "Medium", "Hard"],
    sortBy: [
      "Name A-Z",
      "Name Z-A",
      "Price Low-High",
      "Price High-Low",
      "Popularity",
    ],
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (filterName: string) => {
    setOpenDropdown(openDropdown === filterName ? null : filterName);
  };

  const selectOption = (filterName: string, option: string) => {
    const newFilters = { ...filters, [filterName]: option };
    setFilters(newFilters);
    setOpenDropdown(null);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: "",
      size: "",
      type: "",
      water: "",
      sunlight: "",
      care: "",
      sortBy: "",
    };
    setFilters(clearedFilters);
    onClear?.(clearedFilters);
  };

  const handleApply = () => {
    onApply?.(filters);
  };

  interface FilterButtonProps {
    name: keyof typeof filterOptions;
    label: string;
    value: string;
  }

  const FilterButton: React.FC<FilterButtonProps> = ({
    name,
    label,
    value,
  }) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(name)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-200 min-w-[120px] justify-between"
      >
        <span className="text-gray-700 font-medium">{value || label}</span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            openDropdown === name ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === name && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="py-2">
            {filterOptions[name].map((option) => (
              <button
                key={option}
                onClick={() => selectOption(name, option)}
                className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex gap-4  justify-center flex-wrap ">
      <FilterButton name="category" label="Category" value={filters.category} />
      <FilterButton name="size" label="Size" value={filters.size} />
      <FilterButton name="type" label="Type" value={filters.type} />
      <FilterButton name="water" label="Water" value={filters.water} />
      <FilterButton name="sunlight" label="Sunlight" value={filters.sunlight} />
      <FilterButton name="care" label="Care" value={filters.care} />
      <FilterButton name="sortBy" label="Sort By" value={filters.sortBy} />

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="px-6 py-2 bg-teal-700 text-white rounded-2xl hover:bg-teal-800 transition-colors duration-200 font-medium"
      >
        Apply
      </button>

      {/* Clear Filter Button */}
      <button
        onClick={clearFilters}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-2xl bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <RotateCcw className="w-4 h-4 text-gray-500" />
        <span className="text-gray-700 font-medium">Clear Filter</span>
      </button>
    </div>
  );
};

function Products() {
  return (
    <section className="products mb-30 flex flex-col gap-5 rounded-b-2xl">
      <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      <div className="relative w-full h-[511px] ">
        {/* Background Image */}
        <img
          src={"/image/plants/1.png"}
          className="w-full h-full object-cover rounded-b-2xl"
        />

        {/* Overlay Content */}
        <div className="absolute inset-1 flex flex-col items-center justify-center text-center text-white px-4 gap-12 ">
          <div className="w-[900px] flex flex-col gap-12">
            <div className="mb-4 text-sm">
              <span className="flex items-center justify-center text-light-body text-base">
                Home <ChevronRight width={20} height={20} />
                <span className="text-primary ml-2 font-semibold">
                  About Us
                </span>
              </span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-secondary">
                Discover Plants That Fit Your Space
              </h1>
              <p className="mt-2 text-base text-secondary">
                Indoor, Outdoor, Flowering, Medicinal & More
              </p>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                className="w-full bg-white rounded-full h-10 text-black pl-10 pr-4"
                placeholder="Search for Rare, Popular, Outdoor and Indoor Plants"
              />
            </div>
          </div>
        </div>
      </div>
      <PlantFilter
        onFilterChange={(filters) => console.log("Filter changed:", filters)}
        onApply={(filters) => console.log("Apply clicked:", filters)}
        onClear={(filters) => console.log("Filters cleared:", filters)}
      />

      <div className="container mx-auto py-16">
        <div className="flex gap-6  mx-auto items-center justify-center flex-wrap">
          {plants.map((plant, key) => (
            <PlantCard key={key} {...plant} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
