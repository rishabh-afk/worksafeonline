import Link from "next/link";
import Image from "next/image";
import { Fetch, Post } from "@/utils/axios";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterAccount = ({
  formData,
  setScreen,
  setFormData,
}: {
  formData: any;
  setScreen: any;
  setFormData: any;
}) => {
  const [errors, setErrors] = useState({ depot: "", template: "" });
  const [depotList, setDepotList] = useState([]);
  const [templateList, setTemplateList] = useState([]);
  const [filteredDepotList, setFilteredDepotList] = useState([]);
  const [filteredTemplateList, setFilteredTemplateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const depoUrl = "api/Depot";
        const tempUrl = "api/Template";
        const [depotResp, templateResp]: any = await Promise.all([
          Fetch(depoUrl, { Customer: formData?.cust }, 5000, true, false),
          Fetch(tempUrl, { Customer: formData?.cust }, 5000, true, false),
        ]);
        setDepotList(depotResp?.Depot || []);
        setTemplateList(templateResp?.Template || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDepotList([]);
        setTemplateList([]);
      }
    };
    fetchData();
  }, [formData?.cust]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));

    if (name === "depot" && value.length >= 3) {
      const filtered = depotList.filter((code: any) =>
        code.Name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredDepotList(filtered);
    } else if (name === "template" && value.length >= 3) {
      const filtered = templateList.filter((code: any) =>
        code.Description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTemplateList(filtered);
    } else {
      if (name === "depot") setFilteredDepotList([]);
      if (name === "template") setFilteredTemplateList([]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData?.depot) {
      setErrors((prev) => ({ ...prev, depot: "Depot is required." }));
      return;
    }
    // if (!formData?.template) {
    //   setErrors((prev) => ({ ...prev, template: "Template is required." }));
    //   return;
    // }

    try {
      let url = "api/WRegisterCode1";
      if (formData?.code) url = "/api/WRegisterCodeGroup1";

      const depotValue: any = depotList.filter(
        (item: any) => item?.Name === formData?.depot
      );

      const data: any = {
        appID: "Worksafe",
        email: formData?.email,
        customer: formData?.cust,
        depot: depotValue ? depotValue[depotValue.length - 1]?.Depot : "",
      };
      if (formData?.code) data.gCode = formData?.code;
      data.code = data?.gCode ? "" : formData?.code;

      const response: any = await Post(url, data);
      if (response?.status) setScreen("login");
      else {
        console.error("Submission failed:", response);
        setErrors((prev) => ({
          ...prev,
          depot: response?.message || "Failed to register. Please try again.",
        }));
      }
    } catch (error) {
      console.error("Register error:", error);
      setErrors((prev) => ({
        ...prev,
        depot: "An error occurred. Please try again later.",
      }));
    }
  };

  const handleSelectCode = (selectedName: string) => {
    setFormData((prev: any) => ({
      ...prev,
      depot: selectedName,
    }));
    setFilteredDepotList([]); // Clear the filtered list
  };

  const handleSelectTemplateCode = (selectedName: string) => {
    setFormData((prev: any) => ({
      ...prev,
      template: selectedName,
    }));
    setFilteredTemplateList([]); // Clear the filtered list
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={22}
              onClick={() => setScreen("registerSuccess")}
              className="text-primary hover:text-white cursor-pointer"
            />
          </span>
          <Link href="/">
            <Image
              width={100}
              height={60}
              unoptimized
              alt="Logo"
              src="https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
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
            Your code is registered with the following account. Please select
            continue to register:
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center bg-primary rounded-full text-white cursor-not-allowed py-2">
            {formData?.cust} {formData?.custName}
          </div>
          <p className="text-center text-lg py-4 text-white">
            Please select below to continue
          </p>
          <div className="mb-6">
            <input
              type="text"
              id="depot"
              name="depot"
              required
              onChange={handleChange}
              value={formData.depot || ""}
              placeholder="Enter Depot"
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.depot ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {errors.depot && (
              <p className="text-red-500 text-sm mt-1">{errors.depot}</p>
            )}
            {filteredDepotList.length > 0 && (
              <ul className="absolute shadow-2xl bg-black text-primary mt-2 w-full h-fit overflow-y-auto transition">
                {filteredDepotList.map((codeObj: any, index) => (
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
          <div className="mb-6">
            <input
              type="text"
              id="template"
              name="template"
              onChange={handleChange}
              value={formData.template || ""}
              placeholder="Enter Template"
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.template ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {errors.template && (
              <p className="text-red-500 text-sm mt-1">{errors.template}</p>
            )}
            {filteredTemplateList.length > 0 && (
              <ul className="absolute shadow-2xl bg-black text-primary mt-2 w-full h-fit overflow-y-auto transition">
                {filteredTemplateList.map((codeObj: any, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleSelectTemplateCode(codeObj.Description)
                    }
                    className="px-4 py-2 hover:border-b hover:border-primary hover:text-primary cursor-pointer"
                  >
                    {codeObj.Description}
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
          <p className="text-xs mt-2 text-center text-white/60">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & conditions
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterAccount;
