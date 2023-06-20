import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <section className="container-fluid">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/3704/1767/files/Barrels_ToOlCity_d3f23c1e-bc9b-49ea-8b20-a6e4f87c7d21.jpg?v=1622724312&width=1500"
            alt="register image"
            id="register-image"
          />
        </div>
        <div className="col-12 col-lg-6" id="register-form">
          <h1 id="register-heading">Sign up</h1>
          <form>
            <div className="mb-3" id="input">
              <input type="text" id="register-input" placeholder="Firstname" />
            </div>
            <div className="mb-3" id="input">
              <input type="text" id="register-input" placeholder="Lastname" />
            </div>
            <div className="mb-3" id="input">
              <input type="email" id="register-input" placeholder="Email" />
            </div>
            <div className="mb-3" id="input">
              <input type="password" id="register-input" placeholder="Password" />
            </div>
            <button type="submit" id="register-button">
              Sign in
            </button>
            <div>
              <NavLink id="register-link" to="/login">
                Already have an account? Log in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
