"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const ActivateLink = ({ name, id }: { name: string; id: string }) => {
  const params = useSearchParams();
  const category = params.get("category");

  return (
    <span
      className={`relative inline-block ${
        category === id
          ? "text-secondary"
          : "text-white hover:text-secondary transition-all duration-200 ease-in-out"
      } group`}
    >
      {name}
      <span
        className={`hidden lg:block absolute inset-x-0 bottom-0 h-[1.5px] bg-secondary transform origin-left transition-transform duration-300 ${
          category === id || "group-hover:scale-x-100"
        } ${category === id ? "scale-x-100" : "scale-x-0"}`}
      />
    </span>
  );
};

const ActivateLinkWithSuspense = ({
  name,
  id,
}: {
  name: string;
  id: string;
}) => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <ActivateLink name={name} id={id} />
    </Suspense>
  );
};

export default ActivateLinkWithSuspense;
