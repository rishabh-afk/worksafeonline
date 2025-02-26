"use client";

import { useState } from "react";
import { Product } from "@/types/api";
import { bigShoulders } from "@/app/layout";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const savePercent =
    ((product.ProductActualPrice - product.ProductSellingPrice) /
      product.ProductActualPrice) *
    100;
  const save = Math.round(savePercent * 10) / 10;
  return (
    <div className="">
      <p className="flex items-center">
        <span className="text-primary text-4xl font-bold">
          {product.ProductID}
        </span>
        <span className="px-3 py-1 ml-2 w-fit bg-gray-500 text-sm text-white rounded-full">
          Save {save}%
        </span>
      </p>
      <h1
        className={`text-3xl md:text-4xl pb-5 pt-3 font-black ${bigShoulders.className}`}
      >
        {product.ProductName}{" "}
      </h1>
      {/* <div className="flex flex-wrap text-gray-600 items-center gap-3 md:gap-5">
        <span className="pt-px">
          <span>Brands: </span>
          <span className="text-primary font-semibold">
            {product.productBrand}
          </span>
        </span>
        <Link
          href="#reviews"
          className="hover:underline hover:underline-offset-2"
        >
          <StarRating rating={product.reviewsCount} showText={true} />
        </Link>
        <div className="flex items-center gap-1 text-green-500">
          <BiCheck size={20} />
          <span className="rounded-full">{product.availability}</span>
        </div>
      </div> */}
      <div className="bg-gray-300 h-[1px]" />
      <p className={`mt-4 text-gray-600 ${isOpen ? "" : "line-clamp-3"}`}>
        {product.Detail}
      </p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-primary text-sm font-semibold underline underline-offset-2"
      >
        {isOpen ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ProductDetails;
