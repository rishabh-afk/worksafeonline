"use client";

import { usePathname } from "next/navigation";
import { getCartDetails } from "@/api/cartApi";
import { TiShoppingCart } from "react-icons/ti";
import CartListModal from "../modals/CartModal";
import eventEmitter from "@/hooks/useEventEmitter";
import React, { useState, useEffect, useCallback } from "react";

const CartModal = () => {
  const pathname = usePathname();
  const [cart, setCart] = useState<any>({});
  const [openCartModal, setOpenCartModal] = useState<boolean>(false);

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const cartListener = async () => {
      const response: any = await fetchCart();
      if (response?.status) setOpenCartModal(true);
    };
    eventEmitter?.on("addToCart", cartListener);
    eventEmitter?.on("removeFromCart", fetchCart);
    eventEmitter?.on("updateQuantity", fetchCart);

    return () => {
      eventEmitter?.off("addToCart", cartListener);
      eventEmitter?.off("removeFromCart", fetchCart);
      eventEmitter?.off("updateQuantity", fetchCart);
    };
    // eslint-disable-next-line
  }, []);

  const fetchCart = useCallback(async () => {
    const response = await getCartDetails();
    if (response?.status) {
      setCart(response);
      return response;
    } else return { status: false };
  }, []);

  const openCart = useCallback(async () => {
    if (
      (cart && cart?.Products && cart?.Products.length === 0) ||
      pathname === "/thank-you"
    ) {
      const data = await fetchCart();
      if (!data?.status) setCart(null);
    }
    if (!["/thank-you"].includes(pathname)) {
      setOpenCartModal(true);
    }
    // eslint-disable-next-line
  }, [pathname]);

  const handleToggle = () => {
    setOpenCartModal((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        fetchCart();
      }, 500);
    };
    eventEmitter?.on("loggedIn", fetchData);
    return () => {
      eventEmitter?.off("loggedIn", fetchData);
    };
    // eslint-disable-next-line
  }, [fetchCart]);

  const totalQuantity =
    cart?.Products?.reduce(
      (sum: number, product: any) => sum + (product.Quantity || 0),
      0
    ) || 0;

  const formattedQuantity =
    totalQuantity > 0 && totalQuantity < 9
      ? `0${totalQuantity}`
      : totalQuantity;

  return (
    <span className="hover:text-yellow-500 cursor-pointer relative transition-all duration-100 ease-linear">
      <TiShoppingCart onClick={openCart} size={23} />
      <CartListModal
        cart={cart}
        setCart={setCart}
        isOpen={openCartModal}
        handleToggle={handleToggle}
        formattedQuantity={formattedQuantity}
      />
      <span
        onClick={openCart}
        className="absolute -top-3 -right-3 w-5 md:min-w-6 h-5 md:min-h-6 text-xs text-black rounded-full bg-secondary flex items-center justify-center"
      >
        {formattedQuantity}
      </span>
    </span>
  );
};

export default CartModal;
