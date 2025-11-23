import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Mr Innocent Kaudzu",
    role: "Statistician from University of Malawi",
    image: "/testimonial-placeholder.jpg",
    quote: "Geoffrey is an exceptional student with a strong grasp of software development principles. His dedication to the Spring Cloud Ecosystem and full-stack development is truly impressive."
  },
  {
    id: 2,
    name: "Ms Faith Chizule",
    role: "Law Enforcement Expert from University of Malawi",
    image: "/testimonial-placeholder.jpg",
    quote: "Working with Geoffrey has been a pleasure. His ability to tackle complex problems and deliver scalable solutions demonstrates maturity beyond his years."
  },
  {
    id: 3,
    name: "Mr Auspicious Makawa",
    role: "Senior Developer, Exponent Tech",
    image: "/testimonial-placeholder.jpg",
    quote: "Geoffrey's full-stack expertise and enthusiasm for learning make him a valuable asset to any development team. His code quality is consistently excellent."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-image">
                  <div className="author-placeholder">{testimonial.name.charAt(0)}</div>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
