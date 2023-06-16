import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function Style() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/featured`,
      });
      setProducts(response.data);
    }
    window.scrollTo(0, 0);
    getProductInfo();
  }, []);

  return (
    <section>
      <h1 className="styles-header">Beers</h1>
      <div className="container-fluid d-flex flex-row mb-5">
        <div className="row">
          <div className="styles-list-container px-5">
            <NavLink className="text-decoration-none">
              <h2 className="styles-list-header">IPA</h2>
            </NavLink>
            <NavLink className="text-decoration-none">
              <h2 className="styles-list-header">Sour</h2>
            </NavLink>
            <NavLink className="text-decoration-none">
              <h2 className="styles-list-header">Stout</h2>
            </NavLink>
            <NavLink className="text-decoration-none">
              <h2 className="styles-list-header">Lager & Pilsner</h2>
            </NavLink>
          </div>
          {products &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Style;
