import React from "react";

export default function Testimonial() {
  return (
    <section className="c_pad py-[40px] lg:py-[80px] testimonial-bg">
      <h2 className="font-cheaps font-110 mb-[30px] md:mb-[60px]">
        HOW CLIENTS FEEL
      </h2>
      <div className="flex justify-between">
        <div className="left hidden md:block relative pt-10">
          <div className="pl-5 lg:pl-10">
            <img src="./reviews-01.png" alt="person01" width={150} />
          </div>
          <div className="circular-red p-10 bottom-0 bg-skin">
            <span>&#8701;</span>
          </div>
        </div>
        <div className="review-card p-10 bg-white rounded-md flex flex-col items-center gap-4 md:w-[50%] max-w-[600px] mx-auto">
          <img
            src="./reviews-02.png"
            alt="iamge"
            width={150}
            className="rounded-md mb-4"
          />
          <div className="font-cheaps font-55">JANE COPPER</div>
          <img
            src="./reviews-comma.png"
            alt="review image of comma"
            width="50"
          />
          <p className="text-sm text-center">
            Working with design hub was an absolute pleasure! Their attention to
            detail, creativity and commitemnet to delivering a high-quality
            product excedded my expectations. The communication was seamless,
            and they went above and beyond to ensure everything was perfect. I
            couldn't be happier with the results and highly recommend their
            services to anyone looking for top-notch services.
          </p>
        </div>
        <div className="right hidden md:block pt-10 relative">
          <div className="pr-5 lg:pr-10">
            <img src="./reviews-03.png" alt="person03" width={150} />
          </div>
          <div className="circular-red p-10 bottom-0 right-0 bg-skin">
            <span>&#8702;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
