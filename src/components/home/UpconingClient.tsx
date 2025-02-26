"use client";

import { useState } from "react";
import Button from "../common/Button";
import ProductSwiper from "./ProductSwiper";

const UpcomingClient = ({
  newArrivals,
  bestSellers,
  slidesPerViewDesktop,
}: {
  newArrivals: any;
  bestSellers: any;
  slidesPerViewDesktop: number;
}) => {
  const [products, setProducts] = useState<[]>(newArrivals);
  const [selectedTab, setSelectedTab] = useState<string>("arrival");
  return (
    <>
      <div className="flex py-10 space-x-4 items-center">
        <Button
          text="NEW ARRIVALS"
          onClick={() => {
            setSelectedTab("arrival");
            setProducts(newArrivals);
          }}
          classes={`${
            selectedTab === "arrival" && ""
          } !rounded-full bg-black w-full md:w-fit text-3xl py-3 font-semibold border-2 tracking-tight !px-10 hover:bg-black border-black text-white hover:!text-white`}
        />
        <Button
          text="BEST SELLERS"
          onClick={() => {
            setSelectedTab("bestSeller");
            setProducts(bestSellers);
          }}
          classes={`${
            selectedTab === "bestSeller" && "!bg-primary !text-black"
          } !rounded-full text-3xl py-3 hidden md:block font-semibold hover:!text-white border-2 tracking-tight !px-10`}
        />
      </div>
      <ProductSwiper
        products={products}
        slidesPerViewDesktop={slidesPerViewDesktop}
      />
      <Button
        text="BEST SELLERS"
        onClick={() => {
          setSelectedTab("arrival");
          setProducts(bestSellers);
        }}
        classes={`${
          selectedTab === "arrival" && ""
        } !rounded-full text-3xl py-3 !mt-5 w-full md:w-fit md:hidden font-semibold border-2 tracking-tight !px-10`}
      />
    </>
  );
};

export default UpcomingClient;
