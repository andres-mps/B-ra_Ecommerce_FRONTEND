import React from "react";
import { NavLink } from "react-router-dom";
import "./AgeGate.css";
import videoFile from "../../public/videos/videoBgBeer.mp4";
import { useDispatch } from "react-redux";
import { isAge } from "../redux/ageGateSlice";
import { useState, useEffect } from "react";

const AgeGate = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isLoading]);
  return (
    <main id="age-gate-main">
      <div id="background-video">
        <video id="background-video-player" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>

      <div className="container-fluid" id="age-gate-container">
        <img src="/public/img/logo/tool_horizontal_logo_19.webp" alt="Logo" id="age-gate-logo" />
        <div id="age-gate-prompt">
          <div id="age-gate-text">
            {isLoading ? (
              <p>
                "Sorry, you must be of legal drinking age to access this website. Please come back
                when you are of legal age."
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
