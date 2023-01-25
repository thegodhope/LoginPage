import React from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import colorblue from "../assets/Ellipseblue.png";

const Colorselector = () => {
  const url = "https://home-tech.vercel.app/api//colors/register";

  const [data, setData] = useState({
    colorCombination: [],
  });
  return (
    <div>
      <div className="mainpage container-fluid">
        <div className="CARD">
          <div className="mt-2">
            <h4 className="text-primary">Select Your Color Combination</h4>
            <small className="ptag">
              Please Select below according <br></br> to your choice
            </small>
          </div>
          <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="colorschecker"></div>

          <div>
            <button type="submit" class="Register">
              Next
            </button>

            <div>
              <small>
                <Link to="">Reset</Link>
              </small>
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
      </div>
    </div>
  );
};

export default Colorselector;
