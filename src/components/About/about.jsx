import React from "react";
import "./about.css";
import ImageofMan from "../../assets/svgs/ManWithLaptop.svg";
import ImageOnTop from "../../assets/svgs/bottomRight.svg";
import Abstract from "../../assets/svgs/Abstract.svg";

const AboutPage = () => {
  return (
    <>
      <div className="container">
        <div class="row justify-content-center mt-5 pt-5">
          <div class="col-md-6 position-relative mb-5">
            <img
              src={Abstract}
              className="img-fluid position-absolute top-0 start-0 translate-middle"
              alt="dots"
            />
            <img src={ImageofMan} className="img-fluid query" alt="laptop" />
            <img
              src={ImageOnTop}
              className="img-fluid position-absolute top-100 translate-middle margtop pe-5 query-2"
              alt="image"
            />
          </div>
          <div class="col-md-6">
            <h5 className="text-danger">Who We Are</h5>
            <h1 className="family">
              Have A Project In Mind? <br /> Let’s Get To Work.
            </h1>
            <p className="text-black-50 mt-3 f-family mt-4">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium totam rem apereaque abillo
              inventore veritatis quasi architecto beatae
            </p>
            <p className="text-black-50 f-family mt-4">1. Business Planning, Strategy</p>
            <p className="text-black-50 f-family mt-4">2. Financial Projections And Analysis</p>
            <p className="text-black-50 f-family mt-4">3.International Business Opportunities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
