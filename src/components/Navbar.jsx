import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/cartSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function NavbarBeer() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);

  const loggedUser = useSelector((state) => state.user.userData);

  function calcCartQuantity() {
    const quantities = productsInCart.map((product) => product.qty);
    const totalQuantity = quantities.reduce((acc, quantity) => acc + quantity, 0);
    return totalQuantity;
  }

  function handleOpen() {
    dispatch(openCart(true));
  }

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar sticky="" key={expand} bg="white" expand={expand} className="navbar">
          <Container fluid>
            <NavLink className="navbar-brand" to="/home">
              <img
                src="/public/img/logo/tool_horizontal_logo_19.webp"
                alt="Logo"
                style={{ maxWidth: "90px" }}
              />
            </NavLink>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="collapse-button"
              style={{ color: "transparent" }}
            />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <NavLink to="/home">
                    <img
                      src="/public/img/logo/tool_horizontal_logo_19.webp"
                      alt="Logo"
                      style={{ maxWidth: "90px" }}
                    />
                  </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <Nav className="justify-content-start flex-grow-1">
                  <NavLink to="/styles " className="nav-link ms-4">
                    BEER
                  </NavLink>
                  <NavLink to="/about-this-project" className="nav-link ms-4">
                    ABOUT THIS PROJECT
                  </NavLink>
                  <div className="login-container">
                    {loggedUser === undefined ? (
                      <NavLink to="/login" className="nav-link mb-3 ms-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon icon-account nav-icons"
                          fill="none"
                          viewBox="0 0 24 24"
                          style={{ marginLeft: "0px", marginBottom: "5px" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 14v8h2v-6h14v6h2v-8zM12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
                            fill="black"
                          ></path>
                        </svg>
                        <span className="nav-login">Log in</span>
                      </NavLink>
                    ) : (
                      <div>
                        <NavLink to="" className="nav-link mb-3 ms-4">
                          Your Profile
                        </NavLink>
                        <NavLink to="/orders" className="nav-link mb-3 ms-4">
                          Your Orders
                        </NavLink>
                        <NavLink to="" className="nav-link mb-3 ms-4">
                          LogOut
                        </NavLink>
                      </div>
                    )}
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="d-flex">
              <div className="d-none d-md-flex">
                {loggedUser === undefined ? (
                  <NavLink to="/login" className="nav-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon icon-account"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 14v8h2v-6h14v6h2v-8zM12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
                        fill="black"
                      ></path>
                    </svg>
                  </NavLink>
                ) : (
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={`${loggedUser.firstname} ${loggedUser.lastname}`}
                    menuVariant="dark"
                  >
                    <NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
                  </NavDropdown>
                )}
              </div>
              <div className="nav-icons">
                <span onClick={handleOpen}>
                  <svg
                    class="icon icon-cart"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M15.6 6.3V5c0-2-1.6-3.6-3.6-3.6S8.4 3 8.4 5v1.3H4.2v16.3h15.6V6.3h-4.2zM10.4 5c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v1.3h-3.2V5zm7.4 15.6H6.2V8.3H17.8v12.3z"
                    ></path>
                  </svg>
                  {productsInCart.length > 0 && (
                    <div className="cart-count-bubble">
                      <span id="cart-items-count">{calcCartQuantity()}</span>
                    </div>
                  )}
                </span>
              </div>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBeer;
