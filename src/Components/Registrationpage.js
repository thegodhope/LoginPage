import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "axios";
import "./registration.css";
import { FiArrowLeft } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { SlEye } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { Link } from "react-router-dom";

const Registrationpage = () => {
  const url = "https://home-tech.vercel.app/api//register";

  const history = useNavigate();

  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      name: data.fullName,
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
    });

    history.push("/");
  };

  return (
    <div className="mainpage container-fluid">
      <div className="CARD">
        <div className="mt-2">
          <div>
            <Link to="/Welcomepage">
              <FiArrowLeft />
            </Link>
          </div>
          <h4 className="text-primary">Create an Account</h4>
          <small className="ptag">
            Fill in your details below to create an account with us
          </small>
        </div>

        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <form class="login">
            <fieldset>
              <div class="input">
                <input
                  onChange={(e) => handleChange(e)}
                  id="fullName"
                  value={data.fullName}
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <span>
                  <SlUser />
                </span>
              </div>

              <div class="input">
                <input
                  onChange={(e) => handleChange(e)}
                  id="email"
                  value={data.email}
                  type="email"
                  placeholder="Email"
                  required
                />
                <span className="span">
                  <SlEnvolope />
                </span>
              </div>
              <div class="input">
                <input
                  onChange={(e) => handleChange(e)}
                  id="password"
                  value={data.password}
                  type="password"
                  placeholder="Password"
                  required
                />
                <span>
                  <SlEye />
                </span>
              </div>
              <button onSubmit={handleSubmit} type="submit" class="Register">
                Next
              </button>
            </fieldset>

            <div class="feedback">
              <small>
                Already have an account? <Link to="/Welcomepage">Sign In</Link>
              </small>
            </div>
          </form>

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
  );
};

export default Registrationpage;
