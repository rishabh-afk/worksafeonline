"use client";

import { Fetch } from "@/utils/axios";
import AddressCard from "./AddressCard";
import { Accordion } from "./Accordion";
import Text from "@/components/input/Text";
import { bigShoulders } from "@/app/layout";
import Select from "@/components/input/Select";
import { FaAddressBook } from "react-icons/fa";
import Button from "@/components/common/Button";
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
  const [apiKey, setApiKey] = useState("");
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const fetchKey = async () => {
      const url = "api/AddressFinderID";
      const resp: any = await Fetch(url, {}, 5000, true, false);
      if (resp?.status) setApiKey(resp?.message);
    };
    if (!apiKey) fetchKey();
  }, [apiKey]);

  useEffect(() => {
    if (!shouldRender.current || !apiKey) return;
    shouldRender.current = false;

    AddressFinder.watch({
      apiKey: apiKey,
      inputField: "#PCode",
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
  }, [apiKey]);

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

  useEffect(() => {
    if (accountDetail?.my_DeliveryAddress.length > 0) {
      const data = accountDetail?.my_DeliveryAddress.find(
        (item: any) => item?.DefaultDelAddress === 1
      );
      if (data?.ID) {
        const address = {
          Add: data?.Addr,
          Email: data?.EMail,
          County: data?.County,
          PCode: data?.Post_Code,
          PTown: data?.Post_Town,
          Name: data?.Customer_Name,
          Telephone: data?.Telephone,
          CountryCode: data?.Country_Code,
          InvAddressCode: data?.Address_Code,
        };
        setSelectedAddress((prev: any) => ({
          ...prev,
          invoiceAddressId: data,
        }));
        setFormData((prev: any) => ({ ...prev, ...address }));
      }
    }
    // eslint-disable-next-line
  }, [accountDetail?.my_DeliveryAddress]);

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
          {selectedAddress?.invoiceAddressId.Address && (
            <div className="flex items-center bg-white mb-5 p-4 rounded-xl border border-gray-200 w-full col-span-3">
              <div className="w-full">
                <h2 className="text-xl mb-1 font-semibold">
                  Selected Address:
                </h2>
                <p>{selectedAddress?.invoiceAddressId.Address}</p>
              </div>
              <Button
                text={showList ? "Hide" : "Change"}
                classes="!border !border-black !text-lg !bg-white !text-black !py-1 uppercase"
                onClick={() => setShowList(!showList)}
              />
            </div>
          )}
          {accountDetail?.my_DeliveryAddress &&
            showList &&
            accountDetail?.my_DeliveryAddress.length > 0 && (
              <>
                <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-2">
                  {accountDetail?.my_DeliveryAddress.map((address: any) => {
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
                <div className="flex items-center gap-4 my-5">
                  <div className="h-[2px] flex-grow bg-gray-200"></div>
                  <span className="text-gray-700 font-medium">Or </span>
                  <div className="h-[2px] flex-grow bg-gray-200"></div>
                </div>
              </>
            )}
          <button
            onClick={handleFill}
            className="px-4 mb-5 py-2 bg-secondary text-white font-semibold focus:outline-none transition"
          >
            Same as Billing Address
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
