import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Container from "react-bootstrap/Container";
import React from "react";
import {Col, Row} from "react-bootstrap";
import questions from "../Components/Questions";
import Review from "../Components/Review";

function AboutUs() {


    return (
        <>
            <Container fluid className="d-block align-items-center" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://www.njmedicalanddental.net/wp-content/uploads/2017/05/banner-4.jpg)`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '65vh',
                backgroundSize: "100% auto"}}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 align-self-end" >
                        <h1 className="text-white text-center pt-5 mt-5">Your journey to a brighter smile starts here!</h1>
                    </Col>
                    <Col className="col-12 align-self-end text-start text-white" style={{paddingBottom: "4em", paddingLeft: "4em"}}>

                        <button className="btn rounded-0 shadow" style={{backgroundColor: "#FF9849"}}>Book your appointment</button>
                        <Col className="py-2 px-3">Call +389 75 500 000</Col>

                    </Col>
                </Row>

            </Container>
            <Container  style={{padding: "5em 0"}}>
                    <FAQ questions={questions}/>
            </Container>
            <Review/>



        </>
    )
}

export default AboutUs;