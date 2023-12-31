import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./AgeGate.css";
import videoFile from "../assets/videos/videoBgBeer.mp4";
import { useDispatch } from "react-redux";
import { isAge } from "../redux/ageGateSlice";
import BRA_logo_white from "../assets/logos/BRA_logo_white.webp";
import mobileBackground from "../assets/videos/mobileBackground.jpg";

const AgeGate = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <main id="age-gate-main">
      {windowWidth < 600 ? (
        <div id="background-image" style={{ backgroundImage: `url(${mobileBackground})` }} />
      ) : (
        <div id="background-video">
          <video id="background-video-player" autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
          </video>
        </div>
      )}

      <div className="container-fluid" id="age-gate-container">
        <img src={BRA_logo_white} alt="Logo" id="age-gate-logo" />
        <div id="age-gate-prompt">
          <div id="age-gate-text">
            {isLoading ? (
              <p>
                Sorry, you must be of legal drinking age to access this website. Please come back
                when you are of legal age.
              </p>
            ) : (
              <p>Are you old enough to drink?</p>
            )}
          </div>
          {!isLoading && (
            <div id="age-gate-buttons">
              <NavLink to="/home">
                <button id="age-gate-pass" onClick={() => dispatch(isAge())}>
                  Yes!
                </button>
              </NavLink>
              <button id="age-gate-fail" onClick={() => setIsLoading(true)}>
                No
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AgeGate;
