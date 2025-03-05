"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { IoCreate } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import AddressCard from "./component/AddressCard";
import React, { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [accountDetail, setaccountDetail] = useState<any>({});
  const [selectedAddress, setSelectedAddress] = useState<any>();

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
      if (response.status) setaccountDetail(response);
      setLoading(false);
    } catch (error) {
      console.log("Account Details Error: ", error);
      return router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleSelected = (id: string | number) => {
    setSelectedAddress(id);
  };

  const handleCreateNewAddress = () => {
    router.push("/create-address");
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <div className="flex justify-between items-center gap-5">
            <h1
              className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
            >
              My <span className="text-primary"> Addresses</span>
            </h1>
            <button
              title="Edit Address"
              onClick={handleCreateNewAddress}
              className="flex items-center gap-1 px-6 py-2 text-white bg-primary/80 hover:bg-primary rounded-full transition"
            >
              <IoCreate className="text-xl" />
              Create
            </button>
          </div>
          <div className="mt-5">
            {accountDetail?.AllowBillingAdd === 1 && (
              <>
                <h2
                  className={`${bigShoulders.className} text-xl font-semibold`}
                >
                  My Billing Address
                </h2>
                <div className="grid md:grid-cols-2 gap-5 my-3">
                  {accountDetail?.my_BillingAddress?.length > 0 &&
                    accountDetail?.my_BillingAddress.map((address: any) => {
                      return (
                        <React.Fragment key={address?.ID}>
                          <AddressCard
                            type="billing"
                            address={address}
                            fetchUserData={fetchUserData}
                            handleSelected={handleSelected}
                            selectedAddress={selectedAddress}
                          />
                        </React.Fragment>
                      );
                    })}
                </div>
              </>
            )}
            {accountDetail?.AllowDeliveryAdd === 1 && (
              <>
                <h2
                  className={`${bigShoulders.className} mt-5 text-xl font-semibold`}
                >
                  My Delivery Address
                </h2>
                <div className="grid md:grid-cols-2 gap-5 my-3">
                  {accountDetail?.my_DeliveryAddress?.length > 0 &&
                    accountDetail?.my_DeliveryAddress.map((address: any) => {
                      return (
                        <React.Fragment key={address?.ID}>
                          <AddressCard
                            type="delivery"
                            address={address}
                            fetchUserData={fetchUserData}
                            handleSelected={handleSelected}
                            selectedAddress={selectedAddress}
                          />
                        </React.Fragment>
                      );
                    })}
                </div>
              </>
            )}
          </div>
        </div>
      </AccountLayout>
    </div>
  );
}
