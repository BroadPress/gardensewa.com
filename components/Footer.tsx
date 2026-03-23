"use client";

import Link from "next/link";
import Image from "next/image";

const QUICK_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/partners", label: "Our Partners" },
  { href: "/partnership", label: "Become a Partner" },
];

const HELP_LINKS = [
  { href: "/career", label: "Career" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Service" },
];

const Footer = () => {
  return (
    <footer className="relative text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/services/1.jpg"
          alt="Footer Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Top CTA */}
        <div className="max-w-[1200px] mx-auto px-6 py-14 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
            Explore exciting career opportunities at Garden Sewa.
          </h2>

          <Link
            href="/career"
            className="border border-green-400 px-6 py-3 text-sm hover:bg-green-400 hover:text-black transition rounded-full"
          >
            We are Hiring
          </Link>
        </div>

        {/* Main Grid */}
        <div className="max-w-[1200px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/gardensewa.png"
                alt="GardenSewa"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold">GardenSewa</span>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Your one-stop solution for plants, gardening services, and green lifestyle essentials.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src="/icons/facebook.svg"
                  alt="social"
                  width={24}
                  height={24}
                  className="cursor-pointer hover:opacity-70 transition"
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {HELP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-green-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h4 className="font-semibold mb-4 uppercase text-sm tracking-wide">
              Contact
            </h4>

            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Kathmandu, Nepal <br />
              +977-9852025735
            </p>

            <Link
              href="/contact"
              className="border border-green-400 px-5 py-2 text-sm hover:bg-green-400 hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-white text-gray-700 text-sm py-6 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-center md:text-left">
              © Copyright © Garden Sewa. All Rights Reserved. Built with : {" "}
              <a
                href="https://broadpress.org"
                target="_blank"
                rel="noopener"
                className="hover:text-green-600"
              >
                BroadPress
              </a>
            </p>

            <div className="flex items-center gap-4 whitespace-nowrap">
              <Link href="/privacy" className="hover:text-green-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-600">
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;