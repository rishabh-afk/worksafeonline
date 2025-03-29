"use client";

import { Product } from "@/types/api";
import { toast } from "react-toastify";
import { addToCart } from "@/api/cartApi";
import { bigShoulders } from "@/app/layout";
import { FaShoppingCart } from "react-icons/fa";
import eventEmitter from "@/hooks/useEventEmitter";
import { getDeviceCheck } from "@/api/generateDeviceId";

const AddToCartButton = ({
  product,
  fieldsCheck,
  selectedFields,
  filterProductSizes,
}: {
  product: Product;
  fieldsCheck: any;
  selectedFields: any;
  filterProductSizes: any;
}) => {
  const handleCart = async (product: any) => {
    console.log(filterProductSizes);
    if (fieldsCheck()) return;
    if (selectedFields?.size.length === 0)
      return toast.info("Please select a size");

    const deviceId = getDeviceCheck();
    const handleAddToCartRequest = {
      BOM: [],
      DeviceID: deviceId,
      ProductID: product?.ProductID,
      Colour: selectedFields?.color?.Colour
        ? selectedFields?.color?.Colour.trim()
        : "NA",
      Fitting: selectedFields?.fitting?.Fitting
        ? selectedFields?.fitting?.Fitting.trim()
        : "NA",
      Size:
        selectedFields?.size.length > 0
          ? selectedFields?.size.map((item: any) => ({
            Size: item?.Size,
            Quantity: item?.quantity,
          }))
          : [{ size: "NA", Quantity: 1 }],
    };
    const response = await addToCart(handleAddToCartRequest);
    if (response?.status) eventEmitter?.emit("addToCart", product?.ProductID);
  };
  return (
    <button
      type="button"
      onClick={() => handleCart(product)}
      className={`w-full flex items-center justify-center gap-3 px-4 py-2 border transition-all duration-200 ease-linear border-primary hover:bg-primary/80 text-2xl font-bold uppercase bg-primary text-white ${bigShoulders.className}`}
    >
      <FaShoppingCart className="text-2xl" />
      Add to Cart
    </button>
  );
};
export default AddToCartButton;
