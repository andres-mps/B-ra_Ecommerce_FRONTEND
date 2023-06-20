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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="beers/:product" element={<ProductDetail />} />
          <Route path="styles" element={<Style />} />
          <Route path="styles/:style" element={<Style />} />
          <Route path="about-this-project" element={<AboutThisProject />} />
        </Route>

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
