import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function AgeGateVerify({ isAge, redirectPath }) {
  if (!isAge) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

export default AgeGateVerify;
