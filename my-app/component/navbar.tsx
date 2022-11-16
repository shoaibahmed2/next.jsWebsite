import Rectangle from "*.svg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex">
      <a className="navbar-brand bg-dark " href="#">
        <img src={"Rectangle.svg"} width="78" height="78" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="http://localhost:3000/">
              HYPEINDUSTRY <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:3000/hypeoffers">
              HYPEOFFERS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="http://localhost:3000/shipping" > SHIPPING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              SELLER REQUEST FORM
            </a>
          </li>
        </ul>
        <form className="ms-auto bg-light ">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Brand,Model..."
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
