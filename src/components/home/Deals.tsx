"use client";

import React from "react";
import Image from "next/image";
import AnimatedActionButton from "../common/AnimatedActionButton";

const Deals = ({ offerBanner }: { offerBanner: any }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-9xl mx-auto px-5 pt-10 lg:pt-0 pb-20">
      <div
        title={offerBanner[0]?.ButtonLink}
        onClick={() => (window.location.href = offerBanner[0]?.ButtonLink)}
        className="relative w-full h-auto cursor-pointer"
      >
        <div className="relative w-full h-full">
          <Image
            priority
            unoptimized
            width={100}
            height={100}
            src={offerBanner[0]?.Banner}
            alt={offerBanner[0]?.LText ?? "Image"}
            className="object-contain w-full h-full bg-white rounded-lg"
          />
        </div>
        <div
          className={`absolute inset-0 flex flex-col justify-between p-5 md:p-10`}
        >
          <div className="text-left pl-12 md:pl-14 relative">
            <div className="absolute tracking-widest md:text-lg top-12 -rotate-90 text-pink-600 font-bold -left-8 md:-left-10">
              {offerBanner[0]?.LText}
            </div>
            <p className="text-7xl md:text-8xl text-stroke font-extrabold text-lime-500 leading-none">
              {offerBanner[0]?.RText1}
            </p>
            <p className="text-2xl font-extrabold text-gray-700">
              {offerBanner[0]?.RText2}
            </p>
          </div>
          <AnimatedActionButton
            href={offerBanner[0]?.ButtonLink}
            text={offerBanner[0]?.ButtonText}
            classes="uppercase md:text-lg font-semibold whitespace-nowrap py-6 w-[165px] hover:bg-primary bg-white text-black hover:text-black self-start"
            isLoading={false}
            type="submit"
          />
        </div>
      </div>

      <div
        title={offerBanner[1]?.ButtonLink}
        onClick={() => (window.location.href = offerBanner[1]?.ButtonLink)}
        className="relative w-full h-auto cursor-pointer"
      >
        <div className="relative w-full h-full">
          <Image
            priority
            height={100}
            width={100}
            unoptimized
            src={offerBanner[1]?.Banner}
            alt={offerBanner[1]?.LText ?? "Image"}
            className="object-contain w-full h-full bg-white rounded-lg"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black to-transparent rounded-lg transition-all duration-500 ease-linear opacity-70 group-hover:opacity-40"></div>

        {/* Content Layer */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-5 md:p-10`}
        >
          <div className="text-left uppercase pl-14 relative">
            <div className="absolute tracking-widest text-lg top-12 -rotate-90 text-[#a9bc41] font-bold -left-8 md:-left-10">
              {offerBanner[1]?.LText}
            </div>
            <p className="text-4xl font-extrabold text-white leading-none">
              {(() => {
                const text = offerBanner[1]?.RText1 || "";
                const parts = text.split(" ");
                if (parts.length < 3) return text;
                return (
                  <>
                    {parts.slice(0, 2).join(" ")} <br />
                    {parts.slice(2).join(" ")}
                  </>
                );
              })()}
            </p>
            <p className="text-2xl mt-5 font-extrabold text-white">
              {offerBanner[1]?.RText2}
            </p>
          </div>

          <AnimatedActionButton
            href={offerBanner[1]?.ButtonLink}
            text={offerBanner[1]?.ButtonText}
            classes="uppercase md:text-lg font-semibold whitespace-nowrap py-6 w-[165px] hover:bg-primary bg-white text-black hover:text-black self-start"
            isLoading={false}
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Deals;
