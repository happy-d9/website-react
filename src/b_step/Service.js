import './Header.css';
import React from 'react';
import Services from './Services.js';
import Fun from './Fun.js';
import Footer from './Footer.js';
import Header from './Header';
function Service() {
    return (
        <section>
            <div>
                <Header></Header>
                <Services></Services>
                <Fun></Fun>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default Service;
