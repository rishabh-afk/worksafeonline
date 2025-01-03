"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [accountDetail, setaccountDetail] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
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
    };
    fetchUserData();
  }, [router]);

  if (loading)
    return (
      <div className="h-screen flex justify-center font-semibold items-center text-3xl">
        Loading...
      </div>
    );

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Personal <span className="text-primary"> Information</span>
          </h1>
          <p className="text-sm text-gray-600 pt-1">
            Manage your personal information, including phone numbers, and email
            address where you can be contacted
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-md text-black font-bold">
              Name :{" "}
              <p className="text-sm text-gray-400">
                {accountDetail?.account_details?.ContactName
                  ? accountDetail?.account_details?.ContactName
                  : "-"}
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md text-black font-bold">
              Phone Number :{" "}
              <p className="text-sm text-gray-400">
                {accountDetail?.account_details?.Telephone
                  ? accountDetail?.account_details?.Telephone
                  : "-"}
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md text-black font-bold">
              Email Address :{" "}
              <p className="text-sm text-gray-400">
                {accountDetail?.account_details?.Email
                  ? accountDetail?.account_details?.Email
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </AccountLayout>
    </div>
  );
}
