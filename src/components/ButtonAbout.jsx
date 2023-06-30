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
    //const queryParams = new URLSearchParams(location.search);
    //queryParams.set("user", "maria@gmail.com");
    //queryParams.set("password", "1234");
    navigate(`/login`);
    //console.log("Login como usuario");
  };
  const handleAdminLogin = () => {
    const url = "https://b-ra-admin.vercel.app/login"; //?user=admin@gmail.com&password=1234
    window.open(url, "_blank");
    //console.log("Login como administrador");
  };

  return (
    <>
      <div className="button-about-container">
        <button
          className="btn btn-primary btn-outline-white open-about-button"
          onClick={handleOffcanvasToggle}
        >
          <span className="d-none d-sm-block"> About This Project</span>
          <span className="d-sm-none"> About </span>
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
                <h5 className="offcanvas-title">About this project</h5>
                <p className="mt-3">
                  This e-commerce site is a project developed by students of{" "}
                  <strong style={{ fontWeight: "600" }}>Hack Academy's Coding Bootcamp.</strong> The
                  Bootcamp is an extremely hands-on, 3-month, full-time educational program, where
                  students invest more than <strong style={{ fontWeight: "600" }}>600 hours</strong>{" "}
                  learning about{" "}
                  <strong style={{ fontWeight: "600" }}>
                    Node.js, Express, React.js, SQL, MongoDB and Git.
                  </strong>
                </p>
                <button
                  className="btn btn-primary btn-outline-white btnOffCanvas mt-3"
                  onClick={() => {
                    handleOffcanvasToggle();
                    navigate("about-this-project");
                  }}
                >
                  Learn more about this project!
                </button>{" "}
              </div>
            </div>
            <hr className="solid mx-4" />
            <div className="offcanvas-body-credentials d-flex flex-column">
              <div style={{ paddingLeft: "10px" }}>
                <h5 className="offcanvas-title mb-4">Login credentials</h5>
                <section>
                  <button
                    className="btn btn-primary btnOffCanvas mb-2 mt-3"
                    onClick={() => {
                      handleOffcanvasToggle();
                      handleGuestLogin();
                    }}
                  >
                    Login as user
                  </button>
                </section>
                <section>
                  <button
                    className="btn btn-primary btnOffCanvas"
                    onClick={() => {
                      handleOffcanvasToggle();
                      handleAdminLogin();
                    }}
                  >
                    Login as administrator
                  </button>
                </section>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ButtonAbout;
