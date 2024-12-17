import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="top border border-black flex justify-between items-center c_pad">
        <div className="inline-flex flex-wrap gap-2 w-[80%] items-start md:flex-row ">
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
        <div className="circular-red p-6">
          <span>&uarr;</span>
        </div>
      </div>
      <div className="center flex justify-between">
        <div className="left">
          <h4 className="font-cheaps font-55">DESIGN HUB CO. LTD</h4>
          <p>
            Jakob-Funke-Platz 2 <br />
            45127 Essen <br />
            <a href="mailto:shibaram.daseng@gmail.com">
              contactus@designhub.com
            </a>
          </p>
          <p>Terms or use | Privacy Policy</p>
        </div>
        <ul className="right font-cheaps text-2xl">
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
          <li>LINKEDIN</li>
          <li>DRIBBLE</li>
          <li>BEHANCE</li>
        </ul>
      </div>
      <div className="bottom">
        <div className="footer-font">TALKTOUS</div>
        <div className="footer-btn">BOOK A CALL NOW</div>
      </div>
    </footer>
  );
}
