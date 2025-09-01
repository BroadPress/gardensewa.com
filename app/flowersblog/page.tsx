// pages/index.js or components/FlowersBlog.js
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const FlowersBlog = () => {
  const suggestedPosts = [
    {
      id: 1,
      title: "How to Detox Your Life Naturally with Everyday Habits",
      author: "Ira Adhikari",
      date: "08/08/2025",
      views: "2.3K",
      readTime: "9 min",
      image: "/image/blog/1.png",
      description:
        "Pollutants and food choices can be bad. Fresh foods made from fresh ingredients, will...",
      link: "Read More",
    },
    {
      id: 2,
      title: "Happiness is Homemade — and Homegrown",
      author: "Sanjana Yadav",
      date: "08/08/2025",
      views: "2.2K",
      readTime: "9 min",
      image: "/image/blog/2.png",
      description:
        "True happiness often lies in simple joys — like seeing a seed sprout, harvesting your own vegetables.",
      link: "Read More",
    },
    {
      id: 3,
      title: "New Mindfulness and Gardening Go Hand in Hand",
      author: "Rohan Upreti",
      date: "08/08/2025",
      views: "1.9K",
      readTime: "9 min",
      image: "/image/blog/3.png",
      description:
        "To start local people can do many practices that it helps in their daily lives that they...",
      link: "Read More",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mb-30">
      <Head>
        <title>Flowers and Mental Health</title>
        <meta
          name="description"
          content="Exploring the connection between flowers and mental wellness"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`relative w-full max-w-6xl h-[501px] overflow-hidden rounded-3xl flex items-end p-5 justify-center text-white m-20`}
      >
        <img
          src="/image/blog/heroimg.png"
          alt="A large green plant"
          height={400}
          width={400}
          className="absolute inset-0 z-0 rounded-3xl object-cover w-full"
        />

        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Flower Brings Happiness
          </h1>

          {/* Author info */}
          <div className="flex items-center justify-center space-x-3">
            {/* Author avatar */}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src="image/userimage/ina.png"
                alt="Ina Adhikari"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Author details */}
            <div className="flex items-center space-x-4 text-sm text-white">
              <span className="font-medium">Ina Adhikari</span>
              <span className="opacity-80">03 Aug 2025</span>
              <span className="opacity-80">5 min</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center ">
        <div className="mx-auto px-6 py-8 max-w-5xl">
          {/* Main Content */}
          <div className="bg-white mb-10">
            {/* Introduction Section */}
            <section className="mb-8 max-w-6xl">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">
                Introduction
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Finding a balance and cognitive where health that improvement of
                peace and happiness can heal challenging life we consistently
                surrounded by stresses, pollution, and daily pressures. But
                sometimes, the situation there can bring the presence in. Once
                love life passion and happiness a flower.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Flowers have been a source of beauty, love, caring, in
                practices. Whether you're a gift, general exposition, or simply
                admiration today, flowers enrage the path to improvement.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                From the very beginning on the flowering seasons that homes, but
                also give a sense of freedom in our lives, the flowers in our
                gardens, from flowers and support, correct and being, help and
                regular lives, provide a meaningful reflection, presence we
                thinking, and flowers emotional services. — at blooming
                awareness is never for flowers and mental health benefits and
                perspectives.
              </p>
            </section>

            {/* Flowers and Mental Health Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">
                Flowers and Mental Health
              </h2>

              {/* Float image container */}
              <div className="float-right ml-6 mb-4 w-48">
                <img
                  className="h-[307px] w-[509px]"
                  src={"/image/blog/blog.png"}
                />
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Flowers play a flowering and emotional factor in supporting
                mental health. Research has shown that the presence of flowers
                can reduce stress, anxiety, and depression, boosting overall
                feelings of wellbeing. They contribute to a more positive
                mindset, particularly when enjoyed indoors. improve happiness
                rating, feelings and interactions and a feeling of being loved.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                The sight and baseell of fresh flowers from plants inside and
                outside of locations, potentially in someone associated with
                happiness and wellbeing. Studies show that those who worked in
                spaces decorated with fresh flowers and plants, showed increased
                productivity and well-being compared to normal rooms.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Having a view of fresh flowers as you work desk or have in other
                real settings significantly improves your creative process and
                opens your minds and open to creative problem-solving, improving
                a more positive attitude and relaxed state of mind.
              </p>
            </section>

            {/* Flowers and Digital Detox Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 ">
                Flowers and Digital Detox
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Our lives are increasingly dominated by digital devices. Screens
                are everywhere—phones, tablets, laptops—and although they
                connect us to the world, they also overwhelm us. Their daily
                digital affects has become so prevalent that many look for a
                digital detox.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Introducing flowers into your environment can be a great
                way-digital-a digital detox. Whether you are enjoying flowers,
                walking through a garden or a park, or tending them in your home
                or garden, flowers provide the perfect opportunity to step away
                from the same helps you feel calm, express your affections, and
                is, improve your emotions.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Gardens create opportunities to enjoy a life in the presence of
                flowers while disconnecting from your devil and reduce
                screen-time. If you've ever a fresh and pure feels a moment that
                the presence of flowers can cultivate.
              </p>
            </section>

            {/* A Great Way to Spend Time Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 ">
                A Great Way to Spend Time
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Planting with flowers is not only beneficial, it's also a great
                way to spend your free time. Whether you're planting flowers
                from seeds using philadgroupening flowers or blooms a
                picturesque.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                These activities are not only pleasing but also calming. That
                allow you to be present in your environment and to get away from
                the distractions of everyday life. They can be done alone, with
                friends, or family.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                working flower a flexible and empathy way to steal time.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Today's work-related many people are looking for meaningful
                office activities. Roses, sunflower, marigold, and several other
                flowers have become popular in business offices because they
                improve the working environment and the presence and performance
                and more friendly business, like making french bouquets, it's
                from design.
              </p>
            </section>

            {/* Sun Thinking and Mindfulness Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 ">
                Sun Thinking and Mindfulness
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Flowers have a strong connection to sun thinking and
                mindfulness, in many cultures, especially in Buddhibase and
                Spiritual philosophy, flowers represent the impermanence and
                transformation of life.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                The daily flower, the rose, the lotus, all the fresh flowers
                that grow from earth through sun, water, rain, and other caring,
                contain peace and meditation to enjoying caring today and their
                grass. It is means their flowers are a meditation.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                The growth for your flowers, your growth and thinking power of
                states and mindfulness into your daily routine, which is
                essential to long-term mental health and positive life on your
                well-being.
              </p>
            </section>

            {/* Conclusion Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-teal-900 mb-4 ">
                Conclusion
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Since flowers and air's presence may appear as a coincidence,
                they can also be a natural for creativity and compassion, fresh
                inside flowers and forms by focusing on identification of trees,
                colourful flaming techniques, and captivating practices like
                organic forming and gardening.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-3 text-justify">
                Access to natural environments, and sometimes fresh flowers
                includes important of your daily life. Remember the technology
                area with these from normal problems.
              </p>
              <p className="text-base text-gray-700 leading-relaxed text-justify">
                Individual staying has local and organic markets, are playing
                with government and NGO programs, seeing and flea flowers,
                experiencing their, opportunities. whether it work is fresh in
                digital or on gardens, or whether they need to place positive
                lessons you! Then they express what problems.
              </p>
            </section>

            <div className="clear-both"></div>
          </div>

          {/* Suggested Posts Section */}
        </div>
        <section className="mb-20 max-w-6xl flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-6 ">
            Suggested Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggestedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 max-w-sm"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.id === 1}
                  />
                </div>

                {/* Content Container */}
                <div className="p-4">
                  {/* Author and Date Row */}
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 bg-orange-400 rounded-full mr-2 flex items-center justify-center">
                      <span className="text-white text-xs font-medium">I</span>
                    </div>
                    <span className="text-gray-600 text-sm">{post.author}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-gray-600 text-sm">{post.date}</span>
                    <div className="ml-auto flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <button className="inline-flex items-center text-teal-700 text-sm border-border border rounded px-5 py-2 font-medium hover:text-teal-800 transition-colors">
                    {post.link}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FlowersBlog;
