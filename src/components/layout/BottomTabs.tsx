"use client";

import Link from "next/link";
import AuthFlow from "../modals/AuthFlow";
import { useRouter } from "next/navigation";
import { bigShoulders } from "@/app/layout";
import { IoHomeOutline } from "react-icons/io5";
import { AiFillAppstore } from "react-icons/ai";
import eventEmitter from "@/hooks/useEventEmitter";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

const BottomTabs = ({
  wishlist,
  accountDetail,
}: {
  wishlist: any[];
  accountDetail: boolean;
}) => {
  const navigate = useRouter();
  const wishlistCount = wishlist?.length || 0;
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setUserLoggedIn] = useState(false);
  const displayCount = wishlistCount < 10 ? `0${wishlistCount}` : wishlistCount;

  const handleToggle = useCallback(() => {
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (loggedIn || token) return navigate.push("/my-account");
    setIsVisible((prev) => !prev);
  }, [loggedIn, navigate]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    const handleToggle = () => {
      setUserLoggedIn(true);
    };
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    const handleToggle = () => {
      setUserLoggedIn(false);
    };
    eventEmitter?.on("loggedOut", handleToggle);
    return () => {
      eventEmitter?.off("loggedOut", handleToggle);
    };
  }, [handleToggle]);

  const onClose = () => setIsVisible(false);

  return (
    <div
      className={`w-full fixed -left-2 lg:hidden text-black backdrop-blur-2xl uppercase justify-center items-center bottom-0 grid ${
        accountDetail ? "grid-cols-3" : "grid-cols-4"
      } rounded-t-2xl bg-white/50 shadow-md border-t-2 z-50 ${
        bigShoulders.className
      }`}
    >
      <AuthFlow onClose={onClose} isVisible={isVisible} />
      {/* <SearchModal isOpen={isVisibleSearch} handleToggle={handleToggle} /> */}
      <Link href={"/"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center">
          <IoHomeOutline size={23} />
          <span className="md:text-lg font-bold md:font-extrabold">Home</span>
        </span>
      </Link>
      <p onClick={handleToggle}>
        <span className="py-2 md:py-3 cursor-pointer flex flex-col justify-center items-center border-x border-gray-400">
          <FaRegUser size={21} />
          <span className="md:text-lg font-bold md:font-extrabold">
            Account
          </span>
        </span>
      </p>
      <Link href={"/collection"}>
        <span className="py-2 md:py-3 flex flex-col justify-center items-center border-gray-400 border-r">
          <AiFillAppstore size={24} />
          <span className="md:text-lg font-bold md:font-extrabold">Shop</span>
        </span>
      </Link>
      {!accountDetail && (
        <Link href={"/wishlist"}>
          <p className="py-2 md:py-3 flex flex-col justify-center items-center">
            <span className="relative">
              <FaRegHeart size={23} />
              <span className="absolute -top-3 -right-3 w-6 h-6 text-xs text-black rounded-full bg-primary flex items-center justify-center">
                {displayCount}
              </span>
            </span>
            <span className="md:text-lg font-bold md:font-extrabold">
              Wishlist
            </span>
          </p>
        </Link>
      )}
    </div>
  );
};

export default BottomTabs;
