import React from "react";
import Image from "next/image";
import { bigShoulders } from "@/app/layout";
import { formatKey } from "@/api/generalApi";
import {
  HiOutlineInbox,
  HiOutlineCreditCard,
  HiOutlineShoppingCart,
  HiOutlineCurrencyPound,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { formatPound } from "@/components/logo/general";

const OrderDetails = ({ data }: { data: any }) => {
  const {
    Orderdetails,
    orderedproduct,
    Orderaddress,
    Orderinvaddress,
    Ordertotal,
  } = data;

  return (
    <div className="mt-5 space-y-5">
      {/* Order Summary */}
      <div className="bg-white rounded-xl p-3 md:p-6 shadow">
        <h1
          className={`text-xl lg:text-3xl font-extrabold text-black mb-6 flex items-center gap-2 ${bigShoulders.className}`}
        >
          <HiOutlineShoppingCart className="text-4xl" />
          Order Summary
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(Orderdetails).map(([key, value]: any) =>
            value ? (
              <div key={key}>
                <p className="font-semibold text-black capitalize">
                  {formatKey(key)}:
                </p>
                <p className="text-gray-600">
                  {typeof value === "number" && key !== "OrderID"
                    ? `${formatPound(value)}`
                    : value}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-xl p-3 md:p-6 shadow">
        <h1
          className={`text-xl lg:text-3xl font-extrabold text-black mb-6 flex items-center gap-2 ${bigShoulders.className}`}
        >
          <HiOutlineInbox className="text-4xl" />
          Shipping Address
        </h1>
        <div className="grid md:grid-cols-3 gap-2 md:gap-4">
          {Object.entries(Orderaddress).map(([key, value]: any) => (
            <div key={key}>
              <p className="font-semibold text-black capitalize">
                {formatKey(key)}:
              </p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Billing Address */}
      <div className="bg-white rounded-xl p-3 md:p-6 shadow">
        <h1
          className={`text-xl lg:text-3xl font-extrabold text-black mb-6 flex items-center gap-2 ${bigShoulders.className}`}
        >
          <HiOutlineCreditCard className="text-4xl" />
          Billing Address
        </h1>
        <div className="grid md:grid-cols-3 gap-2 md:gap-4">
          {Object.entries(Orderinvaddress).map(([key, value]: any) => (
            <div key={key}>
              <p className="font-semibold text-black capitalize">
                {formatKey(key)}:
              </p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Ordered */}
      <div className="bg-white shadow rounded-xl p-3 md:p-6 mb-8">
        <h1
          className={`text-xl lg:text-3xl font-extrabold text-black mb-6 flex items-center gap-2 ${bigShoulders.className}`}
        >
          <HiOutlineClipboardDocumentList className="text-4xl" />
          Products Ordered
        </h1>
        <div className="overflow-x-auto no-scrollbar">
          <table className="table-auto whitespace-nowrap w-full border-collapse border border-[#f06022]">
            <thead className="bg-primary text-white">
              <tr>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Image
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Code
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Color
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Size
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Fit
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Qty.
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-[#f06022] px-4 py-2 text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedproduct.map((product: any, index: number) => (
                <tr key={index} className="hover:bg-red-50 text-sm">
                  {/* Image */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.ImgUrl ? (
                      <Image
                        width={72}
                        height={72}
                        src={product.ImgUrl}
                        alt={product.Description}
                        className="h-8 w-8 aspect-square object-contain"
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>

                  {/* Product Code */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.ProductCode || "No Description"}
                  </td>

                  {/* Product Description */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Description || "No Description"}
                  </td>

                  {/* Color */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Colour
                      ? product.Colour + ` (${product.Colour_Description})`
                      : "N/A"}
                  </td>

                  {/* Size */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Size
                      ? product.Size + ` (${product.Size_Description})`
                      : "N/A"}
                  </td>

                  {/* Fit */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Fit || "N/A"}
                  </td>

                  {/* Quantity */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Quantity ? "x " + product.Quantity : "N/A"}
                  </td>

                  {/* Sales Price */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Sales_Price
                      ? `${formatPound(product.Sales_Price)}`
                      : "N/A"}
                  </td>

                  {/* Line Total */}
                  <td className="border border-[#f06022] px-4 py-2">
                    {product.Line_Total
                      ? `${formatPound(product.Line_Total)}`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Total */}
      <div className="bg-white shadow rounded-lg p-6">
        <h1
          className={`text-xl lg:text-3xl font-extrabold text-black mb-6 flex items-center gap-2 ${bigShoulders.className}`}
        >
          <HiOutlineCurrencyPound className="text-4xl" />
          Order Total
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(Ordertotal).map(([key, value]: any) =>
            value ? (
              <div key={key}>
                <p className="font-semibold text-black capitalize">
                  {formatKey(key)}:
                </p>
                <p className="text-gray-600">
                  {typeof value === "number" ? `${formatPound(value)}` : value}
                </p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
