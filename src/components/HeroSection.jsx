import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section font-cheaps c_pad">
      <h1 className="border border-black">
        Future <br />
        design work
      </h1>
      <div className="flex flex-col gap-4 md:flex-row-reverse md:justify-between">
        <img
          src="./hero-img.png"
          alt="hero image"
          className="block border border-black"
          width={200}
        />
        <div className="center border border-black">
          <h3>
            Suraksha kateeka <br />
            project
          </h3>
          <p className="font-verdana text-gray-500">
            The common practice of placing a teeka on children's forheads to
            ward off the evils-eye is practiced by indian household.
          </p>
          <button className="btn-red">LEARN MORE</button>
        </div>
        <div className="bill border border-black">
          <div className="left">
            <div>
              <h4 className="text-[24px]">
                inflation <br />
                cookbook
              </h4>
              <p className="text-sm text-gray-500">2024 / 2025</p>
            </div>
            <div className="right ">
              <img
                src="./hero-bill.png"
                alt="bill image"
                className="h-[200px]"
              />
            </div>
          </div>
          <button className="btn-red ">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}
