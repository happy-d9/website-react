import {Button, Col, Container, Row } from 'react-bootstrap';
import './Header.css';
function Fun() {
    return (
        <div>
            <div className='fun_1 py-5 text-white'>
                <Container>
                    <h1 className='text-center my-5'>FUN FACTS</h1>
                    <Row className='fun_2'>
                        <Col sm={12} md={6} lg={3} className='text-center'><span>554</span><h4>PROJECT DONE</h4></Col>
                        <Col sm={12} md={6} lg={3} className='text-center'><span>548</span><h4>HAPPY CLIENTS</h4></Col>
                        <Col sm={12} md={6} lg={3} className='text-center'><span>860</span><h4>HOURS OF WORK</h4></Col>
                        <Col sm={12} md={6} lg={3} className='text-center'><span>3200</span><h4>AWARDS RECEIVED</h4></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default Fun;