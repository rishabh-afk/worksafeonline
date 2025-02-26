import Link from "next/link";
import Image from "next/image";
// import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterSuccess = ({
  formData,
  setScreen,
}: {
  formData: any;
  setScreen: any;
}) => {
  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={22}
              onClick={() => setScreen("register")}
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
        <p className="text-center text-white">
          We have found your email address is registered to the following
          account:
        </p>
        <div className="text-center bg-[#1C1C1C]/50 text-xl border-b border-primary text-primary cursor-not-allowed py-2">
          {formData?.cust} {formData?.custName}
        </div>
        <p className="text-center text-white">
          Select &apos;Continue&apos; to register to this account, or choose
          &apos;Register to a different account&apos; to join another group.
        </p>
        <button
          type="submit"
          onClick={() => setScreen("register2")}
          className={`w-full py-2 px-4 bg-primary text-white uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
        >
          Continue
        </button>
        <button
          type="submit"
          onClick={() => setScreen("confirmationCode")}
          className={`w-full py-2 px-4 text-primary uppercase rounded-full text-lg font-bold hover:bg-primary hover:text-white transition outline-none ${bigShoulders.className}`}
        >
          Register to a different account
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccess;
