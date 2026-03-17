import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Head from 'next/head';

const BlogPage: React.FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-gray-50">
      <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
    </Head>
      {/* Blog Post Header */}
      <div className="relative">
        <Image
          src="/blog/1/1.jpg"
          alt="Flowers in a vase"
          width={400}
          height={400}
          className="w-full h-100 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end p-8 md:p-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold max-w-4xl">
            How Flower Brings Happiness
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Article Section */}
          <article className="flex-1 lg:max-w-3xl">
            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
              <span className="flex items-center">
                <User size={16} className="mr-2" /> Nisha karn
              </span>
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" /> 29/07/2025
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" /> 3 min read
              </span>
              <div className="flex items-center space-x-2 ml-auto">
                <Share2 size={16} className="text-gray-600" />
                <a href="#" className="text-blue-600 hover:text-blue-800"><Facebook size={20} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><Twitter size={20} /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Article Content */}
            <section className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Introduction</h2>
              <p>In today's fast-paced and digitally driven world, finding moments of peace and happiness can feel challenging. We are constantly surrounded by screens, deadlines, and social media, making it easy to lose touch with our natural environment. One simple and beautiful way to reconnect is through flowers.</p>
              <p>Flowers are a constant symbol of beauty, love, and joy for centuries. Whether given as a gift, planted in a garden, or simply admired in nature, they have a remarkable power to uplift our spirits and improve our mental well-being. This article explores the various ways that flowers bring happiness and support mental well-being, from their physical presence to their role in mindfulness and creative expression.</p>
              
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Flowers and Mental Health</h2>
              <p>Flowers play a significant and positive role in supporting mental health. Research has shown that the presence of flowers can reduce stress, anxiety, and depression. A study at the University of Michigan found that participants who were exposed to flowers reported feeling more positive and relaxed, and showed a decrease in heart rate.</p>
              
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Flowers and Digital Detox</h2>
              <p>In a world that is dominated by digital devices, flowers can provide a much-needed digital detox. They offer a tangible, real-world connection that helps us unplug and be present in the moment. When we interact with flowers, we engage our senses – we see their vibrant colors, smell their fragrances, and feel their soft petals.</p>

              <div className="flex justify-center my-8">
                <Image
                  src="/gallery/27.jpg"
                  alt="Flower brings happiness"
                  width={500}
                  height={700}
                  className="rounded-lg shadow-md"
                />
              </div>
              
              <h2 className="text-2xl font-semibold text-green-700 mb-4">A Great Way for Spend Time</h2>
              <p>Gardening with flowers can be very beneficial. It's also a great way to spend your free time. Flower arranging, pruning, and nurturing your own blooms provides a sense of accomplishment and purpose. These activities can not only be relaxing but also inspiring. They allow you to be present in the moment and forget about the worries of your day. It’s a wonderful way to connect with nature and unleash your creative spirit.</p>
              
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Zen Thinking and Mindfulness</h2>
              <p>Flowers can be used as a tool for zen thinking and mindfulness. In many cultures, especially in Buddhism and Japanese philosophy, flowers represent the impermanence and beauty of life. By adding flowers to your environment, you make a conscious choice to slow down and appreciate the small details. This act of mindfulness can help reduce stress, improve focus, and bring a greater sense of calm to your daily routine.</p>
              
              <h2 className="text-2xl font-semibold text-green-700 mb-4">Conclusion</h2>
              <p>While limited land and resources may appear as a constraint, they can also be a catalyst for creativity and innovation. Small-scale farmers can diversify their crops, plant higher-value crops, and adopt sustainable practices like permaculture and organic farming. By focusing on niche markets and direct-to-consumer sales, they can increase their income and build stronger relationships with their community. Through government grants, agricultural training programs, and research, these farmers can get the resources and support they need to thrive. Ultimately, by embracing innovation and collaboration, small-scale farmers can turn their challenges into opportunities and build resilient, productive farming enterprises that benefit both people and the planet.</p>
            </section>
          </article>

          {/* Ad Placeholder */}
          <aside className="w-full lg:w-80">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Adverts</h3>
              <div className="flex flex-col space-y-4">
                <Image
                  src="/blog/banner/1.jpg"
                  alt="Ad Placeholder"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      {/* Suggested Posts */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-8">Suggested Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <Link href="#" className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/blog/4/1.jpg"
                alt="Post 1 thumbnail"
                width={400}
                height={250}
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Nisha Karn • 29/07/2025 • 3 min read</p>
                <h3 className="text-xl font-semibold leading-tight text-gray-800 hover:text-green-600 transition-colors">
                  Why does farmer training matter in sustainable agriculture?
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Farmer training is essential for the adoption of sustainable agriculture...
                </p>
                <div className="mt-4 inline-flex items-center text-green-600 font-semibold">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
            
            {/* Post 2 */}
            <Link href="#" className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/blog/2/1.jpg"
                alt="Post 2 thumbnail"
                width={400}
                height={250}
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Sunita Karki • 29/07/2025 • 3 min read</p>
                <h3 className="text-xl font-semibold leading-tight text-gray-800 hover:text-green-600 transition-colors">
                  Why does farmer training matter in sustainable agriculture?
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Farmer training is essential for the adoption of sustainable agriculture...
                </p>
                <div className="mt-4 inline-flex items-center text-green-600 font-semibold">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
            
            {/* Post 3 */}
            <Link href="#" className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/blog/5/1.jpg"
                alt="Post 3 thumbnail"
                width={400}
                height={250}
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Rohan Gaur • 29/07/2025 • 3 min read</p>
                <h3 className="text-xl font-semibold leading-tight text-gray-800 hover:text-green-600 transition-colors">
                  Why does farmer training matter in sustainable agriculture?
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  Farmer training is essential for the adoption of sustainable agriculture...
                </p>
                <div className="mt-4 inline-flex items-center text-green-600 font-semibold">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BlogPage;
