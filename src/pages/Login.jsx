import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/userSlice";
import axios from "axios";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const direccionAnterior = location.state !== null ? location.state.direccionAnterior : null;

  const queryParams = new URLSearchParams(location.search);
  //const preFilledEmail = queryParams.get("user");
  //const preFilledPassword = queryParams.get("password");

  const [emailValue, setEmailValue] = useState("maria@gmail.com");
  const [passwordValue, setPasswordValue] = useState("1234");
  const [err, setErr] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_BACK}/users/token`,
      data: {
        email: emailValue,
        password: passwordValue,
      },
    });
    if (response.data.err === "err") {
      return setErr(response.data.message);
    }
    dispatch(setToken(response.data));
    if (direccionAnterior === "/register") {
      return navigate("/home");
    }
    if (direccionAnterior === "/checkout") {
      return navigate("/checkout");
    }
    return navigate(-1);
  }

  return (
    <section className="container-fluid">
      <div className="row align-items-center">
        <div className="d-none  col-12 col-lg-6 d-sm-flex align-items-center justify-content-center p-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/3704/1767/files/Screenshot_2022-06-03_at_13.08.38_1296x_8916243e-13e9-460c-adc7-bcaf1c1c63d6.webp?v=1661867963&width=1500"
            alt="login image"
            id="login-image"
          />
        </div>
        <div className="col-12 col-lg-6 border-sm-none" id="login-form">
          <h1 id="login-heading">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input">
              <input
                type="email"
                name="email"
                className="login-input"
                placeholder="Email"
                value={emailValue}
                required
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
            {err && (
              <div className="text-danger mt-2 login-alert" role="alert">
                {err}
              </div>
            )}
            <div>
              <p>
                Don't have an account?
                <span
                  className="login-span ms-2"
                  onClick={() => {
                    navigate("/register", { state: { direccionAnterior } });
                  }}
                >
                  Sign up
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
