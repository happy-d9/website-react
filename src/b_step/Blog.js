import './Header.css';
import React from 'react';
import Footer from './Footer.js';
import Header from './Header.js';
import Blog1 from './Blog1.js';
function Blog() {
    return (
        <section>
            <div>
                <Header></Header>
                <Blog1></Blog1>
                <Footer></Footer>
            </div>
        </section>
    );
}
export default Blog;
