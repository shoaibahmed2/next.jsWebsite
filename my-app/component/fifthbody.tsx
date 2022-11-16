import one from "*.svg";
import three from "*.svg";
import five from "*.svg";
import two from "*.svg";
const Fifthbody = () => {
  return (
    <div className="container  pt-4">
      <div className="row  ">
        <h3 className="buy  text-center ">Buying on Hypeindustry is simple!</h3>
      </div>
      <div className="row mt-5 pt-5">
        <div className="col-md-1 ">
          <img src="one.svg " alt="" />
        </div>
        <div className="col-md-3 ">
          <p>
            Create a buyer account / profile, with all required fields: Full
            name, Company name or Store Name, Address, Credit Card info etc...
          </p>
        </div>
        <div className="col-md-3  "></div>
        <div className="col-md-1 ">
          {" "}
          <img src="two.svg" alt="" />
        </div>
        <div className="col-4 ">
          {" "}
          <p>
            You will then receive email alerts whenever any seller posts an
            offer on the platform. Then it is up to you to click on the link to
            view the offer or not. Of course, each email alert contains the
            offer details and models, so you know what has been posted, and if
            it is in any of your interest to purchase or not.
          </p>
        </div>
      </div>

      <div className="row  ">
        {/* <h3 className="buy  text-center ">Buying on Hypeindustry is simple!</h3> */}
      </div>
      <div className="row">
        <div className="col-md-1 ">
          <img src="three.svg " alt="" />
        </div>
        <div className="col-md-3 ">
          <p>
            The offer can either be: an “open stock inventory”, meaning you can
            select any sizes you want from the seller stock with of course a
            minimum quantity imposed by the seller (if he wants to), or a “buy
            all /take all offer”, which means that the seller wants you to buy
            all the quantities in that specific model. Usually “buy all deals”
            have a higher discounted purchase price. Keep in mind, once you
            place an order on an open stock model, the stock is live and updated
            right away for the next buyer, which will reflect less quantities in
            the inventory...until it reaches a: “sold out” status.
          </p>
        </div>
        <div className="col-md-3  "></div>
        <div className="col-md-1 ">
          {" "}
          <img src="four.svg" alt="" />
        </div>
        <div className="col-md-4 ">
          {" "}
          <p>
            Once logged in, simply view the offer and click on any of the models
            you wish to order by clicking on the “open stock / or buy all”
            buttons.
          </p>
        </div>
      </div>

      <div className="row  ">
        {/* <h3 className="buy  text-center ">Buying on Hypeindustry is simple!</h3> */}
      </div>
      <div className="row">
        <div className="col-1 ">
          <img src="five.svg " alt="" />
        </div>
        <div className="col-md-3 ">
          <p>
            Once the seller approves the order, (this might take 10 min or up to
            to 3 days) your credit card will be charged, and you will receive an
            email with a tracking number. NO charges will be done unless orders
            are APPROVED ! We created a dashboard for buyers so you can see all
            the information you need: invoice number, tracking number, carrier
            /shipper, pdf downloadable invoices etc...Now, you have your own
            excel accounting sheet with you all the time.
          </p>
        </div>
        <div className="col-md-3  "></div>
        <div className="col-md-1 ">
          {" "}
          <img src="six.svg" alt="" />
        </div>
        <div className="col-md-4 ">
          {" "}
          <p>
            Please keep in mind: there are no refunds, no returns, no order
            cancellations, all sales are finals unless the wrong items were
            shipped! This is a B2B Platform.
          </p>
        </div>
      </div>
      <div className="buttos text-center ">
        {" "}
        <button className="button bg-success">Learnmore</button>{" "}
      </div>
    </div>
  );
};

export default Fifthbody;
