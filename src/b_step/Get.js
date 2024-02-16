import { Container, Col, Row, Card, Button,Form,FloatingLabel } from 'react-bootstrap';
import {FaMapMarkerAlt,FaRegEnvelope,FaPhoneAlt} from 'react-icons/fa';
import './Header.css';
// import Footer from './Footer.js';
function Get() {
    return (
        <div>
            <div className='get_1 text-white py-5'>
                <h1 className='text-center'>GET IN TOUCH</h1>
                <Container>
                    <Row>
                        <div className='get_2 d-flex flex-wrap'>
                        <Col>
                            <Card style={{ width: '20rem' }} className='get_3 order-1 col-md-12'>
                                <Card.Body>
                                    <Button>Location</Button>
                                    <span><FaMapMarkerAlt></FaMapMarkerAlt></span>
                                    <Card.Text>
                                        NewYork,USA.
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                            <Col>
                            <Card style={{ width: '20rem' }} className='get_3 order-2 col-md-12'>
                                <Card.Body>
                                    <Button>Email</Button>
                                    <span><FaRegEnvelope></FaRegEnvelope></span>
                                    <Card.Text>
                                        Support@example.com
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                            <Col>
                            <Card style={{ width: '20rem' }} className='get_3 order-3 col-md-12'>
                                <Card.Body>
                                    <Button>Phone</Button>
                                    <span><FaPhoneAlt></FaPhoneAlt></span>
                                    <Card.Text>
                                        (324) 154-7418
                                    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                        </div>
                    <div className='form'>
                        <Container>
                            <Row>
                            <div className='d-flex flex-wrap form1'>
      <FloatingLabel controlId="floatingname" label="Name" className='col-lg-5 col-md-12 f1'>
        <Form.Control type="name" placeholder="name" /><hr width="90%"></hr>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 col-lg-5  col-md-12 f2">
        <Form.Control type="email" placeholder="name@example.com" /><hr width="100%"></hr>
      </FloatingLabel>
      </div>
      <FloatingLabel controlId="floatingsubject" label="Subject" className='f3 col-lg-10'>
        <Form.Control type="subject" placeholder="subject" /><hr width='100%'></hr>
      </FloatingLabel>
      <FloatingLabel controlId="floatingmessage" label="Your message" className='f4 col-lg-10'>
        <Form.Control type="message" placeholder="Message" />
      </FloatingLabel><hr width='80%' className='col-lg-10 py-3'></hr>
      <Button className='col-lg-10 btn4'>Send Message</Button>
                            </Row>
                        </Container>
                    </div>
                    </Row>
                </Container>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
}
export default Get;