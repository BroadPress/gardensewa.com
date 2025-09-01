import type { Metadata } from "next";
import { Alef as AlefFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Floating from "@/components/floating";
import Script from "next/script";

const alef = AlefFont({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // required for Alef
});

export const metadata: Metadata = {
  title: "Gardensewa | Your Trusted Gardening & Nursery Partner",
  description: "gardensewa.com",
  icons: "/gardensewa.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alef.className}>
      <head>
<<<<<<< HEAD
        <meta
          name="keywords"
          content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa"
        />
        <meta property="og:url" content="https://www.gardensewa.com/" />
        <meta property="og:title" content="Gardening Services in Nepal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!"
        />
        <meta
          property="og:image"
          content="https://www.gardensewa.com/og/home.jpg"
        />
        <meta property="og:image:alt" content="Gardening Services in Nepal" />
      </head>

=======
      <meta name="keywords" content="gardening services Nepal, garden maintenance, landscaping Nepal, plant care, hotel landscaping, resort garden services, indoor plants Nepal, outdoor plants Nepal, garden cleanup, regular garden maintenance, Nepal gardeners, GardenSewa, garden, plants"/>
      <meta property="og:url" content="https://www.gardensewa.com/" />
      <meta property="og:title" content="Gardening Services in Nepal" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Gardensewa.com offers expert gardening services, plant care, landscaping, and garden maintenance to help transform your outdoor spaces into beautiful, vibrant gardens. Get professional assistance with lawn care, tree trimming, and more!" />
      <meta property="og:image" content="https://www.gardensewa.com/og/home.jpg" />
      <meta property="og:image:alt" content="Gardening Services in Nepal" />
     </head>
>>>>>>> 9529f65f7e58e0a8c1be0545e6e1bfc6a859f290
      <body>
        <Header />
        <main className="flex-grow">{children}</main>
        <Floating />
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-23X6YLFZZW"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-23X6YLFZZW');
          `}
        </Script>
      </body>
    </html>
  );
}
