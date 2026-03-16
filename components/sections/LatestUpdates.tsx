"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Define the TypeScript interface for an Article
interface Article {
  id: string;
  image: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  description?: string;
  img: string;
  Link: string;
}

// Mock data for the articles, mimicking the content from the image
const articles: Article[] = [
  {
    id: "1",
    image: "/image/navbar/blog/blog1.jpg",
    title: "How Flower Brings Happiness",
    author: "Nisha Karn",
    img: "/image/blog/author/1.png",
    date: "16 March 2026",
    readTime: "5 min",
    Link: "/flowersblog",
    description:
      "In today’s fast-paced and digitally driven world, finding moments of peace and happiness can feel challenging. We are constantly surrounded by screens, deadlines, and daily pressures. But sometimes, the simplest things can bring the greatest joy. One of those beautiful, natural sources of happiness is flowers.",
  },
  {
    id: "2",
    // Placeholder image URL.
    image: "/image/navbar/blog/blog2.jpg",
    title: "How to Start Gardening Business",
    author: "Rohan Gaur",
    img: "/image/blog/author/2.png",
    date: "13 March 2026",
    readTime: "5 min",
    Link: "/flowersblog",
  },
  {
    id: "3",
    // Placeholder image URL.
    image: "/image/navbar/blog/blog3.jpg",
    title: " Impact of Flower in Mental Health",
    author: "Sunita Karki",
    img: "/image/blog/author/3.png",
    date: "6 March 2026",
    readTime: "5 min",
    Link: "/flowersblog",
  },
];

// ArticleCard Component: Renders an individual article card
interface ArticleCardProps {
  article: Article;
  large?: boolean; // Prop to determine if it's the large card or a smaller one
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  large = false,
}) => {
  // Conditional classes based on 'large' prop for different sizing and text styles
  // Increased height for the large card: from h-64 md:h-96 to h-80 md:h-[40rem] (640px)
  const imageContainerClasses = large
    ? "h-[705px] md:h-[30rem]"
    : "h-[571px] md:h-56";
  const titleClasses = large ? "text-2xl md:text-3xl" : "text-lg md:text-xl";
  const descriptionClasses = large ? "text-sm mb-4 line-clamp-3" : "hidden"; // Description only for large card

  return (
    <Link href={article.Link}>
      <div className="relative rounded-xl overflow-hidden max-sm:h-[400px] max-md:h-[500px] shadow-lg bg-white group cursor-pointer hover:shadow-xl transition-shadow duration-300 ">
        {/* Image container with responsive height */}

        <div className={`relative w-full ${imageContainerClasses} group`}>
          <img
            src={article.image}
            alt={article.title}
            height={large ? 400 : 300}
            width={large ? 600 : 400}
            className="transition-transform duration-300 group-hover:scale-105 object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F] via-[#39393980] to-[#39393900]"></div>
        </div>

        {/* Gradient overlay for better text readability on image */}
        <div className="absolute inset-0 via-black/60 to-transparent"></div>

        {/* Text content positioned at the bottom of the card */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className={`font-bold ${titleClasses} mb-2`}>{article.title}</h3>

          {large && <p className={descriptionClasses}>{article.description}</p>}

          <div className="flex items-center text-sm opacity-90">
            <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 text-gray-700 font-semibold text-xs">
              <img
                src={article.img}
                alt={article.title}
                height={24}
                width={24}
                className="rounded-full object-cover"
              />
            </div>
            <span className="mr-3">{article.author}</span>
            <span className="mr-3">&bull;</span>
            <span className="mr-3">{article.date}</span>
            <span>&bull; {article.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Home Component: The main page component that renders the Latest Updates section
const LatestUpdates: React.FC = () => {
  return (
    <div className="font-sans mb-20 max-w-[1300px]">
      {" "}
      {/* Using a light gray background */}
      <Head>
        <title>Latest Updates - Farming</title>
        <meta
          name="description"
          content="Latest updates and articles on farming practices."
        />
        <link rel="icon" href="/favicon.ico" />
        {/* Link to Inter font from Google Fonts for a modern, clean look */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="container mx-auto px-4 py-2">
        {/* Section Title */}
        <h2 className="md:text-5xl font-extrabold text-[52px] text-center text-secondary mb-12 tracking-tight">
          Latest Updates
        </h2>

        {/* Grid layout for the articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {/* Large Article Card (first article in the data array) */}
          <div className="md:col-span-1">
            <ArticleCard article={articles[0]} large />
          </div>

          {/* Container for the two smaller article cards */}
          <div className="grid grid-cols-1 gap-6">
            {/* Smaller Article Card 1 */}
            <ArticleCard article={articles[1]} />
            {/* Smaller Article Card 2 */}
            <ArticleCard article={articles[2]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LatestUpdates;
