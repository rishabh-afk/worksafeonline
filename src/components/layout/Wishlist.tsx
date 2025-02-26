"use client";

import Link from "next/link";
import BottomTabs from "./BottomTabs";
import { FaRegHeart } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import eventEmitter from "@/hooks/useEventEmitter";

type Product = {
  ID: number;
  Style: string;
  Description: string;
  [key: string]: any;
};

const Wishlist = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        if (Array.isArray(parsedWishlist)) {
          setWishlist(parsedWishlist);
        }
      }
    }
  }, []);

  useEffect(() => {
    const wishlistListener = (product: Product) => {
      setWishlist((prev) => [
        ...prev.filter((item) => item !== product),
        product,
      ]);
    };

    const removeFromwishlistListener = (id: string) => {
      setWishlist((prev) => prev.filter((item: any) => item !== id));
    };

    const emptyWishlistListener = () => {
      setWishlist([]);
      localStorage.removeItem("wishlist");
    };

    eventEmitter?.on("addToWishlist", wishlistListener);
    eventEmitter?.on("emptyWishlist", emptyWishlistListener);
    eventEmitter?.on("removeFromWishlist", removeFromwishlistListener);
    return () => {
      eventEmitter?.off("addToWishlist", wishlistListener);
      eventEmitter?.off("emptyWishlist", emptyWishlistListener);
      eventEmitter?.off("removeFromWishlist", removeFromwishlistListener);
    };
  }, []);

  return (
    <div className="relative">
      <Link
        href="/wishlist"
        className="hover:text-yellow-500 relative hidden lg:block transition-all duration-100 ease-linear"
      >
        <FaRegHeart size={23} />
        <span className="absolute -top-3 -right-3 min-w-6 min-h-6 text-xs text-black rounded-full bg-secondary flex items-center justify-center">
          {wishlist.length > 0 && wishlist.length < 9
            ? "0" + wishlist.length
            : wishlist.length >= 10
            ? wishlist.length
            : 0}
        </span>
      </Link>
      <BottomTabs wishlist={wishlist} />
    </div>
  );
};

export default Wishlist;
