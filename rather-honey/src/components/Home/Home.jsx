import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const HomeSection = () => {
  return (
    <section className="home-section bg-light py-5" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={12} lg={6} className="mx-auto text-center">
            <div className="content space-y-4">
              <h3 className="text-4xl font-semibold text-gray-900 leading-snug">
                Fresh and <span className="text-orange-500">organic</span> products for your
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero nostrum
                veniam facere tempore nisi.
              </p>
              <Button
                href="#"
                className="btn shop-now-btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
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
