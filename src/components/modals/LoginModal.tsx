import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "../common/Modal";
import { Post } from "@/utils/axios";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { IoEye, IoEyeOff } from "react-icons/io5";
import eventEmitter from "@/hooks/useEventEmitter";
import { getDeviceData } from "@/api/generateDeviceId";

interface LoginResponse {
  status: boolean;
  token: string;
}

const LoginModal = ({
  onclose,
  isVisible,
}: {
  isVisible: boolean;
  onclose: any;
}) => {
  // const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const deviceData = getDeviceData();
      const data = {
        pushID: "",
        appID: "Worksafe",
        username: formData?.email,
        password: formData?.password,
        DeviceID: deviceData ? deviceData.deviceId : "",
      };
      const response: LoginResponse = await Post(
        "api/NewLogin",
        data,
        5000,
        true
      );
      if (response?.status && response?.token) {
        onclose();
        eventEmitter?.emit("loggedIn");
        setFormData({ password: "", email: "" });
        sessionStorage.setItem("verified", "true");
        toast.success("User logged in successfully!");
        localStorage.setItem("WORK_SAFE_ONLINE_USER_TOKEN", response?.token);
      }
    } catch (error) {
      console.log("Login error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onclose();
  };

  return (
    <Modal
      onClose={onclose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-3/5"
      showCloseButton={false}
    >
      <div className="relative text-white h-[400px]">
        {/* Close Icon */}
        <RxCross1
          size={24}
          onClick={handleClose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 hover:text-primary absolute top-2 z-20 right-3 text-white"
        />

        {/* Background Image */}
        <Image
          priority
          width={100}
          height={100}
          unoptimized
          alt="Login Banner"
          className="w-full h-full object-cover"
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 z-10">
          <div className="w-full md:w-1/2 mr-auto rounded-lg">
            <h2
              className={`text-4xl mb-6 font-bold text-center ${bigShoulders.className}`}
            >
              Sign In
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email ID or Username"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-primary focus:border-primary`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-6 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b outline-none bg-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:ring-primary focus:border-primary`}
                />
                <span
                  className="absolute cursor-pointer right-0 top-4 z-10"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-primary text-black uppercase rounded-lg shadow-md text-lg font-bold hover:bg-primary/80 outline-none ${bigShoulders.className}`}
              >
                {loading ? "Please wait..." : "LOGIN"}
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center">
              {/* <Link href="/forgot-password" className="text-sm hover:underline">
                Forget password?
              </Link> */}
              <p className="text-sm mt-2">
                Don&apos;t have an account?{" "}
                <Link
                  href="/create-account"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
