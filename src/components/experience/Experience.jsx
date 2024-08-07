import React from 'react';
import './Experience.css';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si';
import {SiBootstrap} from 'react-icons/si';
import {SiTailwindcss} from 'react-icons/si';
import {DiReact} from 'react-icons/di';
import {DiNodejsSmall} from 'react-icons/di';
import {SiDjango} from 'react-icons/si';
import {DiMongodb} from 'react-icons/di';
import {DiMysql} from 'react-icons/di';
import {DiPython} from 'react-icons/di';
import {DiPhp} from 'react-icons/di';
const Experience = () => {
    return (
        <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className='experience__details'>
                        <AiFillHtml5 className='experience__details-icon'/>
                        <div>
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                        </div>            
                    </article>
                    <article className='experience__details'>
                        <DiCss3 className='experience__details-icon'/>
                        <div>
                        <h4>CSS</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiJavascript className='experience__details-icon'/>
                        <div>
                        <h4>JavaScript</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiBootstrap className='experience__details-icon'/>
                        <div>
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiTailwindcss className='experience__details-icon'/>
                        <div>
                        <h4>Tailwind</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <DiReact className='experience__details-icon'/>
                        <div>
                        <h4>React</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience__backend">
                <h3>Backend Development</h3>
               <div className="experience__content">
                    <article className='experience__details'>
                        <DiNodejsSmall className='experience__details-icon'/>
                        <div>
                        <h4>Node Js</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <SiDjango className='experience__details-icon'/>
                        <div>
                        <h4>Django</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <DiMongodb className='experience__details-icon'/>
                        <div>
                        <h4>MongoDB</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <DiMysql className='experience__details-icon'/>
                        <div>
                        <h4>mySQL</h4>
                        <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__details'>
                        <DiPython className='experience__details-icon'/>
                        <div>
                        <h4>Python</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    {/* <article className='experience__details'>
                        <DiPhp className='experience__details-icon'/>
                        <div>
                        <h4>PHP</h4>
                        <small className='text-light'>Intermediate</small>
                        </div>
                    </article> */}
                  </div>
              </div>
          </div>
       </section>
    );
};

export default Experience;