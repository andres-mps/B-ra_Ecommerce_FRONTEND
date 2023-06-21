import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: `http://localhost:3000/users/token`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });
    response.data && dispatch(setToken(response.data));
    console.log(response.data);
    navigate("/home");
  }

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input">
              <input
                type="email"
                name="email"
                className="login-input"
                placeholder="Email"
                value={emailValue}
                onChange={(event) => setEmailValue(event.target.value)}
              />
            </div>
            <div className="mb-3 input">
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
              />
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
