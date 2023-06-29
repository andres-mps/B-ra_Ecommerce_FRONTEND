import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../redux/cartSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { openDropdown, closeDropdown } from "../redux/DropdownSlice";
import { logOut } from "../redux/userSlice";
import Cart from "./Cart";
import BRA_logo_black from "../assets/logos/BRA_logo_black.webp";

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

  const isDropdownOpen = useSelector((state) => state.dropdown.isOpen);
  function dropdownOpen() {
    dispatch(openDropdown());
  }
  function dropdownClose() {
    dispatch(closeDropdown());
  }

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar sticky="" key={expand} bg="white" expand={expand} className="navbar">
          <Container fluid>
            <NavLink className="navbar-brand" to="/home">
              <img src={BRA_logo_black} alt="Logo" style={{ maxWidth: "90px" }} />
            </NavLink>

            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="collapse-button"
              style={{ color: "transparent" }}
              onClick={() => dropdownOpen()}
            />

            <Navbar.Offcanvas
              show={isDropdownOpen}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              onHide={() => dropdownClose()}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <NavLink to="/home" onClick={() => dropdownClose()}>
                    <img src={BRA_logo_black} alt="Logo" style={{ maxWidth: "90px" }} />
                  </NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <Nav className="justify-content-start flex-grow-1">
                  <NavLink to="/styles " className="nav-link ms-4" onClick={() => dropdownClose()}>
                    BEER
                  </NavLink>
                  <NavLink
                    to="/about-this-project"
                    className="nav-link ms-4"
                    onClick={() => dropdownClose()}
                  >
                    ABOUT THIS PROJECT
                  </NavLink>
                  {loggedUser === undefined ? (
                    <div className="login-container">
                      <NavLink
                        to="/login"
                        className="nav-link mb-3 ms-4"
                        onClick={() => dropdownClose()}
                      >
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
                    </div>
                  ) : (
                    <div className="navbar-user-buttons-container">
                      <NavLink
                        to="/your-profile"
                        className="nav-link mb-3 ms-4"
                        onClick={() => dropdownClose()}
                      >
                        <i class="fas fa-user me-3"></i>
                        {`${loggedUser.firstname} ${loggedUser.lastname}`}
                      </NavLink>
                      <NavLink
                        to="/orders"
                        className="nav-link mb-3 ms-4"
                        onClick={() => dropdownClose()}
                      >
                        <i class="fas fa-history me-3"></i>
                        Your Orders
                      </NavLink>
                      <NavLink
                        to="/home"
                        className="nav-link mb-3 ms-4"
                        onClick={() => dispatch(logOut()) && dropdownClose()}
                      >
                        <i class="fas fa-sign-out-alt me-3"></i>
                        Log out
                      </NavLink>
                    </div>
                  )}
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
                    <NavDropdown.Item href="/your-profile">Your Profile</NavDropdown.Item>
                    <NavDropdown.Item href="/orders">Your Orders</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => dispatch(logOut())}>
                      <NavLink to="/home" className="text-decoration-none text-white">
                        Log out
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </div>
              <div className="nav-icons">
                <span onClick={handleOpen}>
                  <svg
                    className="icon icon-cart"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
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
            <Cart />
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarBeer;
