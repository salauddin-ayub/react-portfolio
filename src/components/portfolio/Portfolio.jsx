import React from 'react';
import './Portfolio.css';
import dhopa from '../../assets/Smart_Dhopa.png';
import ornament from '../../assets/ornament.PNG';
import hospital from '../../assets/hospital.PNG';

import port from '../../assets/port.PNG';


const data = [
    {
        id: 1,
        image: ornament,
        title: 'Ornament Gallery',
        github:'https://github.com',
        demo:'http://ornamentgallery.herokuapp.com/'
    },
    {
        id: 2,
        image: hospital,
        title: 'Hospital Apothecary',
        github:'https://github.com',
        demo:'http://hospital-apothecary.herokuapp.com/'
    },
    {
        id: 3,
        image: port,
        title: 'Django Portfolio',
        github:'https://github.com',
        demo:'http://salauddinayub-portfolio.herokuapp.com/'
    },
    {
        id: 4,
        image: dhopa,
        title: 'Smart Dhopa',
        github:'https://github.com',
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