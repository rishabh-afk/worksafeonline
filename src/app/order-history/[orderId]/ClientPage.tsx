"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import OrderDetails from "./components/OrderDetails";
import { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function ClientPage({ orderId }: { orderId: string | number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [orderHistory, setOrderHistory] = useState<any>({});
  const [accountDetail, setAccountDetail] = useState<any>({});

  const fetchData = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined" &&
        localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return router.replace("/");

      const url = "/api/MyAccountProfile";
      const url2 = "api/MyOrderDetails?OrderID=" + orderId;
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
      if (ordersResult.status === "fulfilled" && ordersResult.value?.status)
        setOrderHistory(ordersResult.value?.my_orders || {});

      setLoading(false);
    } catch (error) {
      console.log("Fetch Data Error: ", error);
      router.replace("/");
    }
  }, [router, orderId]);

  useEffect(() => {
    if (orderId) fetchData();
  }, [fetchData, orderId]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Order <span className="text-primary"> Details</span>
          </h1>
          <OrderDetails data={orderHistory} />
        </div>
      </AccountLayout>
    </div>
  );
}
