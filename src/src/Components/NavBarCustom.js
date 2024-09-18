import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useContext, useEffect, useState} from "react";
import logo from '../images/logo.png'
import {Button, Col, Image, Row} from "react-bootstrap";
import '../CSS/NavBar.css'
import {auth} from "../Firebase"
import {FaRegUserCircle} from "react-icons/fa";
import {UserContext} from "../UserContext";

function NavBarCustom() {

    const user = useContext(UserContext);

    return (
        <Navbar expand="lg" className="container-fluid" >
            <Container >
                <Navbar.Brand className="align-content-center" href='/'>
                    <Row>
                        <Col className="col-lg-5 col-sm-5 justify-content-center align-content-center">
                            <img src={logo} alt="logo" style={{maxHeight: "2.5em"}} className="px-4"/>
                        </Col>
                        <Col className="justify-content-center align-content-center text-start text-wrap" style={{width: "4em"}}>
                            DENTAL TOURISM
                        </Col>
                    </Row>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="align-items-center justify-content-center">
                        <Nav.Link className='px-3' href="/">Home</Nav.Link>
                        <Nav.Link className='px-3' href="/services">Services</Nav.Link>
                        <Nav.Link className='px-3' href="/travel">Travel</Nav.Link>
                        <Nav.Link style={{minWidth: "6.5em"}} className='px-3' href="/about">About us</Nav.Link>
                        <Nav.Link className='px-3' href="/contact">Contact</Nav.Link>
                        {
                            user?.email === "goshev.ig@gmail.com" &&
                            (
                                <Nav.Link className='px-3' href="/patients">Patients</Nav.Link>)
                        }
                        <div className="px-3 justify-content-center">
                            <Button id="asd" href="/appointment" className="border-0 text-dark rounded-0"
                                    style={{backgroundColor: '#fd9a49', boxShadow: '0.125em 0.2em 0.4em gray'}}>Request
                                Appointment</Button>
                        </div>
                        <div className="ps-3">
                            {user?
                                <>
                                    <FaRegUserCircle style={{fontSize: "1.5em"}}/>
                                    <a className="ps-2 text-black" style={{textDecoration: 'none'}}>{user.email.split("@")[0]} | </a>
                                    <a href="/login" style={{color: "black", textDecoration: "none"}} onClick={() => auth.signOut()}>Log out</a>
                                </> : <a href="/signup" className="btn text-dark border-0 ">Sign Up</a>}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBarCustom;