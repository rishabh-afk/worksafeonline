"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import ActivateLink from "./ActivateLink";
import { bigShoulders } from "@/app/layout";
import { useRouter } from "next/navigation";

const Categories = ({ categories }: { categories: any }) => {
  const router = useRouter()

  const handleNavigation = (menu_id: string | number) => {
    const href = `/collection/${menu_id}`;
    router.push(href);
  };

  const handlelink = (href: string) => {
    window.location.href = href;
  };

  useEffect(() => {
    router.prefetch("/collection")
  }, [router]);

  return (
    <div className="flex lg:flex-wrap gap-3 lg:gap-5 text-white items-center overflow-x-auto lg:overflow-x-visible">
      {categories.map((link: any) => {
        return (
          <span
            key={link.menu_id}
            className="text-base group cursor-pointer relative lg:text-lg text-white whitespace-nowrap hover:text-primary capitalize"
          >
            <span onClick={() => handleNavigation(link?.menu_id)}>
              <ActivateLink
                name={link?.menu_name || "Unnamed"}
                id={link.menu_id?.toString() || ""}
              />
            </span>
            <span className="w-max bg-white gap-1 shadow-lg py-1 rounded-b-lg hidden group-hover:flex text-black flex-col left-0 z-20 absolute opacity-0 h-0 group-hover:h-fit transition-all duration-300 ease-in-out group-hover:opacity-100">
              {Array.isArray(link?.subcategories) &&
                link?.subcategories.length > 0 ? (
                link.subcategories.map((category: any) => {
                  if (!category?.menu_id || !category?.menu_name) {
                    console.warn("Invalid category data:", category);
                    return null;
                  }
                  return (
                    <div
                      key={category.menu_id}
                      className="flex px-2 items-center"
                    >
                      <Image
                        width={100}
                        height={100}
                        priority
                        unoptimized
                        src={category.menu_Image}
                        alt={category.menu_name}
                        className="w-10 object-cover rounded-lg"
                      />
                      <span
                        onClick={() =>
                          handlelink(
                            `/shop?category=${category.parent_id}&subcategory=${category?.menu_id}`
                          )
                        }
                        className={`pl-2 pr-4 text-lg font-semibold hover:text-primary ${bigShoulders.className}`}
                      >
                        {category.menu_name}
                      </span>
                    </div>
                  );
                })
              ) : (
                <span className="px-4 text-gray-500 text-lg font-medium">
                  No subcategories available
                </span>
              )}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
