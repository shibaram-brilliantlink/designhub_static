import React from "react";

export default function Footer() {
  return (
    <footer className="c_pad pt-[80px] mb-[2rem] md:pt-[100px] md:mb-[3.4375rem]">
      <div className="top flex justify-between items-center mb-[60px] lg:mb-[80px]">
        <div className="inline-flex flex-wrap gap-x-3 gap-y-3 w-[80%] items-start md:flex-row">
          <a href="#" className="btn-footer">
            HOME
          </a>
          <a href="#" className="btn-footer">
            WORK
          </a>
          <a href="#" className="btn-footer">
            SERVICES
          </a>
          <a href="#" className="btn-footer">
            ABOUT
          </a>
        </div>
        <div className="circular-red p-7 text-3xl lg:text-3xl lg:p-10 ">
          <span>&uarr;</span>
        </div>
      </div>
      <div className="center flex flex-col md:flex-row justify-between mb-4">
        <div className="left mb-6 font-30 text-neutral-700">
          <h4 className="font-cheaps font-55 text-black">DESIGN HUB CO. LTD</h4>
          <p>
            Jakob-Funke-Platz 2 <br />
            45127 Essen <br />
            <a href="mailto:shibaram.daseng@gmail.com">
              contactus@designhub.com
            </a>
          </p>
          <p className="text-lg mt-8 md:mt-[80px] hidden md:block">
            Terms or use | Privacy Policy
          </p>
        </div>
        <ul className="right font-cheaps mb-6 font-46 md:text-right">
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
          <li>LINKEDIN</li>
          <li>DRIBBLE</li>
          <li>BEHANCE</li>
        </ul>
        <p className="text-lg md:hidden">Terms or use | Privacy Policy</p>
      </div>
      <div className="bottom flex justify-center flex-wrap gap-x-4 lg:gap-x-6 sm:flex-nowrap">
        <div className="footer-font font-cheaps h-[18vw] md:translate-y-[14%] mb-4 md:mb-0">
          TALKTOUS
        </div>
        <div className="footer-book-btn font-cheaps w-full sm:w-auto flex-1 flex items-center justify-center">
          BOOK A <br className="hidden sm:block" /> CALL NOW
        </div>
      </div>
    </footer>
  );
}
