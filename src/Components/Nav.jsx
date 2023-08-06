import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";

export default function siteNav(){

    const linkList =[
        {name: "All Events",
        link: "/events"},
        {name: "Admin",
        link: "/admin"},

    ];
    return(


<Navbar expand="lg" className="navbar navbar-dark bg-dark">
<Container>
    <LinkContainer to='/'>
        <Navbar.Brand href="#">Home</Navbar.Brand>
    </LinkContainer>        

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        {linkList.map((link, index) => 
        <div key={index}>
        <LinkContainer to={link.link}>
            <Nav.Link href="#">{link.name}</Nav.Link>
        </LinkContainer>   
        </div>     
        )}
    </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>
    )
}