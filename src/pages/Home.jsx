import "./Home.css";

function Home() {
  return (
    <main>
      <section className="hero container-fluid">
        <div>{/* <img src="/public/img/home/header_home.webp" alt="" /> */}</div>
      </section>
      <section id="featured_products" className="container-fluid">
        <div className="row">
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column text-center">
              <img src="/public/img/products/Action-Directe_44cl_can.webp" alt="" />
              <p className="productName">Action Direct</p>
              <p className="productPrice">41.60 USD</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column text-center">
              <img src="/public/img/products/TroubleJuice-44cl.webp" alt="" />
              <p className="productName">Action Direct</p>
              <p className="productPrice">41.60 USD</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column text-center">
              <img src="/public/img/products/brokilde-brown.webp" alt="" />
              <p className="productName">Action Direct</p>
              <p className="productPrice">41.60 USD</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="d-flex flex-column text-center">
              <img src="/public/img/products/sovs.webp" alt="" />
              <p className="productName">Action Direct</p>
              <p className="productPrice">41.60 USD</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
