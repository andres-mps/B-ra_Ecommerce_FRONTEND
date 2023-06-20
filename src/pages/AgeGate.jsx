import { NavLink } from "react-router-dom";
import "./AgeGate.css";

function AgeGate() {
  return (
    <main id="age-gate-main">
      <div id="background-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0266/3704/1767/files/Screenshot_2022-06-03_at_15.05.13.png?v=1654261541&width=2000"
          alt="background-image"
        />
      </div>
      <div className="container-fluid" id="age-gate-container">
        <img src="/public/img/logo/tool_horizontal_logo_19.webp" alt="" id="age-gate-logo" />
        <div id="age-gate-prompt">
          <div id="age-gate-text">
            <p>Are you old enough to drink?</p>
          </div>
          <div id="age-gate-buttons">
            <NavLink>
              <button id="age-gate-pass">Yes!</button>
            </NavLink>
            <NavLink>
              <button id="age-gate-fail">No</button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AgeGate;
