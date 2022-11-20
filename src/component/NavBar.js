import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Asset/TradExpress - Copy.png'
import '../Style/Navbar.css'


const NavBar = () => {
  return (
    <div>
        <Navbar expand="lg">
                <Container>
                   <Navbar.Brand href='/Home' ><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/BuySell"  className='Learn'>Instant Buy/Sell</Nav.Link>
                            <Nav.Link href="#Learn" className='Learn'>Learn</Nav.Link>
                            <Nav.Link href="#Login" id='bttn' className='btn btn px-4' >Login</Nav.Link>
                            <Nav.Link href="#GetStarted"   id='bttn1' className='btn btn' >Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavBar