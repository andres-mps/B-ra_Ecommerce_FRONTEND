import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <section className="container-fluid">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center p-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/3704/1767/files/Screenshot_2022-06-03_at_13.08.38_1296x_8916243e-13e9-460c-adc7-bcaf1c1c63d6.webp?v=1661867963&width=1500"
            alt="login image"
            id="login-image"
          />
        </div>
        <div className="col-12 col-lg-6" id="login-form">
          <h1 id="login-heading">Login</h1>
          <form>
            <div className="mb-3" id="input">
              <input type="email" id="login-input" placeholder="Email" />
            </div>
            <div className="mb-3" id="input">
              <input type="password" id="login-input" placeholder="Password" />
            </div>
            <button type="submit" id="login-button">
              Sign in
            </button>
            <div>
              <NavLink id="login-link" to="/register">
                Don't have an account? Sign up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
