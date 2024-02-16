import { Container, Col, Row } from 'react-bootstrap';
import './Header.css';
import {  FaFacebookF,FaTwitter,FaGooglePlusG,FaLinkedinIn,FaBehance} from "react-icons/fa";
function Portfolio() {
    return (
        <div>
            <div className='foot_1 text-white text-center py-5'>
                <Container>
                    <Row>
                        <div className='d-flex'>
                            <Col><FaFacebookF className='my-3 mx-3 f_1'></FaFacebookF>
                            <FaTwitter className='my-3 mx-3 f_1'></FaTwitter>
                            <FaGooglePlusG className='my-3 mx-3 f_1'></FaGooglePlusG>
                           <FaLinkedinIn className='my-3 mx-3 f_1'></FaLinkedinIn>
                            <FaBehance className='my-3 mx-3 f_1'></FaBehance></Col>
                        </div>
                        <p className='py-3 fs-5'>All Right Reserved © 2021<span> HasnaaDesign</span></p>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Portfolio;