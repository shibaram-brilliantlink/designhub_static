import React from "react";

export default function About() {
  return (
    <section className="bg-skin py-[50px]">
      <h2 className="font-110">
        WE KEEP BRANDS CONNECTED
        <div>
          TO CULTURE
          <img
            src="#"
            alt="image"
            className="h-20 w-16 bg-gray-500 inline-block"
          />
          THROUGH DESIGN.
        </div>
        TECHNOLOGY AND BOLD IDEAS.
      </h2>
      <div>
        <p className="text-[16px]">
          As a marketing transformation agency, we believe brand's purpose the
          unique value it offers consumers belong at the center of every
          experience. Because in a constantly changing world, leveragin purpose
          helps a brand both connect emotionally with consumers and benefits its
          bottom line.
        </p>
        <button className="text-orange p-4 border border-orange rounded-[1.5em] font-cheaps text-[30px]">
          SEE MORE ABOUT US
        </button>
      </div>
    </section>
  );
}
