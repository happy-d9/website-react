import './Header.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Portfolio1 from './Portfolio1.js';
function Portfolio() {
    return (
        <section>
            <div>
                <Header></Header>
                <Portfolio1></Portfolio1>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default Portfolio;
