import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaPhone } from "react-icons/fa";

const AddressCard = ({
  type,
  address,
  handleSelected,
  selectedAddress,
}: {
  type: string;
  address: any;
  handleSelected?: any;
  selectedAddress?: any;
}) => {
  const handleSelect = (address: any, type: string) => {
    if (type === "billing") {
      handleSelected((prev: any) => ({
        ...prev,
        billingAddressId: address,
      }));
    } else if (type === "invoice") {
      handleSelected((prev: any) => ({
        ...prev,
        invoiceAddressId: address,
      }));
    }
  };

  return (
    <div
      onClick={() => handleSelect(address, type)}
      className={`p-4 pb-2 text-sm h-full relative transition-all border-[3px] cursor-pointer duration-200 rounded-xl ${
        (type === "billing" &&
          selectedAddress.billingAddressId?.ID === address?.ID) ||
        (type === "invoice" &&
          selectedAddress.invoiceAddressId?.ID === address?.ID)
          ? "border-secondary/80 bg-secondary text-white"
          : "border-gray-200 text-gray-500"
      }`}
    >
      {!address?.ITag && (
        <span className="text-gray-500 absolute right-3 flex text-sm text-center">
          <span className="ml-1 bg-black text-white rounded-full w-5 h-5 font-black flex items-center justify-center text-xs cursor-pointer group relative">
            i
            <span className="absolute z-20 top-full left-1/2 transform -translate-x-1/2 w-28 font-normal mt-1 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Note : We cannot accept other addresses due to company policy
            </span>
          </span>
        </span>
      )}
      {address?.Customer_Name && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaUser />
          </span>
          <span>{address.Customer_Name}</span>
        </p>
      )}
      {address?.Telephone && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaPhone />
          </span>
          <span>{address.Telephone}</span>
        </p>
      )}
      {address?.Address && (
        <p className="flex items-center gap-2 mb-1">
          <span>
            <FaLocationDot />
          </span>
          <span>{address.Address ? address.Address : "-"}</span>
        </p>
      )}
    </div>
  );
};

export default AddressCard;
