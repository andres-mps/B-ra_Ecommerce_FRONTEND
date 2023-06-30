import { useLayoutEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const direccionAnterior =
    location.state !== null
      ? location.state.direccionAnterior !== null
        ? location.state.direccionAnterior
        : location.pathname
      : location.pathname;

  async function handleSubmit(event) {
    event.preventDefault();
    const register = await axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_BACK}/users/`,
      data: {
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: emailValue,
        password: passwordValue,
      },
    });
    if (register.data.err === "err") {
      return setErr(register.data.message);
    }
    setErr(null);
    navigate("/login", { state: { direccionAnterior } });
  }

  return (
    <section className="container-fluid">
      <div className="row align-items-center">
        <div className="d-none  col-12 col-lg-6 d-sm-flex align-items-center justify-content-center p-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0266/3704/1767/files/Barrels_ToOlCity_d3f23c1e-bc9b-49ea-8b20-a6e4f87c7d21.jpg?v=1622724312&width=1500"
            alt="register image"
            id="register-image"
          />
        </div>
        <div className="col-12 col-lg-6 border-sm-none" id="register-form">
          <h1 id="register-heading">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input">
              <input
                name="firstname"
                type="text"
                className="register-input"
                placeholder="Firstname"
                required
                value={firstnameValue}
                onChange={(e) => setFirstnameValue(e.target.value)}
              />
            </div>
            <div className="mb-3 input">
              <input
                name="lastname"
                type="text"
                className="register-input"
                placeholder="Lastname"
                required
                value={lastnameValue}
                onChange={(e) => setLastnameValue(e.target.value)}
              />
            </div>
            <div className="mb-3 input">
              <input
                name="email"
                type="email"
                className="register-input"
                placeholder="Email"
                required
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
            </div>
            <div className="mb-3 input">
              <input
                name="password"
                type="password"
                className="register-input"
                placeholder="Password"
                required
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
            <button type="submit" id="register-button">
              Sign up
            </button>
            {err && (
              <div className="text-danger mt-2 login-alert" role="alert">
                {err}
              </div>
            )}
            <div>
              <p>
                Already have an account?
                <span
                  className="login-span ms-2"
                  onClick={() => {
                    navigate("/login", { state: { direccionAnterior } });
                  }}
                >
                  Log in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
