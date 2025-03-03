"use client";

import AddressCard from "./AddressCard";
import { Accordion } from "./Accordion";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import { FaAddressBook } from "react-icons/fa";
import Select from "@/components/input/Select";
import React, { useEffect, useRef, useState } from "react";
import { BillingFormField as formFields } from "./formType";
import { AddressFinder } from "@ideal-postcodes/address-finder";
import NumericStringInput from "@/components/input/NumericString";

const CheckoutForm = ({
  errors,
  isOpen,
  formData,
  formRef1,
  setIsOpen,
  countries,
  setFormData,
  accountDetail,
  selectedAddress,
  handleButtonClick,
  setSelectedAddress,
  handleForm1Validation,
}: {
  errors: any;
  formData: any;
  formRef1: any;
  setIsOpen: any;
  countries: any;
  isOpen: boolean;
  setFormData: any;
  accountDetail: any;
  selectedAddress: any;
  handleButtonClick: any;
  setSelectedAddress: any;
  handleForm1Validation: any;
}) => {
  const shouldRender2 = useRef(true);

  useEffect(() => {
    if (!shouldRender2.current) return;
    shouldRender2.current = false;

    AddressFinder.watch({
      inputField: "#DPCode",
      apiKey: "ak_m5xjqe9dDb9a32eo5fgmZkbbzf9a2",
      onAddressRetrieved: (address: any) => {
        setFormData((prev: any) => ({
          ...prev,
          Add: address.line_1,
          DPCode: address.postcode,
          DPTown: address.post_town,
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

  useEffect(() => {
    if (selectedAddress?.billingAddressId?.ID) {
      const add = selectedAddress?.billingAddressId;
      const address = {
        DAdd: add?.Addr,
        DEmail: add?.EMail,
        DCounty: add?.County,
        DPCode: add?.Post_Code,
        DPTown: add?.Post_Town,
        DName: add?.Customer_Name,
        DTelephone: add?.Telephone,
        AddressCode: add?.Address_Code,
        DCountryCode: add?.Country_Code,
      };
      setFormData((prev: any) => ({ ...prev, ...address }));
    }
    // eslint-disable-next-line
  }, [selectedAddress?.billingAddressId?.ID]);

  useEffect(() => {
    setOptions(countries);
    // eslint-disable-next-line
  }, [countries.length]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    handleButtonClick("invoiceAddress");
  };
  return (
    <div className="w-full">
      <Accordion
        isOpen={isOpen}
        Icon={FaAddressBook}
        setIsOpen={setIsOpen}
        title={"Billing Details"}
        handleForm1Validation={handleForm1Validation}
      >
        <div>
          <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
            {accountDetail?.my_BillingAddress &&
              accountDetail?.my_BillingAddress.map((address: any) => {
                return (
                  <React.Fragment key={address?.ID}>
                    <AddressCard
                      type="billing"
                      address={address}
                      selectedAddress={selectedAddress}
                      handleSelected={setSelectedAddress}
                    />
                  </React.Fragment>
                );
              })}
          </div>
          {accountDetail?.my_BillingAddress &&
            accountDetail?.my_BillingAddress.length > 0 && (
              <div className="flex items-center gap-4 my-5">
                <div className="h-[2px] flex-grow bg-gray-200"></div>
                <span className="text-gray-700 font-medium">Or </span>
                <div className="h-[2px] flex-grow bg-gray-200"></div>
              </div>
            )}
          <form ref={formRef1} onSubmit={handleSubmit}>
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
              className={`uppercase mt-5 text-2xl lg:text-xl flex items-center font-extrabold ${bigShoulders.className}`}
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
                className="w-full px-6 py-4 text-white rounded-full bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
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

export default CheckoutForm;
