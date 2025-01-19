import { formatKey } from "@/api/generalApi";
import { bigShoulders } from "@/app/layout";
import Image from "next/image";
import React from "react";

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
          <span>🛒</span> Order Summary
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
                    ? `£${value}`
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
          <span>📦</span> Shipping Address
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
          <span>💳</span> Billing Address
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
          <span>📋</span> Products Ordered
        </h1>
        <div className="overflow-x-auto no-scrollbar">
          <table className="table-auto whitespace-nowrap w-full border-collapse border border-yellow-200">
            <thead className="bg-yellow-100">
              <tr>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Image
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Code
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Product
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Color
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Size
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Fit
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Qty.
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Price
                </th>
                <th className="border border-yellow-200 px-4 py-2 text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedproduct.map((product: any, index: number) => (
                <tr key={index} className="hover:bg-yellow-50 text-sm">
                  {/* Image */}
                  <td className="border border-yellow-200 px-4 py-2">
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
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.ProductCode || "No Description"}
                  </td>

                  {/* Product Description */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Description || "No Description"}
                  </td>

                  {/* Color */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Colour
                      ? product.Colour + ` (${product.Colour_Description})`
                      : "N/A"}
                  </td>

                  {/* Size */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Size
                      ? product.Size + ` (${product.Size_Description})`
                      : "N/A"}
                  </td>

                  {/* Fit */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Fit || "N/A"}
                  </td>

                  {/* Quantity */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Quantity ? "x " + product.Quantity : "N/A"}
                  </td>

                  {/* Sales Price */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Sales_Price
                      ? `£${product.Sales_Price.toFixed(2)}`
                      : "N/A"}
                  </td>

                  {/* Line Total */}
                  <td className="border border-yellow-200 px-4 py-2">
                    {product.Line_Total
                      ? `£${product.Line_Total.toFixed(2)}`
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
          <span>💷</span> Order Total
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(Ordertotal).map(([key, value]: any) =>
            value ? (
              <div key={key}>
                <p className="font-semibold text-black capitalize">
                  {formatKey(key)}:
                </p>
                <p className="text-gray-600">
                  {typeof value === "number" ? `£${value}` : value}
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
