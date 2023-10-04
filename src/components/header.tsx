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

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="w-[100%] bg-black z-50">
      <div className="grid md:grid-cols-3 md:gap-2 justify-center md:justify-start md:items-center py-4">
        <Link href="/" className="flex justify-center">
          <Image src="/spotless.png" width={250} height={125} alt="Spotless" />
        </Link>
        <div className="text-center py-4 md:py-0">
          <p className="text-xl">Located in Lithona</p>
          <h4 className="text-xl">7505 Covington Hwy</h4>
          <a
            href="https://maps.app.goo.gl/RxGsbN2nzd6gLj1t7"
            className={cn(
              buttonVariants({ variant: "default" }),
              "text-2xl px-10 py-6 mt-4 rounded-none"
            )}
          >
            Get Directions
          </a>
        </div>
        <div className="text-center py-4 md:py-0">
          <p className="text-2xl">Call Us Today</p>
          <p className="text-5xl">(770) 111-1111</p>
        </div>
      </div>
      <div className="flex bg-primary text-white">
        <nav
          className={cn(
            navbarOpen ? "flex flex-col" : "hidden",
            "md:flex md:flex-row md:justify-between items-center md:text-2xl container"
          )}
        >
          <Link href="#" className="py-4">
            Home
          </Link>
          <Link href="#services" className="py-4">
            Services
          </Link>
          <Link href="#about" className="py-4">
            About
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
      </div>
    </header>
  );
}
