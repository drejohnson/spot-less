"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

export default function AboutText() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="about" className="relative flex">
      <div
        className="w-5/6 md:w-3/6 py-16 px-5 my-20 md:my-40 mx-auto flex-col md:flex-row flex relative z-20 exp backdrop-blur-xl bg-[rgba(0, 0, 0, 0.060)] shadow"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className=" absolute md:rotate-90 text-[red] text-xl md:text-3xl top-[2rem] md:top-[17rem] font-semibold left-[1rem] md:left-[-6rem]">
          Spot-Less Treatment
        </h1>
        <div className="ml-2 md:ml-40 w-6/6 md:w-4/6">
          <div className="text-[#fff7]">
            <p className="mb-6 text-[0.9rem]">
              At Spot-Less Car Spa, we understand that your vehicle is more than
              just a mode of transportation; it&apos;s an extension of your
              personality and a reflection of your style. That&apos;s why
              we&apos;re dedicated to providing the finest car detailing
              services to keep your prized possession looking its absolute best.
            </p>
            <p className="mb-6 text-[0.9rem]">
              Our team of skilled professionals is passionate about transforming
              your vehicle into a spotless masterpiece. Whether it&apos;s a
              quick refresh or a comprehensive rejuvenation, we&apos;re here to
              pamper your car with the care it deserves.
            </p>
            <p className="mb-6 text-[0.9rem]">
              Experience the difference with Spot-Less Car Spa – where every
              detail counts, and your car&apos;s brilliance shines through.
              Discover the ultimate in car detailing excellence today!
            </p>
            <div className="flex items-center" data-aos="fade-right">
              <div className="w-1/6 h-[0.05rem] bg-[red] mt-1 mr-2"></div>
              <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
              <p className="text-xs text-[red] ml-4">Treat your vehicle</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[15rem] md:w-[25rem] absolute"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image
          src="/assets/clean-wheels2.jpg"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div
        className="w-[10rem] md:w-[25rem] absolute right-0 bottom-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Image src="/assets/clean-wheels.jpg" alt="" width={400} height={400} />
      </div>
    </div>
  );
}
