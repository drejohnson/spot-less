import About from "@/components/about";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Wide from "@/components/wide";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <Wide />
      <Services />
    </>
  );
}
