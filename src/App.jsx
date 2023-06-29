import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Style from "./pages/Style";
import AboutThisProject from "./pages/AboutThisProject";
import Checkout from "./pages/Checkout";
import Page from "./pages/Page";
import Login from "./pages/Login";
import Register from "./pages/Register";
import YourOrders from "./pages/YourOrders";
import AgeGate from "./pages/AgeGate";
import Error404 from "./pages/Error404";
import OrderSuccess from "./pages/OrderSuccess";
import YourProfile from "./pages/YourProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import AgeGateVerify from "./components/AgeGateVerify";

function App() {
  const token = useSelector((state) => state.user.token);
  const isAge = useSelector((state) => state.ageGate.isAge);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsActive(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const updatePageTitle = () => {
      document.title = isActive ? "B.RA" : "Hey! Come back!";
    };
    updatePageTitle();
    return () => {
      updatePageTitle();
    };
  }, [isActive]);

  return (
    <>
      <Routes>
        <Route path="/age-gate" element={<AgeGate />} />

        <Route path="/" element={<AgeGateVerify isAge={isAge} redirectPath="/age-gate" />}>
          <Route path="/" element={<Page />}>
            <Route path="home" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="beers/:product" element={<ProductDetail />} />
            <Route path="styles" element={<Style />} />
            <Route path="styles/:style" element={<Style />} />
            <Route path="about-this-project" element={<AboutThisProject />} />
            <Route
              path="orders"
              element={
                <ProtectedRoute token={token} redirectPath="/not-found">
                  <YourOrders />
                </ProtectedRoute>
              }
            />

            <Route
              path="your-profile"
              element={
                <ProtectedRoute token={token} redirectPath="/not-found">
                  <YourProfile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Route>

          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/order-success"
            element={
              <ProtectedRoute token={token} redirectPath="/not-found">
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
