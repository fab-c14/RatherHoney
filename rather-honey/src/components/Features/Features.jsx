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
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="heading text-center text-4xl font-bold mb-10">
            Our <span className="text-orange-500">Features</span>
          </h1>
        </div>
        {/* Features Grid */}
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="feature-card shadow-lg flex flex-col h-full">
                <div className="card-inner-border p-4 rounded-lg flex flex-col h-full">
                  <Card.Img
                    variant="top"
                    src={feature.img}
                    alt={feature.title}
                    className="rounded-t-lg object-cover h-48"
                  />
                  <Card.Body className="flex flex-col justify-between space-y-3 flex-grow">
                    <Card.Title className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </Card.Title>
                    <Card.Text className="text-gray-700">{feature.description}</Card.Text>
                    <button
                      href="#"
                      className="ring-2 ring-red-200 p-2 text-bold hover:ring-blue-200 hover:bg-yellow-200 font-bold rounded"
                    >
                      Read More
                    </button>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
