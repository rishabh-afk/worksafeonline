import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { Fetch, Post } from "@/utils/axios";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";
import { AddressFinder } from "@ideal-postcodes/address-finder";

const CreateAddressForm = ({ address }: { address?: any }) => {
  const router = useRouter();
  const shouldRender2 = useRef(true);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);
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

  useEffect(() => {
    const fetchCountries = async () => {
      const response: any = await Fetch(
        "/api/Countries",
        {},
        5000,
        true,
        false
      );
      if (response.status) setCountries(response?.Countries);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchKey = async () => {
      const url = "api/AddressFinderID";
      const resp: any = await Fetch(url, {}, 5000, true, false);
      if (resp?.status) setApiKey(resp?.message);
    };
    if (!apiKey) fetchKey();
  }, [apiKey]);

  useEffect(() => {
    if (!shouldRender2.current || !apiKey) return;
    shouldRender2.current = false;

    AddressFinder.watch({
      apiKey: apiKey,
      inputField: "#post_code",
      onAddressRetrieved: (address: any) => {
        setFormData((prev: any) => ({
          ...prev,
          county: address.county,
          town: address.post_town,
          country: address.country,
          post_code: address.postcode,
          address_line1: `${address.line_1} ${address.line_2} ${address.line_3}`,
        }));
      },
    });
    // eslint-disable-next-line
  }, [apiKey]);

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
      setLoading(true);
      const response: any = await Post("/api/Address", formData);
      if (response.status) {
        setFormData({
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
        });
        return router.replace("/my-address");
      }
    } catch (error) {
      toast.error("Failed to save the address. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
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
          <select
            id="country"
            name="country"
            required
            value={formData.country}
            onChange={handleInputChange}
            className="mt-1 p-3 block w-full rounded-full border-gray-300 shadow-sm focus:ring-2 outline-none focus:border-primary focus:ring-primary"
          >
            <option value="">Select a country</option>
            {countries &&
              countries.length > 0 &&
              countries.map((country: any) => {
                return (
                  <option key={country?.Country} value={country?.Country}>
                    {country?.Name}
                  </option>
                );
              })}
          </select>
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
            disabled={loading}
            className="w-full bg-primary/80 text-white text-xl font-bold py-3 rounded-full uppercase hover:bg-primary transition"
          >
            {address?.address_id
              ? loading
                ? "Updating..."
                : "Update Address"
              : loading
                ? "Please wait...."
                : "Save Address"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateAddressForm;
