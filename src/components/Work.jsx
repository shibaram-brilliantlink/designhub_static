import React from "react";

export default function Work() {
  return (
    <section className="c_pad py-[50px]">
      <div className="left">
        <h2 className="font-cheaps font-110">OUR WORK</h2>
        <div className="image md:hidden">
          <img src="./work-img.png" alt="image" />
        </div>

        <div className="center max-w-[400px]">
          <h3 className="font-55 mb-3">KFC MOTHER'S DAY</h3>
          <p className="font-verdana text-gray-500 text-lg leading-6 mb-10">
            The common practice of placing a teeka on children's forheads to
            ward off the evils-eye is practiced by indian household.
          </p>
          <button className="btn-red text-[30px]">LEARN MORE</button>
        </div>
      </div>
      {/* <div className="right"></div> */}
    </section>
  );
}
