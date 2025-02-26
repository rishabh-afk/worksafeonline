import Link from "next/link";
import Image from "next/image";
import { Post } from "@/utils/axios";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { GiCheckMark } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5";

const ConfirmationCode = ({
  formData,
  setScreen,
}: {
  formData: any;
  setScreen: any;
}) => {
  const handleNext = () => {
    setScreen("code");
  };

  const handleSkip = async () => {
    try {
      const response: any = await Post(
        "api/WNormalRegister1",
        { code: "Worksafe", email: formData?.email },
        5000,
        true
      );
      if (response?.status) setScreen("login");
      else if (response?.message) toast.error(response?.message);
    } catch (error) {
      console.log("SKipped", error);
    }
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={22}
              onClick={() =>
                setScreen(formData?.custCode ? "registerSuccess" : "register")
              }
              className="text-primary hover:text-white cursor-pointer"
            />
          </span>
          <Link href="/">
            <Image
              width={100}
              height={60}
              unoptimized
              alt="Logo"
              src={
                "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
              }
              className="w-2/5 object-contain mx-auto md:mr-auto md:ml-0"
            />
          </Link>
        </div>
        <div>
          <h2
            className={`text-4xl md:text-6xl mb-2 text-center md:text-left font-bold text-primary/90 uppercase ${bigShoulders.className}`}
          >
            Register!
          </h2>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4 md:pl-6 lg:pl-10">
        <p className="text-center pb-3 text-white text-xl">
          Do you have a GROUP or CUSTOMER CODE to add?
        </p>
        <div>
          <div className="flex justify-center gap-5 items-center">
            <button
              type="button"
              onClick={handleNext}
              className={`w-1/2 py-2 px-4 flex items-center gap-2 justify-center bg-primary text-white uppercase rounded-full text-xl font-black hover:bg-primary hover:text-white transition outline-none ${bigShoulders.className}`}
            >
              <GiCheckMark /> Yes
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className={`w-1/2 py-2 px-4 flex items-center gap-2 justify-center bg-black border border-primary text-primary uppercase rounded-full text-xl font-black hover:bg-primary hover:text-white transition outline-none ${bigShoulders.className}`}
            >
              <RxCross2 size={25} /> No
            </button>
          </div>
          <p className="text-xs mt-5 text-center text-white/70">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & condition{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCode;
