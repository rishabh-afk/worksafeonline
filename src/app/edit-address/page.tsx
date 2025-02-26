"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "@/app/layout";
import Loader from "@/components/common/Loader";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AccountLayout from "@/components/account/AccountLayout";
import CreateAddressForm from "@/app/create-address/components/CreateAddressForm";

function EditAddressContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState<any>({});
  const [accountDetail, setaccountDetail] = useState<any>({});

  const type = searchParams.get("type");
  const address_id = searchParams.get("address_id");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          typeof window !== "undefined" &&
          localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
        if (!token) return router.replace("/");

        const url = "/api/MyAccountProfile";
        const resp: any = await Fetch(url, {}, 5000, true, false);

        if (resp.status && type && address_id) {
          const addressList =
            type === "delivery"
              ? resp?.my_DeliveryAddress
              : resp?.my_BillingAddress;

          let getAddress: any = addressList.filter(
            (addr: any) => addr?.ID == address_id
          );

          if (getAddress && getAddress.length > 0) getAddress = getAddress[0];

          if (getAddress?.ID) {
            setAddress({
              email: getAddress?.EMail,
              address_id: getAddress?.ID,
              county: getAddress?.County,
              town: getAddress?.Post_Town,
              mobile: getAddress?.Telephone,
              address_line1: getAddress?.Addr,
              post_code: getAddress?.Post_Code,
              country: getAddress?.Country_Code,
              invaddress: getAddress?.InvAddress,
              deladdress: getAddress?.DelAddress,
              first_name: getAddress?.Customer_Name,
              dinvaddress: getAddress?.Dinvaddress ?? 0,
              ddeladdress: getAddress?.Ddeladdress ?? 0,
            });
          }
        }

        if (resp.status) setaccountDetail(resp);
        setLoading(false);
      } catch (error) {
        console.log("Account Details Error: ", error);
        return router.replace("/");
      }
    };

    fetchUserData();
  }, [router, type, address_id]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Edit <span className="text-primary"> Address</span>
          </h1>
          <CreateAddressForm address={address} />
        </div>
      </AccountLayout>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex justify-center font-semibold items-center text-3xl">
          Loading...
        </div>
      }
    >
      <EditAddressContent />
    </Suspense>
  );
}
