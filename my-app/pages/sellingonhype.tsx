import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Sellingonhype = () => {
  return (
    <div className="container ">
      <Navbar />
      <div>
        <h4 className="sel text-center ">Selling on HypeIndustry</h4>
      </div>
      <div className="navv justify-content-center text-dark d-flex mt-3 mb-5  ">
        {" "}
        <nav className="navbar navbar-expand-lg text-dark bg-light mt-3 pt-2 me-4  ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link  bg-success text-white" href="#">
                  BECOME A SELLER <span className="sr-only "></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CREATE A LISTING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  SELLER FEES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONDITION OF ITOMS
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-7  ">
          {" "}
          <ul>
            <h6>How do I sell on HypeIndustry?</h6>
          </ul>
          <ul>
            <p>
              To ensure the quality and authenticity of all items on our
              marketplace, we only allow a select group of stores and sellers
              that have passed our verification process, to sell on our
              platform. We encourage you to request to become a seller by
              filling out all the required information. We’ll notify you as soon
              as your request has been approved.
            </p>
          </ul>{" "}
          <br />
          <ul>
            <h6>
              I requested to become a SELLER, how long will it take to get
              approved?
            </h6>
          </ul>{" "}
          <br />
          <ul>
            <h6>How do I delete my Account?</h6>
          </ul>{" "}
          <br />
          <ul>
            <h6>Can I share my seller privileges with others?</h6>
          </ul>
          <br />
          <ul>
            <h6>Can I create several Seller Accounts?</h6>
          </ul>
          <br />
          <ul>
            <h6>How do I become a seller if I have a store outside the USA?</h6>
          </ul>{" "}
          <br />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Sellingonhype;
