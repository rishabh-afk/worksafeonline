// import { Get } from "@/api/generalApi";
import { bigShoulders } from "../layout";
import { features } from "@/data/country";

export async function generateMetadata() {
  const pageData: any = {};

  return {
    title: pageData?.title ?? "Worksafeonline | Order Tracker",
    keywords: pageData?.keyword ?? "default, keywords",
    description: pageData?.descriptions ?? "Default description",
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/order-tracking`,
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico",
      apple: "/logo.ico",
      shortcut: "/logo.ico",
    },
  };
}

export default async function Page() {
  return (
    <>
      <div className="max-w-9xl mx-auto px-4 md:px-6  py-10 lg:py-20">
        {/* Heading */}
        <p
          className={`${bigShoulders.className} text-5xl md:text-6xl font-black uppercase`}
        >
          Order Tracking
        </p>

        {/* Instructions */}
        <p className="mt-8 md:mt-12 text-lg md:text-xl tracking-wider text-gray-600 text-start">
          {`To track your order, please enter your Order ID and Billing Email in the fields below, then press "Track". Your Order ID is in your receipt or confirmation email.`}
        </p>

        {/* Form Section */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end">
          {/* Order ID Input */}
          <div className="w-full">
            <label className="text-lg md:text-xl font-semibold block mb-2">
              Order ID
            </label>
            <input
              type="text"
              name="orderId"
              placeholder="Found in your confirmation email."
              className="w-full p-4 border rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
              required
            />
          </div>

          {/* Billing Email Input */}
          <div className="w-full">
            <label className="text-lg md:text-xl font-semibold block mb-2">
              Billing email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email used during checkout."
              className="w-full p-4 border rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"
              required
            />
          </div>

          {/* Track Button */}
          <button
            type="submit"
            className="bg-primary uppercase w-full md:w-[450px] px-8 py-4 mb-1 text-black text-sm  font-semibold rounded-full hover:bg-black hover:text-white transition duration-200"
          >
            Track
          </button>
        </div>
      </div>

      <div className="max-w-9xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex py-16 flex-col border items-center"
            >
              <div className="mb-4 text-3xl md:text-4xl">
                <Icon />
              </div>
              <p className="text-center md:text-lg font-medium">
                {feature.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
