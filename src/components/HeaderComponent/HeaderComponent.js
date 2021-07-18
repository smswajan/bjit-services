import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "./HeaderComponent.scss"
const HeaderComponent = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="primary" className="bg-white py-3">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            <span className="font-bold">Bjit</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto text-center ">
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/" eventKey="1" >Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >Companies</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >Services</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >Clients</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >News</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/blog" eventKey="1" >Career</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="ml-md-4" >
                                <Nav.Link as={Link} to="/contact" eventKey="1" >Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>


                </Container>
            </Navbar>
        </>
    );
};

export default HeaderComponent;