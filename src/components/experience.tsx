"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export default function Experience() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const lists = ["comfort", "equipment", "amenities", "quality", "performance"];
  return (
    <div className="py-52 px-10 md:px-20 mx-auto relative caract">
      <h1 className="font-bold mb-10 text-3xl text-center">
        What is Spotless experience?
      </h1>
      <div
        className="w-[96%] md:w-[75%] mx-auto bg-[#fff1] pb-4 rounded-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div
          className="w-full p-20 flex justify-center mx-auto mt-[1rem] bg-[#fff1] mt-16 relative rounded-xl drop-shadow-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Image src="/assets/car.png" width={420} height={200} alt="" />
          <div className="flex absolute bottom-[11rem] md:bottom-[5.5rem] right-[1rem] md:right-[8rem] items-center">
            <div>
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
              </span>
            </div>
            <div className="hidden md:block w-[8rem] bg-[#fff] h-[0.1rem]"></div>
            <div className="text-[.7rem] text-sm exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center">
              <FaStar className="text-[red]" />
              <FaStar className="text-[red]" />
              <FaStar className="text-[red]" />
              <FaStar className="text-[red]" />
              <FaStar className="text-[red]" />
              <h1 className="ml-2">Quality Service</h1>
            </div>
          </div>
        </div>
        <div className="flex absolute left-[1rem] md:left-[10rem] top-[10rem] md:top-[6rem] items-center">
          <div className="text-[.7rem] exp backdrop-blur-sm bg-[#fff1] px-3 py-2 flex items-center">
            <FaStar className="text-[red]" />
            <FaStar className="text-[red]" />
            <FaStar className="text-[red]" />
            <FaStar className="text-[red]" />
            <FaStar className="text-[red]" />
            <h1 className="ml-2">Detailing Expertise</h1>
          </div>
          <div className="hidden md:block w-[8rem] bg-[#fff] h-[0.1rem]"></div>
          <div>
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
