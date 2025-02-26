"use client";

import { toast } from "react-toastify";
import { bigShoulders } from "../layout";
import { Fetch, Post } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import AccountLayout from "@/components/account/AccountLayout";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [accountDetail, setAccountDetail] = useState<any>({});
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    reenterPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    reenterPassword: false,
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field: string) => {
    setShowPassword((prev: any) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.reenterPassword)
      return toast.info("New password & re-enter password must be same");

    setLoading(true);
    try {
      const data: any = await Post(
        "/api/ChangePassword",
        {
          old_password: passwords.oldPassword,
          new_password: passwords.newPassword,
        },
        5000,
        true
      );
      setPasswords({
        oldPassword: "",
        newPassword: "",
        reenterPassword: "",
      });
      toast.success(data);
      router.replace("/my-account");
    } catch (error) {
      console.log("Error resetting password:", error);
      toast.success("Failed to reset password. Try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-9xl mx-auto p-4 md:p-6 lg:p-12">
      <AccountLayout accountDetail={accountDetail}>
        <div>
          <h1
            className={`uppercase text-lg md:text-2xl lg:text-4xl flex items-center gap-2 font-black ${bigShoulders.className}`}
          >
            Reset <span className="text-primary"> Password</span>
          </h1>
          <p className="text-sm text-gray-600 pt-1">Manage your password</p>
          <form
            onSubmit={handleFormSubmit}
            className="mt-5 grid grid-cols-1 gap-5 max-w-md"
          >
            {/* Old Password */}
            <div className="relative">
              <label
                className={`block text-lg font-bold mb-1 ${bigShoulders.className}`}
              >
                Old Password
              </label>
              <input
                type={showPassword.oldPassword ? "text" : "password"}
                name="oldPassword"
                autoComplete="off"
                required
                value={passwords.oldPassword}
                onChange={handlePasswordChange}
                className="mt-2 block w-full border font-normal border-gray-300 rounded-xl outline-none focus:ring-primary/50 focus:ring-2 focus:border-primary/50 text-gray-700 p-3"
                placeholder="Enter your old password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("oldPassword")}
                className="absolute right-3 bottom-2 transform -translate-y-1/2 text-gray-500"
              >
                {!showPassword.oldPassword ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
            </div>

            {/* New Password */}
            <div className="relative">
              <label
                className={`block text-lg font-bold mb-1 ${bigShoulders.className}`}
              >
                New Password
              </label>
              <input
                type={showPassword.newPassword ? "text" : "password"}
                name="newPassword"
                autoComplete="off"
                required
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$"
                title="Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long."
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="mt-2 block w-full border font-normal border-gray-300 rounded-xl outline-none focus:ring-primary/50 focus:ring-2 focus:border-primary/50 text-gray-700 p-3"
                placeholder="Enter your new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("newPassword")}
                className="absolute right-3 bottom-2 transform -translate-y-1/2 text-gray-500"
              >
                {!showPassword.newPassword ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
            </div>

            {/* Re-enter New Password */}
            <div className="relative">
              <label
                className={`block text-lg font-bold mb-1 ${bigShoulders.className}`}
              >
                Re-enter New Password
              </label>
              <input
                type={showPassword.reenterPassword ? "text" : "password"}
                name="reenterPassword"
                autoComplete="off"
                required
                title="Password must contain at least 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long."
                value={passwords.reenterPassword}
                onChange={handlePasswordChange}
                className="mt-2 block w-full border font-normal border-gray-300 rounded-xl outline-none focus:ring-primary/50 focus:ring-2 focus:border-primary/50 text-gray-700 p-3"
                placeholder="Re-enter your new password"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility("reenterPassword")}
                className="absolute right-3 bottom-2 transform -translate-y-1/2 text-gray-500"
              >
                {!showPassword.reenterPassword ? (
                  <FaEyeSlash className="text-lg" />
                ) : (
                  <FaEye className="text-lg" />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="bg-primary text-white p-3 rounded-lg font-bold mt-4"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </AccountLayout>
    </div>
  );
}
