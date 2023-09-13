import "./Hero.css";
import Photo from "../../assets/svgs/photo.svg"
import Pic from "../../assets/svgs/dots.svg"


const Hero = () => {
  return (
  <div className="container-fluid bg-color1">
    <div className="container">
      <img src={Pic} className="position-absolute top-0 end-0 pt-5 mt-5" alt="dots" />
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-white text-start ps-4 ms-4 pt-5 mt-5">Our <span className="consult">consultation</span> is <br /> always in sync <br /> with your strategy</h1>
          <p className="text-white text-start ps-4 ms-4 pt-3">Scelerisque dignissim in leo at magna donec mi metus ipsum <br /> luctus nam elit sociis luctus et aliquam libero.</p>
          <button className="btn1 text-white ms-5 d-flex justify-content-start pt-1 mt-3">Our Services</button>
        </div>
        <div className="col-md-6">
          <img src={Photo} className="img-fluid mt-5" alt="pic" />
          <img src={Pic} className="position-absolute bottom-0 start-0" alt="dots" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero;