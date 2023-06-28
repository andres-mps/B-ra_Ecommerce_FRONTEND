import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Checkout.css";
import { Button, Collapse, Form } from "react-bootstrap";
import CheckoutItems from "../components/CheckoutItems";
import { useSelector, useDispatch } from "react-redux";
import { Tooltip } from "antd";
import { clearCart, openCart } from "../redux/cartSlice";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  function handleOpen() {
    dispatch(openCart(true));
  }

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

  const products = useSelector((state) => state.cart.products);
  const [subTotal, setSubTotal] = useState(null);
  const [taxes, setTaxes] = useState(null);
  const [total, setTotal] = useState(null);

  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(null);

  const [direccionAnterior, setDireccionAnterior] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    setDireccionAnterior(location.pathname);
    setSubTotal(0);
    products.map((product) => {
      setSubTotal((prevState) => prevState + product.price * product.qty);
    });
    setTaxes(Math.round(subTotal * 0.09 * 100) / 100);
    setTotal(taxes + subTotal);
  }, [products, taxes, total]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (loggedUser === undefined) {
      setErr("inicia sesion para realizar una compra");
    }
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_APP_BACK}/orders/${loggedUser.id}`,
      data: {
        code: nanoid(10),
        products,
        subTotalPrice: subTotal,
        taxes,
        totalAmount: total,
        status: "Pending",
        address,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.err) {
      return setErr(response.data.message);
    }
    setErr(null);
    dispatch(clearCart());
    setTaxes(null);
    setTotal(null);
    return navigate("/order-success");
  }

  return (
    <>
      <section className="container-fluid checkout-navbar-container">
        <NavLink className="checkout-navbar-logo" to="/home">
          <img src="/public/img/logo/BRA_logo_black.webp" alt="Logo" style={{ maxWidth: "90px" }} />
        </NavLink>
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
          <img src="/public/img/logo/BRA_logo_black.webp" alt="Logo" style={{ maxWidth: "90px" }} />
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
                <div className="d-flex justify-content-between pb-2">
                  {!open && (
                    <div className="d-flex me-4 fs-6 fw-lighter align-items-center">
                      <i className="fas fa-cart-arrow-down me-2"></i>
                      Show order summary
                      <i className="fas fa-chevron-down ms-2"></i>
                    </div>
                  )}
                  {open && (
                    <div className="d-flex me-4 fs-6 fw-lighter align-items-center">
                      <i className="fas fa-cart-arrow-down me-2"></i>
                      Hide order summary
                      <i className="fas fa-chevron-up ms-2"></i>
                    </div>
                  )}
                  <div className="d-flex gap-1 pt-3">
                    <p className="text-black fs-6 fw-lighter">USD </p>
                    <p className="text-black fs-6 fw-lighter"> {total}</p>
                  </div>
                </div>
              </Button>
              <Collapse in={open}>
                <div id="example-collapse-text" className="d-md-block">
                  <section className="checkout-items-section">
                    {products &&
                      products.map((product) => {
                        return <CheckoutItems product={product} />;
                      })}
                  </section>
                  <section className="pt-5">
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
                      <p className="fw-bold text-black">USD {subTotal}</p>
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
                      <p className="fw-bold text-black">USD {taxes}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="fs-3 me-3">Total </p>
                      <p className="fw-bold text-black fs-3">USD {total}</p>
                    </div>
                  </section>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <div className="container mt-3 mb-5 checkout-payment-container">
              <button className="checkout-apple-pay-button">
                <i className="fab fa-apple-pay"></i>
              </button>
              <div className="checkout-divider">
                <span className="checkout-divider-line"></span>
                <span className="checkout-divider-text">or</span>
                <span className="checkout-divider-line"></span>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
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
                    required
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
                <button className="checkout-pay-button">Total USD {total}</button>
              </form>
              {err && (
                <div class="checkout-regular-text text-danger mt-2 checkout-alert" role="alert">
                  {err}
                </div>
              )}
              <div className="row">
                <div className="col-lg-6 order-lg-2">
                  {token === undefined && (
                    <div className="m-1 text-lg-end">
                      <p className="fs-6">
                        Already have an account?{" "}
                        <span
                          onClick={() => {
                            navigate("/login", { state: { direccionAnterior } });
                          }}
                          className="checkout-span-login"
                        >
                          Log in
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <div className="col-lg-6 order-lg-1">
                  <span className="d-inline-block mt-lg-1">
                    <i className="fas fa-lock me-3"></i>Payment details stored in plain text
                  </span>
                  <div className="mt-2">
                    <NavLink id="return-to-cart" to={-1} onClick={handleOpen}>
                      ← Return to cart
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Checkout;
