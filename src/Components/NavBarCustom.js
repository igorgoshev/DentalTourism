import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";
import logo from '../images/logo.png'
import {Button, Image} from "react-bootstrap";

function NavBarCustom() {
    return (
        <Navbar expand="lg" className="container-fluid">
            <Container >
                <Navbar.Brand className="align-content-center" href='#home'>
                    <img src={logo} alt="logo" style={{maxHeight: "2.5em"}} className="px-4"></img>Dental Tourism
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="align-items-center justify-content-center">
                        <Nav.Link className='px-3' href="#home">Home</Nav.Link>
                        <Nav.Link style={{minWidth: "6.5em"}} className='px-3' href="#link">About us</Nav.Link>
                        <Nav.Link className='px-3' href="#link">Services</Nav.Link>
                        <Nav.Link className='px-3' href="#link">Contact</Nav.Link>
                        <div className="px-3 justify-content-center">
                            <Button className="border-0 text-body-secondary rounded-1" style={{backgroundColor: '#fd9a49', boxShadow: '0.125em 0.2em 0.4em'}}>Request Appointment</Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarCustom;