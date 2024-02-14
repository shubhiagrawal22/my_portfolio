import React, { useRef } from 'react';
import './certificate.css';
import Slider from 'react-slick';
import { CERTIFICATES } from '../../utils/data';
import CertificateCard from './CertificateCard/CertificateCard';

const Certificate = () => {

    const sliderRef = useRef();

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
    const slideRight = () => {
      sliderRef.current.slickNext();
    };
  
    const slideLeft = () => {
      sliderRef.current.slickPrev();
    };

  return (
    <section className="certificate-container">
    <h5>Certifications</h5>
    <div className="certificate-content">

      <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">
              chevron_right
          </span>
      </div>
      <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">
              chevron_left
          </span>
      </div>

      <Slider ref={sliderRef} {...settings}>
      {CERTIFICATES.map((item) => (
        <CertificateCard key={item.title} details={item} />
      ))}
      </Slider>
    </div>
  </section>
  )
}

export default Certificate