import "./Section2.css";
import Red from "../../assets/svgs/Rectangle 7.svg";

const Section2 = () => {
  return (
    <div className="bg-col">
      <h4 className="text-center pt-5 services">Our Services</h4>
      <h1 className="text-center text-white">Amazing Business Services</h1>
      <div className="container">
        <div className="row pt-5">
          <div className="image col-md-6 px-0 position-relative col-sm-12 mb-3">
           <div> <img src={Red} className="img-fluid" alt="bg" /> </div>
            <div className="position-absolute bottom-0 pb-5 px-5">
              <h2 className="text-white">Technical Analysis</h2>
              <p className="text-white pt-3 pe-4">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going
              </p>
            </div>
          </div>
          <div className="image1 col-md-6 px-0 position-relative col-sm-12">
            <img src={Red} className="img-fluid" alt="bg" />
            <div className="position-absolute bottom-0 pb-5 px-5">
              <h2 className="text-white">Technical Analysis</h2>
              <p className="text-white pt-3 pe-4">
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Section2;
