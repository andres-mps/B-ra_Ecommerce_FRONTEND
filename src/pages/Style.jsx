import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

function Style() {
  const [style, setStyle] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      window.scrollTo(0, 0);
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products/${style}`,
      });
      setProducts(response.data);
    }
    window.scrollTo(0, 0);
    getProductInfo();
  }, [style]);

  useEffect(() => {
    async function getCategories() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/categories`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setCategories(response.data);
      //console.log(response.data);
    }
    getCategories();
  }, []);
  return (
    <section>
      <h1 className="styles-header">Beers</h1>
      <div className="container-fluid">
        <div className="styles-list-container px-5">
          {categories &&
            categories.map((category) => {
              return (
                <NavLink
                  key={category.id}
                  className="text-decoration-none"
                  onClick={() => setStyle(category.name)}
                >
                  <h2 className="styles-list-header">{category.name}</h2>
                </NavLink>
              );
            })}
        </div>
        <div className="row align-items-end">
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
