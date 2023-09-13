import React from "react";
import "./project.css";
import Red from "../../assets/svgs/Rectangle 7.svg";

const Projects = () => {
  return (
    <>
      <h4 className="famil text-center text-danger mt-5">
        Latest Project & Case
      </h4>
      <h2 className="text-center fonts">Let’s Looks Our Global Projects</h2>
      <div class="container-fluid mt-5 mb-5">
        <div class="row">
          <div class="col-md-3">
            <div className="phone px-0 position-relative col-sm-12 mb-5">
              <div>
                <img src={Red} className="img-fluid" alt="bg" />
              </div>
              <div className="position-absolute bottom-0 pb-4">
                <h3 className="text-white px-4">Technical Analysis</h3>
                <p className="text-white text-start pt-3 pe-4 px-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="Two px-0 position-relative col-sm-12 mb-5">
              <div>
                <img src={Red} className="img-fluid" alt="bg" />
              </div>
              <div className="position-absolute bottom-0 pb-4">
                <h3 className="text-white px-4">Technical Analysis</h3>
                <p className="text-white text-start pt-3 pe-4 px-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="Laptop px-0 position-relative col-sm-12 mb-5">
              <div>
                <img src={Red} className="img-fluid" alt="bg" />
              </div>
              <div className="position-absolute bottom-0 pb-4">
                <h3 className="text-white px-4">Technical Analysis</h3>
                <p className="text-white text-start pt-3 pe-4 px-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div className="OperatingLaptop px-0 position-relative col-sm-12 mb-5">
              <div>
                <img src={Red} className="img-fluid" alt="bg" />
              </div>
              <div className="position-absolute bottom-0 pb-4">
                <h3 className="text-white px-4">Technical Analysis</h3>
                <p className="text-white text-start pt-3 pe-4 px-4">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid backgroundImage">
      <div className="colour">
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-md-6">
              <h2 className="fonfamily text-white mt-5 pt-4 mb-5 pb-4">
                Get Free Consultations! We’re Ready to Work Together
              </h2>
            </div>
            <div className="col-md-6 pt-4">
                <button className="orange text-white mt-5 mx-5 mb-3">Get Free Consultations</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
