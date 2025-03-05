"use client";

import { useState } from "react";
import { Post } from "@/utils/axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { IoWarningOutline } from "react-icons/io5";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRetry = async () => {
    setLoading(true);
    try {
      const OrderID = localStorage.getItem("OrderID");
      if (!OrderID) return router.replace("/shop-all");

      const data = { OrderID };
      const url = "/api/TransactionRetry";
      const resp: any = await Post(url, data, 5000, true);
      if (resp?.status && resp?.paymenturl1)
        window.location.href = resp.paymenturl1;
    } catch (error) {
      console.log("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="bg-white shadow-lg rounded-xl p-6 md:p-10 text-center w-[90%] max-w-md"
      >
        <IoWarningOutline className="text-red-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800">Payment Failed</h2>
        <p className="text-gray-600 mt-2">
          Your transaction was not completed.
        </p>
        <Button
          isLoading={loading}
          onClick={handleRetry}
          text={loading ? "Retrying..." : "Retry Payment"}
          classes="mt-6 w-full bg-primary/80 !text-black hover:bg-primary text-xl !py-1.5 rounded-lg flex items-center justify-center"
        />
        <Button
          text={"Cancel"}
          onClick={() => router.replace("/shop-all")}
          classes="mt-2 w-full bg-red-500 hover:bg-red-600 text-white text-xl !py-1.5 rounded-lg flex items-center justify-center"
        />
      </motion.div>
    </div>
  );
}
