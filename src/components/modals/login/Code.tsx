import Link from "next/link";
import Image from "next/image";
import { Fetch } from "@/utils/axios";
import { Get } from "@/api/generalApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

interface CodeType {
  Code: string;
  Name: string;
}

const Code = ({
  formData,
  setScreen,
  setFormData,
}: {
  formData: any;
  setScreen: any;
  setFormData: any;
}) => {
  const [errors, setErrors] = useState({ email: "" });
  const [codes, setCodes] = useState<CodeType[]>([]);
  const [filteredCodes, setFilteredCodes] = useState<CodeType[]>([]);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await Get("api/GroupCode");
        if (response?.status) setCodes(response?.customerGroup);
        else setCodes([]);
      } catch (error) {
        console.log("Codes: " + error);
        setCodes([]);
      }
    };
    if (codes.length === 0) fetchCodes();
  }, [codes.length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));

    if (value.length >= 3) {
      const filtered = codes.filter((code: any) =>
        code.Name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCodes(filtered);
    } else setFilteredCodes([]);
  };

  const handleSelectCode = (selectedName: string) => {
    // Find the corresponding code for the selected name
    const selectedCode =
      codes.find((code: any) => code.Name === selectedName)?.Code || "";
    setFormData((prev: any) => ({
      ...prev,
      code: selectedCode,
      codeName: selectedName,
    }));
    setFilteredCodes([]); // Clear the filtered list
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (!formData?.codeName && formData?.codeName.length < 3) ||
      !formData?.code
    )
      return toast.info("Please enter code!");
    const response: any = await Fetch(
      "api/GroupCustomer",
      { code: formData?.code },
      5000,
      true
    );
    if (response?.status) {
      setFormData((prev: any) => ({
        ...prev,
        cust: response?.cust ?? "",
        code: response?.code ?? "",
        custName: response?.name ?? "",
      }));
    }
    setErrors({ email: "" });
    setScreen("registerSuccess");
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={22}
              onClick={() => setScreen("confirmationCode")}
              className="text-primary hover:text-white cursor-pointer"
            />
          </span>
          <Link href="/">
            <Image
              width={100}
              height={60}
              unoptimized
              alt="Logo"
              src={
                "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
              }
              className="w-2/5 object-contain mx-auto md:mr-auto md:ml-0"
            />
          </Link>
        </div>
        <div>
          <h2
            className={`text-4xl md:text-6xl mb-2 text-center md:text-left font-bold text-primary/90 uppercase ${bigShoulders.className}`}
          >
            Register!
          </h2>
          <p className="text-center md:text-left text-white">
            Welcome to WORKSAFE, Please enter your group or company code below
            and select &apos;Continue&apos;
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4 md:pl-6 lg:pl-10">
        <form onSubmit={handleSubmit} className="relative">
          <div className="mb-6">
            <input
              type="text"
              id="codeName"
              name="codeName"
              required
              onChange={handleChange}
              value={formData.codeName}
              placeholder="Company or Group Code"
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {filteredCodes.length > 0 && (
              <ul className="absolute shadow-2xl bg-black text-primary mt-2 w-full h-fit overflow-y-auto transition">
                {filteredCodes.map((codeObj: CodeType, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectCode(codeObj.Name)}
                    className="px-4 py-2 hover:border-b hover:border-primary hover:text-primary cursor-pointer"
                  >
                    {codeObj.Name}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-primary text-white uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
          >
            Continue
          </button>
        </form>
        <div>
          <p className="text-xs mt-2 text-center text-white/80">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & condition{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
