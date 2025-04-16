"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
import { filterData } from "@/api/generalApi";
import Loader from "@/components/common/Loader";
import eventEmitter from "@/hooks/useEventEmitter";
import Features from "@/components/common/Features";
import WishlistCard from "./components/WishlistCard";
import React, { useCallback, useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "@/api/wishlistApis";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";

export default function ClientPage() {
  const router = useRouter();
  const [wishlistUpdated, setWishlistUpdated] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(true); // Default to true until API call finishes

  const fetchWishlist = useCallback(async () => {
    setIsFetching(true);
    try {
      const token =
        typeof window !== "undefined" &&
        localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return;

      const response = await getWishlist();
      if (response?.wishlist) {
        const updatedWishlist = response.wishlist.map((product: any) =>
          filterData(product)
        );
        setWishlistUpdated(updatedWishlist);
        updatedWishlist.forEach((wishlist: any) =>
          eventEmitter?.emit("addToWishlist", wishlist?.ID)
        );
        const ids = updatedWishlist.map((wishlist: any) => wishlist.ID);
        localStorage.setItem("wishlist", JSON.stringify(ids));
      } else if (response?.message) {
        toast.info(response?.message);
        setWishlistUpdated([]);
        eventEmitter?.emit("emptyWishlist");
      } else {
        setWishlistUpdated([]);
        eventEmitter?.emit("emptyWishlist");
      }
    } catch (error) {
      console.log("❌ Error fetching wishlist:", error);
    } finally {
      setIsFetching(false); // Ensure state updates even if an error occurs
    }
  }, []);

  useEffect(() => {
    fetchWishlist();
    // eslint-disable-next-line
  }, [fetchWishlist]);

  const handleRemove = async (id: string) => {
    const removedResponse = await removeFromWishlist(id);
    if (removedResponse?.status) {
      eventEmitter?.emit("removeFromWishlist", id);
      await fetchWishlist();
      return true;
    }
    return false;
  };

  const onAddToCart = async (data: any) => {
    if (await handleRemove(data?.ID)) {
      router.replace(
        `/product/${data?.CategoryData?.categoryId ?? 1}/${data?.ID}`
      );
    }
  };

  if (isFetching) return <Loader />; // Show loader until API call is completed

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`uppercase text-4xl md:text-5xl lg:text-6xl flex items-center font-black ${bigShoulders.className}`}
          >
            Wishlist{" "}
            <span className="text-lg md:text-2xl lg:text-4xl">
              {" "}
              ({wishlistUpdated.length})
            </span>
          </h1>
          {wishlistUpdated.length === 0 && (
            <AnimatedActionButton
              text="View Products"
              href="/collection"
              classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
              isLoading={false}
              type="submit"
            />
          )}
        </div>
        <div className="pt-4 md:pt-6 lg:pt-10">
          {wishlistUpdated && wishlistUpdated.length > 0 ? (
            wishlistUpdated.map((list: any) => {
              return (
                <React.Fragment key={list?.ID}>
                  <WishlistCard
                    product={list}
                    onAddToCart={onAddToCart}
                    handleRemove={handleRemove}
                  />
                </React.Fragment>
              );
            })
          ) : (
            <Image
              width={200}
              height={200}
              priority
              unoptimized
              alt={"Empty Wishlist"}
              src={"/assets/empty_wishlist.jpg"}
              className="w-full lg:w-1/2 mx-auto object-contain rounded-md"
            />
          )}
        </div>
      </div>
      <Features />
    </>
  );
}
