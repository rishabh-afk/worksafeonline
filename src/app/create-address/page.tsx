"use client";

import { Fetch } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import AccountLayout from "@/components/account/AccountLayout";
import CreateAddressForm from "./components/CreateAddressForm";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [accountDetail, setaccountDetail] = useState<any>({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token =
          typeof window !== "undefined" &&
          localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
        if (!token) return router.replace("/");
        const response: { status: boolean } = await Fetch(
          "/api/MyAccountProfile",
          {},
          5000,
          true,
          false
        );
        if (response.status) setaccountDetail(response);
        setLoading(false);
      } catch (error) {
        console.log("Account Details Error: ", error);
        return router.replace("/");
      }
    };
    fetchUserData();
  }, [router]);

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <div className="flex gap-5 items-center">
            <div
              onClick={() => router.back()}
              className="flex items-center space-x-2 bg-primary p-2 rounded-full cursor-pointer text-white transition"
            >
              <IoClose className="hover:scale-125 transition" size={20} />
            </div>
            <h1
              className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
            >
              Create <span className="text-primary"> New Address</span>
            </h1>
          </div>
          <CreateAddressForm />
        </div>
      </AccountLayout>
    </div>
  );
}
