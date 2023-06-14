import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#">
          <img
            src="/public/img/logo/tool_horizontal_logo_19.webp"
            alt="Logo"
            style={{ maxWidth: "90px" }}
          />
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active " href="#">
                BEER
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" href="#">
                ABOUT THE PROJECT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <NavLink href="" className="nav-icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              class="icon icon-account"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 14v8h2v-6h14v6h2v-8zM12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
                fill="black"
              ></path>
            </svg>
          </NavLink>
          <NavLink href="" className="nav-icons">
            <svg
              class="icon icon-cart"
              aria-hidden="true"
              focusable="false"
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill="black"
                fill-rule="evenodd"
                d="M15.6 6.3V5c0-2-1.6-3.6-3.6-3.6S8.4 3 8.4 5v1.3H4.2v16.3h15.6V6.3h-4.2zM10.4 5c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v1.3h-3.2V5zm7.4 15.6H6.2V8.3H17.8v12.3z"
              ></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
