import { formatPound } from "@/components/logo/general";
// import { FaStickyNote, FaTicketAlt, FaBox } from "react-icons/fa";

// interface CartItem {
//   ID: string;
//   EndPrice: number;
//   Quantity: number;
// }

const SubTotal = ({ cart }: { cart: any }) => {
  // const totalAmount =
  //   cart?.reduce((acc, item) => {
  //     if (typeof item?.EndPrice === "number") {
  //       return acc + item.EndPrice * item.Quantity;
  //     } else {
  //       console.log(`Invalid EndPrice for item ID: ${item?.ID}`);
  //       return acc;
  //     }
  //   }, 0) || 0;

  return (
    <div className="border-t p-4">
      {/* Icons Row */}
      {/* <div className="grid grid-cols-4 items-center text-gray-500 text-sm">
        <div className="flex gap-2 items-center">
          <FaStickyNote size={20} />
          <span>Order Note</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaTicketAlt size={20} />
          <span>Coupon</span>
        </div>
        <div className="flex gap-2 items-center">
          <FaBox size={20} />
          <span>Shipping</span>
        </div>
      </div> */}

      {/* Total Section */}
      <div className="">
        <div className="flex justify-between font-bold text-2xl">
          <span>Total:</span>
          <span>{formatPound(cart?.TotalAmountExVat)}</span>
        </div>
        <p className="text-gray-500 text-sm">
          Taxes and shipping calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default SubTotal;
