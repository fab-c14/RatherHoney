import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./Reviews.css"; 

// Import images
import pic1 from "../../assets/image/pic-1.png";
import pic2 from "../../assets/image/pic-2.png";
import pic3 from "../../assets/image/pic-3.png";
import pic4 from "../../assets/image/pic-4.png";

const ReviewSection = () => {
  const reviews = [
    {
      img: pic1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "John Deo",
      stars: 4.5,
    },
    {
      img: pic2,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "Jane Doe",
      stars: 4.0,
    },
    {
      img: pic3,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "Robert Smith",
      stars: 5.0,
    },
    {
      img: pic4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "Emily Johnson",
      stars: 4.5,
    },
  ];

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStars = stars - fullStars > 0 ? 1 : 0;

    return (
      <div className="flex justify-center">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i key={`full-${index}`} className="fas fa-star text-orange-500"></i>
          ))}
        {halfStars === 1 && (
          <i className="fas fa-star-half-alt text-orange-500"></i>
        )}
      </div>
    );
  };

  return (
    <section className="review-section py-12 bg-gray-100" id="review">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Customer's <span className="text-orange-500">Review</span>
        </h1>
        <Carousel className="review-slider" indicators={false} interval={3000}>
          {reviews.map((review, index) => (
            <Carousel.Item key={index} className="text-center">
              <div className="review-card relative p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <img
                  src={review.img}
                  alt={review.name}
                  className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-orange-500"
                />
                <p className="text-gray-600 italic mb-3">{review.text}</p>
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <div className="stars">{renderStars(review.stars)}</div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ReviewSection;
