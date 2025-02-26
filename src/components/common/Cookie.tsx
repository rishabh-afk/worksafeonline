"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CookieModal from "./CookieModal";
import { useState, useEffect } from "react";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [openSetting, setOpenSettings] = useState(false);

  const toggleSettings = () => setOpenSettings(!openSetting);

  useEffect(() => {
    const cookie =
      typeof window !== "undefined" &&
      localStorage.getItem("COOKIE_POPUP_ACCEPTED");
    if (!cookie) {
      setIsVisible(true);
      setHasMounted(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("COOKIE_POPUP_ACCEPTED", "true");
  };

  const handleSettings = () => {
    toggleSettings();
  };

  if (!isVisible || !hasMounted) return null; // Prevent rendering on server

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
    >
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[100] rounded-2xl p-6 bg-gray-700 flex flex-col md:flex-row items-center gap-4">
        <CookieModal
          isVisible={openSetting}
          onClose={toggleSettings}
          handleAccept={handleAccept}
        />
        <div className="flex items-start gap-3">
          <span className="text-xl">🍪</span>
          <div>
            <h2 className="text-2xl text-white font-semibold">
              We use cookie files
            </h2>
            <p className="text-white/90 mt-4">
              We activate all cookies by default to ensure the proper
              functioning of our website, advertisements, and analytics
              according to the{" "}
              <Link
                href="/privacy-policy#cookies"
                className="text-blue-400 underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 md:mt-0">
          <button
            onClick={handleSettings}
            className="px-6 py-1.5 whitespace-nowrap font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
          >
            Settings
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-1.5 whitespace-nowrap font-medium text-white bg-primary hover:bg-primary/90 transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePopup;
