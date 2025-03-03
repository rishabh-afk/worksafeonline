"use client";

import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import { Fetch, Post } from "@/utils/axios";
import { useRouter } from "next/navigation";
import CartSkeleton from "./CheckoutSkeleton";
import { getCartDetails } from "@/api/cartApi";
import { FaShoppingCart } from "react-icons/fa";
import { Accordion } from "./components/Accordion";
import OrderTotals from "./components/OrderTotals";
import eventEmitter from "@/hooks/useEventEmitter";
import Features from "@/components/common/Features";
import CheckoutForm from "./components/CheckoutForm";
import AccountManage from "./components/AccountManage";
import { getDeviceCheck } from "@/api/generateDeviceId";
import ProductDetails from "./components/ProductDetails";
import OrderReference from "./components/OrderReference";
import InvoiceAddress from "./components/InvoiceAddress";
import BillingAddress from "./components/BillingAddress";
import ApplyCoupon from "../cart/components/ApplyCoupon";
import DeliveryAddress from "./components/DeliveryAddress";
import AdditionalFields from "./components/AdditionalFields";
import AvailableCoupon from "../cart/components/AvailableCoupon";
import { useCallback, useEffect, useRef, useState } from "react";
import { checkFormFields, getSelectFormattedData } from "@/api/generalApi";
import { BillingFormField, InvoiceFormFields } from "./components/formType";
import SelectPaymentMethodModal from "@/components/modals/SelectPaymentMethodModal";

export default function ClientPage() {
  // navigation and form fields
  const router = useRouter();
  const formRef1 = useRef<HTMLFormElement>(null);
  const formRef2 = useRef<HTMLFormElement>(null);
  const formRef3 = useRef<HTMLFormElement>(null);

  // cart information
  const [cart, setCart] = useState<any>({});
  const [couponList, setCouponList] = useState([]);
  const [updatedCart, setUpdatedCart] = useState<any>({});
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [openPaymentModalData, setOpenPaymentModalData] = useState({});

  // loading state changes here
  const [loading, setLoading] = useState<boolean>(true);
  const [formloading, setFormLoading] = useState<boolean>(false);
  const [accordionStates, setAccordionStates] = useState({
    askLogin: true,
    myDetails: false,
    orderSummary: false,
    billingAddress: false,
    invoiceAddress: false,
  });

  // account state changes here
  const [accountDetail, setaccountDetail] = useState<any>({});
  const [selectedAddress, setSelectedAddress] = useState<any>({
    billingAddressId: {},
    invoiceAddressId: {},
  });

  // formmanagement changes here
  const [errors, setErrors] = useState<any>({});
  const [countries, setCountries] = useState([]);
  const [formData, setFormData] = useState<any>({
    Add: "",
    DAdd: "",
    Name: "",
    CName: "",
    DName: "",
    PTown: "",
    Email: "",
    CEmail: "",
    PCode: "",
    DPTown: "",
    DPCode: "",
    DEmail: "",
    County: "",
    Coupon: "",
    Express: 0,
    DCounty: "",
    DeviceID: "",
    PONumber: "",
    Comments: "",
    Telephone: "",
    CTelephone: "",
    Collection: 0,
    TermsAgreed: 1,
    DTelephone: "",
    AddressCode: "",
    CountryCode: "",
    Customer_Ref: "",
    DCountryCode: "",
    InvAddressCode: "",
    Despatch_Comments: "",
  });

  const handleForm3Validation = () => {
    return checkFormFields(formRef3, ["CName", "CEmail", "CTelephone"]);
  };
  const handleForm1Validation = () => {
    return checkFormFields(formRef1, [
      "DName",
      "DAdd",
      "DEmail",
      "DPTown",
      "DPCode",
      "DTelephone",
      "DCountryCode",
    ]);
  };
  const handleForm2Validation = () => {
    return checkFormFields(formRef2, [
      "Name",
      "Add",
      "Email",
      "PTown",
      "PCode",
      "Telephone",
      "CountryCode",
    ]);
  };
  const handleAddressCompletion = () => {
    if (handleForm2Validation() && handleForm1Validation()) {
      setAccordionStates((prev) => ({
        ...prev,
        orderSummary: true,
      }));
    }
  };

  const fetchCouponList = async () => {
    try {
      const response: any = await Fetch("api/Coupons", {}, 5000, true, false);
      if (response.status && response?.CouponList?.length > 0)
        setCouponList(response.CouponList);
      else setCouponList([]);
    } catch (error) {
      console.log("Error fetching coupon list:", error);
      setCouponList([]);
    }
  };
  const fetchCart = useCallback(async () => {
    try {
      const response = await getCartDetails();
      if (response?.status) {
        setCart(response);
        setUpdatedCart(response?.CartTot);
      } else {
        setCart({});
        router.replace("/shop-all");
      }
    } catch (error) {
      setCart({});
      console.log("Error fetching Cart: " + error);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    eventEmitter?.on("removeProductFromCartModal", fetchCart);
    return () => {
      eventEmitter?.off("removeProductFromCartModal", fetchCart);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchCart();
    fetchCouponList();
    // eslint-disable-next-line
  }, []);

  const fetchUserData = useCallback(async () => {
    try {
      const token = localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return;
      const url = "/api/MyAccountProfile";
      const response: any = await Fetch(url, {}, 5000, true, false);
      if (response?.status) setaccountDetail(response);
      setLoading(false);
    } catch (error) {
      console.log("Account Details Error]: ", error);
      return;
    }
    // eslint-disable-next-line
  }, [router]);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        fetchUserData();
        fetchCart();
      }, 500);
    };
    eventEmitter?.on("loggedIn", fetchData);
    return () => {
      eventEmitter?.off("loggedIn", fetchData);
    };
    // eslint-disable-next-line
  }, [fetchUserData]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  useEffect(() => {
    const fetchCountries = async () => {
      const url = "/api/Countries";
      const response: any = await Fetch(url, {}, 5000, true, false);
      if (response.status) {
        const data = getSelectFormattedData(response?.Countries);
        setCountries(data);
      }
    };
    fetchCountries();
  }, []);

  const validateForm = () => {
    const newErrors: any = {};
    [...InvoiceFormFields, ...BillingFormField].forEach((field) => {
      const value = formData[field.name];
      if (newErrors[field.name]) return;
      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
        return;
      }
      if (field.validation) {
        const validationError = field.validation(value);
        if (validationError) newErrors[field.name] = validationError;
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors); // Set errors to state if validation fails
    }
    try {
      const data = {
        ...formData,
        DeviceID: getDeviceCheck(),
        Express: getDeviceCheck() === "" ? 0 : 1,
      };
      const url = "api/CofirmCheckoutWorksafe";
      const response: any = await Post(url, data, 5000, true);
      if (response?.status && response?.OrderID) {
        setErrors({});
        localStorage.setItem("OrderID", response?.OrderID);
        if (response?.message) {
          toast.success(response?.message);
          return (window.location.href = "/thank-you");
        } else if (response?.paymenturl1 || response?.paymenturl2) {
          setOpenPaymentModal(true);
          setOpenPaymentModalData(response);
        }
      } else {
        toast.info(response?.message ?? "Please contact the administrator!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log("An error occurred:", error);
      toast.error("An error occurred while submitting the form!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } finally {
      setFormLoading(false);
    }
  };

  useEffect(() => {
    router.prefetch("/thank-you");
    router.prefetch("/retry");
    router.prefetch("/shop-all");
  }, [router]);

  const handleButtonClick = (activeScreen: any) => {
    setAccordionStates((prevState: any) => {
      const updatedStates = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === activeScreen; // Only the active screen is true
        return acc;
      }, {} as any);
      return updatedStates;
    });
  };

  const applyCoupon = async (couponCode: string) => {
    try {
      if (!couponCode) return toast.info("Please enter a valid coupon code!");
      if (!formData?.DPCode)
        return toast.info("Please enter a delivery post code!");
      const data = {
        Coupon: couponCode,
        DeviceID: getDeviceCheck(),
        PostCode: formData?.DPCode,
      };
      const url = "api/ApplyCode";
      const response: any = await Fetch(url, data, 5000, true, false);
      if (response?.status) setUpdatedCart(response?.pricedetails);
    } catch (error) {
      console.log("Failed to apply coupon:", error);
    }
  };

  const removeCoupon = async () => {
    try {
      if (!formData?.DPCode)
        return toast.info("Please enter a delivery post code!");
      const data = {
        DeviceID: getDeviceCheck(),
        PostCode: formData?.DPCode,
      };
      const url = "api/RemoveCode";
      const response: any = await Fetch(url, data, 5000, true, false);
      if (response?.status) setUpdatedCart(response?.pricedetails);
    } catch (error) {
      console.log("Failed to apply coupon:", error);
    }
  };

  if (loading) return <CartSkeleton />;

  return (
    <>
      <div className="max-w-9xl min-h-screen mx-auto p-4 md:p-6 lg:p-10">
        <h1
          className={`uppercase text-4xl md:text-5xl lg:text-6xl flex items-center font-black ${bigShoulders.className}`}
        >
          checkout
        </h1>
        <SelectPaymentMethodModal
          data={openPaymentModalData}
          isVisible={openPaymentModal}
        />
        <div className="flex flex-col mt-5">
          <AccountManage
            isOpen={accordionStates.askLogin}
            handleButtonClick={handleButtonClick}
            setIsOpen={(isOpen: any) =>
              setAccordionStates((prev) => ({ ...prev, askLogin: isOpen }))
            }
          />
          <AdditionalFields
            errors={errors}
            formRef3={formRef3}
            formData={formData}
            setFormData={setFormData}
            isOpen={accordionStates.myDetails}
            handleButtonClick={handleButtonClick}
            handleForm3Validation={handleForm3Validation}
            setIsOpen={(isOpen: any) =>
              setAccordionStates((prev) => ({ ...prev, myDetails: isOpen }))
            }
          />
          <CheckoutForm
            errors={errors}
            formData={formData}
            formRef1={formRef1}
            countries={countries}
            accountDetail={accountDetail}
            selectedAddress={selectedAddress}
            handleButtonClick={handleButtonClick}
            setSelectedAddress={setSelectedAddress}
            isOpen={accordionStates.billingAddress}
            handleForm1Validation={handleForm1Validation}
            setIsOpen={(isOpen: any) =>
              setAccordionStates((prev) => ({
                ...prev,
                billingAddress: isOpen,
              }))
            }
            setFormData={setFormData}
          />
          <InvoiceAddress
            errors={errors}
            formData={formData}
            formRef2={formRef2}
            countries={countries}
            accountDetail={accountDetail}
            setUpdatedCart={setUpdatedCart}
            selectedAddress={selectedAddress}
            handleButtonClick={handleButtonClick}
            setSelectedAddress={setSelectedAddress}
            isOpen={accordionStates.invoiceAddress}
            handleForm1Validation={handleForm2Validation}
            setIsOpen={(isOpen: any) =>
              setAccordionStates((prev) => ({
                ...prev,
                invoiceAddress: isOpen,
              }))
            }
            setFormData={setFormData}
          />
          {cart && cart?.Products && cart?.Products.length > 0 && (
            <Accordion
              Icon={FaShoppingCart}
              handleForm1Validation={handleAddressCompletion}
              title="Order Details"
              isOpen={accordionStates.orderSummary}
              setIsOpen={(isOpen: any) =>
                setAccordionStates((prev) => ({
                  ...prev,
                  orderSummary: isOpen,
                }))
              }
            >
              <div className="space-y-5">
                <ProductDetails cart={cart} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                  <DeliveryAddress title="Delivery" address={formData} />
                  <BillingAddress title="Invoice" address={formData} />
                </div>
                {couponList && couponList.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                    <AvailableCoupon
                      couponList={couponList}
                      applyCoupon={applyCoupon}
                      selectedCoupon={formData}
                      setSelectedCoupon={setFormData}
                    />
                    <ApplyCoupon
                      applyCoupon={applyCoupon}
                      selectedCoupon={formData}
                      removeCoupon={removeCoupon}
                      setSelectedCoupon={setFormData}
                    />
                  </div>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10"
                >
                  <div>
                    <OrderReference
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </div>
                  <OrderTotals
                    cart={cart}
                    updatedCart={updatedCart}
                    formloading={formloading}
                  />
                </form>
              </div>
            </Accordion>
          )}
        </div>
      </div>
      {/* <div className="flex items-center justify-center">
        <PayPalCheckout />
      </div> */}
      <Features />
    </>
  );
}
