"use client";

import { useEffect } from "react";
// import { includes } from "@/utils/polyfills";
import { usePathname } from "next/navigation";
// import { protectedPages } from "@/data/routes";
import eventEmitter from "@/hooks/useEventEmitter";
import { getDeviceData, storeDeviceData } from "@/api/generateDeviceId";

const GoogleScript = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const sessionVerified = sessionStorage.getItem("verified");
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");

    // If session is not verified but a user token exists, verify and set the session.
    if (!sessionVerified && token) {
      sessionStorage.setItem("verified", "true");
      return;
    }

    if (token && sessionVerified) eventEmitter?.emit("loggedIn");

    // if (!token && eventEmitter && includes(protectedPages, pathname)) {
    //   eventEmitter.emit("openLoginModal");
    // }
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    const fetchDevices = async () => {
      const sessionPopUp = sessionStorage.getItem("popup");
      const sessionVerified = sessionStorage.getItem("verified");
      const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");

      const data = getDeviceData();
      if (!data && !token && !sessionVerified) await storeDeviceData();
      if (!token && pathname === "/" && !sessionPopUp) {
        eventEmitter?.emit("openLoginModal");
        sessionStorage.setItem("popup", "true");
      }
    };
    fetchDevices();
  }, [pathname]);

  return null;
};

export default GoogleScript;
