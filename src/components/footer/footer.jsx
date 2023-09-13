import React from "react";
import "./footer.css";
import WhiteLogo from "../../assets/svgs/white_logo.svg";
import Facebook from "../../assets/svgs/Facebook.svg";
import Twitter from "../../assets/svgs/Twitter.svg";
import Instagram from "../../assets/svgs/Instagram.svg";

const FooterSection = () => {
  return (
    <>
      <div className="backColor">
        <div class="container text-center">
          <div class="row pt-5">
            <div class="col-md-6">
              <img src={WhiteLogo} className="" alt="logo" />
              <h6 className="text-white mt-3">
                2021 Award winning Vaccination <br /> and Lorem ipsum dolor sit
                amet
              </h6>
              <div className="d-flex margle mb-4 mt-3">
                <a href="#">
                  <img src={Facebook} className="mx-3" alt="logo" />
                </a>
                <a href="#">
                  <img src={Twitter} className="mx-3" alt="logo" />
                </a>
                <a href="#">
                  <img src={Instagram} className="mx-3" alt="logo" />
                </a>
              </div>
            </div>
            <div class="col">
              <div className="">
                <h5 className="fw-bold text-white">Location</h5>
                <a href="#" className="text-decoration-none text-white">
                  <p className="mt-3">America</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Asia</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Europe</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Africa</p>
                </a>
              </div>
            </div>
            <div class="col">
              <div className="">
                <h5 className="fw-bold text-white">Contact</h5>
                <a href="#" className="text-decoration-none text-white">
                  <p className="mt-3">About Me</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Teams</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Profile</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>FAQ</p>
                </a>
              </div>
            </div>
            <div class="col">
              <div className="">
                <h5 className="fw-bold text-white">Legals</h5>
                <a href="#" className="text-decoration-none text-white">
                  <p className="mt-3">Privacy</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Disclaimer</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Terms</p>
                </a>
                <a href="#" className="text-decoration-none text-white">
                  <p>Company</p>
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
