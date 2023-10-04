"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import ThemeToggle from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

export default function Topbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="flex items-center fixed w-[100%] bg-[#0009] backdrop-blur-md z-50">
      <Link href="/" className="">
        <Image src="/spotless.png" width={200} height={200} alt="Spotless" />
      </Link>
      <nav
        className={cn(
          navbarOpen ? "absolute top-[125px] flex flex-col bg-black" : "hidden",
          "md:flex md:flex-row items-center md:text-xl space-x-8 container"
        )}
      >
        <Link href="/" className="py-4">
          Home
        </Link>
        <Link href="#about" className="py-4">
          About Us
        </Link>
        <Link href="#services" className="py-4">
          Services
        </Link>
        <Link href="#contact" className="py-4">
          Contact
        </Link>
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
