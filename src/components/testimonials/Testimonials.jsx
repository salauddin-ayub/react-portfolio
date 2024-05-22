import React from 'react';
import './Testimonials.css';
import frnd1 from '../../assets/arzu.jpg';
import frnd2 from '../../assets/joy.jpg';
import frnd3 from '../../assets/siplo.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: frnd1,
        name: 'Anisur Rahman',
        review: 'The frontend design services provided were exceptional. The team delivered a visually stunning and highly responsive website that exceeded our expectations. Their attention to detail and ability to create a seamless user experience were truly impressive. I highly recommend their services for anyone looking to elevate their online presence.'
    },
    {
        avatar: frnd2,
        name: 'Johirul Islam',
        review: 'I was thoroughly impressed with the web development services we received. The team demonstrated deep technical expertise and delivered a robust, scalable, and secure web application. Their ability to understand our business requirements and translate them into a functional and efficient solution was remarkable. A fantastic experience from start to finish!'
    },
    {
        avatar: frnd3,
        name: 'Jahid Hasan',
        review: 'Working with this team on our frontend design project was an absolute pleasure. They created an engaging and interactive user interface that perfectly aligns with our brand. The collaborative approach and their commitment to quality ensured that the end product was nothing short of excellent. We are extremely satisfied with the results!'
    },
];


const Testimonials = () => {
    return (
        <section id="testimonials">
        <h5>Review from others</h5>
        <h2>testimonials</h2>
        <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
            {
                data.map(({avatar,name,review}, index) => {
                    return (
                   <SwiperSlide key={index} className="testimonial">
                       <div className="client__avatar">
                         <img src={avatar} alt="" />
                       </div>
                       <h5 classname="client__name">{name}</h5>
                       <small className='client__review'>
                       {review}
                      </small>
                   </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </section>
    );
};

export default Testimonials;