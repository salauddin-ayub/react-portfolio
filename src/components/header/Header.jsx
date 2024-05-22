import React from 'react';
import './Header.css';
import CTA from './CTA';
import ayub from '../../assets/ayub.png';
import  HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1 className="text-pink-500">Md Ayub Ali</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                < HeaderSocials />

                <div className="me">
                    <img src={ayub} alt="ayub" />

                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;