import React from 'react';
import './Services.css';
import {BsFillBagCheckFill} from 'react-icons/bs';

const Services = () => {
    return (
        <section id="service">
            <h5>Services we provide</h5>
            <h2>Service</h2>

            <div className="container services__container">
                <article className="container ">
                    <div className="service">
                        <div className="service__head">
                            <h3>Frontend Design</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Python  ipsum dolor sit amet consectetur adi</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>  ipsum dolor sit amet consectetur adi Django</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, culpa.Javascript</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ea officiis.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae clarum tiste.</p>
                            </li>
                        </ul>

                    </div>

                </article>
                <article className="container ">
                    <div className="service">
                        <div className="service__head">
                            <h3>UI design</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusano illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae clri earo illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae  earum tio illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recus earum tio illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae clri earum tiste.</p>
                            </li>
                        </ul>

                    </div>

                </article>
                <article className="container ">
                    <div className="service">
                        <div className="service__head">
                            <h3>Web Development</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusano illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae clri earo illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae  earum tio illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recus earum tio illum iste.</p>
                            </li>
                            <li>
                            <BsFillBagCheckFill className="service__list-icon"/>
                            <p>Lorem ipsum Quam alias, cupiditate atque recusandae clri earum tiste.</p>
                            </li>
                        </ul>

                    </div>

                </article>
            </div>

        </section>
    );
};

export default Services;