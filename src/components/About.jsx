export default function About() {
  return (
    <section className="bg-skin py-[50px] md:py-[100px]  c_pad">
      <h2 className="font-110 font-cheaps text-center md:text-left mb-[40px] xl:mb-[80px]">
        WE KEEP BRANDS CONNECTED
        <div>
          TO CULTURE
          <div className="about-img mx-4 w-[100px] md:mb-1">
            <img
              src="./about-img.png"
              alt="image"
              className="object-fit bg-white rounded inline-block p-1 lg:p-2"
            />
          </div>
          THROUGH DESIGN.
        </div>
        TECHNOLOGY AND BOLD IDEAS.
      </h2>
      <div className="text-center md:text-left md:w-[60%] ml-auto relative">
        <p className="text-base md:text-xl xl:text-2xl xl:w-5/6 tracking-tight mb-[20px] xl:mb-[40px]">
          As a marketing transformation agency, we believe brand's purpose the
          unique value it offers consumers belong at the center of every
          experience. Because in a constantly changing world, leveragin purpose
          helps a brand both connect emotionally with consumers and benefits its
          bottom line.
        </p>
        <div className="circular-red p-6 md:p-12 left-0 bottom-0 md:bottom-[40%] md:left-[-30%]">
          <span>&#9733;</span>
        </div>
        <button className="text-orange pt-3 pb-2 px-4 border border-orange rounded-[20px] font-cheaps text-[30px] ">
          SEE MORE ABOUT US
        </button>
      </div>
    </section>
  );
}
