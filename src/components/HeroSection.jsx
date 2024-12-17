import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section font-cheaps c_pad">
      <h1 className="border border-black lg:w-[65%] hero-font mt-[60px] md:mt-[80px]">
        FUTURE <br />{" "}
        <span className="md:pl-[100px] text-nowrap">DESIGN WORK</span>
      </h1>
      <div className="flex flex-col gap-8 mt-10 md:flex-row-reverse md:justify-start xl:mt-[-12%]">
        <div className="flex items-center xl:w-[35%]">
          <img
            src="./hero-img.png"
            alt="hero image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 xl:w-[65%] xl:flex-row-reverse xl:items-end xl:justify-between">
          <div className="center border border-black max-w-[400px]">
            <h3 className="font-55 mb-3">
              Suraksha kateeka <br />
              project
            </h3>
            <p className="font-verdana text-gray-500 text-lg leading-6 mb-10">
              The common practice of placing a teeka on children's forheads to
              ward off the evils-eye is practiced by indian household.
            </p>
            <button className="btn-red text-[30px]">LEARN MORE</button>
          </div>
          <div className="bill border border-black flex flex-row-reverse sm:flex-row gap-10 pt-4 ">
            <div className="left flex flex-col justify-between">
              <div>
                <h4 className="text-[24px] leading-6 ">
                  inflation <br />
                  cookbook
                </h4>
                <p className="text-[16px] text-gray-500">2024 / 2025</p>
              </div>
              <button className="btn-red text-[18px] text-nowrap">
                LEARN MORE
              </button>
            </div>
            <div className="right ">
              <img
                src="./hero-bill.png"
                alt="bill image"
                className="h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
