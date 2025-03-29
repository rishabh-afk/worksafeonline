"use client";

import { Product } from "@/types/api";
import React, { useState } from "react";
import Reviews from "./additional/Reviews";
import Button from "@/components/common/Button";
import Description from "./additional/Description";
import AdditionalFeatures from "./additional/AdditionalFeatures";

const ProductFeatures = ({ product }: { product: Product | any }) => {
  const [content, setContent] = useState("description");
  const handleChangeContent = (query: string) => setContent(query);
  return (
    <div>
      <div className="flex overflow-auto pb-5 justify-center items-center w-full mt-5 md:mt-16 gap-4">
        <Button
          text="DESCRIPTION"
          classes={`!rounded-full text w-fit md:text-2xl py-3 font-bold border-none tracking-tight !px-10 ${content === "description" ? "bg-black text-white" : "text-[#000000]"
            }  hover:bg-[#000000]`}
          onClick={() => handleChangeContent("description")}
        />
        {/* {product?.AdditionalDescription && ( */}
        <Button
          text="ADDITIONAL INFORMATION"
          classes={`!rounded-full text w-fit md:text-2xl py-3 font-bold border-none tracking-tight !px-10 ${content === "additional"
            ? "bg-black text-white"
            : "text-[#000000]"
            }  hover:bg-[#000000]`}
          onClick={() => handleChangeContent("additional")}
        />
        {/* )} */}
        {/* <Button
          text={`REVIEWS (5)`}
          classes={`!rounded-full text w-fit md:text-2xl py-3 font-bold border-none tracking-tight !px-10 ${
            content === "reviews" ? "bg-black text-white" : "text-[#000000]"
          }  hover:bg-[#000000]`}
          onClick={() => handleChangeContent("reviews")}
        /> */}
      </div>
      {content === "reviews" && (
        <Reviews handleChangeContent={handleChangeContent} />
      )}
      {content === "description" && (
        <Description
          image={product?.LifestyleImage}
          details={product?.Description}
        />
      )}
      {content === "additional" && (
        <AdditionalFeatures productFeatures={product?.AdditionalDescription} />
      )}
    </div>
  );
};

export default ProductFeatures;
