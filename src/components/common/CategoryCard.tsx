import React from "react";
import Link from "next/link";
import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";

const CategoryCard = ({ category }: { category: any }) => {
  return (
    <div className="relative rounded-xl overflow-hidden cursor-pointer group">
      <Image
        width={400}
        height={400}
        alt={category?.menu_name}
        src={category?.thumbail_Image}
        className="w-full h-full object-contain object-center transition-all duration-200 ease-linear group-hover:scale-125"
      />
      <Link passHref href={"/shop?category=" + category?.menu_id}>
        <span className="absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-500 ease-linear opacity-50 group-hover:opacity-40"></span>
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-transparent backdrop-blur-md w-full p-4 rounded-b-lg text-white">
        <h3
          className={`text-2xl font-black mb-3 uppercase ${bigShoulders.className}`}
        >
          <Link passHref href={"/shop?category=" + category?.menu_id}>
            {category.menu_name}
          </Link>
        </h3>
        <Link
          passHref
          href={"/shop?category=" + category?.menu_id}
          className="relative flex space-x-2 w-fit items-center border transition-all duration-200 ease-in-out rounded-full cursor-pointer bg-primary group-hover:bg-white group-hover:text-black group-hover:border-none border-primary py-2 pl-24 pr-2 overflow-hidden group"
        >
          <span className="absolute whitespace-nowrap text-sm left-4 w-full transition-all duration-200 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
            View More
          </span>
          <span className="absolute whitespace-nowrap text-sm left-2 w-full transition-all duration-200 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
            View More
          </span>
          <FaArrowRightLong className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
