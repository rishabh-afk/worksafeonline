"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import Image from "next/image";

interface Teams {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
}

interface OurTeamSwiperProps {
  slidesPerViewDesktop?: number;
}

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="rounded-lg shadow-lg overflow-hidden">
    <div className="animate-pulse bg-gray-300 w-full h-[400px] rounded-sm"></div>
  </div>
);

const OurTeamSwiper: React.FC<OurTeamSwiperProps> = ({
  slidesPerViewDesktop,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [teamsData, setTeamsData] = useState<Teams[]>([]);

  // Simulating an API call
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setTimeout(() => {
        setTeamsData([
          {
            id: 1,
            name: "Product 1",
            designation: "Designer",
            imageUrl:
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-1.jpg",
          },
          {
            id: 2,
            name: "Product 2",
            designation: "Developer",
            imageUrl:
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-2.jpg",
          },
          {
            id: 3,
            name: "Product 3",
            designation: "Manager",
            imageUrl:
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-3.jpg",
          },
          {
            id: 4,
            name: "Product 4",
            designation: "Photographer",
            imageUrl:
              "https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/team-4.jpg",
          },
        ]);
        setIsLoading(false);
      }, 500); // Simulated 500ms delay
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1260: {
              slidesPerView: slidesPerViewDesktop ?? 4,
              spaceBetween: slidesPerViewDesktop ? 25 : 20,
            },
            1680: {
              slidesPerView: teamsData.length >= 5 ? 5 : 4,
              spaceBetween: 25,
            },
            1920: {
              slidesPerView: teamsData.length >= 6 ? 6 : 4,
              spaceBetween: 25,
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <SkeletonLoader key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  if (!teamsData || teamsData.length === 0) {
    return (
      <div className="text-center text-gray-500">
        <p>No Teams available at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1.25, spaceBetween: 20 },
          640: { slidesPerView: 1.5, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1260: {
            slidesPerView: slidesPerViewDesktop ?? 4,
            spaceBetween: slidesPerViewDesktop ? 25 : 20,
          },
          1680: {
            slidesPerView: teamsData.length >= 5 ? 5 : 4,
            spaceBetween: 25,
          },
          1920: {
            slidesPerView: teamsData.length >= 6 ? 6 : 4,
            spaceBetween: 25,
          },
        }}
        className="mySwiper"
      >
        {teamsData.map((team) => (
          <SwiperSlide key={team.id}>
            <div className="relative border rounded-lg overflow-hidden shadow-lg">
              <Image
                src={team.imageUrl}
                alt={team.name}
                height={100}
                width={100}
                unoptimized
                className="object-cover w-full"
              />
              <div className="absolute top-4 right-4 bg-opacity-60 text-white px-4 py-2 rounded-md flex flex-col items-end justify-end">
                <p className="font-bold text-3xl">{team.name}</p>
                <p>{team.designation}</p>
              </div>
              <div className="absolute bottom-0 w-full h-full">
                <div className="relative font-sans uppercase font-semibold w-full border-black/10 pt-20 flex justify-center overflow-hidden group h-full">
                  <span className="absolute whitespace-nowrap w-[80%] bottom-0 transition-all duration-300 ease-in-out transform group-hover:translate-y-[-100%] bg-white group-hover:opacity-100 opacity-0 translate-y-0 py-3 rounded-full p-3">
                    <div className="space-x-4 text-center flex justify-center w-full">
                      <a href="#" className="hover:text-blue-500">
                        <FaFacebook size={18} />
                      </a>
                      <a href="#" className="hover:text-blue-400">
                        <FaTwitter size={18} />
                      </a>
                      <a href="#" className="hover:text-pink-500">
                        <FaInstagram size={18} />
                      </a>
                      <a href="#" className="hover:text-blue-700">
                        <FaLinkedin size={18} />
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeamSwiper;
