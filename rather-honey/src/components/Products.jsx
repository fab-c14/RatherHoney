import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import images
import product1 from "../assets/image/product-1.png";
import product2 from "../assets/image/product-2.png";
import product3 from "../assets/image/product-3.png";
import product4 from "../assets/image/product-4.png";
import product5 from "../assets/image/product-5.png";
import product6 from "../assets/image/product-6.png";
import product7 from "../assets/image/product-7.png";
import product8 from "../assets/image/product-8.png";

const ProductsSection = () => {
  const products = [
    { img: product1, name: "Fresh Orange", price: "$4.99/- - 10.99/-" },
    { img: product2, name: "Fresh Onion", price: "$4.99/- - 10.99/-" },
    { img: product3, name: "Fresh Meat", price: "$4.99/- - 10.99/-" },
    { img: product4, name: "Fresh Cabbage", price: "$4.99/- - 10.99/-" },
    { img: product5, name: "Fresh Potato", price: "$4.99/- - 10.99/-" },
    { img: product6, name: "Fresh Avocado", price: "$4.99/- - 10.99/-" },
    { img: product7, name: "Fresh Carrot", price: "$4.99/- - 10.99/-" },
    { img: product8, name: "Green Lemon", price: "$4.99/- - 10.99/-" },
  ];

  return (
    <section className="products" id="products">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Our <span className="text-orange-500">Products</span>
        </h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="product-slider"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} className="swiper-slide box">
              <Card className="shadow-lg hover:shadow-2xl transition duration-300">
                <Card.Img
                  variant="top"
                  src={product.img}
                  alt={product.name}
                  className="rounded-t-lg"
                />
                <Card.Body className="text-center">
                  <Card.Title className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </Card.Title>
                  <Card.Text className="price text-gray-700 mb-3">
                    {product.price}
                  </Card.Text>
                  <div className="stars text-yellow-500 mb-3">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <Button
                    href="#"
                    className="btn bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ProductsSection;
