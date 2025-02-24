import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { IoEye, IoEyeOff } from "react-icons/io5";
import eventEmitter from "@/hooks/useEventEmitter";
import { IoArrowBackOutline } from "react-icons/io5";
import { getDeviceData } from "@/api/generateDeviceId";

interface LoginResponse {
  token: string;
  status: boolean;
  message: string;
}

const StandardLogin = ({
  onClose,
  setScreen,
}: {
  onClose: any;
  setScreen: any;
}) => {
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

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = { email: "", password: "" };

  //   // Email validation
  //   if (!formData.email) {
  //     newErrors.email = "Email is required.";
  //     valid = false;
  //   } else if (
  //     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
  //   ) {
  //     newErrors.email = "Please enter a valid email address.";
  //     valid = false;
  //   }

  //   // Password validation
  //   if (!formData.password) {
  //     newErrors.password = "Password is required.";
  //     valid = false;
  //   } else if (formData.password.length < 7) {
  //     newErrors.password = "Password must be at least 7 characters long.";
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // if (!validateForm()) return;
      setLoading(true);
      const deviceData = getDeviceData();
      const data = {
        pushID: "",
        appID: "Worksafe",
        username: formData?.email,
        password: formData?.password,
        DeviceID: deviceData ? deviceData.deviceId : "",
      };
      const responseData: any = await axios.post(
        "https://johntrn.worksafeonline.co.uk/api/NewLogin",
        data
      );
      const response: LoginResponse = responseData?.data;
      if (response?.status && response?.token) {
        eventEmitter?.emit("loggedIn");
        setFormData({ password: "", email: "" });
        sessionStorage.setItem("verified", "true");
        toast.success("User logged in successfully!");
        localStorage.setItem("WORK_SAFE_ONLINE_USER_TOKEN", response?.token);
        onClose();
      } else if (!response?.status && response?.message)
        toast.error(response?.message);
    } catch (error) {
      console.log("Login error: " + error);
      toast.error("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full relative md:w-1/2 mr-auto rounded-lg">
        <span className="p-[2px] absolute left-0 top-1 h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
          <IoArrowBackOutline
            size={25}
            onClick={() => setScreen("welcome")}
            className="text-primary cursor-pointer"
          />
        </span>
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
              className={`w-full p-2 border-b text-white outline-none bg-transparent autofill:bg-transparent ${
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
              className={`w-full p-2 border-b outline-none bg-transparent autofill:  ${
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
            className={`w-full py-2 disabled:cursor-not-allowed px-4 bg-primary text-black uppercase rounded-lg shadow-md text-lg font-bold hover:bg-primary/80 outline-none ${bigShoulders.className}`}
          >
            {loading ? "Please wait..." : "LOGIN"}
          </button>
        </form>
        {/* Additional Links */}
        <div className="mt-4 text-center">
          {/* <span
            onClick={() => setScreen("register")}
            className="text-sm cursor-pointer hover:underline"
          >
            Forget password?
          </span> */}
          <p className="text-sm mt-2">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => setScreen("register")}
              className="text-primary hover:underline cursor-pointer"
            >
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardLogin;
