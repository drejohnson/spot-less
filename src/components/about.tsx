import AboutText from "./about-text";

export default function About() {
  return (
    <div className="py-10 md:py-52 relative bg-[#1b1a1c]">
      <div className="mx-auto w-4/6 md:w-2/6 mb-28">
        <h1 className="text-sm md:text-2xl">Experience Perfection</h1>
        <div className="w-1/6 h-[0.2rem] bg-[red] mt-1"></div>
        <h1 className="text-[#fff1] text-6xl md:text-9xl font-bold mt-[-3rem] md:mt-[-6rem] uppercase">
          Spotless
        </h1>
      </div>
      <AboutText />
    </div>
  );
}
