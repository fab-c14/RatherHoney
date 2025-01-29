import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Import images
import cat1 from "../../assets/image/cat-1.png";
import cat2 from "../../assets/image/cat-2.png";
import cat3 from "../../assets/image/cat-3.png";
import cat4 from "../../assets/image/cat-4.png";
import "./Categories.css";

const CategoriesSection = () => {
  const categories = [
    { img: cat1, name: "Vegetables", discount: "Upto 45% Off" },
    { img: cat2, name: "Fresh Fruits", discount: "Upto 45% Off" },
    { img: cat3, name: "Dairy Products", discount: "Upto 45% Off" },
    { img: cat4, name: "Fresh Meat", discount: "Upto 45% Off" },
  ];

  return (
    <section className="categories py-5 bg-light" id="categories">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Product <span className="text-orange-500">Categories</span>
        </h1>
        <Row className="box-container justify-content-center">
          {categories.map((category, index) => (
            <Col key={index} md={6} lg={3} className="mb-4 flex justify-center">
              <Card className="category-card shadow-lg h-full border-0 transition duration-300 hover:shadow-xl">
                <div className="card-inner-border p-3 rounded-lg">
                  <Card.Img
                    variant="top"
                    src={category.img}
                    alt={category.name}
                    className="rounded-t-lg"
                  />
                  <Card.Body className="text-center flex flex-col justify-between space-y-2">
                    <Card.Title className="text-lg font-semibold text-gray-900">
                      {category.name}
                    </Card.Title>
                    <Card.Text className="text-gray-600 text-sm">
                      {category.discount}
                    </Card.Text>
                    <button
                      href="#"
                      className="px-3 py-2 text-sm bg-orange-500 text-white font-medium rounded-md hover:bg-orange-800 transition duration-300 "
                    >
                      Shop Now
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

export default CategoriesSection;
