export default function Wide() {
  return (
    <div className="relative">
      <div className="relative w-full bg-[url('/assets/luxury-car-brand.jpg')] bg-cover bg-bottom bg-no-repeat bg-fixed p-6 md:p-20">
        <h1 className="text-2xl md:text-5xl mt-20">A Great Experience</h1>
        <h1 className="text-2xl md:text-5xl my-4">Is Waiting Four You</h1>
        <div className="mt-10 w-4/4 md:w-2/4 exp backdrop-blur-md bg-[#0004] p-10  mb-[-9rem]">
          <p>
            At Spot-Less Car Spa, we&apos;re not just in the business of
            detailing cars; we&apos;re in the business of transforming your
            driving experience. Our commitment to perfection, attention to
            detail, and The Spot-Less Experience ensure that every visit leaves
            your vehicle looking impeccable and you feeling proud to hit the
            road in style. Discover the extraordinary care your car deserves
            today!
          </p>
          <div className="flex items-center mt-10">
            <div className="w-1/6 h-[0.05rem] bg-[red] mt-1 mr-2"></div>
            <div className="w-[1rem] h-[1rem] mt-1 border-[0.05rem] rounded-full border-solid border-red-600"></div>
            <p className="text-xs text-[red] ml-4">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
