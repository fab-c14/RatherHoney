import React from "react";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


// Import images
import product1 from "../../assets/image/product-1.png";
import product2 from "../../assets/image/product-2.png";
import product3 from "../../assets/image/product-3.png";
import product4 from "../../assets/image/product-4.png";
import product5 from "../../assets/image/product-5.png";
import product6 from "../../assets/image/product-6.png";
import product7 from "../../assets/image/product-7.png";
import product8 from "../../assets/image/product-8.png";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsChevronDoubleRight, BsChevronDoubleLeft} from "react-icons/bs";

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
    <section className="products py-5 bg-light" id="products">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Our <span className="text-orange-500">Products</span>
        </h1>
        <div className="relative">
          {/* Swiper Slider */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            className="product-slider"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="swiper-slide bg-light">
                <Card className="product-card bg-light m-3 ring-2 ring-outline ring-green-400">
                  <div className="card-inner-border relative">
                    <Card.Img
                      variant="top"
                      src={product.img}
                      alt={product.name}
                      className="rounded-t-lg"
                    />
                    <Card.Body className="text-center flex flex-col justify-between space-y-3">
                      <Card.Title className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="price text-gray-700">
                        {product.price}
                      </Card.Text>
                      <div className="stars text-yellow-500 flex justify-center space-x-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                      <button
                        className="text-black ring-2 ring-yellow-400 px-4 py-2 mt-2 font-bold rounded hover:bg-orange-600 transition duration-300 hover:translate-x-1 hover:translate-y-1"
                      >
                        Add to Cart
                      </button>
                    </Card.Body>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev absolute ">
            <BsChevronDoubleLeft/>
          </div>
          <div className="swiper-button-next absolute ">
           <BsChevronDoubleRight />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductsSection;
