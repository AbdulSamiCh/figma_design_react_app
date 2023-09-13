import "./section.css"
import Image2 from "../../assets/svgs/image 2.svg";
import Image3 from "../../assets/svgs/image 3.svg";
import Image4 from "../../assets/svgs/image 4.svg";
import Dot from "../../assets/svgs/Dotted.svg";
import Photo from "../../assets/svgs/Pic1.svg";
import Photo1 from "../../assets/svgs/Pic2.svg";
import Dots from "../../assets/svgs/Dotted2.svg";

const Section = () => {
    return (
        <div className="container-fluid">
            <h4 className="text-center pt-5 mt-5 consult">CARE FEATURES</h4>
            <h1 className="text-center pt-2">Awesome Service With Our Tools</h1>
            <img src={Dot} className="" alt="dots" />
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-4">
                        <img src={Image2} alt="logo" />
                        <h3 className="pt-3">App Development</h3>
                        <p className="text-body-tertiary">Helping families live intelligently <br /> means we’re always working to <br /> bring our customers.</p>
                    </div>
                    <div class="col-md-4">
                        <img src={Image3} alt="logo" />
                        <h3 className="pt-3">Cloud Storage</h3>
                        <p className="text-body-tertiary">Helping families live intelligently <br /> means we’re always working to <br /> bring our customers.</p>
                    </div>
                    <div class="col-md-4">
                        <img src={Image4} alt="logo" />
                        <h3 className="pt-3">UX Planning</h3>
                        <p className="text-body-tertiary">Helping families live intelligently <br /> means we’re always working to <br /> bring our customers.</p>
                    </div>
                </div>

                <div class="container text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <img src={Photo} className="img-fluid" alt="photo"/>
                            <img src={Photo1} className="mt-3 img-fluid px-4" alt="photo"/>
                            <img src={Dots} className="position-relative start-0 d-flex flex-row translate-middle z-n1" alt="dots" />
                        </div>
                        <div class="col">
                            <h3 className="consult text-start mt-4">About</h3>
                            <h1 className="text-start">Influencer Marketing <br /> for Your Business</h1>
                            <p className="text-start text-body-tertiary">With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.</p>
                            <button className="but-n p-2 d-flex flex-row margbottom">Phone Number: +002698 22 33</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section