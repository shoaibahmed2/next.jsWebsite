import industry from "*.svg";
const Firstbodys = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mt-5">
          <h4>New marketplace that allows you to buy in bulk</h4>
          <p>
            Hypeindustry is a one-of-a-kind Platform+Marketplace offering
            Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers
            for the Footwear,Apparel & Accessory industry.
          </p>
          <button className="button text-white bg-success">Read More</button>
        </div>

        <div className="col-md-8  ">
          <img src="industry.svg " className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Firstbodys;
