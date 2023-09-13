import "./header.css";
import Logo from "../../assets/svgs/logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="container navbar navbar-expand-lg p-2  text-dark bg-opacity-10">
        <div className="container">
          <img src={Logo} alt="logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto ">
              <li className="nav-item">
                <a className="nav-link active text-danger me-3" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-3" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-3" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active me-3" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Projects</a>
              </li>

            </ul>

            <button type="button" className="bg-color rounded border-0 px-3 py-2 text-light">Contact us today</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
