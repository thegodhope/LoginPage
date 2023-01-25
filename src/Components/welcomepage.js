import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div className="mainpage container-fluid">
      <div className="CARD">
        <div className="mt-2">
          <h4 className="welcometext">Welcome to HomeTech</h4>
          <small className="ptag">
            We protect your credentials from any form of <br></br>shoulder
            surfing attacks
          </small>
        </div>

        <div className="mt-4">
          <Link to="/Register">
            <button className="Register">
              <small className="buttonspan">Register</small>
            </button>
          </Link>
        </div>
        <div className="mt-2">
          <Link to="/Sign Up">
            <button className="Signup">
              <small className="whitespan">Sign Up</small>
            </button>
          </Link>
        </div>

        <div className="Privacy">
          <div className="">
            <a className="atag" href="#">
              Privacy and Policy
            </a>
          </div>
          <div>
            <a className="atag" href="#">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
