"use client";

import Link from "next/link";
import Image from "next/image";
import { Get } from "@/api/generalApi";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { formatPound } from "../logo/general";
// import { IoMdSearch } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

const Search = () => {
  const searchRef = useRef<HTMLDivElement | null>(null);

  const [products, setProducts] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [placeholder, setPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTextArray = [
    "Find what inspires you!",
    "Your perfect match is here!",
    "Shop the hottest deals today!",
    "Uncover the latest must-haves!",
    "Transform your style with ease!",
    "Explore exclusive collections now!",
    "Search for something extraordinary!",
    "Discover your next favorite product!",
    "Start your search for amazing finds!",
    "Browse top-rated items effortlessly!",
  ];
  const pauseTime = 1500;
  const minSearchLength = 3;
  const debounceDelay = 1000;
  const typingSpeed = isDeleting ? 50 : 100;

  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Typewriter effect
  useEffect(() => {
    const currentString = typingTextArray[typingIndex];

    if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => setIsDeleting(true), pauseTime); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingTextArray.length); // Move to next string
    } else {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        setPlaceholder(
          currentString.slice(0, charIndex + (isDeleting ? -1 : 1))
        );
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line
  }, [charIndex, isDeleting, typingIndex]);

  useEffect(() => {
    if (searchText.length < minSearchLength) return;
    if (debounceTimeout) clearTimeout(debounceTimeout);

    const timeout = setTimeout(() => {
      callApi(searchText);
    }, debounceDelay);

    setDebounceTimeout(timeout);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [searchText]);

  const callApi = async (query: string) => {
    const response = await Get(
      "api/SearchProductsByPageWCategories?search=" +
      query +
      "&page=1&pagesize=20"
    );
    if (response.status) {
      setOpenModal(true);
      setProducts(response.product);
    } else toast.info("No products found!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      let targetElement = e.target as Node | null;
      while (targetElement) {
        if (targetElement === searchRef.current) return;
        targetElement = targetElement.parentNode;
      }
      setOpenModal(false);
      setSearchText("");
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={searchRef} className="relative hidden w-full lg:block">
      <input
        type="text"
        value={searchText}
        placeholder={placeholder}
        onChange={handleInputChange}
        className="w-3/4 px-4 text-lg py-2 text-gray-500 rounded-full outline-none"
      />
      {/* <button className="absolute z-20 top-0 right-0 bg-white px-4 py-3 rounded-r-full">
        <IoMdSearch size={24} className="text-gray-500" />
      </button> */}
      {openModal && products.length > 0 && (
        <div className="absolute w-full z-20 top-[58px] shadow-2xl bg-white right-0 text-gray-500 text-sm p-4 pb-2 rounded-lg overflow-auto max-h-64">
          <ul className={`${bigShoulders.className} font-extrabold text-lg`}>
            {products.map((product: any, index: number) => (
              <li
                key={index}
                className="border-b cursor-pointer flex justify-between items-center py-2 text-gray-700"
              >
                <Link href={`/product/${product?.MenuId}/${product?.Style}`}>
                  <span className="hover:text-primary flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      loading="lazy"
                      alt={`${index + 1}`}
                      src={
                        product?.ListingImage ??
                        "https://www.worksafeonline.co.uk/StandardImages/IMAGE COMING SOON.jpg"
                      }
                      className="object-contain w-8 aspect-square rounded-full"
                    />
                    {product.Description ?? "Unnamed Product"}{" "}
                  </span>
                </Link>
                <span>{formatPound(product?.EndPrice)}</span>
              </li>
            ))}
          </ul>
          {openModal && products.length > 0 && (
            <p className="text-center mt-2">
              {`Showing ${products.length} results`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
