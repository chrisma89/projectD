import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
  return (
    <>
<Navbar  style={{position : "relative"}} expand="lg" className="container-fluid navbarmain">
      <Container className='justify-content-end'>
      {/* <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>Chrisma</Navbar.Brand> */}

        <Navbar.Toggle  aria-controls="basic-navbar-nav" className="custom-toggler">
        <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="custom-toggler">
          <Nav>
            {/* <Link><img  style={{height :"100%", width : "40%"}}src="/images/logo.png"/></Link> */}
          <Link style={{color:"white", paddingRight :"30px", fontFamily : "roboto-black-italic",textDecoration: "none"}} to="/">HOME</Link>
            <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic",textDecoration: "none"}} to="/" >PROJECTS</Link>
            {/* <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic",textDecoration: "none"}} to="/links">LINKS</Link> */}
            <Link style={{color:"white", paddingRight :"30px",fontFamily : "roboto-black-italic",textDecoration: "none"}} to="/">CONTACT</Link>
          
          </Nav>
          </Navbar.Collapse>
        
      </Container>
    </Navbar>

    </>
    );
}
 
export default Navigation;