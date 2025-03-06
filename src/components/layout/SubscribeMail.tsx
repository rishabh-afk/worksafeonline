"use client";
import React from "react";
import { bigShoulders } from "@/app/layout";

const SubscribeMail = () => {
  return (
    <div className="col-span-2 lg:px-8">
      <h4
        className={`${bigShoulders.className} font-bold text-center md:text-left text-3xl uppercase mb-4`}
      >
        Subscribe to Our Mailing List
      </h4>
      <p className="text-white/50 tracking-wide hover:text-primary transition-all duration-200 ease-linear mb-4">
        Our latest and greatest in your inbox, sign up now.
      </p>
      <div className="flex items-center sm:w-auto">
        <input
          type="email"
          placeholder="Email address"
          className="rounded-l-full w-full focus:outline-none p-3 text-black"
        />
        <button className="bg-primary font-semibold hover:bg-yellow-500 text-black p-3 rounded-r-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeMail;
