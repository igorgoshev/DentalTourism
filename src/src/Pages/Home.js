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
import Teeth from "../Components/Teeth";


function Home() {
    return (
        <>
            {/*todo pokazuvanje eden tip ekran kako tell, eden kako desktop*/}
            <Container fluid className="d-block align-items-center m-0" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${doctor})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundSize: "100% auto"
            }}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 align-self-end">
                        <h1 className="text-white text-center">Maintain your smile for a lifetime</h1>
                    </Col>
                    <Col className="col-12 align-self-end text-start text-white"
                         style={{paddingBottom: "4em", paddingLeft: "4em"}}>

                        <button className="btn rounded-0 shadow" style={{backgroundColor: "#FF9849"}}>Book your
                            appointment
                        </button>
                        <Col className="py-2 px-3">Call +389 75 500 000</Col>

                    </Col>
                </Row>

            </Container>

            <Container fluid className="px-5 m-0" style={{
                backgroundImage: `url(${blue})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: '50vh',
                backgroundPosition: "top",
                backgroundSize: "100% auto",
                opacity: "70%",
            }}>
                <Row className="d-flex gap-0 ">
                    <Col className="pt-5 pb-0 col-6 text-start">
                        <Row className="display-5 " style={{color: "#cd5700", fontWeight: "bold", wordSpacing: ""}}>
                            WELCOME TO DENTAL TOURISM IN MACEDONIA
                        </Row>
                        <Row>
                            <p className="p-1 pt-3">
                                Discover world-class dental care amidst the breathtaking landscapes of Macedonia. Our
                                mission is to provide affordable, high-quality dental treatments while ensuring a
                                memorable
                                experience for our international patients.
                                Affordable Prices: Enjoy significant cost savings compared to dental procedures in
                                Western
                                countries, without compromising on quality.
                                Expertise & Quality: Our dental clinics adhere to international standards of hygiene and
                                safety, ensuring top-notch care for every patient.
                                Spectacular Destinations: Immerse yourself in the rich culture and stunning landscapes
                                of
                                Macedonia while undergoing dental treatment.
                                Personalized Care: Our dedicated team is committed to providing personalized attention
                                and
                                support throughout your dental journey.
                            </p>
                        </Row>
                    </Col>
                    <Col className="col-6 p-0 m-0">
                        <Teeth ></Teeth>
                    </Col>
                </Row>

            </Container>

            <Container fluid style={{paddingTop: "3em"}}>
                <h1 className="pb-5" style={{color: "#1C7C82"}}>A place to look and feel your best!</h1>
                <Row className="justify-content-between">
                    <Col className="col-md-4">
                        <Kocka title={"Why"} description={"Dental travel is a cost-effective way to access high-quality dental care. Skopje, Macedonia offers advanced treatments at lower prices compared to many home countries. Patients receive both excellent dental care and accommodation."}></Kocka>
                    </Col>
                    <Col className="col-md-4">
                        <Kocka title={"When"} description={"The best time for dental travel to Skopje is during vacations or breaks. Scheduling treatments during less busy periods ensures a relaxed pace, giving patients time for both dental appointments and exploring the city's cultural attractions."}></Kocka>
                    </Col>
                    <Col className="col-md-4">
                        <Kocka title={"How"} description={"Begin by selecting a reputable dental clinic in Skopje that offers treatment packages with accommodation. Coordinate your treatment schedule with the clinic and arrange your travel. Upon arrival, enjoy comfortable lodging and convenient access to the clinic and local sights."}></Kocka>
                    </Col>
                </Row>
                <Row>
                    <Container fluid style={{
                        backgroundColor: "#DAE2E6",
                        marginTop: "-19vh",
                        marginBottom: "5vh",
                        height: "30vh",
                        backgroundSize: "100% auto",
                        zIndex: '-1'
                    }}>
                    </Container>
                </Row>
            </Container>
            {/*e9f6f4*/}


            <Container  className="pt-0 mt-0">
                <h1 className="mb-5" style={{color: "#1C7C82"}}>Happy clients!</h1>
                <BeforeAfter/>
                <BeforeAfter/>
            </Container>

            <Container style={{marginTop: "-7vh"}}>
                <Location/>
            </Container>

        </>
    )
}

export default Home;