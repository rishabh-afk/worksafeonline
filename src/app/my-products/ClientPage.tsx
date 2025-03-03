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
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isTokenExist()) return eventEmitter?.emit("openLoginModal");
        const url = "api/MyUniformListingWCategories";
        const resp: any = await Fetch(url, {}, 5000, true, false);
        if (resp.status) setProducts(resp ?? []);
        else setProducts({});
        setLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchData();
  }, [router]);

  if (loading) return <Loader />;
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
