import './Header.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Resume1 from './Resume1.js';
import Skill from './Skill.js';
function Resume() {
    return (
        <section>
            <div>
                <Header></Header>
                <Resume1></Resume1>
                <Skill></Skill>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default Resume;
