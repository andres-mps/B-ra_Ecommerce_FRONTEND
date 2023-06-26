import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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

function App() {
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
      document.title = isActive ? "To Øl" : "Hey! Come back!";
    };
    updatePageTitle();
    return () => {
      updatePageTitle();
    };
  }, [isActive]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<YourOrders />} />
          <Route path="beers/:product" element={<ProductDetail />} />
          <Route path="styles" element={<Style />} />
          <Route path="styles/:style" element={<Style />} />
          <Route path="about-this-project" element={<AboutThisProject />} />
          <Route path="your-profile" element={<YourProfile />} />
          <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="age-gate" element={<AgeGate />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  );
}

export default App;
