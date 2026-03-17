"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
// Constants
const QUICK_LINKS = [
  { href: "https://biratinfo.com/author/gardensewa", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/partners", label: "Our Partners" },
  { href: "/partnership", label: "Become a Partner" },
];

const HELP_LINKS = [
  { href: "/tos", label: "Terms and Conditions" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const NEWS_ITEMS = [
  {
    id: 1,
    image: "/image/navbar/navimg1.png",
    title: "How Flower Brings Happiness",
    author: "Aakash Thapa",
    date: "29/07/2025",
  },
  {
    id: 2,
    image: "/image/navbar/navimg2.png",
    title: "The Blooming Business of GardenSewa",
    author: "Thiranjan Sharma",
    date: "29/07/2025",
  },
];

const SOCIAL_LINKS = [
  { src: "/image/navbar/fb.png", alt: "Facebook" },
  { src: "/image/navbar/ld.png", alt: "LinkedIn" },
  { src: "/image/navbar/twitter.png", alt: "Twitter" },
];

// Reusable Components
type LinkWithArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const LinkWithArrow = memo(
  ({ href, children, className = "" }: LinkWithArrowProps) => (
    <Link
      href={href}
      className={`group text-gray-600 hover:text-green-600 transition-colors text-sm flex items-center ${className}`}
    >
      <ArrowRight className="w-3 h-3 mr-1 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
      <span>{children}</span>
    </Link>
  ),
);

LinkWithArrow.displayName = "LinkWithArrow";

type NewsItemProps = {
  item: {
    id: number;
    image: string;
    title: string;
    author: string;
    date: string;
  };
  isDesktop?: boolean;
};

const NewsItem = memo(({ item, isDesktop = false }: NewsItemProps) => (
  <div className="flex gap-3 items-start">
    <Image
      src={item.image}
      alt={item.title}
      width={isDesktop ? 50 : 60}
      height={isDesktop ? 42 : 50}
      className={`rounded flex-shrink-0 ${
        isDesktop ? "w-[60px] h-[50px]" : ""
      }`}
    />
    <div className="flex-1 min-w-0">
      <h5 className="text-sm font-medium text-gray-900 mb-1 leading-tight line-clamp-2">
        {item.title}
      </h5>
      <p className="text-xs text-gray-500">
        By {item.author} • {item.date}
      </p>
    </div>
  </div>
));

NewsItem.displayName = "NewsItem";

type LinksListProps = {
  title: string;
  links: { href: string; label: string }[];
  className?: string;
};

const LinksList = memo(({ title, links, className = "" }: LinksListProps) => (
  <div className={className}>
    <h4 className="font-semibold text-base mb-4 text-body lg:text-[18px] lg:mb-3">
      {title}
    </h4>
    <ul className="space-y-2 lg:space-y-0.5">
      {links.map((link) => (
        <li key={link.href}>
          <LinkWithArrow
            href={link.href}
            className="text-sm lg:text-[18px] text-text"
          >
            {link.label}
          </LinkWithArrow>
        </li>
      ))}
    </ul>
  </div>
));

LinksList.displayName = "LinksList";

type AppStoreButtonsProps = {
  isMobile?: boolean;
};

const AppStoreButtons = memo(({ isMobile = false }: AppStoreButtonsProps) => (
  <div
    className={`gap-2 sm:gap-3 flex ${
      isMobile ? "flex-col justify-center" : "flex-row items-start"
    }`}
  >
    <Image
      src="/image/home/footer/app-store.png"
      alt="App Store"
      width={isMobile ? 150 : 120}
      height={isMobile ? 60 : 33}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    />
    <Image
      src="/image/home/footer/play-store.png"
      alt="Google Play"
      width={isMobile ? 150 : 120}
      height={isMobile ? 60 : 33}
      className="cursor-pointer hover:opacity-80 transition-opacity"
    />
  </div>
));

AppStoreButtons.displayName = "AppStoreButtons";

const BrandInfo = memo(() => (
  <div className="mr-10 w-[250px]">
    <div className="flex items-center mb-3">
      <Image
        src="/image/logo/gardensewa.png"
        alt="Gardensewa"
        width={40}
        height={40}
        priority
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
      <p className="ml-1 text-lg sm:text-xl text-primary font-bold">
        GardenSewa
      </p>
    </div>
    <p className="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed">
      GardenSewa is your one-stop solution for plants, gardening services, and
      green lifestyle essentials.
    </p>
    <AppStoreButtons />
  </div>
));

BrandInfo.displayName = "BrandInfo";

const NewsletterSection = memo(() => (
  <div
    className="absolute top-0 left-0 right-0 z-10"
    style={{ transform: "translateY(-90.5px)" }}
  >
    <div
      className="bg-primary text-white px-4 sm:px-8 mx-2 sm:mx-4 md:mx-28 rounded-2xl shadow-2xl"
      style={{ minHeight: "141px", height: "auto" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 py-4 sm:py-6 md:h-full">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-[52px] font-semibold leading-tight">
            Subscribe Newsletter
          </h2>
          <p className="text-sm sm:text-base mt-2">
            Get updates on services, offers, and plant tips straight to your
            inbox.
          </p>
        </div>
        <form className="flex bg-white rounded-full overflow-hidden w-full max-w-sm max-sm:w-[80%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 sm:px-4 py-2 w-full text-black font-bold focus:outline-none h-[44px] sm:h-[52px] text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="buttonColorFill text-white w-[70px] sm:w-[85px] px-3 sm:px-4 py-2 rounded-full my-1 mx-1 flex items-center justify-center transition-all duration-300"
            aria-label="Subscribe to newsletter"
          >
            <ArrowRight className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]" />
          </button>
        </form>
      </div>
    </div>
  </div>
));

NewsletterSection.displayName = "NewsletterSection";

const MobileLayout = memo(() => (
  <div className="block lg:hidden">
    {/* Get the Latest News - First on mobile */}
    <div className="mb-8">
      <h4 className="font-semibold text-base mb-4 text-gray-900">
        Get the Latest News
      </h4>
      <div className="space-y-4">
        {NEWS_ITEMS.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
      </div>
    </div>

    {/* Links Section */}
    <div className="grid grid-cols-2 gap-6 mb-8">
      {/* Left Column */}
      <div className="space-y-6">
        <LinksList title="Quick Links" links={QUICK_LINKS} />
      </div>

      {/* Right Column */}
      <div className="space-y-6 flex flex-col justify-between">
        <div className="flex flex-col gap-3 h-full w-full justify-center">
          <AppStoreButtons isMobile />
        </div>
        <LinksList title="Browse More" links={HELP_LINKS} />
      </div>
    </div>
  </div>
));

MobileLayout.displayName = "MobileLayout";

const DesktopLayout = memo(() => (
  <div className="hidden lg:flex flex-wrap justify-between">
    <BrandInfo />
    <LinksList title="Quick Links" links={QUICK_LINKS} className="w-[150px]" />

    <LinksList title="Browse More" links={HELP_LINKS} className="col-span-2" />

    {/* Get the Latest News */}
    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
      <h4 className="font-semibold text-sm sm:text-xl mb-3 text-body">
        Latest Updates
      </h4>
      <div className="space-y-3">
        {NEWS_ITEMS.map((item) => (
          <NewsItem key={item.id} item={item} isDesktop />
        ))}
      </div>
    </div>
  </div>
));

DesktopLayout.displayName = "DesktopLayout";

const SocialIcons = memo(() => (
  <div className="flex gap-2 sm:gap-3 max-md:hidden">
    {SOCIAL_LINKS.map((social, index) => (
      <div
        key={social.alt}
        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
      >
        <Image
          src={social.src}
          alt={social.alt}
          width={30}
          height={30}
          className="w-8 sm:h-8"
        />
      </div>
    ))}
  </div>
));

SocialIcons.displayName = "SocialIcons";

// Main Footer Component
const Footer = memo(() => {
  return (
    <div className="relative">
      <footer
        className="bg-card pt-24 min-h-[502px] xl:min-h-[400px]"
        style={{ height: "auto" }}
      >
        <NewsletterSection />

        <div className="max-w-[1200px] mx-auto flex flex-col justify-between h-full">
          {/* Main Footer Content */}
          <div className="text-sm text-gray-800 mb-6 sm:mb-8 max-xl:p-10">
            <MobileLayout />
            <DesktopLayout />
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 border-t border-border pt-4 pb-4 mt-auto">
            <div className="text-xs sm:text-sm text-text text-center md:text-left w-full">
              Copyright © SRIYOG Consulting Pvt. Ltd. All Rights Reserved.
            </div>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
