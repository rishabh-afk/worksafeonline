import React from "react";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";
import { formatPound } from "@/components/logo/general";

interface CartSummaryProps {
  cart: any;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart }) => {
  const navigate = useRouter();

  const handleCheckout = () => {
    navigate.push("/checkout");
  };

  return (
    <div className={`p-6 border-4 ${bigShoulders.className}`}>
      <h2 className="text-2xl font-black">Order Summary</h2>
      {/* <div className="flex justify-between items-center border-b border-gray-300 pb-4">
        <span className="text-xl font-bold">Total Quantity</span>
        <span className="text-xl">{cart?.TotalQuantity}</span>
      </div> */}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Amount excluding Vat</span>
        <span className="text-xl">{formatPound(cart?.TotalAmountExVat)}</span>
      </div>
      {cart?.ArtworkCost > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">ArtWork Cost</span>
          <span className="text-xl">+ {formatPound(cart?.ArtworkCost)}</span>
        </div>
      )}
      {cart?.Discount > 0 && (
        <div className="flex justify-between items-center border-b border-gray-300 py-4">
          <span className="text-xl font-bold">Discount Applied</span>
          <span className="text-xl">- {formatPound(cart?.Discount)}</span>
        </div>
      )}
      <div className="flex justify-between items-center border-b border-gray-300 py-4">
        <span className="text-xl font-bold">Vat Amount</span>
        <span className="text-xl">+ {formatPound(cart?.Vat_Amount)}</span>
      </div>
      <div className="flex justify-between items-center font-semibold pt-4 text-lg mb-4">
        <span className="text-xl font-bold">Amount to be Paid:</span>
        <span className="text-2xl">{formatPound(cart?.TotalAmount)}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="w-full bg-primary text-white text-lg hover:bg-primary/70 py-3 font-semibold"
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

export default CartSummary;
