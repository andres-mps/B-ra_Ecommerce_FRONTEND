import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import ButtonAbout from "../components/ButtonAbout";

function Page() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && navigate("/home");
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <Outlet />
        </div>
        <Footer />
        <ButtonAbout />
      </div>
    </>
  );
}

export default Page;
