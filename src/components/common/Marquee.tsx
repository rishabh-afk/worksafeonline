import React from "react";
import Marquee from "react-fast-marquee";
import { bigShoulders } from "@/app/layout";
import { MdOutlineStarPurple500 } from "react-icons/md";

const marqueeItems = [
  "New Arrivals",
  "Premium Quality",
  "Limited Edition",
  "Exclusive Styles",
  "Timeless Fashion",
  "Handcrafted Elegance",
  "Trendsetting Designs",
  "Luxury Wear",
  "Signature Collection",
];

const MarqueeComponent: React.FC = () => {
  return (
    <div className="bg-primary py-8 w-full">
      <Marquee speed={100} gradient={false} className="flex items-center">
        {marqueeItems.map((item, index) => (
          <span
            key={index}
            className={`text-2xl lg:text-4xl font-medium text-black tracking-wide flex items-center gap-2 mx-4 ${bigShoulders.className}`}
          >
            {item}
            <MdOutlineStarPurple500 size={20} />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
