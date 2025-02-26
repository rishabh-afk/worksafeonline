import { TbReload } from "react-icons/tb";
import { LiaShippingFastSolid } from "react-icons/lia";

const ShippingInfo = ({ shippingDetails }: { shippingDetails: any }) => (
  <div className="mt-4 flex uppercase gap-10 text-sm">
    <div className="flex font-semibold items-center mt-3 gap-3">
      <LiaShippingFastSolid size={24} />
      <span>{shippingDetails?.freeDelivery?.label}</span>
    </div>
    <div className="flex font-semibold items-center mt-3 gap-3">
      <TbReload size={24} className="rotate-180" />
      <span>{shippingDetails?.returnPeriod} days return period</span>
    </div>
  </div>
);

export default ShippingInfo;
