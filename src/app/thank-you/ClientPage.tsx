"use client";

import { Fetch } from "@/utils/axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import OrderTotals from "./components/OrderTotals";
import ProductDetails from "./components/ProductDetails";
import ThankYouHeader from "./components/ThankYouHeader";
import InvoiceAddress from "./components/InvoiceAddress";
import DeliveryAddress from "./components/DeliveryAddress";

const ClientPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState({});
  const [orderSummary, setOrderSummary] = useState<any>({});

  const handleNavigation = () => {
    router.push("/shop-all"); // Navigate to the page
    router.refresh(); // Revalidate and refresh the page
  };

  useEffect(() => {
    const fetchOrderSummary = async () => {
      try {
        const orderId = localStorage.getItem("OrderID");
        if (!orderId) return;
        const response: any = await Fetch(
          "api/MyOrderDetails",
          { OrderID: orderId },
          5000,
          true,
          false
        );
        if (response?.status) {
          const order = response?.my_orders?.Orderdetails;
          setOrderData({
            orderId: order?.OrderID,
            orderDate: order?.OrderDate,
            totalAmount: order?.OrderTotal,
          });
          setOrderSummary(response?.my_orders);
        } else {
          toast.info("Order not found!");
          return router.replace("/shop-all");
        }
      } catch (error) {
        console.log("Error: ", error);
        toast.info("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchOrderSummary();
  }, [router]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
      <ThankYouHeader
        order={orderData}
        YourReff={orderSummary?.Orderdetails?.YourReff}
        email={
          orderSummary?.Orderaddress?.Email ??
          orderSummary?.Orderinvaddress?.InvEmail
        }
      />
      <ProductDetails cart={{ Products: orderSummary?.orderedproduct }} />
      <div className="py-5 w-full grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <DeliveryAddress address={orderSummary?.Orderaddress} />
          <InvoiceAddress address={orderSummary?.Orderinvaddress} />
        </div>
        <div className="">
          <OrderTotals total={orderSummary?.Ordertotal} />
          <button
            onClick={handleNavigation}
            className="flex justify-between items-center mt-5 w-fit mx-auto bg-secondary/80 hover:bg-secondary text-white transition px-6 py-3 rounded-lg text-xl"
          >
            Shop More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
