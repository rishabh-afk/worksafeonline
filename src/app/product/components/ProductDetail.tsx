"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/types/api";
import { bigShoulders } from "@/app/layout";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Check if content exceeds 3 lines
  useEffect(() => {
    if (contentRef.current) {
      const isOverflow =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflowing(isOverflow);
    }
  }, [product.Detail]);

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
      <div>
        <p
          ref={contentRef}
          className={`mt-4 text-gray-600 ${isOpen ? "" : "line-clamp-3"}`}
        >
          {product.Detail}
        </p>

        {/* Only show the button if content overflows (more than 3 lines) */}
        {isOverflowing && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary text-sm font-semibold underline underline-offset-2"
          >
            {isOpen ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
