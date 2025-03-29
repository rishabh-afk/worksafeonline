import { Post } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser, FaPhone } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

const AddressCard = ({
  type,
  address,
  fetchUserData,
  handleSelected,
  selectedAddress,
}: {
  type: string;
  address: any;
  fetchUserData: any;
  handleSelected?: any;
  selectedAddress?: any;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleEdit = (id: number | string) => {
    router.push(`/edit-address?address_id=${id}&type=${type}`);
  };
  const handleDelete = async (id: number | string) => {
    try {
      setLoading(true);
      const response: any = await Post("/api/DeleteAddress", {
        address_id: id,
      });
      if (response?.status) fetchUserData();
    } catch (error) {
      console.log("Delete Address: " + error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      onClick={() => handleSelected(address?.ID)}
      className={`text-black p-3 pb-2 h-fit bg-white transition-all border-2 cursor-pointer duration-200 rounded-xl ${selectedAddress === address?.ID ? "border-primary" : "border-primary/20"
        }`}
    >
      {address?.Customer_Name && (
        <p className="flex items-center gap-2 text-lg mb-1">
          <span className="text-primary text-base">
            <FaUser />
          </span>
          <span className="text-sm">{address.Customer_Name}</span>
        </p>
      )}
      {address?.Telephone && (
        <p className="flex items-center gap-2 text-lg mb-1">
          <span className="text-primary text-base">
            <FaPhone />
          </span>
          <span className="text-sm">{address.Telephone}</span>
        </p>
      )}
      {address?.Address && (
        <p className="flex items-center gap-2 text-lg mb-1">
          <span className="text-primary text-base">
            <FaLocationDot />
          </span>
          <span className="text-sm">
            {address.Address ? address.Address : "-"}
          </span>
        </p>
      )}
      <div className="flex justify-end mt-2 gap-1">
        {address?.AllowEdit === 1 && (
          <button
            title="Edit Address"
            disabled={loading}
            onClick={() => handleEdit(address?.ID)}
            className="flex items-center text-sm gap-1 px-2 py-1 text-white bg-primary/80 hover:bg-primary rounded-md transition"
          >
            <MdEdit className="text-base" />
            Edit
          </button>
        )}
        {address?.AllowDelete === 1 && (
          <button
            title="Delete Address"
            disabled={loading}
            onClick={() => handleDelete(address?.ID)}
            className="flex items-center text-sm gap-1 px-2 py-1 text-white bg-red-500 hover:bg-red-600 rounded-md transition"
          >
            <MdDelete className="text-lg" />
            {loading ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
