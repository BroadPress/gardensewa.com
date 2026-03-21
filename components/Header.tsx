"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "Gallery", link: "/gallery" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if the current pathname is active
  const isActive = (href: string) => pathname === href;

  // Handle scroll event with debouncing to fix glitching
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 50);
  }, []);

  useEffect(() => {
    // Throttle scroll events to prevent glitching
    let timeoutId: NodeJS.Timeout;

    const throttledScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10); // Small delay to smooth transitions
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest(".mobile-menu-container")) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <section
        className={`header bg-primary border-b border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled
            ? "h-0 py-0 opacity-0 transform -translate-y-full"
            : "h-auto py-1 sm:py-1.5 md:py-2 opacity-100 transform translate-y-0"
        }`}
      >
        <div className="container max-w-[1250px] mx-auto flex flex-col sm:flex-row justify-between items-center px-3 sm:px-4 md:px-5 lg:px-6 text-white">
          <div className="contact flex gap-1 text-xs sm:text-sm md:text-[14px] mb-2 sm:mb-0">
            <a
              className="hover:text-green-200 transition-colors duration-200"
              href="tel:+9779852025735"
            >
              Helpline Number: +977-9852025735
            </a>
          </div>

          <div className="gap-3 items-center hidden sm:flex">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/gardensewa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            aria-label="Follow us on Facebook"
          >
            <img
              src="/icons/facebook.svg"
              alt="Facebook"
              className="w-4 h-4 object-contain transition-transform duration-300 group-hover:brightness-125"
            />
          </a>

          {/* BroadPress */}
          <a
            href="https://biratinfo.com/author/gardensewa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            aria-label="View Our Blog in BroadPress"
          >
            <img
              src="/icons/broadpress.svg"
              alt="BroadPress"
              className="w-4 h-4 object-contain transition-transform duration-300 group-hover:brightness-125"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/gardensewa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            aria-label="Follow us on Instagram"
          >
            <img
              src="/icons/instagram.svg"
              alt="Instagram"
              className="w-4 h-4 object-contain transition-transform duration-300 group-hover:brightness-125"
            />
          </a>

          {/* Pinterest */}
          <a
            href="https://www.pinterest.com/gardensewa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-2 rounded-full bg-white/10 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg backdrop-blur-sm"
            aria-label="Connect with us on Pinterest"
          >
            <img
              src="/icons/pinterest.svg"
              alt="Pinterest"
              className="w-4 h-4 object-contain transition-transform duration-300 group-hover:brightness-125"
            />
          </a>
        </div>
        </div>
      </section>

      {/* Main Nav */}
      <section className="nav-header bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto max-w-[1250px] px-3 sm:px-4 md:px-5 lg:px-6">
          <div className="nav-bar flex justify-between items-center py-2 sm:py-3 md:py-4">
            {/* Logo */}
            <div className="logo flex items-center">
              <Link href="/" className="flex items-center group">
                <Image
                  className="cursor-pointer transition-transform duration-200 group-hover:scale-105"
                  src="/logo/gardensewa.png"
                  alt="Gardensewa"
                  width={50}
                  height={50}
                  sizes="(max-width: 640px) 40px, (max-width: 768px) 50px, 75px"
                  priority
                />
                <p className="cursor-pointer text-text ml-2 text-base sm:text-lg md:text-xl lg:text-[28px] font-semibold">
                  GardenSewa
                </p>
              </Link>
            </div>

            {/* Desktop Nav Links */}
            <nav className="nav-list hidden lg:flex gap-2 xl:gap-[12px]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`transition-all duration-200 rounded-md px-2 xl:px-[14px] py-1 xl:py-[2px] text-sm xl:text-lg font-medium ${
                    isActive(item.link)
                      ? "buttonColorFill text-white"
                      : "hover:text-white text-gray-700 hover:bg-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              {/* Desktop Book Service Button */}
              <Link href="/book" className="hidden lg:block">
                <button className="cursor-pointer buttonColorFill hover:shadow-lg text-white py-2 px-3 xl:px-4 rounded-md font-bold text-sm xl:text-base transition-all duration-200 hover:scale-105">
                  Book a Service
                </button>
              </Link>

              {/* Mobile Hamburger */}
              <div className="lg:hidden mobile-menu-container">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle Menu"
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                    <span
                      className={`absolute block w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                        menuOpen ? "rotate-45 top-3" : "top-1"
                      }`}
                    />
                    <span
                      className={`absolute block w-full h-0.5 bg-gray-700 transform transition-all duration-300 top-3 ${
                        menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute block w-full h-0.5 bg-gray-700 transform transition-all duration-300 ${
                        menuOpen ? "-rotate-45 top-3" : "top-5"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-transparent"
          onClick={() => setMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`absolute w-full  bg-white bg-opacity-95 backdrop-blur-sm rounded-t-none rounded-xl shadow-2xl transform transition-all duration-300 mobile-menu-container ${
            menuOpen ? "translate-y-0 scale-100" : "-translate-y-8 scale-95"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <nav className="text-center pb-4 sm:pb-6">
            <ul className="space-y-1 px-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                      isActive(item.link)
                        ? "text-white bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] font-semibold shadow-md"
                        : "text-gray-700 hover:text-[#009000] hover:bg-green-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Book Service Button */}
            <div className="px-4 mt-4 sm:mt-6">
              <Link href="https://d.sriyog.com/gSewa" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-gradient-to-l from-[#009000] via-[#009800] to-[#00C400] hover:shadow-lg text-white py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200">
                  Book a Service
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
