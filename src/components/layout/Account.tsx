"use client";

import AuthFlow from "../modals/AuthFlow";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import eventEmitter from "@/hooks/useEventEmitter";
import { useEffect, useState, useCallback } from "react";

const Account = () => {
  const navigate = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setUserLoggedIn] = useState(false);

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
    eventEmitter?.on("openLoginModal", handleToggle);
    return () => {
      eventEmitter?.off("openLoginModal", handleToggle);
    };
  }, [handleToggle]);

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
    <span className="hover:text-secondary cursor-pointer hidden lg:block relative transition-all duration-100 ease-linear">
      <FaRegUser onClick={handleToggle} size={23} />
      <AuthFlow onClose={onClose} isVisible={isVisible} />
    </span>
  );
};

export default Account;
