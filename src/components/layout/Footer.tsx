import React from "react";
import Image from "next/image";
import { FooterProps } from "@/types/api";
import { FaArrowRightLong } from "react-icons/fa6";
import { bigShoulders } from "@/app/layout";

const Footer: React.FC<FooterProps> = ({ data }) => {
  const customerLinks = [
    "Help Center",
    "My Account",
    "Track My Order",
    "Return Policy",
    "Gift Cards",
  ];

  const aboutLinks = [
    "Company Info",
    "Press Releases",
    "Careers",
    "Reviews",
    "Investor Relations",
  ];

  const quickLinks = [
    "Search",
    "Become a Reseller",
    "About Us",
    "Contact Us",
    "Terms of Service",
  ];

  const socialIcons = [
    { icon: "facebook", url: "#" },
    { icon: "x", url: "#" },
    { icon: "instagram", url: "#" },
    { icon: "youtube", url: "#" },
  ];

  return (
    <>
      {/* Guide Section */}
      <div className="relative">
        <Image
          width={100}
          height={100}
          priority
          unoptimized
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ft1-img.jpg"
          alt="Guide Background"
          className="w-full h-36 md:h-24 object-cover"
        />
        {/* Overlay */}
        <div className="absolute max-w-9xl mx-auto inset-0 bg-black bg-opacity-20 flex flex-col md:flex-row py-5 md:py-0 items-center gap-2 md:gap-5 px-4 md:px-6 lg:px-10">
          <h2
            className={`text-white text-2xl text-center md:text-left lg:text-3xl font-black ${bigShoulders.className}`}
          >
            LET US GUIDE YOU IN YOUR CHOICE OF WORKWEAR
          </h2>
          <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-44 md:pl-64 pr-4 overflow-hidden group">
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              CHECK OUT OUR GUIDES
            </span>
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              CHECK OUT OUR GUIDES
            </span>
            <FaArrowRightLong className="ml-2" />
          </span>
        </div>
      </div>
      <footer className="bg-[#1C1C1C] text-white pt-20">
        {/* Top Section */}
        <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 grid gap-7 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* Customer Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Customer
            </h4>
            <ul className="space-y-2">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/50 tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              About Us
            </h4>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/50 tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/50 tracking-wide">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Contact
            </h4>
            <div className="text-white/50 space-y-2 tracking-wide">
              <p>contact@example.com</p>
              <p>2972 Westheimer Rd. Santa Ana,</p>
              <p>Illinois 85486</p>
            </div>
          </div>

          {/* Mailing List */}
          <div className="col-span-2 lg:px-8">
            <h4
              className={`${bigShoulders.className} font-bold text-center md:text-left text-3xl uppercase mb-4`}
            >
              Subscribe to Our Mailing List
            </h4>
            <p className="text-white/50 tracking-wide mb-4">
              Our latest and greatest in your inbox, sign up now.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow py-3 px-4 rounded-l-full focus:outline-none text-black"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 md:mt-20"></div>
        <div
          className={`max-w-7xl px-10 py-5 mx-auto text-xl md:text-2xl flex flex-col md:flex-row justify-between items-center text-white font-bold ${bigShoulders.className}`}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="uppercase">Connect with us:</p>
            <div className="flex space-x-3"></div>
          </div>
          <div>
            <p>Customer Service: (084) 123-456 88</p>
          </div>
        </div>
        <div className="bg-white text-black flex flex-col md:flex-row gap-3 justify-center md:justify-between items-center py-5 max-w-9xl mx-auto px-4 md:px-6 lg:px-10">
          <p className="text-gray-500">
            Copyright © {new Date().getFullYear()} Axetor. All rights reserved
          </p>
          <Image
            src={
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/payment.jpg"
            }
            alt="Payment"
            width={100}
            height={100}
            priority
            unoptimized
            className="object-contain w-72"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
