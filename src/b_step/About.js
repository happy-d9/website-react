import './Header.css';
import {FaAngleDoubleRight } from 'react-icons/fa';
import React from 'react';
import About1 from './About1.js';
import Skill from './Skill.js';
import Service from './Services.js';
import Resume from './Resume.js';
import Fun from './Fun.js';
import Footer from './Footer.js';
import Header from './Header.js';
function About() {
    return (
        <section>
            <div>
            <Header></Header>
                <div className='sa_1 text-center text-white'>
                    <h3>ABOUT</h3>
                    <p className='py-4'><span>Mirya</span> <FaAngleDoubleRight></FaAngleDoubleRight> About</p>
                </div>
                <About1></About1>
                <Skill></Skill>
                <Service></Service>
                <Resume></Resume>
                <Fun></Fun>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default About;
