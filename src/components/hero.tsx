export default function Hero() {
  return (
    <div className="flex items-center relative w-full h-screen bg-[linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.1)),url('/assets/spotless-car2.jpg')] bg-cover bg-bottom bg-no-repeat bg-fixed">
      <div className="h-full w-2/6 flex items-center z-10">
        <div className="w-2/4 md:w-3/4 ml-[2rem]">
          <div className="bg-[#fff] w-3/4 w-[0.1rem] h-20  mx-auto"></div>
          <span className="relative flex h-4 w-4 mx-auto">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
          </span>
        </div>
        <div className="mr-[-20rem] pt-52">
          <h1 className="text-xl md:text-3xl text-[#fff] font-semibold">
            Give your vechicle the treatment it deserves
          </h1>
          <h2 className="text-4xl md:text-5xl text-[red] font-extralight">
            Discover the ultimate in car detailing excellence today!
          </h2>
          <div className="bg-[#fff] w-3/4 h-[0.1rem] mt-40"></div>
        </div>
      </div>
    </div>
  );
}
