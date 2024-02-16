import { Container, Col, Row } from 'react-bootstrap';
import './Header.css';
function Portfolio1() {
    return (
        <div>
            <div className='port_1 text-white text-center py-5'>
                <Container>
                    <h1 className='py-5'>PORTFOLIO</h1>
                    <Row className="justify-content-md-center my-4 port_2">
                        <Col sm md={6} lg={4} className='order-1 my-4 port_i1'><img src={require('../image/assets (1)/asset 2.jpeg')} style={{height:'350px'}}></img></Col>
                        <Col sm md={6} lg={4} className='order-2 my-4 port_i1'><img src={require('../image/assets (1)/asset 3.jpeg')} style={{height:'350px'}}></img></Col>
                        <Col sm md={6} lg={4} className='order-3 my-4 port_i1'><img src={require('../image/assets (1)/asset 4.jpeg')} style={{height:'350px'}}></img></Col>
                        <Col sm md={6} lg={4} className='order-4 my-4 port_i1'><img src={require('../image/assets (1)/asset 5.jpeg')} style={{height:'350px'}}></img></Col>
                        <Col sm md={6} lg={4} className='order-5 my-4 port_i1'><img src={require('../image/assets (1)/asset 6.jpeg')} style={{height:'350px'}}></img></Col>
                        <Col sm md={6} lg={4} className='order-6 my-4 port_i1'><img src={require('../image/assets (1)/asset 1.jpeg')} style={{height:'350px'}}></img></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Portfolio1;