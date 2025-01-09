import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaCalendar } from "react-icons/fa";

// Import blog images
import blog1 from "../assets/image/blog-1.jpg";
import blog2 from "../assets/image/blog-2.jpg";
import blog3 from "../assets/image/blog-3.jpg";

const BlogSection = () => {
  const blogs = [
    {
      img: blog1,
      author: "by user",
      date: "1st May, 2021",
      title: "Fresh and organic vegetables and fruits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.",
      link: "#",
    },
    {
      img: blog2,
      author: "by user",
      date: "1st May, 2021",
      title: "Fresh and organic vegetables and fruits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.",
      link: "#",
    },
    {
      img: blog3,
      author: "by user",
      date: "1st May, 2021",
      title: "Fresh and organic vegetables and fruits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, expedita.",
      link: "#",
    },
  ];

  return (
    <section className="blogs" id="blogs">
      <Container>
        <h1 className="heading text-center text-4xl font-bold mb-10">
          Our <span className="text-orange-500">Blogs</span>
        </h1>
        <Row className="g-4">
          {blogs.map((blog, index) => (
            <Col md={4} key={index}>
              <Card className="shadow-lg border-0">
                <Card.Img variant="top" src={blog.img} alt={blog.title} />
                <Card.Body className="p-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-2">
                      <FaUser /> {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar /> {blog.date}
                    </span>
                  </div>
                  <Card.Title className="text-lg font-semibold mb-2">
                    {blog.title}
                  </Card.Title>
                  <Card.Text className="text-gray-600">{blog.description}</Card.Text>
                  <a
                    href={blog.link}
                    className="btn text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
