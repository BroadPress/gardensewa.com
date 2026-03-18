"use client";

import React, { useEffect, useState } from "react";

const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export default function Roadblock() {
  const [show, setShow] = useState(false);
  const [bannerSrc, setBannerSrc] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [closeEnabled, setCloseEnabled] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("roadblockShown")) return;

    const today = new Date();
    const monthName = monthNames[today.getMonth()];
    const day = today.getDate();

    const todayBanner = `/roadblock/${monthName}/${day}.jpg`;
    const defaultBanner = `/roadblock/default/default.jpg`;

    const loadBanner = (src: string) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setBannerSrc(src);
        setShow(true);
        sessionStorage.setItem("roadblockShown", "true");

        const countdownInterval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              setCloseEnabled(true);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      };

      img.onerror = () => {
        if (src !== defaultBanner) {
          loadBanner(defaultBanner);
        } else {
          setShow(false);
        }
      };
    };

    loadBanner(todayBanner);
  }, []);

  useEffect(() => {
    let autoCloseTimeout: NodeJS.Timeout;
    if (closeEnabled) {
      autoCloseTimeout = setTimeout(() => {
        setShow(false);
      }, 10000);
    }
    return () => clearTimeout(autoCloseTimeout);
  }, [closeEnabled]);

  if (!show || !bannerSrc) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] mx-2 sm:mx-0">
        <img
          src={bannerSrc}
          alt="Roadblock Banner"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        {closeEnabled ? (
          <button
            onClick={() => setShow(false)}
            className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold hover:bg-gray-200 transition"
          >
            &times;
          </button>
        ) : (
          <div className="absolute top-3 right-3 text-white text-lg font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
            {countdown}
          </div>
        )}
      </div>
    </div>
  );
}