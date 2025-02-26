import { formatPound } from "@/components/logo/general";

interface OrderTotalsProps {
  total: any;
}

const OrderTotals: React.FC<OrderTotalsProps> = ({ total }) => {
  const {
    Coupon,
    Carriage,
    Discount,
    Vat_Amount,
    ArtworkCost,
    TotalAmount,
    TotalQuantity,
    CouponDiscount,
    TotalAmountExVat,
  } = total;
  return (
    <div>
      <h2 className="lg:text-lg font-semibold uppercase lg:rounded-t-xl bg-secondary text-white py-2 px-4">
        Order <span className="">Totals</span>
      </h2>
      <div className="lg:bg-gray-50 p-4 rounded-b-xl pt-2">
        <div className="flex justify-between items-center pt-2">
          <span className="lg:text-lg font-bold">Total Quantity</span>
          <span className="lg:text-lg font-semibold font-sans">
            x {TotalQuantity ? TotalQuantity : 0}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="lg:text-lg font-bold">Sub Total (Excl VAT)</span>
          <span className="lg:text-lg font-semibold font-sans">
            {TotalAmountExVat ? formatPound(TotalAmountExVat) : 0}
          </span>
        </div>
        {ArtworkCost > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="lg:text-lg font-bold">ArtWork Cost</span>
            <span className="lg:text-lg font-semibold font-sans">
              + {ArtworkCost ? formatPound(ArtworkCost) : 0}
            </span>
          </div>
        )}
        {Carriage > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="lg:text-lg font-bold">Carriage</span>
            <span className="lg:text-lg font-semibold font-sans">
              + {formatPound(Carriage)}
            </span>
          </div>
        )}
        {Coupon && (
          <div className="flex justify-between items-center pt-2">
            <span className="lg:text-lg font-bold">Coupon Code</span>
            <span className="lg:text-lg font-semibold font-sans">{Coupon}</span>
          </div>
        )}
        {CouponDiscount > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="lg:text-lg font-bold">
              Coupon Discount Applied
            </span>
            <span className="lg:text-lg font-semibold font-sans">
              - {CouponDiscount ? formatPound(CouponDiscount) : 0}
            </span>
          </div>
        )}
        {Discount > 0 && (
          <div className="flex justify-between items-center pt-2">
            <span className="lg:text-lg font-bold">Discount Applied</span>
            <span className="lg:text-lg font-semibold font-sans">
              - {Discount ? formatPound(Discount) : 0}
            </span>
          </div>
        )}
        <div className="flex justify-between items-center pt-2">
          <span className="lg:text-lg font-bold">Total VAT</span>
          <span className="lg:text-lg font-semibold font-sans">
            + {Vat_Amount ? formatPound(Vat_Amount) : 0}
          </span>
        </div>
        <div className="flex justify-between text-secondary items-center font-semibold pt-2 text-xl md:text-2xl border-t mt-3">
          <span className="font-bold">Paid Amount:</span>
          <span className="font-bold font-sans">
            {TotalAmount ? formatPound(TotalAmount) : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderTotals;
