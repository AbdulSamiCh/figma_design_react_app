import React from "react";
import "./last.css";
import Abstract from "../../assets/svgs/Abstract.svg";
import Robert from "../../assets/svgs/Robert.svg";
import Wagner from "../../assets/svgs/Wagner.svg";
import Lawrence from "../../assets/svgs/Lawrence.svg";

const LastSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="position-relative">
          <img
            src={Abstract}
            className="position-absolute top-50 start-100 mt-5 hide"
            alt="dots"
          />
        </div>
      </div>
      <h4 className="famil text-center text-danger mt-5 pt-5">Meet Our Team</h4>
      <h2 className="text-center fonts">Experience Team Members</h2>

      <div class="container text-center mt-5">
        <div class="row align-items-start">
          <div class="col-md-4 mb-3">
            <div className="card">
              <img src={Robert} className="img-fluid" alt="pic" />
              <h4 className="text-start mt-3 mx-3">Robert C. Simmons</h4>
              <p className="text-start mx-3 text-black-50 fw-semibold">
                Business Consultant
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div className="card">
              <img src={Wagner} className="img-fluid" alt="pic" />
              <h4 className="text-start mt-3 mx-3">Christopher L. Wagner</h4>
              <p className="text-start mx-3 text-black-50 fw-semibold">
                Senior Manager
              </p>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div className="card">
              <img src={Lawrence} className="img-fluid" alt="pic" />
              <h4 className="text-start mt-3 mx-3">Lawrence C. Dickerson</h4>
              <p className="text-start mx-3 text-black-50 fw-semibold">
                Financial Consultant
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="position-relative">
          <img src={Abstract} className="position-absolute hide" alt="dots" />
        </div>
      </div>

      <div className="container colo mt-5 pt-5">
        <div class="row justify-content-evenly mt-5">
            <div className="col-md-2"></div>
          <div class="col-md-6 border-end border-black mb-4">
            <h3 className="text-start fontsfam">Subscribe to Our Newsletter For Weekly Article Update.</h3>
            <p className="mt-3">Passages of lorem ipsum available, but the majority have suffered alteration, by injected words.</p>
          </div>
          <div class="col-md-4">
          <button className="orange text-white mt-5 mx-5 mb-3 fw-bold">Get Started</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <br /><br /><br />
    </>
  );
};

export default LastSection;
