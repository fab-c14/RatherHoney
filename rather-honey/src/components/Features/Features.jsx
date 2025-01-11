import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images
import featureImg1 from "../../assets/image/feature-img-1.png";
import featureImg2 from "../../assets/image/feature-img-2.png";
import featureImg3 from "../../assets/image/feature-img-3.png";
import './Features.css';

const FeaturesSection = () => {
  const features = [
    {
      img: featureImg1,
      title: "Fresh and Organic",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!",
    },
    {
      img: featureImg2,
      title: "Free Delivery",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!",
    },
    {
      img: featureImg3,
      title: "Easy Payments",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, earum!",
    },
  ];

  return (
    <section className="features-section py-5 bg-light" id="features">
      <Container>
        {/* Heading with Badge Background */}
        <div className="text-center mb-10 relative">
          <div className="badge-background absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3"></div>
          <h1 className="text-4xl font-bold relative z-10">
            Our <span className="text-orange-500">Features</span>
          </h1>
        </div>
        {/* Features Grid */}
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="feature-card shadow-lg border-0">
                <Card.Img variant="top" src={feature.img} alt={feature.title} className="card-image" />
                <Card.Body className="text-center space-y-3">
                  <Card.Title className="text-xl font-semibold text-gray-900">{feature.title}</Card.Title>
                  <Card.Text className="text-gray-700">{feature.description}</Card.Text>
                  <Button
                    href="#"
                    className="btn feature-btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
