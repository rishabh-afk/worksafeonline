import React from "react";
import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import ProductCard from "../common/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";

const ListingByCategory = ({
  products,
  sectionText,
  bannerImage,
}: {
  products: any;
  sectionText: string;
  bannerImage: string;
}) => {
  const text = sectionText.toLowerCase().split(" ");
  const text2 = text.slice(2).join(" ");
  const text1 = text.slice(0, 2).join(" ");

  return (
    <div className="py-10">
      <div className="relative">
        <Image
          alt="Image"
          width={100}
          height={100}
          src={bannerImage}
          className="object-cover w-screen h-screen"
          priority
          style={{
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
            overflow: "hidden",
          }}
          unoptimized
        />
        <div
          style={{
            clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
            overflow: "hidden",
          }}
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-500 ease-linear opacity-50 group-hover:opacity-40"
        ></div>
        <div
          className={`absolute animate-fade-up text-white inset-0 flex text-left flex-col justify-center max-w-9xl pl-10 ${bigShoulders.className}`}
        >
          <p className="text-9xl uppercase w-1/2 mb-5 font-bold">{text2}</p>
          <p className="text-2xl uppercase">
            {text1} {text2}
          </p>
          <span className="relative font-sans uppercase font-semibold w-fit mt-8 flex bg-white text-black space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-36 pr-4 overflow-hidden group">
            <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              Discover Now
            </span>
            <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              Discover Now
            </span>
            <FaArrowRightLong className="ml-2" />
          </span>
        </div>
      </div>
      <div className="max-w-9xl mx-auto p-10 pb-0">
        <div className="flex justify-between pb-10 items-center">
          <p
            className={`uppercase text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
          >
            {text1} <span className="text-primary">{text2}</span> products
          </p>
          <span className="relative flex space-x-2 items-center border rounded-full cursor-pointer hover:bg-primary hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
            <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
              View More
            </span>
            <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
              View More
            </span>
            <FaArrowRightLong className="ml-2" />
          </span>
        </div>
        <div className="grid grid-cols-4 gap-10 items-center">
          {products.map((product: any) => {
            return (
              <React.Fragment key={product.ID}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListingByCategory;