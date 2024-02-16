import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Header.css';
function Blog1() {
    return (
        <div className='blog_1'>
            <Container>
                <h1 className='text-center text-white py-5'>MY BLOG</h1>
                <Row>
                    <div className='d-flex flex-wrap text-white blog_3 justify-content-md-center'>
                    <Col sm={12 } md={12} lg={4} class='b_1'>
                                <Card style={{ width: '21rem' ,marginBottom:'20px' ,borderColor:'#2d2a2e',position:'relative'}} class='order-1'>
                                    <img src={require("../image/assets (1)/asset 11.jpeg")}></img>
                                    <Card.Body className='blog_2'>
                                        <Card.Title><a href='' className='text-white'>WAYS TO MOTIVATE YOURSELF</a>
                                            <div className='d-flex fs-6'>
                                                <a>January 9,2021</a>
                                                <a className='mx-5 text-white'>2 Comments</a>
                                            </div>
                                        </Card.Title>
                                        <Card.Text className='my-4'>
                                            Ways To Motivate Yourself. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud …
                                        </Card.Text>
                                        <Button>READ MORE </Button>
                                        <Button className='blog_b1'>Lifestyle</Button>
                                    </Card.Body>
                                </Card>
                           </Col>
                           <Col sm={12} md={12} lg={4} class='b_1'>
                                <Card style={{ width: '21rem' ,marginBottom:'20px' ,borderColor:'#2d2a2e'}}className='order-2'>
                                    <img src={require("../image/assets (1)/asset 12.jpeg")}></img>
                                    <Card.Body className='blog_2'>
                                        <Card.Title><a href='' className='text-white'>CREATE A WORDPRESS THEME</a>
                                            <div className='d-flex fs-6'>
                                                <a>January 9,2021</a>
                                                <a className='mx-5 text-white'>2 Comments</a>
                                            </div>
                                        </Card.Title>
                                        <Card.Text className='my-4'>
                                            Create a WordPress Theme. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud …
                                        </Card.Text>
                                        <Button>READ MORE </Button>
                                        <Button className='blog_b2'>Wordpress</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={12} md={12} lg={4} class='b_1'>
                                <Card style={{ width: '21rem' ,marginBottom:'20px' ,borderColor:'#2d2a2e'}} class='order-3'>
                                    <img src={require("../image/assets (1)/asset 13.jpeg")}></img>
                                    <Card.Body className='blog_2'>
                                        <Card.Title><a href='' className='text-white'>TOP GRAPHICS DESIGN TOPICS</a>
                                            <div className='d-flex fs-6'>
                                                <a>January 9,2021</a>
                                                <a className='mx-5 text-white'>2 Comments</a>
                                            </div>
                                        </Card.Title>
                                        <Card.Text className='my-4'>
                                            Top Graphic Design Topics. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud …
                                        </Card.Text>
                                        <Button>READ MORE </Button>
                                        <Button className='blog_b1'>Design</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
export default Blog1;