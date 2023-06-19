import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart";
function NavbarBeer() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar sticky="" key={expand} bg="white" expand={expand} className="navbar">
          <Container fluid>
            <NavLink className="navbar-brand" to="/home">
              <img
                src="/public/img/logo/tool_horizontal_logo_19.webp"
                alt="Logo"
                style={{ maxWidth: "90px" }}
              />
            </NavLink>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="collapse-button"
              style={{ color: "transparent" }}
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="/public/img/logo/tool_horizontal_logo_19.webp"
                    alt="Logo"
                    style={{ maxWidth: "90px" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <Nav className="justify-content-start flex-grow-1">
                  <NavLink to="/styles " className="nav-link ms-4">
                    BEER
                  </NavLink>
                  <NavLink to="/about-this-project" className="nav-link ms-4">
                    ABOUT THIS PROJECT
                  </NavLink>
                  <div className="login-container">
                    <NavLink to="" className="nav-link mb-3 ms-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon icon-account nav-icons"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{ marginLeft: "0px", marginBottom: "5px" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 14v8h2v-6h14v6h2v-8zM12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
                          fill="black"
                        ></path>
                      </svg>
                      <span className="nav-login">Log in</span>
                    </NavLink>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-flex">
              <NavLink to="/home" className="nav-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon icon-account"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 14v8h2v-6h14v6h2v-8zM12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
                    fill="black"
                  ></path>
                </svg>
              </NavLink>
              {/* <Cart/> */}
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBeer;
