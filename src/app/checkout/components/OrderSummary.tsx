"use client";

import Link from "next/link";
import { bigShoulders } from "@/app/layout";
import { formatPound } from "@/components/logo/general";

const OrderSummary = ({
  cart,
  loading,
  handleSubmit,
}: {
  cart: any;
  loading: boolean;
  handleSubmit: any;
}) => {
  return (
    <div className={`p-6 rounded-lg border-4 ${bigShoulders.className}`}>
      <h2 className="text-4xl font-black mb-8 uppercase">Your order</h2>
      <div className="flex border-b pb-3 justify-between items-center gap-5">
        <span className="text-2xl font-bold">Product</span>
        <span className="text-2xl font-bold">Subtotal</span>
      </div>
      {cart &&
        cart?.Products &&
        cart?.Products.length > 0 &&
        cart?.Products.map((item: any) => {
          return (
            <div
              key={item.Line}
              className="flex font-sans tracking-tighter justify-between items-center border-b border-gray-300 py-2 gap-5"
            >
              <span className="text-gray-600 text-lg">
                {item.ProductDescription} x {item.Quantity}
              </span>
              <span className="text-lg">{formatPound(item?.LineTotal)}</span>
            </div>
          );
        })}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Total Quantity</span>
        <span className="text-xl font-sans">
          {cart?.CartTot?.TotalQuantity.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Amount excluding Vat</span>
        <span className="text-xl font-sans">
          {formatPound(cart?.CartTot?.TotalAmountExVat)}
        </span>
      </div>
      {cart?.CartTot?.ArtworkCost > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">ArtWork Cost</span>
          <span className="text-xl font-sans">
            + {formatPound(cart?.CartTot?.ArtworkCost)}
          </span>
        </div>
      )}
      {cart?.CartTot?.Discount > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">Discount Applied</span>
          <span className="text-xl font-sans">
            - {formatPound(cart?.CartTot?.Discount)}
          </span>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Vat Amount</span>
        <span className="text-xl font-sans">
          + {formatPound(cart?.CartTot?.Vat_Amount)}
        </span>
      </div>
      <div className="flex justify-between items-center font-semibold pt-4 text-lg mb-4">
        <span className="text-xl font-bold">Amount to be Paid:</span>
        <span className="text-2xl font-sans">
          {formatPound(cart?.CartTot?.TotalAmount)}
        </span>
      </div>
      <p className="font-sans text-gray-500 pb-5">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our{" "}
        <Link
          href={"/privacy-policy"}
          className="text-black hover:underline hover:underline-offset-2 hover:text-primary"
        >
          privacy policy
        </Link>
        .
      </p>
      <button
        disabled={loading}
        onClick={handleSubmit}
        className="w-full bg-primary font-sans hover:bg-primary/70 py-4 text-xs font-semibold rounded-full"
      >
        {loading ? "Please wait..." : "PLACE ORDER"}
      </button>
    </div>
  );
};

export default OrderSummary;
