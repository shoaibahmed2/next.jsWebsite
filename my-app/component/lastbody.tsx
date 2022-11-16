import wallet from "*.svg";
import box from "*.svg";

const Lastbody = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 ">
          {" "}
          <img src="wallet.svg" alt="" />
          <h3 className="shipp mt-3">Shipping for buyers</h3>
          <p className="pg mt-3">
            All of our items are being shipped from several warehouses/stores in
            the USA and worldwide, and usually ships within 24 H to 5 business
            days depending on the seller’s shipping time.
          </p>
          <div>
            <button className="button text-success">Readmore</button>
          </div>
        </div>
        <div className="col-7 ">
          {" "}
          <img src="box.svg" alt="" />
          <h3>Shipping for sellers</h3>
          <p>
            Once you have approved the purchase, you can request for your labels
            by email at: shipping@hypeindustry.com! Make sure to include:
            Buyer’s details...
          </p>
          <div>
            <button className="button text-success mt-4">Readmore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastbody;
