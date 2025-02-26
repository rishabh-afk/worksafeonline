"use client";

import Link from "next/link";
// import Image from "next/image";
import { toast } from "react-toastify";
// import { LuUser } from "react-icons/lu";
import { bigShoulders } from "@/app/layout";
import { usePathname } from "next/navigation";
import ProfileUploader from "./ProfileUploader";
import eventEmitter from "@/hooks/useEventEmitter";
import { getDeviceData } from "@/api/generateDeviceId";

const AccountLayout = ({
  children,
  accountDetail,
}: {
  children: any;
  accountDetail: any;
}) => {
  // const router = useRouter();
  const pathname = usePathname();

  const activeClass =
    "text-white bg-primary rounded-xl lg:rounded-full font-semibold text-xl px-4 py-2 w-full";
  const inActiveClass =
    "text-xl font-semibold hover:text-primary rounded-full w-full transition px-4 py-2";

  const logout = () => {
    const deviceData = getDeviceData();
    localStorage.clear();
    if (deviceData)
      localStorage.setItem("deviceData", JSON.stringify(deviceData));
    toast.success("User logged out!");
    eventEmitter?.emit("loggedOut");
    window.location.href = "/";
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1
          className={`uppercase text-xl md:text-3xl lg:text-4xl flex items-center font-black ${bigShoulders.className}`}
        >
          My Account
        </h1>
        <span onClick={logout}>
          <span className="bg-primary cursor-pointer text-white flex items-center transition w-fit">
            <span
              className={`text-xl whitespace-nowrap py-1 w-fit px-6 ${bigShoulders.className}`}
            >
              Sign Out
            </span>
          </span>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center mt-5 lg:mt-10">
        <div className="px-4 py-4 lg:py-8 bg-gray-50 rounded-2xl lg:min-h-screen w-full lg:w-1/4">
          <div className="space-y-2 hidden lg:block pl-5">
            <ProfileUploader
              profilePath={accountDetail?.account_details?.profile_path}
            />
            <div>
              {accountDetail?.account_details?.ContactName && (
                <p className="text-lg capitalize font-semibold">
                  {accountDetail?.account_details?.ContactName}
                </p>
              )}
              <p className="text-xs">{accountDetail?.account_details?.Email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:grid-cols-1 lg:mt-7">
            <Link
              className={`whitespace-nowrap text-left ${
                pathname === "/my-account" ? activeClass : inActiveClass
              } ${bigShoulders.className}`}
              href={"/my-account"}
            >
              Personal Information
            </Link>
            <Link
              className={`whitespace-nowrap text-left ${
                pathname === "/reset-password" ? activeClass : inActiveClass
              } ${bigShoulders.className}`}
              href={"/reset-password"}
            >
              Reset Password
            </Link>
            <Link
              className={`whitespace-nowrap text-left ${
                pathname === "/my-address" ||
                pathname === "/edit-address" ||
                pathname === "/create-address"
                  ? activeClass
                  : inActiveClass
              } ${bigShoulders.className}`}
              href={"/my-address"}
            >
              My Addresses
            </Link>
            <Link
              className={`whitespace-nowrap text-left ${
                pathname === "/order-history" ? activeClass : inActiveClass
              } ${bigShoulders.className}`}
              href={"/order-history"}
            >
              Order History
            </Link>
          </div>
        </div>
        <div className="p-5 bg-gray-50 rounded-2xl lg:min-h-screen w-full lg:w-3/4">
          {children}
        </div>
      </div>
    </>
  );
};

export default AccountLayout;
