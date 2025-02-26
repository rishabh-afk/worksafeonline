import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface AnimatedActionButtonProps {
  text: string;
  nestedHref?: boolean;
  onClick?: () => void; // OnClick handler for the button
  classes?: string; // Additional custom classes for the button
  isLoading?: boolean; // If the button is in loading state
  type?: "button" | "submit"; // Type of the button (default is 'button')
  href?: string; // Optional link URL
}

const AnimatedActionButton: React.FC<AnimatedActionButtonProps> = ({
  href,
  onClick,
  classes = "",
  type = "button",
  isLoading = false,
  nestedHref = false,
  text = "Discover Now",
}) => {
  const buttonContent = (
    <>
      {isLoading ? (
        <span className="absolute left-4 transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
          Loading...
        </span>
      ) : (
        <span className="absolute text-start text-sm md:text-sm font-semibold pl-6 whitespace-nowrap transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
          {text}
        </span>
      )}
      <span className="absolute text-sm md:text-sm font-semibold text-start pl-6 transition-all duration-300 py-4 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%] group-hover:text-black">
        {text}
      </span>
      <span className="mr-2 absolute right-2 flex items-center justify-end">
        <FaArrowRightLong className="text-primary transition-colors duration-300 ease-in-out group-hover:text-black" />
      </span>
    </>
  );

  if (href && !nestedHref) {
    return (
      <Link
        href={href}
        className={`relative font-sans font-semibold flex items-center border rounded-full cursor-pointer overflow-hidden group ${classes} hover:text-black`}
      >
        {buttonContent}
      </Link>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`relative font-sans font-semibold flex items-center border rounded-full cursor-pointer overflow-hidden group ${classes} hover:text-black`}
      disabled={isLoading}
    >
      {buttonContent}
    </button>
  );
};

export default AnimatedActionButton;
