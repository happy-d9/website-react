import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';
import './Header.css';
function Header() {
  return (
    <div>
    
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className='nav'>
        <Container>
          <Navbar.Brand href="#home">Mirya</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
              <Nav.Link href="about" style={{color:'white'}}>About</Nav.Link>
              <Nav.Link href="service" style={{color:'white'}}>Services</Nav.Link>
              <Nav.Link href="resume" style={{color:'white'}}>Resume</Nav.Link>
              <Nav.Link href="portfolio" style={{color:'white'}}>Portfolio</Nav.Link>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Blog Single</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact" style={{color:'white'}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;