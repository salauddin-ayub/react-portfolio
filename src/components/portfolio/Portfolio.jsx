import React from 'react';
import './Portfolio.css';
import dhopa from '../../assets/Smart_Dhopa.png';
import blood from '../../assets/blood.jpeg';
import medico from '../../assets/medico.jpeg';

import foodie from '../../assets/foodie.jpeg';


const data = [
    {
        id: 1,
        image: blood,
        title: 'Blood Donation',
        github:'https://github.com/salauddin-ayub/Blood_Donation.git',
        demo:'https://bdblooddonation.netlify.app/'
    },
    {
        id: 2,
        image: medico,
        title: 'Medico',
        github:'https://github.com/salauddin-ayub/Medico.git',
        demo:'https://medico-eb8e9.web.app/'
    },
    {
        id: 3,
        image: foodie,
        title: 'Foodie Zone',
        github:'https://github.com/salauddin-ayub/Foodizone.git',
        demo:'https://foodie-zone-6a14d.web.app/'
    },
    {
        id: 4,
        image: dhopa,
        title: 'Smart Dhopa',
        github:'https://github.com/PriontoAbdullah/Smart-Dhopa-React-App.git',
        demo:'https://smart-dhopa-online-laundry-app.web.app/'
    },
]

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) =>{
                        return (
                         <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                               <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank'>Github</a>
                            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                           </div>
                         </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;