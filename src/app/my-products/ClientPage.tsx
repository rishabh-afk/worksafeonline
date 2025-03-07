"use client";

import { Fetch } from "@/utils/axios";
import { useRouter } from "next/navigation";
import Header from "../shop/components/Header";
import Loader from "@/components/common/Loader";
import React, { useEffect, useState } from "react";
import eventEmitter from "@/hooks/useEventEmitter";
import { isTokenExist } from "@/api/generateDeviceId";
import FilterSection from "../shop/components/FilterSection";

export default function ClientPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isTokenExist()) return eventEmitter?.emit("openLoginModal");
        const url = "api/MyUniformListingWCategories";
        const resp: any = await Fetch(url, {}, 5000, true, false);
        if (resp.status) setProducts(resp ?? []);
        else setProducts({});
      } catch (error) {
        console.log("Error: " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [router]);

  if (loading) return <Loader />;

  if (!loading && !products.product)
    return (
      <div className="flex flex-col justify-center items-center text-5xl h-screen">
        <h2 className="font-semibold">No Product Found</h2>
        <button
          onClick={() => router.push("/shop-all")}
          className="mt-4 px-4 py-2 transition text-lg bg-primary text-white rounded-md hover:bg-primary/80 focus:outline-none"
        >
          Shop Now
        </button>
      </div>
    );

  return (
    <>
      <Header
        data={{}}
        title="My Products"
        getBreadCrumbs={[{ id: "/my-products", name: "My Products" }]}
      />
      <FilterSection
        category={0}
        subcategory={0}
        response={products}
        categoryResponse={products}
      />
    </>
  );
}
