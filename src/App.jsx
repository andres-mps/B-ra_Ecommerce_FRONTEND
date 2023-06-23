import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

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
import Error404 from "./pages/Error404"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="orders" element={<YourOrders />}/>
          <Route path="beers/:product" element={<ProductDetail />} />
          <Route path="styles" element={<Style />} />
          <Route path="styles/:style" element={<Style />} />
          <Route path="about-this-project" element={<AboutThisProject />} />
        <Route path="*" element={<Error404 />} />
        </Route>

        <Route path="age-gate" element={<AgeGate />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
