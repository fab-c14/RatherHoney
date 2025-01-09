import React from "react";
import { FaShoppingBasket, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

// Import the payment image
import paymentImg from "../assets/image/payment.png";

const Footer = () => {
  return (
    <footer className="footer bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="box text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Groco <FaShoppingBasket className="inline-block text-orange-500" />
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.
          </p>
          <div className="share flex justify-center lg:justify-start gap-4 text-gray-500 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="box">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="links flex items-center gap-2 text-gray-600">
              <FaPhone className="text-orange-500" /> +123-456-7890
            </li>
            <li className="links flex items-center gap-2 text-gray-600">
              <FaPhone className="text-orange-500" /> +111-222-3333
            </li>
            <li className="links flex items-center gap-2 text-gray-600">
              <FaEnvelope className="text-orange-500" /> shaikhanas@gmail.com
            </li>
            <li className="links flex items-center gap-2 text-gray-600">
              <FaMapMarkerAlt className="text-orange-500" /> Mumbai, India - 400104
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="box">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["home", "features", "products", "categories", "review", "blogs"].map((link, index) => (
              <li key={index} className="links flex items-center gap-2 text-gray-600 hover:text-orange-500">
                <FaArrowRight className="text-orange-500" /> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="box">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Subscribe for latest updates</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="email w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="submit"
              value="Subscribe"
              className="btn w-full bg-orange-500 text-white py-2 rounded cursor-pointer hover:bg-orange-600"
            />
          </form>
          <img src={paymentImg} alt="Payment Options" className="payment-img mt-4" />
        </div>
      </div>

      <div className="credit text-center text-gray-600 mt-10">
        Created by <span className="text-orange-500 font-semibold">fab-c14</span> | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
