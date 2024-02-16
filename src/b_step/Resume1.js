import { Container, Card, Button } from 'react-bootstrap';
import './Header.css';
import {FaGraduationCap ,FaSuitcase} from 'react-icons/fa';
function Resume1() {
  return (
    <div className='res_1 py-5 text-white'>
      <h1 className='text-center'>Resume</h1>
      <Container>
        <div className='d-flex flex-wrap'>
          <div className='col-lg-6 col-sm-12 order-1'>
            <h3><FaGraduationCap style={{fontSize:"50px",paddingRight:'10px',color:'#cf9c63'}}></FaGraduationCap>  Education</h3>
           <div className='my-5 mx-5'>
              <Button className='btn2 my-2'>2008-2012</Button>
              <Card className='res_2'>
                <Card.Header className='head'>Bachelor-XYZ University</Card.Header>
                <Card.Body className='body'>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card></div>
            <div className='my-5 mx-5'>
              <Button className='btn2 my-2'>2012-2014</Button>
              <Card className='res_2'>
                <Card.Header className='head'>Master - XYZ University</Card.Header>
                <Card.Body className='body'>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
           </div>
       
          <div className='col-lg-6 col-sm-12 order-2 r_2'>
            <h3><FaSuitcase style={{fontSize:"50px",paddingRight:'20px',color:'#cf9c63'}}></FaSuitcase>Experience</h3>
            <div className='my-5 mx-5'>
              <Button className='btn2 my-2'>2014-2017</Button>
              <Card className='res_2'>
                <Card.Header className='head'>UX/UI Designer- Freelance</Card.Header>
                <Card.Body className='body'>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card></div>
            <div className='my-5 mx-5'>
              <Button className='btn2 my-2'>2017-Present</Button>
              <Card className='res_2'>
                <Card.Header className='head'>Front-End Developer - Freelance</Card.Header>
                <Card.Body className='body'>
                  <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <Button variant="dark" className='btn1'>Download Resume</Button>
      </Container>
    </div>
  );
}
export default Resume1;