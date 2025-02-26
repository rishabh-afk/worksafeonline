"use client";

import { Fetch, Post } from "@/utils/axios";
import { bigShoulders } from "../layout";
import { useRouter } from "next/navigation";
import { MdModeEdit } from "react-icons/md";
import { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";
import Loader from "@/components/common/Loader";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [accountDetail, setAccountDetail] = useState<any>({});
  const [editableFields, setEditableFields] = useState({
    name: "",
    mobile: "",
  });

  const fetchUserData = useCallback(async () => {
    try {
      const token =
        typeof window !== "undefined" &&
        localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
      if (!token) return router.replace("/");
      const response: { status: boolean; account_details: any } = await Fetch(
        "/api/MyAccountProfile",
        {},
        5000,
        true,
        false
      );
      if (response.status) {
        setAccountDetail(response);
        setEditableFields({
          name: response?.account_details?.ContactName || "",
          mobile: response?.account_details?.Telephone || "",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log("Account Details Error: ", error);
      return router.replace("/");
    }
  }, [router]);

  useEffect(() => {
    fetchUserData();
  }, [router, fetchUserData]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditableFields({
      ...editableFields,
      [name]: value,
    });
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (/^\d*$/.test(value)) {
      setEditableFields({ ...editableFields, [name]: value });
    }
  };

  const handleSave = async () => {
    try {
      await Post("/api/ChangeNameMob", editableFields, 5000, true);
      setIsEditing(false);
      fetchUserData();
    } catch (error) {
      console.error("Error saving account details: ", error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Personal <span className="text-primary"> Information</span>
          </h1>
          <p className="text-sm text-gray-600 pt-1">
            Manage your personal information, including phone numbers, and email
            address where you can be contacted
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
            <div className="bg-white p-5 rounded-2xl shadow-md text-black font-bold">
              Name :
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  autoComplete="off"
                  value={editableFields.name}
                  onChange={handleFieldChange}
                  placeholder="Enter your name"
                  className="mt-2 block w-full border font-normal border-gray-300 outline-none focus:ring-primary/50 focus:ring-2 focus:border-primary/50 text-gray-700 p-2 text-sm"
                />
              ) : (
                <p className="text-sm text-gray-400">
                  {accountDetail?.account_details?.ContactName || "-"}
                </p>
              )}
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-md text-black font-bold">
              Phone Number :
              {isEditing ? (
                <input
                  type="text"
                  name="mobile"
                  maxLength={15}
                  autoComplete="off"
                  inputMode="numeric"
                  value={editableFields.mobile}
                  onChange={handleMobileChange}
                  placeholder="Enter your mobile number"
                  className="mt-2 block w-full border font-normal border-gray-300 outline-none focus:ring-primary/50 focus:ring-2 focus:border-primary/50 text-gray-700 p-2 text-sm"
                />
              ) : (
                <p className="text-sm text-gray-400">
                  {accountDetail?.account_details?.Telephone || "-"}
                </p>
              )}
            </div>
            <div className="bg-white group relative p-5 rounded-2xl shadow-md text-black font-bold cursor-pointer">
              Email Address :
              <p className="text-sm text-gray-400">
                {accountDetail?.account_details?.Email || "-"}
              </p>
              <span className="absolute group-hover:block hidden border top-24 left-0 bg-white shadow-md p-3 text-xs text-gray-600 font-normal">
                {accountDetail?.account_details?.message}
              </span>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-primary/80 hover:bg-primary transition text-white px-4 py-1.5"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-black text-white px-4 py-1.5 transition"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={handleEditToggle}
                className="bg-primary inline-flex items-center text-white px-4 py-1.5"
              >
                <MdModeEdit className="text-xl mr-1" />
                Edit Details
              </button>
            )}
          </div>
        </div>
      </AccountLayout>
    </div>
  );
}
