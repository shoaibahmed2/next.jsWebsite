const Footer = () => {
  return (
    <div className="container-fluid bg-dark  mt-5 pt-5">
      <div className="row">
        <div className="col-md-3   text-white mb-2">
          <ul>
            <h4>HypeIndustry</h4>
          </ul>
          <ul>HypeIndustry Concept</ul>
          <ul>
            <a href="http://localhost:3000/buyingonhype">Buying Guide</a>
          </ul>
          <ul>
            <a href="http://localhost:3000/sellingonhype">Selling Guide</a>
          </ul>
        </div>

        <div className="col-md-3   text-white">
          <ul>
            <h4>Hype Offers</h4>
          </ul>
          <ul>Footwear</ul>
          <ul>Apparel</ul>
          <ul>Accessories</ul>
        </div>
        <div className="col-md-3 text-light  ">
          <ul>
            <h4>Shipping</h4>
          </ul>
          <ul>Shipping For Buyers </ul>
          <ul>Shipping For Sellers</ul>
        </div>
        <div className="col-md-3  text-white">
          <ul>
            <h4></h4>CONTACT US{" "}
          </ul>
          <div>
            <ul>
              <a
                className="links text-success"
                href="shipping@hypeindustry.com"
              >
                shipping@hypeindustry.com
              </a>
            </ul>

            <ul>
              <a className="links text-success" href="sales@hypindustry.com">
                sales@hypindustry.com
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="lastline text-light text-center pt-5">
        {" "}
        <h6>© 2022 HypeIndustry</h6>{" "}
      </div>
    </div>
  );
};

export default Footer;
