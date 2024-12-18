import React from "react";

export default function Services() {
  return (
    <section className="c_pad py-[50px] font-cheaps">
      <div className="flex justify-between">
        <h2 className="font-55">OUR SERVICES</h2>
        <div className="circular-red p-6">
          <span>&#9884;</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px]">
          <div className="font-55">BRANDING</div>{" "}
          <div className="circular-black p-5">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px]">
          <div className="font-55">UI/UX DESIGN</div>{" "}
          <div className="circular-black p-5">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px]">
          <div className="font-55">ILLUSTRATION</div>{" "}
          <div className="circular-black p-5">
            <span>&#8702;</span>
          </div>
        </div>
        <div className="flex justify-between items-center border-t-2 border-gray-700 py-3 lg:py-[40px]">
          <div className="font-55">3D/ANIMATION</div>{" "}
          <div className="circular-black p-5">
            <span>&#8702;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
