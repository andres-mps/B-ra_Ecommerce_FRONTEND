import React from "react";
import { NavLink } from "react-router-dom";
import "./AgeGate.css";
import videoFile from "../../public/videos/videoBgBeer.mp4";

const AgeGate = () => {
  return (
    <main id="age-gate-main">
      <div id="background-video">
        <video id="background-video-player"autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>

      <div className="container-fluid" id="age-gate-container">
        <img src="/public/img/logo/tool_horizontal_logo_19.webp" alt="Logo" id="age-gate-logo" />
        <div id="age-gate-prompt">
          <div id="age-gate-text">
            <p>Are you old enough to drink?</p>
          </div>
          <div id="age-gate-buttons">
            <NavLink to="/home">
              <button id="age-gate-pass">Yes!</button>
            </NavLink>
            <NavLink to="/*">
              <button id="age-gate-fail">No</button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AgeGate;
