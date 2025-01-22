import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css"; // Minimal external CSS for background or specific effects

const HomeSection = () => {
  return (
    <section className="home-section bg-light py-5" id="home">
      <Container>
        <Row className="align-items-center">
        
          <Col md={12} lg={12} className="mx-auto text-center lg:text-left">
            <div className="content space-y-4">
            
              <h3 className="text-4xl font-semibold text-gray-900 leading-snug text-yellow-500">
                Fresh and <span className="text-orange-500">organic</span> products for your
              </h3>
             
              <p className="text-white text-lg leading-relaxed white">
                Discover the finest selection of 100% natural and raw ingredients to bring you health and happiness.
              </p>
              {/* Button */}
              <button
                href="#"
                className="shop-now-btn ring-4 ring-yellow-200 text-white py-2 px-4 rounded-lg hover:ring-white hover:bg-orange-500 transition duration-300 b"
              >
                Shop Now
              </button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
