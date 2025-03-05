import Link from "next/link";
import Image from "next/image";
import { Post } from "@/utils/axios";
import Stepper from "../logo/Stepper";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { getDeviceCheck } from "@/api/generateDeviceId";
import DeleteAllArtworkModal from "../modals/DeleteAllArtworkModal";

interface HeaderProps {
  logo: string; // Replace with actual logo URL
  product: any;
  customize: any; // Adjust type to match `customize` object structure
  onClose: () => void;
  currentCustomizeStep: number;
  handleCustomizeNext: (id?: number) => void;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  onClose,
  product,
  customize,
  currentCustomizeStep,
  handleCustomizeNext,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleStepChange = (id?: number) => {
    try {
      handleCustomizeNext(id);
    } catch (error) {
      console.log("Error changing step:", error);
    }
  };

  const reseModal = () => {
    setIsVisible(false);
  };

  const handleDeleteAllArtWork = async (): Promise<void> => {
    try {
      const url = "api/DeleteAllAddedArtwork";
      const data = {
        DeviceID: getDeviceCheck(),
        Product: product?.ProductID,
        Colour: product?.color?.Colour?.trim() || "NA",
        Fit: product?.fitting?.Fitting?.trim() || "NA",
      };
      await Post(url, data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      onClose();
    }
  };

  const handleClose = () => {
    if (currentCustomizeStep === 4) return setIsVisible(true);
    else onClose();
  };

  return (
    <>
      <DeleteAllArtworkModal
        onClose={reseModal}
        isVisible={isVisible}
        onDelete={handleDeleteAllArtWork}
      />
      <div className="flex justify-between sticky z-50 top-0 p-4 bg-white shadow-md items-center">
        {/* Logo Link */}
        <Link href="/">
          <Image
            priority
            alt="Logo"
            width={100}
            unoptimized
            height={60}
            src={logo ?? null}
            className="w-32 p-1"
          />
        </Link>

        {/* Stepper */}
        {customize?.length > 0 ? (
          <Stepper
            reduceSize={true}
            steps={customize}
            currentStep={currentCustomizeStep}
            handleCustomizeNextId={handleStepChange}
          />
        ) : (
          <div className="text-gray-500">No steps available</div>
        )}

        {/* Close Button */}
        <RxCross1
          size={24}
          onClick={handleClose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 hover:text-primary text-black"
        />
      </div>
    </>
  );
};

export default Header;
