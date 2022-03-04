import React from 'react';
import './About.css';
import ayub from '../../assets/ayub.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ayub} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years working</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ completed</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Contribute</h5>
                            <small>2+ projects</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit dolor sed vel eos aut voluptates illum, ipsam minima architecto a.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestias enim dolorem nostrum, odio nobis quam aliquid? Consequatur, eum sapiente corrupti quae dolorem cumque. Assumenda unde laudantium minus aspernatur aliquam.       
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's a talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;