"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { IoCreate } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import AddressCard from "./component/AddressCard";
import AccountLayout from "@/components/account/AccountLayout";
import React, { useCallback, useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const [accountDetail, setAccountDetail] = useState<any>({});
  const [selectedTab, setSelectedTab] = useState<"billing" | "delivery">("billing");

  const fetchUserData = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined" &&
        localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return router.replace("/");

      const response: { status: boolean } = await Fetch(
        "/api/MyAccountProfile",
        {},
        5000,
        true,
        false
      );
      if (response.status) setAccountDetail(response);
      setLoading(false);
    } catch (error) {
      console.log("Account Details Error: ", error);
      return router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleCreateNewAddress = () => {
    router.push("/create-address");
  };

  const currentAddresses =
    selectedTab === "billing"
      ? accountDetail?.my_BillingAddress ?? []
      : accountDetail?.my_DeliveryAddress ?? [];

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          {/* Header Section */}
          <div className="flex justify-between items-center gap-5">
            <h1 className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}>
              My <span className="text-primary"> Addresses</span>
            </h1>
            <button
              title="Add New Address"
              onClick={handleCreateNewAddress}
              className="flex items-center gap-1 px-6 py-2 text-white bg-primary/90 hover:bg-primary rounded-full transition"
            >
              <IoCreate className="text-xl" />
              Add New
            </button>
          </div>

          {/* Tab Selection */}
          <div className="flex gap-6 mt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="addressType"
                value="billing"
                checked={selectedTab === "billing"}
                onChange={() => setSelectedTab("billing")}
                className="w-5 h-5 accent-primary"
              />
              <span className="text-lg font-medium">Billing Address</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="addressType"
                value="delivery"
                checked={selectedTab === "delivery"}
                onChange={() => setSelectedTab("delivery")}
                className="w-5 h-5 accent-primary"
              />
              <span className="text-lg font-medium">Delivery Address</span>
            </label>
          </div>

          {/* Address List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {currentAddresses.length > 0 ? (
              currentAddresses.slice(0, visibleCount).map((address: any) => (
                <AddressCard key={address.ID} type={selectedTab} address={address} fetchUserData={fetchUserData} />
              ))
            ) : (
              <div className="text-primary text-lg">No {selectedTab === "billing" ? "Invoice" : "Delivery"} Addresses Found</div>
            )}
          </div>

          {/* Load More Button */}
          {currentAddresses.length > visibleCount && (
            <div className="text-center mt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-6 py-2 text-white bg-primary/90 hover:bg-primary rounded-full transition"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </AccountLayout>
    </div>
  );
}
