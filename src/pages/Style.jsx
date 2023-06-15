import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function Style() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/featured`,
      });
      setProducts(response.data);
    }
    getProductInfo();
  }, []);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/categories`,
      });
      setCategories(response.data);
    }
    getCategories();
  }, []);
  return (
    <section>
      <h1 className="styles-header">Beers</h1>
      <div className="container-fluid d-flex flex-row mb-5">
        <div className="row">
          <div className="styles-list-container px-5">
            {categories &&
              categories.map((category) => {
                return (
                  <NavLink to={`/styles/${category.name}`} className="text-decoration-none">
                    <h2 className="styles-list-header">{category.name}</h2>
                  </NavLink>
                );
              })}
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
