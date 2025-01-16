import React from "react";
import {
  FaShoppingBasket,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// Import the payment image
import paymentImg from "../../assets/image/payment.png";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Company Info */}
          <Col lg={3} md={6}>
            <h3 className="text-dark fw-bold mb-4">
              Groco{" "}
              <FaShoppingBasket className="text-warning ms-2" />
            </h3>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, saepe.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a href="#" className="text-muted fs-4 social-icon hover-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="text-muted fs-4 social-icon hover-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-muted fs-4 social-icon hover-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-muted fs-4 social-icon hover-primary">
                <FaLinkedin />
              </a>
            </div>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="text-dark fw-bold mb-4">Contact Info</h5>
            <ul className="list-unstyled text-muted">
              <li className="mb-2">
                <FaPhone className="text-warning me-2" /> +123-456-7890
              </li>
              <li className="mb-2">
                <FaPhone className="text-warning me-2" /> +111-222-3333
              </li>
              <li className="mb-2">
                <FaEnvelope className="text-warning me-2" /> faisalbhat@gmail.com
              </li>
              <li className="mb-2">
                <FaMapMarkerAlt className="text-warning me-2" /> J & K, Srinagar - 400104
              </li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="text-dark fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {["home", "features", "products", "categories", "review", "blogs"].map((link, index) => (
                <li
                  key={index}
                  className="mb-2 text-muted d-flex align-items-center gap-2 hover-link"
                >
                  <FaArrowRight className="text-warning" /> {link}
                </li>
              ))}
            </ul>
          </Col>

          {/* Newsletter */}
          <Col lg={3} md={6}>
            <h5 className="text-dark fw-bold mb-4">Newsletter</h5>
            <p className="text-muted">Subscribe for latest updates</p>
            <Form>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="rounded-pill"
                />
              </Form.Group>
              <Button
                type="submit"
                variant="warning"
                className="w-100 text-white rounded-pill"
              >
                Subscribe
              </Button>
            </Form>
            <img
              src={paymentImg}
              alt="Payment Options"
              className="img-fluid mt-4"
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center text-muted">
            Created by{" "}
            <a
              className="text-warning fw-semibold text-decoration-none"
              href="https://github.com/fab-c14"
            >
              fab-c14
            </a>{" "}
            | All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
