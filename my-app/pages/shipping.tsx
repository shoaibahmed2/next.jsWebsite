import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Shipping = () => {
  return (
    <div className="container">
      <Navbar />

      <div className="row">
        <div className="col-md-6 ">
          <h3>Shipping for buyers</h3> <br />
          <p>
            All of our items are being shipped from several warehouses/stores in
            the USA and worldwide, and usually ships within 24h to 5 business
            days depending on the seller’s shipping time.
          </p>{" "}
          <br />
          <h6>
            {" "}
            We take care of all customs paperwork for you , so you can sleep
            well at night!
          </h6>{" "}
          <br />
          <p>
            1. Sellers: Just pack the shoes, tape the box(es)properly with lots
            of tape, request your labels via email, and relax! The rest will be
            taken care of ☺
          </p>{" "}
          <br />
          <p>
            2. Buyers: Don’t worry, we will make sure: a proper value, tariff
            code and description are entered and that no problems occur from the
            time packages leave the country and arrive in your country to clear
            customs!
          </p>{" "}
          <br />
        </div>
        <div className="col-md-6 ps-5 ">
          <img src="globe.svg" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-6">
          <img src="transparent.svg" className="img-fluid" alt="" />
        </div>

        <div className="col-md-6 ">
          <h3>How much does shipping COST</h3>
          <p>
            The default shipping cost for sellers & buyers on the platform is
            $2.50/pair for domestic shipments within the USA, and
            $10-$12.50/pair for international express shipments. That will vary
            based on the seller & buyer location. Of course, shipping cost are
            pretty low, as we are dealing with bulk purchases, resulting in
            cost-effective shipping.
          </p>
        </div>
      </div>
      <div className="row pt-5 mt-3">
        <h4 className="places text-center">
          Can I change my shipping address once my order has been placed?
        </h4>
        <p className="places text-center">
          Hypeindustry is unable to change a shipping address once the order has
          been placed. So please make sure all personal and <br /> corporate
          information are correct on your user profile.Also the shipping address
          on file has to match your billing address!
        </p>
        <h5 className="gap mt-3">
          Why does my billing and shipping address have to MATCH?
        </h5>
        <h5 className="gap mt-3">Can I edit my order once I placed It?</h5>
        <h5 className="gap mt-3">
          Can I change the Shipping Address AFTER the order has been placed?
        </h5>
        <h5 className="gap mt-3 mb-5">How long does it take to ship?</h5>
      </div>
      <Footer />
    </div>
  );
};

export default Shipping;
