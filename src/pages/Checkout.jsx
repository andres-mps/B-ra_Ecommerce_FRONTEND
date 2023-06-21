import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import beer from "../../public/img/products/Action-Directe_44cl_can.webp";
import "./Checkout.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import CheckoutItems from "../components/CheckoutItems";
import { useSelector } from "react-redux";
import { Tooltip } from "antd";

function Checkout() {
  const loggedUser = useSelector((state) => state.user.userData);
  const [email, setEmail] = loggedUser ? useState(loggedUser.email) : useState(null);
  const [nameOnCard, setNameOnCard] = loggedUser
    ? useState(loggedUser.firstname + " " + loggedUser.lastname)
    : useState(null);
  const [address, setAddress] = loggedUser ? useState(loggedUser.address) : useState(null);
  const cardNumber = loggedUser ? "4111 1111 1111 1111" : null;
  const expDate = loggedUser ? "12/25" : null;
  const cvc = loggedUser ? "111" : null;
  const city = loggedUser ? "Montevideo" : null;
  const pcode = loggedUser ? "10100" : null;

  const cart = useSelector((state) => state.cart.products);
  const [subTotal, setSubTotal] = useState(null);
  const [taxes, setTaxes] = useState(null);
  const [total, setTotal] = useState(null);
  const [open, setOpen] = useState(false);
  console.log(subTotal, taxes, total);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubTotal(0);
    cart.map((product) => {
      setSubTotal((prevState) => prevState + product.price * product.qty);
    });
    setTaxes(subTotal * 0.09);
    setTotal(taxes + subTotal);
  }, [cart, taxes]);
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
          <NavLink to="/styles" className="text-decoration-none text-black">
            <p>
              Continue Shopping <i className="fas fa-chevron-right ms-3"></i>
            </p>
          </NavLink>
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
                  <section className="mt-5">
                    {cart &&
                      cart.map((product) => {
                        return <CheckoutItems product={product} />;
                      })}
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
                      <p className="fw-bold text-black">kr {subTotal}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-2">
                        <p>Shipping</p>
                        <span className="ml-3">
                          <Tooltip
                            placement="right"
                            title={"Free Shipping this month"}
                            color={"#808080"}
                          >
                            <i className="far fa-question-circle"></i>
                          </Tooltip>
                        </span>
                      </div>

                      <p>Free</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex gap-2">
                        <p>Estimated taxes</p>
                        <span className="ml-3">
                          <Tooltip placement="right" title={"9% of the subtotal"} color={"#808080"}>
                            <i className="far fa-question-circle"></i>
                          </Tooltip>
                        </span>
                      </div>
                      <p className="fw-bold text-black">kr {taxes}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fs-3">Total</p>
                      <p className="fw-bold text-black fs-3">kr {total}</p>
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
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name-on-card" className="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name-on-card"
                  value={nameOnCard}
                  onChange={(event) => setNameOnCard(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="card-number" className="form-label">
                  Card number
                </label>
                <input type="text" className="form-control" id="card-number" value={cardNumber} />
              </div>
              <div className="row mb-3">
                <div className="col-auto">
                  <label htmlFor="exp-date" className="form-label">
                    Expiration date {"(MM/YY)"}
                  </label>
                  <input type="text" className="form-control" id="exp-date" value={expDate} />
                </div>
                <div className="col-auto">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input type="text" className="form-control" id="cvc" value={cvc} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="city" value={city} />
              </div>

              <div className="mb-3">
                <label htmlFor="postal-code" className="form-label">
                  Postal Code
                </label>
                <input type="text" className="form-control" id="postal-code" value={pcode} />
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
              <button className="checkout-pay-button">Total kr {total}</button>
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