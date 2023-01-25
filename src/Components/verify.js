import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Verify = () => {
  return (
    <div>
      <div className="mainpage container-fluid">
        <div className="CARD">
          <div className="mt-2">
            <div>
              {" "}
              <Link>
                <FiArrowLeft />
              </Link>
            </div>
            <h4 className="text-primary">Verify Your Email</h4>
            <small className="ptag">
              Enter the code sent to ....@gmail.com <br></br>
              to verify your email address
            </small>
          </div>

          <div>
            <form class="login">
              <fieldset>
                <div class="input">
                  <input type="text" placeholder="Enter OTP code" required />
                </div>

                <div className="mt-2">
                  <Link to="/Sign Up">
                    <button className="Signup">Verify</button>
                  </Link>
                </div>
              </fieldset>
            </form>

            <div>
              <small>
                Didn't get code?<Link to="">Resend Code</Link>
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

export default Verify;
