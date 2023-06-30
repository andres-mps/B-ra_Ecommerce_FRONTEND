import React from "react";
import "./ButtonAbout.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ButtonAbout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const handleOffcanvasToggle = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };
  const handleGuestLogin = () => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("user", "maria@gmail.com");
    queryParams.set("password", "1234");
    navigate(`login?${queryParams.toString()}`);
    console.log("Login como usuario");
  };
  const handleAdminLogin = () => {
    const url = "https://b-ra-admin.vercel.app/login?user=admin@gmail.com&password=1234";
    window.open(url, "_blank");
    console.log("Login como administrador");
  };

  return (
    <>
      <div className="button-about-container">
        <button
          className="btn btn-primary btn-outline-white fw-bold  fixed-right m-3 me-0 btnOffCanvas "
          style={{
            backgroundColor: "black",
            color: "white",
            borderColor: "white",
            position: "fixed",
            top: "50%",
            right: "0px",
            transform: "translateY(-50%)",
            writingMode: "vertical-lr",
            WebkitWritingMode: "vertical-lr",
            height: "200px",
            width: "50px",
          }}
          onClick={handleOffcanvasToggle}
        >
          About This Project
        </button>
        {isOffcanvasOpen && (
          <div className="offcanvas offcanvas-end show" tabIndex="-1">
            <div className="offcanvas-header">
              <button
                type="button"
                style={{
                  backgroundColor: "white",
                  color: "white",
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                }}
                className="btn-close"
                onClick={handleOffcanvasToggle}
              ></button>
              <div style={{ paddingTop: "30px", paddingLeft: "10px" }}>
                <h5 className="offcanvas-title">Info about this project</h5>
                <p>
                  This e-commerce site is a project developed by students of{" "}
                  <strong style={{ fontWeight: "600" }}>Hack Academy's Coding Bootcamp.</strong> The
                  Bootcamp is an extremely hands-on, 3-month, full-time educational program, where
                  students invest more than <strong style={{ fontWeight: "600" }}>600 hours</strong>{" "}
                  learning about{" "}
                  <strong style={{ fontWeight: "600" }}>
                    Node.js, Express, React.js, SQL, MongoDB and Git.
                  </strong>
                </p>
              </div>
            </div>
            <div
              className="offcanvas-body d-flex flex-column align-items-center"
              style={{ textAlign: "center" }}
            >
              <section>
                <h6>Navigate to the resume</h6>
                <p></p>
                <button
                  className="btn btn-primary btn-outline-white btnOffCanvas"
                  onClick={() => {
                    handleOffcanvasToggle();
                    navigate("about-this-project");
                  }}
                >
                  More info about this project
                </button>
              </section>
              <section>
                <h6>Login as guest</h6>

                <button
                  className="btn btn-primary btnOffCanvas"
                  onClick={() => {
                    handleOffcanvasToggle();
                    handleGuestLogin();
                  }}
                >
                  Ingresar como invitado
                </button>
              </section>
              <section>
                <h6>Login as administrator</h6>
                <button
                  className="btn btn-primary btnOffCanvas"
                  onClick={() => {
                    handleOffcanvasToggle();
                    handleAdminLogin();
                  }}
                >
                  Ingresar como administrador
                </button>
              </section>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ButtonAbout;
