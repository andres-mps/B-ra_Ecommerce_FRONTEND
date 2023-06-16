import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Style from "./pages/Style";
import AboutThisProject from "./pages/AboutThisProject";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers/:product" element={<ProductDetail />} />
        <Route path="/styles" element={<Style />} />
        <Route path="/styles/:style" element={<Style />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
