"use client";

import { Fetch } from "@/utils/axios";
import AddressCard from "./AddressCard";
import { Accordion } from "./Accordion";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import Select from "@/components/input/Select";
import { FaAddressBook } from "react-icons/fa";
import { getDeviceCheck } from "@/api/generateDeviceId";
import React, { useEffect, useRef, useState } from "react";
import { InvoiceFormFields as formFields } from "./formType";
import { AddressFinder } from "@ideal-postcodes/address-finder";
import NumericStringInput from "@/components/input/NumericString";

const InvoiceAddress = ({
  errors,
  isOpen,
  formData,
  formRef2,
  setIsOpen,
  countries,
  setFormData,
  accountDetail,
  setUpdatedCart,
  selectedAddress,
  handleButtonClick,
  setSelectedAddress,
  handleForm1Validation,
}: {
  errors: any;
  formData: any;
  formRef2: any;
  setIsOpen: any;
  countries: any;
  isOpen: boolean;
  setFormData: any;
  accountDetail: any;
  setUpdatedCart: any;
  selectedAddress: any;
  handleButtonClick: any;
  setSelectedAddress: any;
  handleForm1Validation: any;
}) => {
  const shouldRender = useRef(true);

  useEffect(() => {
    if (!shouldRender.current) return;
    shouldRender.current = false;

    AddressFinder.watch({
      inputField: "#PCode",
      apiKey: "ak_m5xjqe9dDb9a32eo5fgmZkbbzf9a2",
      onAddressRetrieved: (address: any) => {
        setFormData((prev: any) => ({
          ...prev,
          Add: address.line_1,
          PCode: address.postcode,
          PTown: address.post_town,
        }));
      },
    });
    // eslint-disable-next-line
  }, []);

  const [options, setOptions] = useState([]);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleButtonClick("orderSummary");
    let url = "api/AddressSelect";
    const data: any = { PostCode: formData.PCode };
    const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (!token) {
      data.DeviceID = getDeviceCheck();
      url = "api/ExpressAddressSelect";
    }
    const response: any = await Fetch(url, data, 5000, true, false);
    if (response?.status) setUpdatedCart(response?.pricedetails);
  };

  useEffect(() => {
    setOptions(countries);
    // eslint-disable-next-line
  }, [countries.length]);

  useEffect(() => {
    if (selectedAddress?.invoiceAddressId?.ID) {
      const add = selectedAddress?.invoiceAddressId;
      const address = {
        Add: add?.Addr,
        Email: add?.EMail,
        County: add?.County,
        PCode: add?.Post_Code,
        PTown: add?.Post_Town,
        Name: add?.Customer_Name,
        Telephone: add?.Telephone,
        CountryCode: add?.Country_Code,
        InvAddressCode: add?.Address_Code,
      };
      setFormData((prev: any) => ({ ...prev, ...address }));
    }
    // eslint-disable-next-line
  }, [selectedAddress?.invoiceAddressId?.ID]);

  const handleFill = () => {
    const address = {
      Add: formData?.DAdd,
      Name: formData?.DName,
      Email: formData?.DEmail,
      PCode: formData?.DPCode,
      PTown: formData?.DPTown,
      County: formData?.DCounty,
      Telephone: formData?.DTelephone,
      CountryCode: formData?.DCountryCode,
      InvAddressCode: formData?.AddressCode,
    };
    setFormData((prev: any) => ({ ...prev, ...address }));
  };

  return (
    <div className="w-full">
      <Accordion
        isOpen={isOpen}
        Icon={FaAddressBook}
        setIsOpen={setIsOpen}
        title="Delivery Details"
        handleForm1Validation={handleForm1Validation}
      >
        <div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
            {accountDetail?.my_DeliveryAddress &&
              accountDetail?.my_DeliveryAddress.map((address: any) => {
                return (
                  <React.Fragment key={address?.ID}>
                    <AddressCard
                      type="invoice"
                      address={address}
                      selectedAddress={selectedAddress}
                      handleSelected={setSelectedAddress}
                    />
                  </React.Fragment>
                );
              })}
          </div>
          {accountDetail?.my_DeliveryAddress &&
            accountDetail?.my_DeliveryAddress.length > 0 && (
              <div className="flex items-center gap-4 my-5">
                <div className="h-[2px] flex-grow bg-gray-200"></div>
                <span className="text-gray-700 font-medium">Or </span>
                <div className="h-[2px] flex-grow bg-gray-200"></div>
              </div>
            )}
          <button
            onClick={handleFill}
            className="px-4 mb-5 py-2 bg-secondary text-white font-semibold focus:outline-none transition"
          >
            Use Billing Address
          </button>
          <form ref={formRef2} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center">
              <Text
                field={{
                  ...formFields[0],
                  value: formData[formFields[0].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[0].name]}
              />
              <NumericStringInput
                field={{
                  ...formFields[1],
                  value: formData[formFields[1].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[1].name]}
              />
              <Text
                field={{
                  ...formFields[2],
                  value: formData[formFields[2].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[2].name]}
              />
            </div>
            <h3
              className={`uppercase text-secondary mt-5 text-2xl lg:text-xl flex items-center font-extrabold ${bigShoulders.className}`}
            >
              Address details
            </h3>
            <div className="grid mt-5 grid-cols-1 lg:grid-cols-4 gap-5 items-center">
              <Text
                field={{
                  ...formFields[7],
                  value: formData[formFields[7].name]
                    ? formData[formFields[7].name].toUpperCase()
                    : "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[7].name]}
              />
              <Text
                field={{
                  ...formFields[3],
                  value: formData[formFields[3].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[3].name]}
              />
              <Text
                field={{
                  ...formFields[5],
                  value: formData[formFields[5].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[5].name]}
              />
              <Text
                field={{
                  ...formFields[6],
                  value: formData[formFields[6].name] || "",
                }}
                handleInputChange={handleInputChange}
                error={errors[formFields[6].name]}
              />
              {options.length > 0 && (
                <Select
                  field={{
                    ...formFields[4],
                    options: options,
                    value: formData[formFields[4].name] || "",
                  }}
                  handleInputChange={handleInputChange}
                  error={errors[formFields[4].name]}
                />
              )}

              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <div className="hidden lg:block"></div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 text-white rounded-full bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
              >
                Continue With Express Checkout
              </button>
            </div>
          </form>
        </div>
      </Accordion>
    </div>
  );
};

export default InvoiceAddress;
