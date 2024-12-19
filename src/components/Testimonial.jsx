import React from "react";

export default function Testimonial() {
  return (
    <section className="c_pad py-[40px] lg:py-[80px] bg-skin">
      <h2 className="font-cheaps font-110 mb-[30px] md:mb-[60px]">
        HOW CLIENTS FEEL
      </h2>
      <div className="flex justify-between ">
        <div className="left hidden md:flex flex-col">
          <div>
            <img src="./reviews-01.png" alt="person01" />
          </div>
          <div className="circular-red p-6">
            <span>&#8701;</span>
          </div>
        </div>
        <div className="review-card p-10 bg-white rounded-md flex flex-col items-center gap-4 md:w-[50%] max-w-[600px]">
          <img
            src="./reviews-02.png"
            alt="iamge"
            width={120}
            className="rounded-md"
          />
          <div className="font-cheaps font-55">JANE COPPER</div>
          <img src="./reviews-comma.png" alt="review image of comma" />
          <p className="text-sm text-center">
            Working with desing hub was an absolute pleasure! Their attention to
            detail, creativity and commitemnet to delivering a high-quality
            product excedded my expectations. The communication was seamless,
            and they went above and beyond to ensure everything was perfect. I
            couldn't be happier with the results and highly recommend their
            services to anyone looking for top-notch services.
          </p>
        </div>
        <div className="right hidden md:flex flex-col items-end">
          <div>
            <img src="./reviews-03.png" alt="person01" />
          </div>
          <div className="circular-red p-6 ">
            <span>&#8702;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
