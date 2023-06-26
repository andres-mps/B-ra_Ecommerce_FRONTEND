import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
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
      </div>
    </>
  );
}
export default Page;
