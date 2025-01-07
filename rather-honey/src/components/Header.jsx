import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

// Import images
import honeyGif from "../assets/image/honey.gif";
import cartImg1 from "../assets/image/cart-img-1.png";
import cartImg2 from "../assets/image/cart-img-2.png";
import cartImg3 from "../assets/image/cart-img-3.png";

const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSearchActive(false);
      setCartActive(false);
      setLoginActive(false);
      setNavbarActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => {
    setNavbarActive((prev) => !prev);
    setSearchActive(false);
    setCartActive(false);
    setLoginActive(false);
  };

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
    setCartActive(false);
    setLoginActive(false);
    setNavbarActive(false);
  };

  const toggleCart = () => {
    setCartActive((prev) => !prev);
    setSearchActive(false);
    setLoginActive(false);
    setNavbarActive(false);
  };

  const toggleLogin = () => {
    setLoginActive((prev) => !prev);
    setSearchActive(false);
    setCartActive(false);
    setNavbarActive(false);
  };

  return (
    <Navbar expand="lg" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center space-x-2">
          <img src={honeyGif} width="40" height="40" alt="logo" />
          <span className="text-4xl font-semibold">Rather Honey</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleNavbar}>
          <FaBars />
        </Navbar.Toggle>

        <Navbar.Collapse id="navbar-nav" className={`${navbarActive ? "show" : ""}`}>
          <Nav className="ml-auto d-flex flex-column flex-lg-row align-items-center justify-center gap-4">
            <Nav.Link href="#home" className="text-lg text-gray-900 hover:text-orange-500">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-lg text-gray-900 hover:text-orange-500">
              Features
            </Nav.Link>
            <Nav.Link href="#products" className="text-lg text-gray-900 hover:text-orange-500">
              Products
            </Nav.Link>
            <Nav.Link href="#categories" className="text-lg text-gray-900 hover:text-orange-500">
              Categories
            </Nav.Link>
            <Nav.Link href="#review" className="text-lg text-gray-900 hover:text-orange-500">
              Review
            </Nav.Link>
            <Nav.Link href="#blogs" className="text-lg text-gray-900 hover:text-orange-500">
              Blogs
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <div onClick={toggleSearch} className="text-xl cursor-pointer">
              <FaSearch className="text-xl" />
            </div>
            <div onClick={toggleCart} className="text-xl cursor-pointer">
              <FaShoppingCart className="text-xl" />
            </div>
            <div onClick={toggleLogin} className="text-xl cursor-pointer">
              <FaUser className="text-xl" />
            </div>
          </div>
        </Navbar.Collapse>

        {/* Search Form */}
        <div
          className={`${
            searchActive ? "right-2" : "-right-[300%]"
          } absolute top-[110%] bg-white p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search here..."
              className="w-full p-3 text-lg border border-gray-300 rounded-lg"
            />
          </Form>
        </div>

        {/* Shopping Cart */}
        <div
          className={`${
            cartActive ? "right-2" : "-right-[300%]"
          } absolute top-[110%] bg-white p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
        >
          <div className="box flex items-center justify-between mb-4">
            <i className="fas fa-trash text-xl cursor-pointer"></i>
            <img src={cartImg1} alt="watermelon" className="w-16 h-16" />
            <div className="content">
              <h3>Watermelon</h3>
              <span className="price">$4.99/-</span>
              <span className="quantity">Qty: 1</span>
            </div>
          </div>
          <div className="box flex items-center justify-between mb-4">
            <i className="fas fa-trash text-xl cursor-pointer"></i>
            <img src={cartImg2} alt="onion" className="w-16 h-16" />
            <div className="content">
              <h3>Onion</h3>
              <span className="price">$4.99/-</span>
              <span className="quantity">Qty: 1</span>
            </div>
          </div>
          <div className="box flex items-center justify-between mb-4">
            <i className="fas fa-trash text-xl cursor-pointer"></i>
            <img src={cartImg3} alt="chicken" className="w-16 h-16" />
            <div className="content">
              <h3>Chicken</h3>
              <span className="price">$4.99/-</span>
              <span className="quantity">Qty: 1</span>
            </div>
          </div>
          <div className="total">Total: $19.69/-</div>
          <a href="#" className="btn text-white bg-orange-500 py-2 px-4 rounded-lg">
            Checkout
          </a>
        </div>

        {/* Login Form */}
        <div
          className={`${
            loginActive ? "right-2" : "-right-[300%]"
          } absolute top-[110%] bg-white p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out`}
        >
          <h3 className="text-xl font-bold mb-4">Login Now</h3>
          <Form className="d-flex flex-column">
            <FormControl
              type="email"
              placeholder="Your Email"
              className="box w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <FormControl
              type="password"
              placeholder="Your Password"
              className="box w-full p-3 mb-4 border border-gray-300 rounded-lg"
            />
            <p className="text-sm mb-4">
              Forgot your password? <a href="#">Click here</a>
            </p>
            <p className="text-sm mb-4">
              Don't have an account? <a href="#">Create now</a>
            </p>
            <Button
              type="submit"
              className="btn bg-orange-500 text-white py-2 px-4 rounded-lg w-full"
            >
              Login Now
            </Button>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
