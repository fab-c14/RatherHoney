import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Navbar, Nav, Container, Button, Form, FormControl } from "react-bootstrap";

import honeyGif from "../../assets/image/honey.gif";
import cartImg1 from "../../assets/image/cart-img-1.png";
import cartImg2 from "../../assets/image/cart-img-2.png";
import cartImg3 from "../../assets/image/cart-img-3.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <Navbar expand="lg" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Container className="text-center">
        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <img src={honeyGif} width="40" height="40" alt="logo" />
          <span className="text-2xl font-semibold text-gray-900">Rather Honey</span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0 focus:outline-none"
          onClick={toggleNavbar}
        >
          <FaBars className="text-2xl text-gray-900" />
        </Navbar.Toggle>

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav" className={`${showNavbar ? "block" : "hidden"} lg:flex`}>
          <Nav className="mx-auto flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
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
          <div className="flex gap-4 items-center relativ align-items-center justify-content-center">
            <DropdownIcon>
              <FaSearch />
            </DropdownIcon>
            <DropdownIcon>
              <FaShoppingCart />
            </DropdownIcon>
            <DropdownIcon>
              <FaUser />
            </DropdownIcon>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Dropdown Icon Component
const DropdownIcon = ({ children }) => (
  <div className="text-2xl text-gray-900 cursor-pointer hover:text-orange-500 transition duration-300">
    {children}
  </div>
);


const DropdownWrapper = ({ children, position }) => (
  <div
    className={`absolute top-[110%] ${position} bg-white p-5 rounded-lg shadow-lg transition-all duration-300 ease-in-out z-50`}
  >
    {children}
  </div>
);

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
