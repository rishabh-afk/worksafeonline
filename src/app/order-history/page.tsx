"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { LuSearch } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import OrderHistoryTable from "./components/OrderCard";
import { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderHistory, setOrderHistory] = useState<any>({});
  const [accountDetail, setAccountDetail] = useState<any>({});
  const [realorderHistory, setRealOrderHistory] = useState<any>({});

  const filterOrders = (value: string) => {
    if (!value) return setOrderHistory(realorderHistory);
    const lowerCaseValue = value.toLowerCase();

    const filtered = realorderHistory.filter((order: any) =>
      Object.values(order).some(
        (field) =>
          field !== null &&
          field !== undefined &&
          field.toString().toLowerCase().includes(lowerCaseValue)
      )
    );
    setOrderHistory(filtered);
  };

  const fetchData = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined" &&
        localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return router.replace("/");

      const url = "/api/MyAccountProfile";
      const url2 = "api/MyAccountOrders?page=1&pagesize=100";
      const fetchProfile = Fetch(url, {}, 5000, true, false);
      const fetchOrders = Fetch(url2, {}, 5000, true, false);

      const [profileResult, ordersResult]: any = await Promise.allSettled([
        fetchProfile,
        fetchOrders,
      ]);

      // Handle profile fetch result
      if (profileResult.status === "fulfilled" && profileResult.value.status)
        setAccountDetail(profileResult.value);

      // Handle orders fetch result
      if (ordersResult.status === "fulfilled" && ordersResult.value?.status) {
        setOrderHistory(ordersResult.value?.my_orders || []);
        setRealOrderHistory(ordersResult.value?.my_orders || []);
      }

      setLoading(false);
    } catch (error) {
      console.log("Fetch Data Error: ", error);
      router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Order <span className="text-primary"> History</span>
          </h1>
          <div className="relative w-full mt-5">
            <input
              type="text"
              placeholder="Search by Order ID, Customer, Reference"
              // placeholder="Search by Order ID, Customer, Reference, Email, or Order By"
              onChange={(e) => filterOrders(e.target.value)}
              className="w-full px-5 py-3 border font-sans border-gray-300 rounded-full focus:ring-1 focus:ring-primary focus:border-primary outline-none text-sm transition-all duration-300"
            />
            <div className="absolute inset-y-0 right-4 flex items-center text-gray-500">
              <LuSearch className="w-5 h-5" />
            </div>
          </div>
          {orderHistory && orderHistory.length > 0 ? (
            <OrderHistoryTable orders={orderHistory} />
          ) : (
            <p>No history found</p>
          )}
        </div>
      </AccountLayout>
    </div>
  );
}
