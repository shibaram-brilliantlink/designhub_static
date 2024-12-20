import React from "react";

export default function Calltoaction() {
  return (
    <section className="bg-orange text-white">
      <div className="c_pad py-[40px] md:py-[80px] relative z-0">
        <div className="p-1 md:p-4  -rotate-6 bg-white rounded-lg w-[32vw] z-20 absolute left-[35%] ">
          <img src="./cta-img.png" alt="design image" className="rounded-lg" />
        </div>
        <h2 className="font-cheaps cta-lg-font w-full">
          <div className="cta-font">CREATIVITY</div>
          <div className="text-right">TRANSFORM</div>
        </h2>
        <p className="text-base leading-6 lg:text-xl 2xl:text-2xl max-w-[400px] lg:max-w-[700px] text-center mx-auto mb-8">
          As a marketing transformation agency, we believe brand's purpose the
          unique value it offers consumers
        </p>
        <button className="text-cream pt-3 pb-2 px-4 border border-cream rounded-[20px] font-cheaps text-[30px] mx-auto block">
          JOIN US NOW
        </button>
      </div>
    </section>
  );
}
