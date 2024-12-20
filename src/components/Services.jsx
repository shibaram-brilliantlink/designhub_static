import React from "react";

export default function Services() {
  return (
    <section className="c_pad py-[50px] md:py-[80px] font-cheaps">
      <div className="flex justify-between mb-10  relative">
        <h2 className="font-110">OUR SERVICES</h2>
        <div className="circular-red p-6 md:p-10 right-0">
          <span>&#9733;</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px] hover:text-white hover:border-orange hover:bg-orange group duration-200 cursor-pointer">
          <div className="font-55 pl-[2%]">BRANDING</div>
          <div className="circular-black p-5 md:p-8 mr-[2%] group-hover:border-cream">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px] hover:text-white hover:bg-orange group hover:border-orange duration-200 cursor-pointer">
          <div className="font-55 pl-[2%]">UI/UX DESIGN</div>
          <div className="circular-black p-5 md:p-8 mr-[2%] group-hover:border-cream">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px] hover:text-white hover:bg-orange group hover:border-orange duration-200 cursor-pointer">
          <div className="font-55 pl-[2%]">ILLUSTRATION</div>
          <div className="circular-black p-5 md:p-8 mr-[2%] group-hover:border-cream">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-y-2 border-gray-700 py-3 lg:py-[40px] hover:text-white hover:bg-orange group hover:border-orange duration-200 cursor-pointer">
          <div className="font-55 pl-[2%]">3D/ANIMATION</div>
          <div className="circular-black p-5 md:p-8 mr-[2%] group-hover:border-cream">
            <span>&#8702;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
