import Product from "../components/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
import { useParams } from "react-router-dom";

function Style() {
  const params = useParams();
  const [err, setErr] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getAllProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products`,
      });
      setErr(null);
      return setProducts(response.data);
    }

    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/categories/${params.style}`,
      });
      if (response.data.type === "err") {
        return setErr(response.data.content);
      }
      setErr(null);
      return setProducts(response.data);
    }

    if (params.style === undefined) {
      getAllProductInfo();
    } else {
      getProductInfo();
    }
  }, [params.style]);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <NavLink to="/styles" className="text-decoration-none text-black">
        <h1 className="styles-header">Beers</h1>
      </NavLink>
      <div className="container-fluid">
        <div className="styles-list-container px-5">
          {categories &&
            categories.map((category) => {
              return (
                <NavLink
                  key={category.id}
                  className="text-decoration-none"
                  to={`/styles/${category.slug}`}
                >
                  <h2 className="styles-list-header">{category.name}</h2>
                </NavLink>
              );
            })}
        </div>
        {err && (
          <div id="error" class="alert alert-danger text-center" role="alert">
            {err}
          </div>
        )}

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
