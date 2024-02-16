import { Card, Container, Row, Col } from 'react-bootstrap';
import './Header.css';
function Service() {
  return (
    <div className='ser_1 text-white'>
      <Container>
        <h1 className='text-center py-5'>SERVICES</h1>
        <Row className='s_1'>
          <div className='d-flex flex-wrap'>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-1'>
                <Card.Body>
                  <Card.Title>Web Design<hr width='120px'></hr></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-2'>
                <Card.Body>
                  <Card.Title>Branding<hr width='95px'></hr></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-3'>
                <Card.Body>
                  <Card.Title>Web Development<hr width='180px'></hr></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-4'>
                <Card.Body>
                  <Card.Title>Graphics Design<hr width='160px'></hr></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                  </Card.Text>
                </Card.Body>
              </Card></Col>
            <Col sm={12} md={6} lg={4}> <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-5'>
              <Card.Body>
                <Card.Title>Photography<hr width='130px'></hr></Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm={12} md={6} lg={4}> 
            <Card style={{ width: '21rem' }} className='col-lg-4 ser_2 order-6'>
              <Card.Body>
                <Card.Title>Creativity<hr width='95px'></hr></Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit qua quibusdam tempora quis nostrud exercitation ul.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}
export default Service;