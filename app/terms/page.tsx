"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

const TermsAndConditionsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'services-and-bookings',
        'cancellations-and-refunds',
        'user-responsibilities',
        'intellectual-property',
        'limitation-of-liability',
        'changes-to-terms',
        'contact-information',
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContentsItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'services-and-bookings', label: 'Services & Bookings' },
    { id: 'cancellations-and-refunds', label: 'Cancellations & Refunds' },
    { id: 'user-responsibilities', label: 'User Responsibilities' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'limitation-of-liability', label: 'Limitation of Liability' },
    { id: 'changes-to-terms', label: 'Changes to Terms' },
    { id: 'contact-information', label: 'Contact Information' },
  ];

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
      <div className="text-center mb-12 bg-green-50 p-12">
        <p className="text-sm text-gray-500 mb-2">
          Home &gt; <span className="ml-2 text-primary">Terms and Conditions</span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-primary p-2">Terms and Conditions</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Understand the rules and guidelines of using GardenSewa's services
        </p>
      </div>
      <div className="bg-white text-secondary">
        <Head>
          <title>Terms and Conditions | Garden Seva</title>
          <meta name="description" content="Garden Seva Terms and Conditions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex flex-col md:flex-row min-h-screen max-w-7xl mx-auto p-8">
          {/* Left Column: Table of Contents */}
          <nav className="md:w-1/4 p-8 bg-green-50 sticky top-0 h-full">
            <h2 className="text-xl font-bold text-secondary mb-6">Table of Contents</h2>
            <ul>
              {tableOfContentsItems.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`block p-2 rounded-lg transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'border-l-4 border-primary text-secondary font-bold'
                        : 'hover:bg-green-200 text-secondary'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Column: Main Content */}
          <main className="md:w-3/4 p-8">
            {/* Introduction Section */}
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your access and use of GardenSewa's website and services. By booking a service or browsing our website, you agree to comply with these terms.
              </p>
            </section>

            {/* Services & Bookings Section */}
            <section id="services-and-bookings" className="mb-12">
              <h2 className="text-2xl font-bold text-secondaey mb-4">Services & Bookings</h2>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
                <li>GardenSewa provides gardening, landscaping, plant delivery, and maintenance services.</li>
                <li>Bookings must be made through our official website or support channels.</li>
                <li>Prices listed are subject to change based on service scope, location, or availability.</li>
                <li>Payment may be required in advance for certain services.</li>
              </ul>
            </section>

            {/* Cancellations & Refunds Section */}
            <section id="cancellations-and-refunds" className="mb-12">
              <h2 className="text-2xl font-bold text-secondaey mb-4">Cancellations & Refunds</h2>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
                <li>You may cancel or reschedule a booking at least 24 hours in advance.</li>
                <li>Late cancellations (less than 24 hours) may not be eligible for a refund.</li>
                <li>If GardenSewa cancels a service due to weather or unforeseen issues, you will receive a full refund or rescheduling option.</li>
              </ul>
            </section>

            {/* User Responsibilities Section */}
            <section id="user-responsibilities" className="mb-12">
              <h2 className="text-2xl font-bold text-secondaey mb-4">User Responsibilities</h2>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
                <li>Ensure accurate information is submitted during booking.</li>
                <li>Provide safe and easy access to the service location at the scheduled time.</li>
                <li>Avoid any behavior that might endanger GardenSewa staff or damage tools/equipment.</li>
              </ul>
            </section>

            {/* Intellectual Property Section */}
            <section id="intellectual-property" className="mb-12">
              <h2 className="text-2xl font-bold text-secondaey mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, images, and branding on this website are the property of GardenSewa. Reuse or reproduction without permission is prohibited.
              </p>
            </section>

            {/* Limitation of Liability Section */}
            <section id="limitation-of-liability" className="mb-12">
              <h2 className="text-2xl font-bold text-secondaey mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                GardenSewa is not responsible for:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
                <li>Delays due to natural causes (e.g., rain, road closures).</li>
                <li>Damages resulting from customer misuse of plants, tools, or instructions.</li>
                <li>Services requested outside the defined scope.</li>
              </ul>
            </section>

            {/* Changes to Terms Section */}
            <section id="changes-to-terms" className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                GardenSewa reserves the right to modify these Terms at any time. Updates will be posted on this page, and continued use of the website implies acceptance.
              </p>
            </section>

            {/* Contact Information Section */}
            <section id="contact-information" className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                For questions or concerns about our Terms and Conditions, please contact:
              </p>
              <p className="text-primary mt-2">
                <a href="mailto:gardensewa@sriyog.com" className="hover:underline">gardensewa@sriyog.com</a>
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditionsPage;
