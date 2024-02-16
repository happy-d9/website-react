import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import React from 'react';
function About1() {
    return (
        <section>
            <div style={{ position: 'relative' }} class='about'>
                {/* <div class='img2' style={{ position: 'absolute', bottom: '-10px' }}> */}
                <h1 class='text-center'>About Me</h1>
                <Container>
                    <Row>
                <div class='about_1 d-flex flex-wrap'>
                    <Col sm={12} md={12} lg={6}>
                        <div class="img3 my-5 order-1"></div></Col>
                      <Col sm={12} md={12} lg={6}> <div class='about_2 order-2'>
                            <h4>I'm Mirya Doe</h4>
                            <h3>I'm Creative Ui/Ux Designer And Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p class='abt_1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class='about_3 text-white'>
                                <Row className='row p-3'>
                                    <ul className='d-flex abt'>
                                        <li class='col-6'><span style={{marginLeft:'10px'}}>Full Name:</span> Mirya Doe</li>
                                        <li class='col-6 abt'><span style={{marginLeft:'19px'}}>Birthday:</span> 20 March 1995</li>
                                    </ul>
                                    <ul className='d-flex abt'>
                                        <li class='col-6'><span style={{marginLeft:'10px'}}>Address:</span> New York,USA</li>
                                        <li class='col-6 abt'><span style={{marginLeft:'19px'}}>Email:</span> Support@example.com</li>
                                    </ul>
                                    <ul className='d-flex abt'>
                                        <li class='col-6'><span style={{marginLeft:'10px'}}>Phone:</span> (324) 154-7418</li>
                                        <li class='col-6 abt'><span style={{marginLeft:'19px'}}>Nationality:</span> American</li>
                                    </ul>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    </div>                   
                    </Row>
                </Container>
            </div>
        </section>
    );
}
export default About1;
