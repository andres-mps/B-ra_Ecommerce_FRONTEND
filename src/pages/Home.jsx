import "./Home.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductInfo() {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/products`,
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });
      setProducts(response.data);
      console.log(response.data);
    }
  }, []);

  return (
    <main>
      <section className="hero container-fluid">
        <div className="imgContainer">
          <img className="header_img" src="/public/img/home/header_home.webp" alt="" />
        </div>
      </section>
      <section id="featured_products" className="container-fluid">
        <div className="row">
          <Product />
        </div>
      </section>
      {products &&
        products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
    </main>
  );
}

export default Home;
