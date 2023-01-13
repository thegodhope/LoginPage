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
            HomeTech
          </Link>
          <div className="d-flex">
            <Link className="me-2" to="/About">
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
