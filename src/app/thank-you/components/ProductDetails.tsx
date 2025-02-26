import { formatPound } from "@/components/logo/general";
import Image from "next/image";
import React from "react";

interface ProductDetailsProps {
  cart: {
    Products: {
      Line: number;
      Line_No: number;
      ImgUrl: string;
      ProductCode: string;
      Description: string;
      Colour: string;
      Fit: string;
      Size: string;
      Quantity: number;
      Sales_Price: number;
      Line_Total: number;
      BulkDiscount: string;
      ArtworkExist: number;
      ArtworkTotalPerQty: number;
      Approve: number;
      ArtworkDetails: string | null;
      Vat: string;
    }[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ cart }) => {
  return (
    <div className="overflow-x-scroll no-scrollbar">
      <table className="w-full border-collapse whitespace-nowrap">
        <thead>
          <tr className="bg-[#F06022] font-semibold md:uppercase text-xs md:text-sm text-white">
            <th className="p-3 border text-center">S. No.</th>
            <th className="p-3 border text-center">Image</th>
            <th className="p-3 border text-left">Product Code</th>
            <th className="p-3 border w-1/2 text-left">Description</th>
            <th className="p-3 border text-center">Colour</th>
            <th className="p-3 border text-center">Fit</th>
            <th className="p-3 border text-center">Size</th>
            <th className="p-3 border text-center">Quantity</th>
            <th className="p-3 border text-center">Price</th>
            <th className="p-3 border text-center">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cart?.Products.map((product) => (
            <tr
              key={product.Line_No}
              className="hover:bg-gray-50 text-xs cursor-pointer border-b"
            >
              <td className="px-2 text-sm text-center">{product.Line_No}.</td>
              <td className="px-2 flex items-center py-1">
                <Image
                  width={100}
                  height={100}
                  src={product.ImgUrl}
                  alt={product.Description}
                  className="w-9 h-9 object-contain"
                />
              </td>
              <td className="px-2 text-center">{product.ProductCode}</td>
              <td className="px-2">{product.Description}</td>
              <td className="px-2 text-center">{product.Colour}</td>
              <td className="px-2 text-center">{product.Fit}</td>
              <td className="px-2 text-center">{product.Size}</td>
              <td className="px-2 text-center">X {product.Quantity}</td>
              <td className="px-2 text-center">
                {product.Sales_Price && formatPound(product.Sales_Price)}
              </td>
              <td className="px-2 text-base font-semibold text-center">
                {product.Line_Total && formatPound(product.Line_Total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
