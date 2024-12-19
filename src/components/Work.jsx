import React from "react";

export default function Work() {
  return (
    <section className="c_pad py-[50px] md:h-[60vh] lg:h-[100vh] flex flex-col md:flex-row">
      <div className="left md:w-[50%] lg:w-[30%] md:h-full flex flex-col justify-between">
        <h2 className="font-cheaps font-110 mb-8 text-center md:text-left">
          OUR WORK
        </h2>
        <div className="md:hidden reshape-image w-full max-w-[500px] mx-auto mb-8">
          <img
            src="./work-flower.png"
            alt="image"
            className="w-full object-fit rounded-xl"
          />
        </div>
        <div className="bottom max-w-[400px] mx-auto md:mx-0 text-center md:text-left">
          <h3 className="font-55 font-cheaps mb-3">KFC MOTHER'S DAY</h3>
          <p className="font-verdana text-gray-500 leading-6 mb-8 text-base md:text-lg">
            The common practice of placing a teeka on children's forheads to
            ward off the evils-eye is practiced by indian household.
          </p>
          <button className="btn-red font-cheaps font-30">LEARN MORE</button>
        </div>
      </div>
      <div className="work-img-container relative hidden w-full md:block md:flex-1 ">
        <div
          className="image-corner-cut top-[5%] left-[5%] w-[33%] opacity-65"
          style={{ "--cut-size": "20%" }}
        >
          <img src="./work-img1.png" alt="image" className="object-fit" />
        </div>
        {/* <div
          className="image-corner-cut top-[12%] left-[30%] w-[35%] opacity-90"
          style={{ "--cut-size": "16%" }}
        >
          <img src="./work-img2.png" alt="image" className="object-fit" />
        </div> */}

        <div
          className="image-corner-cut bottom-[5%] right-[5%] w-[40%] opacity-75"
          style={{ "--cut-size": "18%" }}
        >
          <img src="./work-img3.png" alt="image" className="object-fit" />
        </div>
        <div
          className="image-corner-cut top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[40%]"
          style={{ "--cut-size": "17%" }}
        >
          <img src="./work-flower.png" alt="image" className="object-fit" />
        </div>

        {/* <div className="image-corner-cut">
          <img src="./work-flower.png" alt="image" className="" />
        </div>
        <div className="image-corner-cut">
          <img src="./work-img2.png" alt="image" className="" />
        </div>
        <div className="image-corner-cut">
          <img src="./work-img3.png" alt="image" className="" />
        </div> */}
      </div>
    </section>
  );
}
