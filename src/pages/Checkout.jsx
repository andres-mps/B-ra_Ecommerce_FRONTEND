import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import beer from "../../public/img/products/Action-Directe_44cl_can.webp";
import "./Checkout.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import CheckoutItems from "../components/CheckoutItems";

function Checkout() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            Continue Shopping <i className="fas fa-chevron-right ms-3"></i>
          </p>
          <p className="text-primary">Billing Information</p>
          <p>
            <i className="fas fa-chevron-right me-3"></i> Confirmation
          </p>
        </div>
      </section>
      <section className="container checkout-navbar-container-md">
        <NavLink className="" to="/home">
          <img
            src="/public/img/logo/tool_horizontal_logo_19.webp"
            alt="Logo"
            style={{ maxWidth: "90px" }}
          />
        </NavLink>
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-6 checkout-summary-container order-md-2">
            <div className="container checkout-count-section">
              <Button
                variant="custom"
                active
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="checkout-collapse-button"
              >
                <div className="d-flex justify-content-between">
                  {!open && (
                    <p className="fs-6 fw-lighter">
                      <i className="fas fa-cart-arrow-down me-2"></i> Show order summary
                      <i className="fas fa-chevron-down ms-2"></i>
                    </p>
                  )}
                  {open && (
                    <p className="fs-6 fw-lighter">
                      <i className="fas fa-cart-arrow-down me-2"></i> Hide order summary
                      <i className="fas fa-chevron-up ms-2"></i>
                    </p>
                  )}

                  <p className="text-black fs-6 fw-lighter">kr 45.00</p>
                </div>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text" className="d-md-block">
                  <section className="mt-5 d-flex justify-content-between align-items-center">
                    <CheckoutItems beer={beer} />
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
                        <button
                          type="submit"
                          className="btn btn-secondary mb-3 checkout-discount-button"
                        >
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
              </Collapse>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="container mt-3 checkout-payment-container">
              <button className="checkout-apple-pay-button">
                <i className="fab fa-apple-pay"></i>
              </button>
              <div className="checkout-divider">
                <span className="checkout-divider-line"></span>
                <span className="checkout-divider-text">or</span>
                <span className="checkout-divider-line"></span>
              </div>
              <div className="m-0 text-end">
                <p className="fs-6">
                  Already have an account? <NavLink to="/login">Log in</NavLink>
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="name-on-card" className="form-label">
                  Name on card
                </label>
                <input type="text" className="form-control" id="name-on-card" />
              </div>
              <div className="mb-3">
                <label htmlFor="card-number" className="form-label">
                  Card number
                </label>
                <input type="text" className="form-control" id="card-number" />
              </div>
              <div className="row mb-3">
                <div className="col-auto">
                  <label htmlFor="exp-date" className="form-label">
                    Expiration date {"(MM/YY)"}
                  </label>
                  <input type="text" className="form-control" id="exp-date" />
                </div>
                <div className="col-auto">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input type="text" className="form-control" id="cvc" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input type="text" className="form-control" id="address" />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" />
              </div>

              <div className="mb-3">
                <label htmlFor="postal-code" className="form-label">
                  Postal Code
                </label>
                <input type="text" className="form-control" id="postal-code" />
              </div>
              <Form>
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label="Billing address is the same as shipping address"
                    />
                  </div>
                ))}
              </Form>
              <button className="checkout-pay-button">Total kr 45.00</button>
              <span className="d-inline-block mt-3">
                <i className="fas fa-lock me-3"></i>Payment details stored in plain text
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Checkout;
