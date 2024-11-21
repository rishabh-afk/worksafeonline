import Image from "next/image";
import Marquee from "../common/Marquee";
import { bigShoulders } from "@/app/layout";
import { FaArrowRightLong } from "react-icons/fa6";
import { features } from "@/data/country";

const WhoWeAre = ({ brands }: { brands: any }) => {
  return (
    <>
      <div
        style={{
          clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0% 100%)",
          overflow: "hidden",
        }}
        className="min-h-screen relative"
      >
        <Image
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/h1_bg-4.jpg"
          alt="Image"
          width={100}
          height={100}
          className="object-cover w-screen min-h-screen"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black transition-all duration-500 ease-linear opacity-80 group-hover:opacity-40"></div>
        <div className="absolute inset-0 z-50 max-w-9xl mx-auto flex justify-between gap-10 items-center px-10">
          <div className="w-1/3 leading-none">
            <p
              className={`uppercase text-[112px] text-white font-black ${bigShoulders.className}`}
            >
              who <br />
              <span className="text-primary">we are</span>
            </p>
            <span className="relative flex space-x-2 mt-4 items-center border rounded-full cursor-pointer w-fit hover:bg-primary bg-white hover:border-primary border-black/10 py-4 pl-28 pr-4 overflow-hidden group">
              <span className="absolute whitespace-nowrap left-4 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] group-hover:opacity-0 opacity-100 translate-y-0">
                Our Story
              </span>
              <span className="absolute whitespace-nowrap left-2 w-full transition-all duration-300 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100 opacity-0 translate-y-[100%]">
                Our Story
              </span>
              <FaArrowRightLong className="ml-2" />
            </span>
          </div>
          <div className="w-2/3">
            <div className="border-b-2 border-b-white pb-10 mb-5 flex justify-start gap-20">
              <Image
                src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/02/certification.svg"
                alt="Image"
                width={100}
                height={100}
                className="object-contain w-40"
                priority
                unoptimized
              />
              <p className="text-xl flex flex-col gap-5 text-white">
                <span>
                  Founded in 1983, Axetor are still today&apos;s leader in
                  industrial clothing in Australia and they offer a range of
                  durable and functional workwear for the most demanding jobs.
                </span>
                <span>
                  We prioritize providing excellent customer service and support
                  throughout your shopping journey with us.
                </span>
              </p>
            </div>
            <div className="text-white">
              <p
                className={`${bigShoulders.className} text-3xl font-black uppercase`}
              >
                Popular Brands
              </p>
              <div className="grid grid-cols-5 mt-5 mb-10">
                {brands &&
                  brands.length > 0 &&
                  brands.slice(1, 6).map((brand: any, index: number) => {
                    return (
                      <span
                        className="flex justify-center text-lg font-semibold items-center border py-7"
                        key={index}
                      >
                        {brand?.Brand_Name}
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <div className="max-w-9xl mx-auto grid grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex py-16 flex-col border items-center"
            >
              <div className="mb-4 text-4xl">
                <Icon />
              </div>
              <p className="text-center text-lg font-medium">{feature.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WhoWeAre;