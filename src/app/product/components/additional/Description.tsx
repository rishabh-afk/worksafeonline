import Image from "next/image";
import { bigShoulders } from "@/app/layout";

const Description = ({ details, image }: { details: any; image: string }) => {
  return (
    <div className="mt-7 lg:mt-16 flex flex-col gap-10">
      <div className="block lg:flex">
        <div className="flex text-gray-500 text-lg flex-col gap-5 w-full md:pr-12">
          <h2
            className={`${bigShoulders.className} uppercase text-black text-4xl font-extrabold`}
          >
            Product Descriptions
          </h2>
          <p>{details}</p>
        </div>
        <div className="flex flex-col gap-5 w-full mt-5 lg:mt-0">
          {image && (
            <Image
              width={100}
              height={100}
              unoptimized
              alt="Product Image"
              className="w-full rounded-xl"
              src={image}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
