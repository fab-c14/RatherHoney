import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";


import honeyGif from "../assets/image/honey.gif";
import cartImg1 from "../assets/image/cart-img-1.png";
import cartImg2 from "../assets/image/cart-img-2.png";
import cartImg3 from "../assets/image/cart-img-3.png";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState("");

  useEffect(() => {
    const handleScroll = () => setActiveDropdown("");
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? "" : dropdown));
  };

  return (
    <Navbar expand="lg" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center space-x-2">
          <img src={honeyGif} width="40" height="40" alt="logo" />
          <span className="text-2xl font-semibold text-gray-900">Rather Honey</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav">
          <FaBars className="text-2xl text-gray-900" onClick={() => toggleDropdown("navbar")} />
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav" className={`justify-between ${activeDropdown === "navbar" ? "block" : "hidden"} lg:flex`}>
          <Nav className="mx-auto flex gap-6 lg:gap-8">
            {["Home", "Features", "Products", "Categories", "Review", "Blogs"].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-gray-900 hover:text-orange-500 transition duration-300"
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>

          {/* Icons */}
          <div className="flex gap-4 items-center relative">
            <DropdownIcon
              isActive={activeDropdown === "search"}
              onClick={() => toggleDropdown("search")}
            >
              <FaSearch />
            </DropdownIcon>
            <DropdownIcon
              isActive={activeDropdown === "cart"}
              onClick={() => toggleDropdown("cart")}
            >
              <FaShoppingCart />
            </DropdownIcon>
            <DropdownIcon
              isActive={activeDropdown === "login"}
              onClick={() => toggleDropdown("login")}
            >
              <FaUser />
            </DropdownIcon>
          </div>
        </Navbar.Collapse>

        {/* Dropdowns */}
        {activeDropdown === "search" && (
          <DropdownWrapper position="right-0">
            <Form className="flex items-center">
              <FormControl
                type="search"
                placeholder="Search here..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <Button className="ml-2 bg-orange-500 text-white py-2 px-4 rounded-lg">Go</Button>
            </Form>
          </DropdownWrapper>
        )}

        {activeDropdown === "cart" && (
          <DropdownWrapper position="right-0">
            {[cartImg1, cartImg2, cartImg3].map((img, index) => (
              <CartItem key={index} img={img} />
            ))}
            <div className="text-lg font-semibold mt-4">Total: $19.69/-</div>
            <a href="#" className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg">
              Checkout
            </a>
          </DropdownWrapper>
        )}

        {activeDropdown === "login" && (
          <DropdownWrapper position="right-0">
            <h3 className="text-xl font-bold mb-4">Login Now</h3>
            <Form className="flex flex-col">
              <FormControl
                type="email"
                placeholder="Your Email"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <FormControl
                type="password"
                placeholder="Your Password"
                className="p-2 mb-4 border border-gray-300 rounded-lg"
              />
              <Button className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full">Login Now</Button>
            </Form>
          </DropdownWrapper>
        )}
      </Container>
    </Navbar>
  );
};

// Dropdown Icon Component
const DropdownIcon = ({ children, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`text-2xl cursor-pointer ${isActive ? "text-orange-500" : "text-gray-900"} hover:text-orange-500 transition duration-300`}
  >
    {children}
  </div>
);

// Dropdown Wrapper Component
const DropdownWrapper = ({ children, position }) => (
  <div
    className={`absolute top-[110%] ${position} bg-white p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50`}
  >
    {children}
  </div>
);

// Cart Item Component
const CartItem = ({ img }) => (
  <div className="flex items-center justify-between mb-4">
    <i className="fas fa-trash text-xl cursor-pointer text-red-500"></i>
    <img src={img} alt="cart-item" className="w-16 h-16" />
    <div className="flex-1 pl-4">
      <h3 className="text-lg font-semibold">Item Name</h3>
      <span className="text-sm text-gray-600">Qty: 1</span>
      <p className="text-sm text-gray-800">$4.99/-</p>
    </div>
  </div>
);

export default Header;
