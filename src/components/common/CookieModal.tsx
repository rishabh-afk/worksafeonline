"use client";

import Link from "next/link";
import Modal from "../common/Modal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CookieSettings = ({
  onClose,
  handleAccept,
}: {
  onClose: any;
  handleAccept: any;
}) => {
  const [accepted, setAccepted] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [cookies, setCookies] = useState({
    necessary: true,
    analytical: false,
  });

  const toggleExpand = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  const toggleCookie = (key: "analytical") => {
    setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAcceptAll = () => {
    setAccepted(true);
    setCookies({ necessary: true, analytical: true });
  };

  const handleRejectAll = () => {
    setAccepted(false);
    setCookies({ necessary: true, analytical: false });
  };

  const handleSetting = () => {
    setExpanded(null);
    setCookies({ necessary: true, analytical: true });
    localStorage.setItem("COOKIE_POPUP_ACCEPTED", "true");
    localStorage.setItem("COOKIE_POPUP_ANALYTICAL", "true");
    onClose();
    handleAccept();
  };

  useEffect(() => {
    const accepted =
      localStorage.getItem("COOKIE_POPUP_ACCEPTED") === "true" &&
      localStorage.getItem("COOKIE_POPUP_ANALYTICAL") === "true";
    if (accepted) {
      setExpanded(null);
      setCookies({ necessary: true, analytical: true });
      onClose();
      handleAccept();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-5">
        Cookie Files Settings
      </h2>
      <p className="text-gray-600 mt-2">
        We use cookies to provide you with access to all website features as
        well as to analyze, personalize, and improve user experience. In this
        block, you can change the cookie settings or accept all. Read our{" "}
        <Link
          href={"/privacy-policy#cookies"}
          className="text-blue-500 underline cursor-pointer"
        >
          privacy policy
        </Link>
        .
      </p>

      {/* Cookie Options */}
      <div className="mt-4 space-y-2">
        {/* Necessary Cookies */}
        <div className="border p-3 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("necessary")}
          >
            <div className="flex gap-2 items-center">
              {expanded === "necessary" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <span className="font-bold">Necessary cookie files</span>
            </div>
            <div className="flex items-center">
              <input
                disabled
                type="checkbox"
                checked={cookies.necessary}
                className="min-h-4 min-w-4"
                onChange={() => toggleCookie("analytical")}
              />
            </div>
          </div>
          {expanded === "necessary" && (
            <p className="text-gray-500 text-sm mt-2">
              The purpose of these cookies is to deliver the requested service,
              application, or resource. Any of your requests cannot be done
              properly without these cookies. In general, their purpose is to
              manage the actions you perform on our website, e.g., they help you
              get visual elements, use page resources, sign in to your account.
              In addition to setting up essential functions, with these cookies,
              we can ensure the security and efficiency of our website.
            </p>
          )}
        </div>

        {/* Analytical Cookies */}
        <div className="border p-3 rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand("analytical")}
          >
            <div className="flex gap-2 items-center">
              {expanded === "analytical" ? (
                <IoIosArrowUp />
              ) : (
                <IoIosArrowDown />
              )}
              <span className="font-bold">Analytical cookie files</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="min-h-4 min-w-4"
                checked={cookies.analytical}
                onChange={() => toggleCookie("analytical")}
              />
            </div>
          </div>
          {expanded === "analytical" && (
            <p className="text-gray-500 text-sm mt-2">
              The purpose of these cookies is to provide quantitative data on
              user interactions with our website. Also, these cookie files
              collect information that is used to track website performance.
              Usually, they do not collect sensitive information and provide us
              only with general statistics, like the number of visitors to
              different pages, traffic sources, and conversion rate to help us
              improve website performance. By disabling these cookies, we will
              not be able to identify you as a visitor.
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handleSetting}
          className="bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition"
        >
          Save Settings
        </button>
        <button
          type="button"
          onClick={() => {
            if (accepted) handleRejectAll();
            else handleAcceptAll();
          }}
          className=" text-white transition"
        >
          {accepted ? (
            <span className="bg-red-600 px-4 py-2.5 font-medium">
              ✖ Reject All
            </span>
          ) : (
            <span className="bg-green-600 px-4 py-2.5 font-medium">
              ✓ Accept All
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const CookieModal = ({
  onClose,
  isVisible,
  handleAccept,
}: {
  onClose: any;
  handleAccept: any;
  isVisible: boolean;
}) => {
  return (
    <Modal
      onClose={onClose}
      removePadding={true}
      isVisible={isVisible}
      showCloseButton={false}
      width="w-[90%] lg:w-1/2"
    >
      <CookieSettings handleAccept={handleAccept} onClose={onClose} />
    </Modal>
  );
};

export default CookieModal;
