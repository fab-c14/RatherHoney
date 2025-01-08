import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images
import cat1 from "../assets/image/cat-1.png";
import cat2 from "../assets/image/cat-2.png";
import cat3 from "../assets/image/cat-3.png";
import cat4 from "../assets/image/cat-4.png";

const CategoriesSection = () => {
  const categories = [
    { img: cat1, name: "Vegetables", discount: "Upto 45% Off" },
    { img: cat2, name: "Fresh Fruits", discount: "Upto 45% Off" },
    { img: cat3, name: "Dairy Products", discount: "Upto 45% Off" },
    { img: cat4, name: "Fresh Meat", discount: "Upto 45% Off" },
  ];

  return (
    <section className="categories" id="categories">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Product <span className="text-orange-500">Categories</span>
        </h1>
        <Row className="box-container justify-content-center">
          {categories.map((category, index) => (
            <Col
              key={index}
              md={6}
              lg={3}
              className="mb-4 flex justify-center items-center"
            >
              <Card className="shadow-lg hover:shadow-2xl transition duration-300">
                <Card.Img
                  variant="top"
                  src={category.img}
                  alt={category.name}
                  className="rounded-t-lg"
                />
                <Card.Body className="text-center">
                  <Card.Title className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </Card.Title>
                  <Card.Text className="text-gray-600 mb-3">
                    {category.discount}
                  </Card.Text>
                  <Button
                    href="#"
                    className="btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                  >
                    Shop Now
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

export default CategoriesSection;
