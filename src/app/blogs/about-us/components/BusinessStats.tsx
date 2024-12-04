import Image from "next/image";
import { bigShoulders } from "@/app/layout";
const BusinessStats: React.FC = () => {
    return (
        <div
            style={{
                clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
                overflow: "hidden",
            }}
            className="relative  text-white w-full  h-[700px] sm:h-[400px]"
        >
            {/* Full-width background image */}
            <Image
                fill
                priority
                alt="Contact-Us Banner"
                className="object-cover"
                src={"https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ab-bg.jpg"}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"/>

            {/* Constrained content inside */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="max-w-9xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-x-12 items-center md:space-x-12 ">

                        {[
                            { value: "24+", label: "years in business" },
                            { value: "12+", label: "worldwide stores" },
                            { value: "135+", label: "trusted experts" },
                            { value: "89K", label: "satisfied customers" },
                        ].map((stat, index) => (
                            <div key={index} className={`relative ${bigShoulders.className}`}>
                                <h1 className="text-8xl md:text-9xl text-center font-extrabold bg-gradient-to-t mb-10 from-gray-900 via-gray-200 uppercase to-white bg-clip-text text-transparent">
                                   {stat.value}
                                </h1>
                                <p
                                    className={` text-xl tracking-wide text-center text-yellow-500 absolute font-black whitespace-nowrap bottom-14 md:bottom-16 left-1/2 translate-x-[-50%] translate-y-1/2`}
                                >
                                     {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BusinessStats;
