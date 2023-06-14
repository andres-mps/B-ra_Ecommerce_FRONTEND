import "./Home.css";
import Product from "../components/Product";

function Home() {
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
    </main>
  );
}

export default Home;
