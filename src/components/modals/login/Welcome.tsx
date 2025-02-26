import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { getDeviceData, storeDeviceData } from "@/api/generateDeviceId";

const Welcome = ({ setScreen, onClose }: { setScreen: any; onClose: any }) => {
  // const [isChecked, setIsChecked] = useState(false);

  const handleGuestLogin = async () => {
    // if (!isChecked) {
    //   toast.error("You must agree to the Terms & Conditions first.");
    //   return;
    // }

    const toastId = toast.loading("Please wait...");
    try {
      const data = getDeviceData();
      if (!data) await storeDeviceData();
      onClose();
      toast.update(toastId, {
        render: "Logged in as Guest successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error) {
      console.log("Register error: " + error);
      toast.update(toastId, {
        render: "Something went wrong. Please try again!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const handleButtonClick = (screen: string) => {
    // if (!isChecked) {
    //   toast.error("You must agree to the Terms & Conditions first.");
    //   return;
    // }
    setScreen(screen);
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <Link href="/">
          <Image
            width={100}
            height={60}
            unoptimized
            alt="Logo"
            src={
              "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
            }
            className="w-1/3 object-contain mx-auto md:mr-auto md:ml-0"
          />
        </Link>
        <div>
          <h2
            className={`text-4xl md:text-6xl mb-2 text-center md:text-left font-bold text-primary/90 uppercase ${bigShoulders.className}`}
          >
            Welcome!
          </h2>
          <p className="text-center md:text-left pb-5 md:pb-0 md:pr-10 text-white">
            Log in or register to shop, see previous orders and access specific
            products or deals available to you. If you have an online web
            account, please use the same details to log in.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6 md:space-y-8  md:pl-6 lg:pl-10">
        <div className="space-y-4">
          <button
            type="submit"
            onClick={() => handleButtonClick("register")}
            className={`w-full py-2 px-4 bg-primary text-white uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
          >
            Register
          </button>
          <button
            type="submit"
            onClick={() => handleButtonClick("standardlogin")}
            className={`w-full py-2 px-4 bg-[#1C1C1C] text-primary border border-primary hover:text-white uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary transition outline-none ${bigShoulders.className}`}
          >
            Login
          </button>
          <div>
            <button
              type="submit"
              onClick={handleGuestLogin}
              className={`w-full py-2 px-4 text-primary uppercase rounded-full text-lg font-bold hover:bg-primary hover:text-white transition outline-none ${bigShoulders.className}`}
            >
              Continue as guest
            </button>
            {/* <div className="flex items-start mt-2 text-white/60 text-xs">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              <label htmlFor="terms">
                I have read & agree to the{" "}
                <Link href="/terms-and-conditions" className="underline">
                  terms & conditions
                </Link>
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
