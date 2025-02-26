"use client";

import Link from "next/link";
import { useState } from "react";
import { LinkProps } from "@/types/api";
import { usePathname } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

const ItemHover = ({ link }: { link: LinkProps }) => {
  const pathName: any = usePathname();
  const isActive = (path: string) => pathName === path;
  const [showLink, setLinkShow] = useState<string | null>("");

  const handleGroupHover = (path: string) => {
    setLinkShow(path);
  };
  return (
    <>
      <Link
        passHref
        onMouseEnter={() => handleGroupHover(link.href)}
        className={`font-semibold text-lg 2xl:text-xl text-black lg:text-white flex items-center relative text-nowrap rounded-lg pb-1 hover:text-secondary transition-all duration-200 ease-linear ${
          isActive(link.href) && "text-secondary"
        }`}
        href={link?.href}
      >
        {link?.label} {link.icon && <RiArrowDropDownLine size={20} />}
      </Link>
      <span
        className={`hidden lg:block absolute inset-x-0 bottom-0 h-[1.5px] bg-secondary transform origin-left transition-transform ${
          showLink === link.href && "group-hover:scale-x-100"
        } ${isActive(link.href) ? "scale-x-100" : "scale-x-0"}`}
      ></span>
    </>
  );
};

export default ItemHover;
