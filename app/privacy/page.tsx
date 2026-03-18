"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

// This is the main component for the Privacy Policy page
const PrivacyPolicyPage = () => {
  // State to keep track of the currently active section in the table of contents
  const [activeSection, setActiveSection] = useState('introduction');

  // Use a useEffect hook to handle the scroll event and update the active section
  useEffect(() => {
    // Function to check which section is currently in view
    const handleScroll = () => {
      const sections = ['introduction', 'information-we-collect', 'how-we-use-your-information', 'data-protection', 'your-rights'];
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
    handleScroll(); // Call once on mount to set the initial active section

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle clicking on a link in the table of contents
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      // Smooth scroll to the clicked section
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContentsItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'information-we-collect', label: 'Information We Collect' },
    { id: 'how-we-use-your-information', label: 'How We Use Your Information' },
    { id: 'data-protection', label: 'Data Protection' },
    { id: 'your-rights', label: 'Your Rights' },
  ];

  return (
    <><div className="text-center mb-12 bg-green-50 p-12">
          <p className="text-sm text-gray-500 mb-2">Home &gt; <span className='ml-2 text-primary'>Privacy Policy</span></p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary p-2">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            How GardenSewa handles your data</p>
        </div>
    <div className="bg-white text-gray-800 font-sans">
      <Head>
        <title>Privacy Policy | Garden Seva</title>
        <meta name="description" content="Garden Seva Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/privacy.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
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
                      : 'hover:bg-gray-200 text-gray-600'
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At Garden Seva, we believe that your privacy is just as important as the peace and beauty we bring to your outdoor spaces. Whether you're browsing our website, booking a landscaping service, or contacting us for gardening support, we are committed to keeping your personal information safe, transparent, and under your control. The purpose of this privacy policy is to explain what information we collect, how we use it, and for what purposes. Please take a moment to read through this policy carefully to understand how we handle your information and your choices in managing it. By using our website or services, you agree to the practices described below.
            </p>
          </section>

          {/* Information We Collect Section */}
          <section id="information-we-collect" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ol className="list-decimal list-inside pl-4 space-y-2 text-gray-700">
              <li>
                <span className="font-semibold">Personal Information</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Location/address</li>
                  <li>Billing and payment information (processed securely by third-party services)</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Usage Data</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited</li>
                  <li>Time and date of visit</li>
                  <li>Device type</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Cookies and Tracking Technologies</span>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>We use cookies to enhance your experience, improve our website, and understand user behavior. You can disable cookies via your browser settings.</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* How We Use Your Information Section */}
          <section id="how-we-use-your-information" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
              <li>Provide and manage our gardening and landscaping services</li>
              <li>Communicate with you about appointments, inquiries, and promotions</li>
              <li>Improve the functionality and user experience of our website</li>
              <li>Process transactions securely</li>
              <li>Respond to customer support requests</li>
              <li>Analyze site usage and trends</li>
            </ul>
          </section>

          {/* Data Protection Section */}
          <section id="data-protection" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, rent, or lease your personal information to third parties. We may share your data only in the following situations:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
              <li>With trusted third-party service providers for payment processing, analytics, and customer support</li>
              <li>When required by law or in response to legal processes</li>
              <li>To protect the rights, property, or safety of Garden Seva, our users, or others</li>
            </ul>
          </section>

          {/* Your Rights Section */}
          <section id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or updates to your data</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:gardensewa@sriyog.com" className="text-primary hover:underline">gardensewa@sriyog.com</a>
            </p>
          </section>
        </main>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicyPage;
