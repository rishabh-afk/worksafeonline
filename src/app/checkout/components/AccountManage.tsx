import { Accordion } from "./Accordion";
import { bigShoulders } from "@/app/layout";
import { RiLoginBoxFill } from "react-icons/ri";
import eventEmitter from "@/hooks/useEventEmitter";
import { useCallback, useEffect, useState } from "react";
import { Fetch } from "@/utils/axios";

const AccountManage = ({
  isOpen,
  setIsOpen,
  setFormData,
  handleButtonClick,
}: {
  setIsOpen: any;
  isOpen: boolean;
  setFormData: any;
  handleButtonClick: any;
}) => {
  const [loggedIn, setUserLoggedIn] = useState<boolean>(false);

  const handleSignIn = () => {
    eventEmitter?.emit("openLoginModal");
  };

  const handleContinue = useCallback(() => {
    handleButtonClick("myDetails");
    // eslint-disable-next-line
  }, []);

  const getPODetails = useCallback(async () => {
    try {
      const url = "api/MyProfileCheckout";
      const response: any = await Fetch(url, {}, 5000, true, false);
      if (response?.status) {
        setFormData((prev: any) => ({
          ...prev,
          PEmail: response?.Email || "",
          PONumber: response?.PONumber || "",
          PTelephone: response?.Telephone || "",
          PContactName: response?.ContactName || "",
        }));
        eventEmitter?.emit("FetchedLogin", response);
        handleContinue();
      }
    } catch (error) {
      console.log("Error fetch: " + error);
    }
    // eslint-disable-next-line
  }, [handleContinue]);

  const handleToggle = useCallback(async () => {
    setUserLoggedIn(true);
    await getPODetails();
  }, [getPODetails]);

  useEffect(() => {
    eventEmitter?.on("loggedIn", handleToggle);
    return () => {
      eventEmitter?.off("loggedIn", handleToggle);
    };
  }, [handleToggle]);

  useEffect(() => {
    const token =
      typeof window !== "undefined" &&
      localStorage.getItem("WORK_SAFE_ONLINE_USER_TOKEN");
    if (token) handleToggle();
  }, [handleToggle]);

  return (
    <>
      {!loggedIn && (
        <Accordion
          isOpen={isOpen}
          Icon={RiLoginBoxFill}
          title="Your Login ID"
          setIsOpen={setIsOpen}
          handleForm1Validation={() => true}
        >
          <div>
            <h2
              className={`uppercase text-xl flex items-center font-extrabold mb-1 ${bigShoulders.className}`}
            >
              How would you like to continue your checkout?
            </h2>
            <p className="text-gray-800 text-sm mb-5">
              You can log in to access your saved details, or proceed as a
              guest.
            </p>
            <div className="flex flex-wrap mt-5 gap-3">
              <button
                onClick={handleSignIn}
                className="w-full md:w-fit whitespace-nowrap px-6 py-2 text-white bg-[#F06022] hover:bg-[#F06022]/80 font-medium transition-colors"
              >
                Log In
              </button>
              <button
                className="w-full md:w-fit whitespace-nowrap px-6 py-2 text-[#F06022] bg-white border hover:bg-[#F06022] hover:text-white border-[#F06022] font-medium transition-colors"
                onClick={handleContinue}
              >
                Continue With Express Checkout
              </button>
            </div>
          </div>
        </Accordion>
      )}
    </>
  );
};

export default AccountManage;
