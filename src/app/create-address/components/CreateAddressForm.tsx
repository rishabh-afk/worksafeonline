import { useState } from "react";
import { Post } from "@/utils/axios";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";

const CreateAddressForm = ({ address }: { address?: any }) => {
  const [formData, setFormData] = useState<any>(
    address?.address_id
      ? address
      : {
          address_id: 0,
          first_name: "",
          address_line1: "",
          town: "",
          county: "",
          country: "",
          post_code: "",
          mobile: "",
          email: "",
          invaddress: 0,
          deladdress: 0,
          dinvaddress: 0,
          ddeladdress: 0,
        }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if ((e.target as HTMLInputElement).type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData((prev: any) => ({ ...prev, [name]: isChecked ? 1 : 0 }));
    } else setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await Post("/api/Address", formData);
      toast.success("Address saved successfully!");
      console.log(response);
    } catch (error) {
      toast.error("Failed to save the address. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit}
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${bigShoulders.className}`}
      >
        {/* Full Name */}
        <div>
          <label htmlFor="first_name" className="block font-semibold text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter full name"
            required
          />
        </div>

        {/* Address Line 1 */}
        <div>
          <label
            htmlFor="address_line1"
            className="block font-semibold text-lg"
          >
            Address Line 1
          </label>
          <input
            type="text"
            id="address_line1"
            name="address_line1"
            value={formData.address_line1}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter address"
            required
          />
        </div>

        {/* Town */}
        <div>
          <label htmlFor="town" className="block font-semibold text-lg">
            Town
          </label>
          <input
            type="text"
            id="town"
            name="town"
            value={formData.town}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter town"
            required
          />
        </div>

        {/* County */}
        <div>
          <label htmlFor="county" className="block font-semibold text-lg">
            County
          </label>
          <input
            type="text"
            id="county"
            name="county"
            value={formData.county}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter county"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block font-semibold text-lg">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter country"
            required
          />
        </div>

        {/* Post Code */}
        <div>
          <label htmlFor="post_code" className="block font-semibold text-lg">
            Post Code
          </label>
          <input
            type="text"
            id="post_code"
            name="post_code"
            value={formData.post_code}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter post code"
            required
          />
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block font-semibold text-lg">
            Mobile
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter mobile number"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
            placeholder="Enter email address"
            required
          />
        </div>

        {/* Address Type */}
        <div>
          <label htmlFor="invaddress" className="text-lg font-semibold">
            Invoice Address
          </label>
          <input
            type="checkbox"
            id="invaddress"
            name="invaddress"
            checked={formData.invaddress === 1}
            onChange={handleInputChange}
            className="ml-2 min-w-5 min-h-5"
          />
        </div>
        <div>
          <label htmlFor="deladdress" className="text-lg font-semibold">
            Delivery Address
          </label>
          <input
            type="checkbox"
            id="deladdress"
            name="deladdress"
            checked={formData.deladdress === 1}
            onChange={handleInputChange}
            className="ml-2 min-w-5 min-h-5"
          />
        </div>

        {/* Default Address Type */}
        <div>
          <label htmlFor="dinvaddress" className="text-lg font-semibold">
            Default Invoice Address
          </label>
          <input
            type="checkbox"
            id="dinvaddress"
            name="dinvaddress"
            checked={formData.dinvaddress === 1}
            onChange={handleInputChange}
            className="ml-2 min-w-5 min-h-5"
          />
        </div>
        <div>
          <label htmlFor="ddeladdress" className="text-lg font-semibold">
            Default Delivery Address
          </label>
          <input
            type="checkbox"
            id="ddeladdress"
            name="ddeladdress"
            checked={formData.ddeladdress === 1}
            onChange={handleInputChange}
            className="ml-2 min-w-5 min-h-5"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-primary/80 text-black text-xl font-bold py-3 rounded-full uppercase hover:bg-primary transition"
          >
            {address?.address_id ? "Update Address" : "Save Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAddressForm;
