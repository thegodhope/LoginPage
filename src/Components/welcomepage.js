import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";

const Welcomepage = () => {
  return (
    <div className="mainpage cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <div className="CARD">
        <div>
          <h1>Welcome to Hometech</h1>
          <p className="lead">
            We protect your credentials from any form of shoulder surfing
            attacks
          </p>
        </div>

        <div className="mb-2">
          <Link to="/Register">
            <button className="Register">Register</button>
          </Link>
        </div>

        <Link to="/Sign Up">
          <button className="Signup-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcomepage;
