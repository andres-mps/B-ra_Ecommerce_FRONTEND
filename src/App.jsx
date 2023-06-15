import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutThisProject from "./pages/AboutThisProject";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />
      </Routes>
    </>
  );
}

export default App;
