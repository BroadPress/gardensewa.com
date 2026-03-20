import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// FeatureCard props and component
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex w-full sm:w-[280px] md:w-[300px] h-auto min-h-[200px] sm:min-h-[220px] md:h-[248px] flex-col items-center justify-center p-4 sm:p-6 bg-card rounded-xl transition-shadow duration-300">
    <div className="bg-white p-3 sm:p-4 rounded-2xl mb-3 sm:mb-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[76px] md:h-[76px] flex items-center justify-center">
      <img src={icon} />
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-title mb-2 text-center">
      {title}
    </h3>
    <p className="text-center text-text">{description}</p>
  </div>
);

// Main Component
const ChooseUs: React.FC = () => {
  const features = [
    {
      icon: "/icons/shield.png",
      title: "Trusted Gardeners",
      description: "All gardeners are verified and experienced.",
    },
    {
      icon: "/icons/solaruser.png",
      title: "Expert Professionals",
      description: "Garden landscaping and design services in Nepal",
    },
    {
      icon: "/icons/gardener.png",
      title: "Hire a Gardener",
      description: "Hire a gardener for your home in Kathmandu",
    },
    {
      icon: "/icons/dig.png",
      title: "Landscapping",
      description: "Best Landscapping & Park Planner in Nepal ",
    },
  ];

  const clients = [
    {
      image: "home/client/1.png",
      name: "Aloft Hotel Kathmandu",
      text: "A modern lifestyle hotel offering stylish stays, vibrant social spaces, and premium hospitality experiences in the heart of the city.",

    },
    {
      image: "home/client/2.png",
      name: "Bajeko Sekuwa",
      text: "A popular Nepali restaurant brand known for its authentic sekuwa, traditional flavors, and lively dining atmosphere across multiple locations.",


    },
    {
      image: "home/client/3.png",
      name: "Club Himalaya",
      text: "A scenic hilltop resort providing comfortable stays, panoramic mountain views, and relaxing hospitality for both leisure and adventure travelers.",


    },
    {
      image: "home/client/4.png",
      name: "Soaltee Westend Itahari",
      text: "A premium hotel in Itahari delivering refined accommodations, elegant ambiance, and high-quality hospitality services for business and leisure guests.",
      

      
    },
  ];

  return (
    <div className="font-sans antialiased mt-4 w-full max-w-[1300px]">
      {/* Why Choose Us Section */}
      <section className="mx-auto mb-20 sm:mb-32 lg:mb-40">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] font-bold text-secondary text-center mb-8 sm:mb-10 lg:mb-12 px-2">
          Why Choose Us?
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="mx-auto flex flex-col gap-6 mb-20 sm:mb-25 p-4">
        <div className="flex flex-row justify-between items-center mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-secondary">
            Our Clients
          </h2>
          <a
            href="/projects"
            className="border border-border max-sm:py-1 max-sm:px-3 py-2.5 px-6 rounded-md flex items-center justify-center text-secondary text-lg gap-1.5 hover:bg-secondary hover:text-white"
          >
            View All <ArrowRight />
          </a>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {clients.map((client, index) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <div
                key={index}
                className="bg-white border-2 border-border h-[327px] w-[290px] rounded-3xl p-4 sm:p-6 flex flex-col justify-between items-start text-left relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Logo - hidden on hover */}
                <div
                  className={`w-full flex justify-center h-full items-center transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-64 w-auto object-contain"
                  />
                </div>

                {/* Divider line - always visible */}
                <div className="flex w-full flex-col">
                  <span className="border-t-2 border-t-[#C7E9E7] w-full p-2"></span>

                  {/* Button - always in same position */}
                  
                </div>

                {/* Hover text content - positioned in the text area */}
                <div
                  className={`absolute left-4 sm:left-6 right-4 sm:right-6 flex flex-col justify-center transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8"
                  }`}
                  style={{
                    bottom: "150px",
                  }}
                >
                  <div className="text-green-600 text-4xl sm:text-5xl font-bold leading-none mb-2">
                    "
                  </div>
                  <p className="text-black text-sm sm:text-base leading-relaxed">
                    {client.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
