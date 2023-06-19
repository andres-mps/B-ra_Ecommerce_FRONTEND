import { NavLink } from "react-router-dom";
import beer from "../../public/img/products/Action-Directe_44cl_can.webp";
import "./Checkout.css";
function Checkout() {
  return (
    <>
      <section className="container-fluid checkout-navbar-container">
        <div>
          <NavLink className="navbar-brand checkout-navbar-logo" to="/home">
            <img
              src="/public/img/logo/tool_horizontal_logo_19.webp"
              alt="Logo"
              style={{ maxWidth: "90px" }}
            />
          </NavLink>
        </div>
        <div className="checkout-regular-text pt-3 d-flex align-items-center gap-3">
          <p>
            Continue Shopping <i class="fas fa-chevron-right ms-3"></i>
          </p>
          <p className="text-primary">Billing Information</p>
          <p>
            <i class="fas fa-chevron-right me-3"></i> Confirmation
          </p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 checkout-summary-container">
            <div className="container checkout-count-section">
              <section className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                  <div className="checkout-product-photo-container">
                    <img src={beer} alt="" className="checkout-product-photo" />
                    <span className="checkout-product-span">1</span>
                  </div>
                </div>
                <p>kr 36.00</p>
              </section>
              <section className="mt-5">
                <form action="" className="row g-3">
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Gift card or discount code"
                    />
                  </div>
                  <div className="col-3">
                    <button type="submit" class="btn btn-secondary mb-3 checkout-discount-button">
                      Apply
                    </button>
                  </div>
                </form>
              </section>
              <section className="mt-3">
                <div className="d-flex justify-content-between">
                  <p>Subtotal</p>
                  <p className="fw-bold text-black">kr 36.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping</p>
                  <p>Calculated at next step</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Estimated taxes</p>
                  <p className="fw-bold text-black">kr 9.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="fs-3">Total</p>
                  <p className="fw-bold text-black fs-3">kr 45.00</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Checkout;
