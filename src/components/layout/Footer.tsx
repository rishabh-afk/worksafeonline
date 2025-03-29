import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Get } from "@/api/generalApi";
import SocialConnect from "./SocialLinks";
import { bigShoulders } from "@/app/layout";
import SubscribeMail from "./SubscribeMail";
import AnimatedActionButton from "../common/AnimatedActionButton";

const Footer = async () => {
  // const customerLinks = [
  //   { label: "Help Center", href: "/faqs" },
  //   { label: "My Account", href: "/my-account" },
  //   { label: "Track My Order", href: "/order-tracking" },
  // ];

  const aboutLinks = [
    { label: "Company Info", href: "/about-us" },
    { label: "Blogs", href: "/blogs" },
  ];

  const quickLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  // const socialIcons = [
  //   { icon: "facebook", url: "#" },
  //   { icon: "x", url: "#" },
  //   { icon: "instagram", url: "#" },
  //   { icon: "youtube", url: "#" },
  // ];

  const data = await Get("api/ContactDetail1?app=Worksafe");
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
            className={`text-white uppercase text-2xl text-center md:text-left lg:text-3xl font-black ${bigShoulders.className}`}
          >
            Check our Special Offers
          </h2>
          {/* <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-44 md:pl-64 pr-4 overflow-hidden group">
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              CHECK OUT OUR GUIDES
            </span>
            <span className="absolute text-xs md:text-sm font-semibold whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              CHECK OUT OUR GUIDES
            </span>
            <FaArrowRightLong className="ml-2" />
          </span> */}
          <AnimatedActionButton
            href="/collection"
            text="CLICK HERE TO VIEW"
            classes="md:text-lg font-extrabold whitespace-nowrap py-6 text-wider w-[280px] hover:bg-primary bg-white text-black hover:!text-white"
            isLoading={false}
            type="submit"
          />
        </div>
      </div>

      <footer className="bg-[#1C1C1C] text-white pt-14 mb-16 md:mb-20 lg:mb-0">
        {/* Top Section */}
        <div className="max-w-9xl mx-auto px-4 md:px-6 lg:px-10 grid gap-7 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Customer Links */}
          {/* <div>
            <h4
              className={`${bigShoulders.className} font-bold text-2xl uppercase mb-4`}
            >
              Customer
            </h4>
            <ul className="space-y-2">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

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
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear"
                  >
                    {link.label}
                  </Link>
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
              <p>
                <a
                  href={`mailto:${data.Email}`}
                  className="hover:text-primary text-xs md:text-base underline"
                >
                  {data.Email}
                </a>
              </p>
              <p>{data.StoreLocation || "Default headquarter address"}</p>
            </div>
          </div>

          {/* Mailing List */}
          <SubscribeMail />
        </div>

        <div className="border-t border-white/20 mt-14" />

        {/* social links */}
        <SocialConnect phone={data?.Telephone} />

        <div className="flex flex-col justify-center items-center w-full relative">
          <div className="bg-white pt-6 w-full text-black flex flex-col md:flex-row gap-3 justify-center items-center py-5 max-w-9xl mx-auto px-4 md:px-6 lg:px-10">
            <p className="text-gray-500">
              Copyright © {new Date().getFullYear()} WorkSafeOnline. All rights
              reserved
            </p>
            {/* <Image
              src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/payment.jpg"
              alt="Payment"
              width={100}
              height={100}
              priority
              unoptimized
              className="object-contain w-72"
            /> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
