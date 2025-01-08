import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images
import featureImg1 from "../assets/image/feature-img-1.png";
import featureImg2 from "../assets/image/feature-img-2.png";
import featureImg3 from "../assets/image/feature-img-3.png";

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
    <section className="features" id="features">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Our <span className="text-orange-500">Features</span>
        </h1>
        <Row className="box-container">
          {features.map((feature, index) => (
            <Col md={12} lg={4} key={index} className="mb-5">
              <Card className="box shadow-lg border-0 hover:shadow-2xl transition duration-300">
                <Card.Img variant="top" src={feature.img} alt={feature.title} className="rounded-t-lg" />
                <Card.Body className="text-center">
                  <Card.Title className="text-xl font-semibold text-gray-900">{feature.title}</Card.Title>
                  <Card.Text className="text-gray-700">{feature.description}</Card.Text>
                  <Button
                    href="#"
                    className="btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
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
