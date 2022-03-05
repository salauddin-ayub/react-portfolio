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


const data =[
    {
        avatar:frnd1,
        name: 'Anisur Rahman',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur veritatis hic dolorem inventore sequi cumque dignissimos praesentium mollitia distinctio!'

    },
    {
        avatar:frnd2,
        name: 'Johirul Islam',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur veritatis hic dolorem inventore sequi cumque dignissimos praesentium mollitia distinctio!'

    },
    {
        avatar:frnd3,
        name: 'Jahid Hasan',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aspernatur veritatis hic dolorem inventore sequi cumque dignissimos praesentium mollitia distinctio!'

    },
]

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