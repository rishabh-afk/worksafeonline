import React from "react";
import { bigShoulders } from "@/app/layout";
import Link from "next/link";
import { formatPound } from "@/components/logo/general";

const ThankYouHeader = ({
  order,
  email,
  YourReff,
}: {
  order: any;
  email: string;
  YourReff: string;
}) => {
  return (
    <div className="bg-gray-100 p-2 mb-5 md:p-5 rounded-xl">
      <div className="text-left flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
        <div>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase ${bigShoulders.className}`}
          >
            Thank You for <span className="text-secondary">your order!</span>
          </h1>
          <p className="mt-3 mb-4 text-xl font-semibold text-gray-600">
            Your order has been successfully placed.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            A confirmation email with the order details has been sent to{" "}
            <span className="text-gray-500 font-semibold underline">
              {email}
            </span>
            .
          </p>
          <p className="text-gray-600 mt-1 text-xs space-x-1">
            <span>
              For any issues or inquiries, feel free to reach out to us at:
            </span>
            <span>
              <Link
                href="mailto:sales@worksafeonline.co.uk"
                className="text-blue-600 font-semibold underline hover:text-blue-800"
              >
                sales@worksafeonline.co.uk
              </Link>
            </span>
            <span>. We&apos;re here to help!</span>
          </p>
        </div>
        <div className="mt-2 bg-white text-sm rounded-lg px-4 py-2">
          <div className="flex justify-between items-center whitespace-nowrap gap-32 border-b pb-2 mb-2">
            <p className="font-semibold text-gray-700">Order Number:</p>
            <p className="text-gray-900 font-bold">#{order?.orderId}</p>
          </div>
          <div className="flex justify-between items-center whitespace-nowrap gap-32 border-b pb-2 mb-2">
            <p className="font-semibold text-gray-700">Reference Number:</p>
            <p className="text-gray-900">{YourReff}</p>
          </div>
          <div className="flex justify-between items-center whitespace-nowrap gap-32 border-b pb-2 mb-2">
            <p className="font-semibold text-gray-700">Order Date:</p>
            <p className="text-gray-900">{order?.orderDate}</p>
          </div>
          <div className="flex justify-between items-center whitespace-nowrap gap-32">
            <p className="font-semibold text-gray-700">Total Amount:</p>
            <p className="text-gray-900 font-bold">
              {formatPound(order?.totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouHeader;
