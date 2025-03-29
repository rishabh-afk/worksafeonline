"use client";

import Image from "next/image";
import { bigShoulders } from "../layout";
import CartSkeleton from "./CartSkeleton";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import eventEmitter from "@/hooks/useEventEmitter";
import Features from "@/components/common/Features";
import { getDeviceCheck } from "@/api/generateDeviceId";
import React, { useCallback, useEffect, useState } from "react";
import AnimatedActionButton from "@/components/common/AnimatedActionButton";
import { getCartDetails, removeProduct, updateQuantity } from "@/api/cartApi";

export default function ClientPage() {
  const [cart, setCart] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [fetchingResponse, setFetchingResponse] = useState<boolean>(false);

  const fetchCart = useCallback(async () => {
    const response = await getCartDetails();
    if (response?.status) {
      setCart(response);
    } else setCart({});
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    eventEmitter?.on("removeProductFromCartModal", fetchCart);
    return () => {
      eventEmitter?.off("removeProductFromCartModal", fetchCart);
    };
    // eslint-disable-next-line
  }, []);

  const handleRemove = async (id: string) => {
    if (fetchingResponse) return;
    setFetchingResponse(true);

    const deviceId = getDeviceCheck();

    const removeProductData = { Seq: 0, Qty: 0, Line: id, DeviceID: deviceId };
    const response = await removeProduct(removeProductData);
    if (response?.status) {
      setFetchingResponse(false);
      eventEmitter?.emit("removeFromCart");
      return fetchCart();
    }
  };

  const handleUpdateQuantity = async (id: string, Quantity: number) => {
    if (fetchingResponse) return;
    setFetchingResponse(true);

    const deviceId = getDeviceCheck();

    const updateProductData = {
      Seq: 0,
      Line: id,
      Qty: Quantity,
      DeviceID: deviceId,
    };
    const response = await updateQuantity(updateProductData);
    if (response?.status) {
      setFetchingResponse(false);
      eventEmitter?.emit("updateQuantity");
      return fetchCart();
    }
  };

  if (loading) return <CartSkeleton />;
  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <div className="flex justify-between items-center">
          <h1
            className={`text-lg md:text-2xl upp lg:text-4xl flex items-center font-black ${bigShoulders.className}`}
          >
            Order Details{" "}
            <span className="text-xl md:text-2xl lg:text-4xl">
              {" "}
              ({cart && cart?.Products ? cart?.Products.length : 0})
            </span>
          </h1>
          {cart && cart?.Products && cart?.Products.length === 0 && (
            <AnimatedActionButton
              type="button"
              href="/collection"
              isLoading={false}
              text="View Products"
              classes="uppercase md:text-lg font-semibold whitespace-nowrap left-2 py-6 w-[180px] hover:bg-primary bg-white text-black hover:text-black"
            />
          )}
        </div>
        {cart && cart?.Products && cart?.Products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pt-4 md:pt-6 lg:pt-8">
              <div className="col-span-2">
                <CartItem
                  fetchCart={cart?.Products}
                  handleRemove={handleRemove}
                  handleUpdateQuantity={handleUpdateQuantity}
                />
              </div>
              <div className="col-span-2 lg:col-span-1">
                <CartSummary cart={cart?.CartTot} />
              </div>
            </div>
            {/* {cartUpdated && cartUpdated.length > 0 && (
              <RecommendedProducts products={cartUpdated} />
            )} */}
          </>
        ) : (
          <Image
            width={200}
            height={200}
            priority
            unoptimized
            alt={"Empty Wishlist"}
            src={"/assets/empty_cart.avif"}
            className="w-full lg:w-1/2 mx-auto object-contain rounded-md"
          />
        )}
      </div>
      <Features />
    </>
  );
}
