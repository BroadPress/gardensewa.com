import Head from "next/head";
import React from "react";

// Define a TypeScript interface for a single testimonial
interface Testimonial {
  name: string;
  quote: string;
  image: string;
}

// Dummy data for the testimonials
const testimonials: Testimonial[] = [
  {
    name: "Smarika Karki",
    quote:
      "GardenSewa's garden maintenance service has been a lifesaver for our home. They keep our garden looking pristine year-round with regular upkeep, weeding, and plant health checks. Highly professional and reliable!",
    image: "/testimonials/1.png",
  },
  {
    name: "Gurpreet Singh",
    quote:
      "The landscaping team at GardenSewa transformed our backyard into a paradise. Their creative design and expert execution created beautiful pathways, flower beds, and water features that perfectly match our vision.",
    image: "/testimonials/2.png",
    
  },
  {
    name: "Bikash Adhikari",
    quote:
      "GardenSewa's plant care service is exceptional. They nursed our struggling plants back to health with proper fertilization, pest control, and expert advice. Our garden has never looked better!",
    image: "/testimonials/3.png",
  },
  {
    name: "Sanjay Pandey",
    quote:
      "Their lawn care service is top-notch. GardenSewa maintains our lawn with precision mowing, fertilization, and weed control. The results are always impressive and our neighbors are envious!",
    image: "/testimonials/4.png",
  },
  {
    name: "Prakash Thapa",
    quote:
      "GardenSewa's tree trimming service is professional and thorough. They safely pruned our overgrown trees, improving both safety and aesthetics. The team was knowledgeable and careful throughout the process.",
    image: "/testimonials/5.png",
  },
  {
    name: "Dipesh Thapa",
    quote:
      "The indoor plant service from GardenSewa has brought life to our office space. They selected perfect plants for our lighting conditions and provide ongoing care. Our workspace feels so much more vibrant!",
    image: "/testimonials/6.png",
  },
  {
    name: "Amit Poudel",
    quote:
      "GardenSewa's outdoor plant installation and care service is outstanding. They helped us choose the right plants for our climate and soil, and their maintenance keeps everything thriving beautifully.",
    image: "/testimonials/7.png",
  },
  {
    name: "Niraj Bhandari",
    quote:
      "Their garden cleanup service is incredibly thorough. GardenSewa cleared out years of accumulated debris, dead plants, and overgrown areas. Our garden is now clean, organized, and ready for new growth!",
    image: "/testimonials/8.png",
  },
  {
    name: "Kiran Basnet",
    quote:
      "For our resort, GardenSewa's comprehensive garden services have created stunning landscapes that wow our guests. From maintenance to special event setups, their work enhances our property's appeal tremendously.",
    image: "/testimonials/9.png",
  },
];

const PartnersTestimonials: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br mb-30">
       <Head>
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/default.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />

    </Head>
      {/* Hero Section */}
      <div className="bg-card-stroke-light px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto text-center">
          <nav className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Home <span className="mx-2">›</span>
            <span className="text-primary font-medium">Testimonials</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Testimonials
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We're here to help your garden grow smoothly. Whether you have
            questions, feedback, or want to partner with us, feel free to reach
            out.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          

          {/* Testimonials Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white  flex flex-col justify-center items-center rounded-2xl h-[500px] sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-20 h-20  rounded-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>

                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary transition-colors duration-300">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Content Container */}
                <div className="relative z-10 ">
                  {/* Profile Image */}
                  <div className="flex justify-center items-center mb-4 sm:mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white group-hover:border-green-100 transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 rounded-full bg-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center mb-4 sm:mb-6">
                    {testimonial.name}
                  </h4>

                  {/* Quote */}
                  <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed text-center relative">
                    <p className="italic">"{testimonial.quote}"</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersTestimonials;
