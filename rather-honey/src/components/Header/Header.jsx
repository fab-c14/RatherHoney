import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { Navbar, Nav, Container } from "react-bootstrap";

import honeyGif from "../../assets/image/honey.gif";
import cartImg1 from "../../assets/image/cart-img-1.png";
import cartImg2 from "../../assets/image/cart-img-2.png";
import cartImg3 from "../../assets/image/cart-img-3.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((prev) => !prev);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setShowCart(false);
    setShowUserDropdown(false);
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
    setShowSearch(false);
    setShowUserDropdown(false);
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
    setShowSearch(false);
    setShowCart(false);
  };

  return (
    <Navbar expand="lg" className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <Container>
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
                className="text-lg text-gray-900  transition b hover:text-orange-500 "
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>

          {/* Icons */}
          <div className="flex gap-4 items-center relative">
            <DropdownIcon onClick={toggleSearch}>
              <FaSearch />
            </DropdownIcon>
            <DropdownIcon onClick={toggleCart}>
              <FaShoppingCart />
            </DropdownIcon>
            <DropdownIcon onClick={toggleUserDropdown}>
              <FaUser />
            </DropdownIcon>
          </div>
        </Navbar.Collapse>

        {/* Dropdowns */}
        {showSearch && (
          <DropdownWrapper position="left-0">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Search
              </button>
            </form>
          </DropdownWrapper>
        )}

        {showCart && (
          <DropdownWrapper position="right-0">
            <h3 className="font-bold text-lg mb-4">Shopping Cart</h3>
            <CartItem img={cartImg1} />
            <CartItem img={cartImg2} />
            <CartItem img={cartImg3} />
            <button className="w-full bg-orange-500 text-white py-2 mt-4 rounded hover:bg-orange-600">
              Checkout
            </button>
          </DropdownWrapper>
        )}

        {showUserDropdown && (
          <DropdownWrapper position="right-0">
            <h3 className="font-bold text-lg mb-4">User Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-900 hover:text-orange-500">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-orange-500">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-orange-500">
                  Logout
                </a>
              </li>
            </ul>
          </DropdownWrapper>
        )}
      </Container>
    </Navbar>
  );
};

// Dropdown Icon Component
const DropdownIcon = ({ children, onClick }) => (
  <div
    onClick={onClick}
    className="text-2xl text-gray-900 cursor-pointer hover:text-orange-500 transition duration-300"
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
