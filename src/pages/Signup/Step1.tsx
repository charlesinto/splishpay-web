import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/atoms/Buttons/Button";
import { Input, Select } from "../../components/atoms/Input";

const logo = require("../../assets/logo_white.png");

const Step1 = () => {
  const [buisnessType, setBusinessType] = useState("");
  return (
    <section>
      <div className="d-flex justify-content-center mb-3">
        <img
          src={logo}
          alt="splishpay"
          style={{ width: 200, objectFit: "contain" }}
        />
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div className="step active"></div>
              </div>
              <div className="col-md-3">
                <div className="step"></div>
              </div>
              <div className="col-md-3">
                <div className="step"></div>
              </div>
              <div className="col-md-3">
                <div className="step"></div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="row mb-5">
              <div className="col-md-12">
                <h4 className="text-center">
                  <strong>Tell us about your business</strong>
                </h4>
                <h4 className="text-center">
                  Signing up for Splish is fast and free.
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Select
                  value={buisnessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option value={""}>What kind of business are you?</option>
                  <option value={"Business"}>Business</option>
                  <option value={"Individual"}>Individual</option>
                </Select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Business Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="CAC RC" />
              </div>
            </div>
            {buisnessType === "Business" && (
              <div className="row">
                <div className="col-md-12">
                  <Select>
                    <option value={""}>How many Employees?</option>
                    <option value={"0 - 50"}>0 - 50</option>
                    <option value={"50 - 100"}>50 - 100</option>
                  </Select>
                </div>
              </div>
            )}

            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Business Phone Number" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input placeholder="Business Email" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Link to={"/signup/step-2"}>
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

export default Step1;
