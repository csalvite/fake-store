import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './SectionTestimonials.css';

export const SectionTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nombre del Cliente 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/resources/images/users/cliente1.jpg',
    },
    {
      id: 2,
      name: 'Nombre del Cliente 2',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: '/resources/images/users/cliente2.jpg',
    },
    {
      id: 3,
      name: 'Nombre del Cliente 3',
      text: 'Sed auctor ligula a odio venenatis tristique.',
      image: '/resources/images/users/cliente3.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='section-testimonials'>
      <h2>Testimonials</h2>
      <h3>What's Our Client Say</h3>
      <Slider {...settings} className='slider-testimonials'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h4>{testimonial.name}</h4>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
