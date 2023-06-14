import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/public/img/logo/tool_horizontal_logo_19.webp"
            alt="Logo"
            style={{ maxWidth: "90px" }}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#" style={{fontFamily:""}}>
                Beer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About the project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


 <p style={{ fontFamily: "var(--font-body-family)", fontSize: "50px" }}>Beers</p>
      <p style={{ fontFamily: "var(--font-heading)", fontSize: "50px" }}>Beers</p>
      <p style={{ fontFamily: "var(--font-heading-light)", fontSize: "50px" }}>Beers</p>
    </>