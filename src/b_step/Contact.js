import './Header.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Portfolio from './Portfolio1.js';
import Get from './Get';
function Portfolio1() {
    return (
        <section>
            <div>
                <Header></Header>
                <Get></Get>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default Portfolio1;
