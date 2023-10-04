import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Topbar from "@/components/top-bar";

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});
const fontHeading = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Spot-Less Car Spa",
  description:
    "At Spot-Less Car Spa, we understand that your vehicle is more than just a mode of transportation; it's an extension of your personality and a reflection of your style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          "bg-white dark:bg-black"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Topbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
