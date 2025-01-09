import React from "react";
import { Container, Carousel } from "react-bootstrap";

// Import images
import pic1 from "../assets/image/pic-1.png";
import pic2 from "../assets/image/pic-2.png";
import pic3 from "../assets/image/pic-3.png";
import pic4 from "../assets/image/pic-4.png";

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
      name: "John Deo",
      stars: 4.5,
    },
    {
      img: pic3,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "John Deo",
      stars: 4.5,
    },
    {
      img: pic4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde sunt fugiat dolore ipsum id est maxime ad tempore quasi tenetur.",
      name: "John Deo",
      stars: 4.5,
    },
  ];

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStars = stars - fullStars > 0 ? 1 : 0;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <i key={`full-${index}`} className="fas fa-star text-orange-500"></i>
          ))}
        {halfStars === 1 && (
          <i className="fas fa-star-half-alt text-orange-500"></i>
        )}
      </>
    );
  };

  return (
    <section className="review" id="review">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Customer's <span className="text-orange-500">Review</span>
        </h1>
        <Carousel className="review-slider">
          {reviews.map((review, index) => (
            <Carousel.Item key={index} className="text-center">
              <img
                src={review.img}
                alt={review.name}
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-3">{review.text}</p>
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <div className="stars text-orange-500">
                {renderStars(review.stars)}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default ReviewSection;
