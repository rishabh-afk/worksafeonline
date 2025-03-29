import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { formatPound } from "@/components/logo/general";

const CartItem = ({
  product,
  fetchCart,
  handleRemove,
  handleUpdateQuantity,
}: {
  product: any;
  fetchCart: any;
  handleRemove: any;
  handleUpdateQuantity: any,
}) => {
  const slug = `/product/1/${product?.ProductCode}`;
  // Manage quantity state
  const [quantities, setQuantities] = useState<Record<string, number>>(
    fetchCart.reduce((acc: any, item: any) => {
      acc[item.Line] = item.Quantity;
      return acc;
    }, {})
  );


  const handleChange = (line: string, value: string) => {
    const newValue = Math.max(1, Math.min(9999, Number(value)));
    setQuantities((prev) => ({ ...prev, [line]: newValue }));
  };

  const handleBlur = (line: string) => {
    handleUpdateQuantity(line, quantities[line]);
  };

  return (
    <div className="flex relative hover:bg-gray-100 gap-3 md:p-3 lg:p-4 pr-10 border-b border-b-gray-200">
      {/* <span
        onClick={() => handleRemove(product?.Line)}
        className="hover:bg-gray-200 text-gray-500 absolute top-2 p-1 rounded-full right-2 transition-all duration-200 ease-linear"
      >
        <RxCross1 size={15} />
      </span> */}
      <div className="w-1/5">
        <Image
          width={225}
          height={225}
          src={product?.ProductImage}
          alt={product?.ProductDescription}
          onClick={() => (window.location.href = slug)}
          className="w-full aspect-square object-contain rounded-md border"
        />
      </div>
      <div className="w-4/5">
        <div
          className="text-black flex flex-wrap space-x-2 text-lg font-semibold"
          onClick={() => (window.location.href = slug)}
        >
          <span className="text-primary mr-1">{product.ProductCode}</span> {product.ProductDescription}
          <p>
            {product?.Colour && (
              <span className="text-sm text-gray-400">
                {product?.Colour}
              </span>
            )}
            {product?.Fitting && (
              <span className="text-sm text-gray-400 px-1">
                /  {product?.Fitting}  /
              </span>
            )}
            {product?.Size && (
              <span className="text-sm text-gray-400">{product?.Size}</span>
            )}
          </p>
        </div>
        <p className="text-primary text-lg font-semibold">
          <span className="text-black font-normal">{formatPound(product?.SalesPrice)} x</span>{" "}
          {product?.Quantity}
        </p>
        <div className="flex justify-between items-center w-full mt-1">
          <div className="flex bg-white border items-center">
            <button
              className="px-3 text-xl"
              onClick={() => {
                const newValue = Math.max(0, quantities[product.Line] - 1);
                setQuantities((prev) => ({
                  ...prev,
                  [product.Line]: newValue,
                }));
                handleUpdateQuantity(product.Line, newValue);
              }}
            >
              -
            </button>

            <input
              type="text"
              maxLength={4}
              value={quantities[product.Line]}
              onBlur={() => handleBlur(product.Line)}
              onChange={(e) => handleChange(product.Line, e.target.value)}
              className="px-1 w-8 text-sm text-center rounded py-1 focus:outline-none"
            />

            <button
              className="px-3 text-xl"
              onClick={() => {
                const newValue = quantities[product.Line] + 1;
                setQuantities((prev) => ({
                  ...prev,
                  [product.Line]: newValue,
                }));
                handleUpdateQuantity(product.Line, newValue);
              }}
            >
              +
            </button>
          </div>
          <span
            onClick={() => handleRemove(product?.Line)}
            className="text-gray-500 hover:underline p-1 rounded-full right-2 transition-all duration-200 ease-linear"
          >
            Remove
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
