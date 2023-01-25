import React from "react";
import { Link } from "react-router-dom";
import navimage from "../assets/Ellipsessmall.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light rounded">
        <div class="container-fluid">
          <Link className=" me-2 navbar-brand" to="/">
            <img src={navimage} alt="logo" className="d-inline-block " />
            <span className="text-primary fs-6 fw-semibold">HomeTech</span>
          </Link>
          <div className="d-flex">
            <Link className="me-2" to="/About">
              <button
                className="btn btn-secondary
              "
              >
                About Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
