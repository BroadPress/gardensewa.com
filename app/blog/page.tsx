
'use client';
import { ArrowRight, Clock } from 'lucide-react';
import Head from 'next/head';

// -----------------------
// Blog Post Interface
// -----------------------
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  snippet: string;
  imageUrl: string;
  photo: string;
}

// -----------------------
// Mock Blog Data
// -----------------------
const postData: BlogPost[] = [
  {
    id: 1,
    title: "The Blooming Business of Gardening Services",
    author: "Nisha Karn",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Gardening is more than just planting flowers or vegetables — it is a full-fledged industry. From selling indoor plants to setting up home gardens, vertical gardens, rooftop greenery, and landscape designing, the gardening business offers multiple income sources. People today are more health-conscious, environmentally aware, and interested in aesthetic living. As a result, ...",
    imageUrl: "blog/1/1.jpg",
    photo: "/author/1.png",
  },
  {
    id: 2,
    title: "How a Flower Brings Happiness",
    author: "Rohan Gaur",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "In today’s fast-paced and digitally driven world, finding moments of peace and happiness can feel challenging. We are constantly surrounded by screens, deadlines, ...",
    imageUrl: "blog/2/1.jpg",
    photo: "/author/2.png",
  },
  {
    id: 3,
    title: "Impact of a Flower in Mental Health",
    author: "Sunita Karki",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Flowers have been part of human life for thousands of years. They are used in celebrations, rituals, decorations, and even in medicine. But did you know ...",
    imageUrl: "blog/3/1.jpg",
    photo: "/author/3.png",
  },
  {
    id: 4,
    title: "How to Detox Your Life Naturally With Everyday Habits",
    author: "Rohan Gaur",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Detoxing isn’t just about green juices and diets. A real detox involves cleansing your environment, ...",
    imageUrl: "blog/4/1.jpg",
    photo: "/author/2.png",
  },
  {
    id: 5,
    title: "Happiness is Homemade — and Homegrown",
    author: "Nisha Karn",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "True happiness often lies in simple joys — like seeing a seed sprout, harvesting your own vegetables, ...",
    imageUrl: "blog/5/1.jpg",
    photo: "/author/1.png",
  },
  {
    id: 6,
    title: "How Mindfulness and Gardening Go Hand in Hand",
    author: "Nisha Karn",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "In a fast-paced world, mindfulness is the anchor that brings us back to the present. And there’s no better place ...",
    imageUrl: "blog/6/1.jpg",
    photo: "/author/1.png",
  },
  {
    id: 7,
    title: "Why Gardening Services Are the Future of Urban Living",
    author: "Nisha Karn",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "With shrinking open spaces and busier schedules, urban dwellers are turning to gardening professionals ...",
    imageUrl: "blog/7/1.jpg",
    photo: "/author/1.png",
  },
  {
    id: 8,
    title: "Green is the New Lifestyle — Embrace the Garden Life",
    author: "Rohan Gaur",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Gardening is more than a weekend activity — it’s a lifestyle choice. It's about living closer to nature, ...",
    imageUrl: "blog/8/1.jpg",
    photo: "/author/2.png",
  },
  {
    id: 9,
    title: "Plants: Nature’s Timeless Gift for a Healthier, Happier Life",
    author: "Sunita Karki",
    date: "29/07/2025",
    readTime: "5 min",
    snippet:
      "Plants are more than just decorative green companions — they’re living tools for a healthier, ...",
    imageUrl: "blog/9/1.jpg",
    photo: "/author/3.png",
  },
];

// -----------------------
// PostCard Component
// -----------------------
const PostCard = ({
  post,
  isLarge = false,
}: {
  post: BlogPost;
  isLarge?: boolean;
}) => (
  <div className="flex flex-col overflow-hidden">
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-56 object-cover rounded-t-2xl"
    />
    <div className="flex flex-col p-4">
      <div className="self-stretch inline-flex justify-between items-center mb-2">
        <div className="flex justify-start items-center gap-2">
          <img className="w-8 h-8 rounded-full" src={post.photo} />
          <div className="text-sm">{post.author}</div>
          <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
          <div className="text-sm sm:ml-2 lg:ml-0">{post.date}</div>
        </div>
        <div className="flex justify-start items-center gap-2.5">
          <div className="text-sm flex flex-row gap-2 mt-1">
            {" "}
            <Clock className="h-4 w-4" /> {post.readTime}
          </div>
        </div>
      </div>
      <h3
        className={`font-bold text-secondary transition-colors ${isLarge ? "text-2xl" : "text-lg"}`}
      >
        {post.title}
      </h3>
      <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3 mb-4">
        {post.snippet}
      </p>
      <a
        href="#"
        className="px-2 w-40 py-2.5 bg-white border-1 border-secondary text-secondary rounded-lg inline-flex justify-center items-center gap-1.5 hover:text-white text-lg font-semibold hover:bg-secondary transition-all duration:900"
      >
        Read More <ArrowRight />
      </a>
    </div>
  </div>
);

// -----------------------
// Main Blog Page Component
// -----------------------
export default function BlogPage() {
  return (
    <>
     <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>

      {/* Header */}
      <div className="w-full py-12 bg-card-stroke-light flex flex-col justify-start items-center gap-8">
        {/* Breadcrumb */}
        <div className="w-full flex flex-col justify-start items-center gap-6 px-4 sm:px-8 md:px-16">
          <div className="w-full flex flex-col justify-start items-center gap-2.5">
            <div className="w-full flex flex-col justify-start items-center gap-2.5">
              <div className="inline-flex justify-start items-center gap-1.5 w-full">
                <div className="flex justify-center items-center gap-1.5 w-full">
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    Home &gt; <span className="text-primary ml-2"> Blog </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Title */}
          <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-4">
              <h1 className="w-full text-center text-primary text-3xl sm:text-4xl md:text-5xl font-bold">
                Blog
              </h1>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-xl px-4 sm:px-0 mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 w-full h-14 bg-white rounded-[30px] outline-1 outline-offset-[-1px] outline-green-800"
          />
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-[#FFFFFF] text-gray-800">
        {/* Blog Sections */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-20 space-y-16 mb-20">
          {/* Popular Post */}
          <section>
            <h2 className="self-stretch h-7 text-primary text-2xl font-semibold leading-loose mb-12">
              Popular Post
            </h2>
            <div className="flex flex-col rounded-2xl overflow-hidden mt-4">
              <img
                src={postData[0].imageUrl}
                alt={postData[0].title}
                className="w-full h-64 sm:h-[485px] object-cover rounded-2xl"
              />
              <div className="py-6 px-1 rounded-2xl">
                <div className="flex flex-wrap justify-between items-center mb-4 text-sm text-gray-500">
                  <div className="flex items-center text-dark gap-1">
                    <img
                      src={postData[0].photo}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{postData[0].author}</span>

                    <span className="text-dark">•</span>
                    <span>{postData[0].date}</span>
                  </div>
                  <span className="flex gap-2 sm:ml-2 lg:ml-0">
                    <Clock className="h-5 w-5" /> {postData[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-secondary mb-3">
                  {postData[0].title}
                </h2>
                <p className="text-dark mb-6 line-clamp-4">
                  {postData[0].snippet}
                </p>
                <a
                  href="#"
                  className="px-6 py-2.5 bg-white text-secondary rounded-lg inline-flex justify-center items-center gap-1.5 border-1 border-secondary hover:text-white text-lg font-semibold hover:bg-secondary transition-all duration-900"
                >
                  Read More <ArrowRight />
                </a>
              </div>
            </div>
          </section>

          {/* Featured Posts (Custom Layout) */}
          <section className="w-full inline-flex flex-col justify-start items-start gap-7">
            <div className="self-stretch h-7 text-primary text-2xl font-semibold leading-loose mb-4">
              Featured Posts
            </div>
            <div className="self-stretch inline-flex justify-start items-center gap-6 flex-wrap lg:flex-nowrap">
              {[postData[1], postData[2]].map((post, index) => (
                <div
                  key={post.id}
                  className="flex-1 inline-flex flex-col justify-start items-start"
                >
                  <img
                    className="self-stretch h-64 lg:h-96 object-cover rounded-2xl"
                    src={post.imageUrl}
                    alt={post.title}
                  />
                  <div className="self-stretch py-5 rounded-2xl flex flex-col justify-start items-start gap-2.5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-6">
                      <div className="self-stretch flex flex-col justify-start items-center gap-4">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="flex justify-start items-center gap-1">
                            <img
                              className="w-8 h-8 rounded-full"
                              src={post.photo}
                            />
                            <div className="text-sm">{post.author}</div>
                            <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
                            <div className="text-sm sm:ml-2 lg:ml-0">
                              {post.date}
                            </div>
                          </div>
                          <span className="flex gap-2 sm:ml-2 lg:ml-0">
                            <Clock className="h-4 w-4 mt-1" />{" "}
                            {postData[0].readTime}
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-4">
                          <div className="text-2xl text-secondary font-semibold leading-loose">
                            {post.title}
                          </div>
                          <div className="text-base text-dark leading-normal line-clamp-3">
                            {post.snippet}
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="px-6 py-2.5 bg-white text-secondary border-1 border-secondary rounded-lg inline-flex justify-center items-center gap-1.5 hover:text-white text-lg font-semibold hover:bg-secondary transition-all duration-900"
                      >
                        Read More <ArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section>
            <h2 className="text-xl font-bold text-primary mb-6">
              Recent Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postData.slice(3).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
