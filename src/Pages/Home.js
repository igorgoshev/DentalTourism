import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
import Kocka from "../Components/Kocka";
import {Col, Image, Row} from "react-bootstrap";
import blue from "../images/background-blue.png"
import Footer from "../Components/Footer";
import BeforeAfter from "../Components/BeforeAfter";
import {Link} from "react-router-dom";
import "../CSS/HomePageCss.css"
import Location from "../Components/Location";
import React from "react";



function Home() {
    return (
        <>
            {/*todo pokazuvanje eden tip ekran kako tell, eden kako desktop*/}
            <Container fluid className="d-block align-items-center" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${doctor})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundSize: "100% auto"}}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 align-self-end" >
                    <h1 className="text-white text-center">Maintain your smile for a lifetime</h1>
                    </Col>
                    <Col className="col-12 align-self-end text-start text-white" style={{paddingBottom: "4em", paddingLeft: "4em"}}>

                        <button className="btn rounded-0 shadow" style={{backgroundColor: "#FF9849"}}>Book your appointment</button>
                        <Col className="py-2 px-3">Call +389 75 500 000</Col>

                    </Col>
                </Row>

            </Container>

            <Container fluid style={{
                backgroundImage: `url(${blue})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundPosition: "top",
                backgroundSize: "100% auto",
                opacity: "30%",
            }}>
                <Row className="d-flex">
                    <Col className="pt-5 px-5 pb-0 display-5 col-6 text-start" style={{color:"#cd5700", fontWeight:"bold", wordSpacing: ""}}>WELCOME TO DENTAL TOURISM IN MACEDONIA </Col>
                </Row>

            </Container>

            <Container style={{paddingTop: "3em"}}>
                <h1 className="pb-5" style={{color: "#1C7C82"}}>A place to look and feel your best!</h1>
                <Row className="justify-content-between">
                    <Col className="col-md-4">
                        <Kocka title={"title1"}></Kocka>
                    </Col>
                    <Col className="col-md-4">
                        <Kocka title={"title2"}></Kocka>
                    </Col>
                    <Col className="col-md-4">
                        <Kocka title={"title3"}></Kocka>
                    </Col>
                </Row>
            </Container>
             {/*e9f6f4*/}
            <Container fluid style={{backgroundColor: "#DAE2E6", position: "relative", top: "-19vh", height: "30vh", backgroundSize: "100% auto", zIndex: '-1'}}>

            </Container>

            <Container style={{paddingTop: "0", marginTop: "-70px"}}>
                <h1 className="mb-5" style={{color: "#1C7C82"}}>Happy clients!</h1>
                <BeforeAfter/>
                <BeforeAfter/>
            </Container>

            <Container>
             <Location/>
            </Container>

            <Footer></Footer>
        </>
    )
}

export default Home;