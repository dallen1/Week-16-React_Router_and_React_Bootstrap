import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";

export default function siteNav(){

    const linkList =[
        {name: "Events",
        link: "/events"},
        {name: "About",
        link: "/about"},
        {name: "Admin",
        link: "/admin"},

    ];
    return(


<Navbar expand="lg" className="bg-body-tertiary">
<Container>
<LinkContainer to='/'>
  <Navbar.Brand href="#">Home</Navbar.Brand>
  </LinkContainer>        

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        {linkList.map((link, index) => 
        <LinkContainer to={link.link}>
            <Nav.Link href="#">{link.name}</Nav.Link>
        </LinkContainer>        
        )}

      
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
    )
}