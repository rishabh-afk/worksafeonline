"use client";
import Link from "next/link";
import { useState } from "react";
import ItemHover from "./ItemHover";
import { links } from "@/data/country";
import { LinkProps } from "@/types/api";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";

const MobileSidebar = ({ categories }: { categories: any }) => {
  const pathName: any = usePathname();
  const isActive = (path: string) => pathName === path;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showlist, setShowlist] = useState<boolean>(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <span
        onClick={handleToggle}
        className="hover:text-secondary lg:hidden transition-all duration-100 ease-linear"
      >
        <BiMenuAltLeft size={23} />
      </span>
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-[90%]`}
      >
        <div className="flex justify-center relative items-center p-4 bg-black shadow-md">
          <Link href="/">
            <Image
              width={100}
              unoptimized
              height={60}
              alt="Logo"
              src="https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
              className="w-32"
            />
          </Link>
          <IoClose
            onClick={handleToggle}
            className="text-white absolute right-5 text-3xl hover:text-secondary"
          />
        </div>
        <div className="flex gap-3 text-black p-6 pb-2 font-sans font-semibold items-center">
          <span
            onClick={() => setShowlist(true)}
            className={`relative pb-1 cursor-pointer ${
              showlist ? "text-black" : "text-gray-500"
            }`}
          >
            Main Menu
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-secondary transition-all duration-300 ease-in-out ${
                showlist ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
          <span
            onClick={() => setShowlist(false)}
            className={`relative pb-1 cursor-pointer ${
              showlist ? "text-gray-500" : "text-black"
            }`}
          >
            Categories
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-secondary transition-all duration-300 ease-in-out ${
                !showlist ? "w-full" : "w-0"
              }`}
            ></span>
          </span>
        </div>
        <nav className="p-6 text-black">
          <div className="flex flex-col gap-2">
            {showlist ? (
              <>
                {links.map((link: LinkProps) => {
                  return (
                    <span key={link.id} className="relative group w-fit">
                      <ItemHover link={link} />
                    </span>
                  );
                })}
              </>
            ) : (
              <>
                {categories.map((link: any) => {
                  return (
                    <Link
                      href={"/"}
                      key={link.menu_id}
                      className={`font-semibold uppercase text-black lg:text-white flex items-center relative text-nowrap rounded-lg pb-1 hover:text-secondary transition-all duration-200 ease-linear ${
                        isActive(link.href) && "text-secondary"
                      }`}
                    >
                      {link?.menu_name}
                    </Link>
                  );
                })}
              </>
            )}
          </div>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};

export default MobileSidebar;
