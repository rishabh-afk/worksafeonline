import { bigShoulders } from "@/app/layout";
import { formatPound } from "@/components/logo/general";

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
  //       console.error(`Invalid EndPrice for item ID: ${item?.ID}`);
  //       return acc;
  //     }
  //   }, 0) || 0;

  return (
    <div
      className={`flex uppercase justify-between items-center text-2xl p-4 ${bigShoulders.className}`}
    >
      <strong>SubTotal:</strong>{" "}
      <span className="font-black text-xl">
        {formatPound(cart?.TotalAmountExVat)}
      </span>
    </div>
  );
};

export default SubTotal;
