import { bigShoulders } from "@/app/layout";

const AdditionalFeatures = ({ productFeatures }: { productFeatures: any }) => {
  // console.log(productFeatures);
  return (
    <div className="mt-8 lg:mt-14 flex flex-col gap-6">
      <div className="block lg:flex">
        <div className="flex flex-col gap-5 w-[44%]">
          <h2
            className={`${bigShoulders.className} uppercase text-black text-4xl font-extrabold`}
          >
            Features :
          </h2>
        </div>
        <div className="flex flex-col gap-5 w-full mt-5 lg:mt-0">
          {productFeatures ? productFeatures : "No Additional Information Available"}
          {/* {productFeatures.map((feature: any, index: number) => (
            <p
              key={index}
              className="flex flex-col gap-5 border-b pb-5 text-gray-500 whitespace-pre-line"
            >
              {feature?.fabrics}
            </p>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
