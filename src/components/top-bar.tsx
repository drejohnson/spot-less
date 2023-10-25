"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import ThemeToggle from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Topbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex items-center fixed w-[100%] bg-[#0009] backdrop-blur-md z-50">
      <Link href="/" className="">
        <Image src="/spotless.png" width={200} height={200} alt="Spotless" />
      </Link>
      <nav
        className={cn(
          navbarOpen
            ? "absolute top-[125px] flex flex-col bg-[#F009] p-6 backdrop-blur-md"
            : "hidden",
          "md:flex md:flex-row items-center justify-end md:text-xl md:space-x-8 container"
        )}
      >
        <Link href="/" className="py-4">
          Home
        </Link>
        <Link href="/services" className="py-4">
          Services
        </Link>
        <div className="flex items-center">
          <div className="mr-4">
            <p className="text-xl md:text-gray-400">Located in Lithona</p>
            <h4 className="text-xl md:text-gray-400">7505 Covington Hwy</h4>
          </div>
          <a
            href="https://maps.app.goo.gl/RxGsbN2nzd6gLj1t7"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "w-50 p-6 bg-red-600 rounded-none"
            )}
          >
            Get Directions
          </a>
        </div>
      </nav>
      <Button
        variant="link"
        className="absolute top-0 right-0 text-white block md:hidden"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <FaBars size="1.5rem" />
      </Button>
    </header>
  );
}
