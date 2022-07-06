import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/atoms/Buttons/Button";
import { Input } from "../../components/atoms/Input";

const logo = require("../../assets/logo_white.png");

const Signup = () => {
  return (
    <section>
      <div className="">
        <img
          src={logo}
          alt="splishpay"
          style={{ width: 200, objectFit: "contain" }}
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12 mb-3">
                <h2>Sign Up</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Full name" type={"text"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Email" type={"email"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Phone number" type={"text"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Password" type={"password"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Confirm Password" type={"password"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 my-3">
                <h6>
                  Already have an account? <Link to="/">Sign In</Link>
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Link to={"/signup/step-1"}>
                  <Button>Continue</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
