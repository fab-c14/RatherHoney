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
              <Button
                href="#"
                className="shop-now-btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
              >
                Shop Now
              </Button>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
