import Location from "../Components/Location";
import Container from "react-bootstrap/Container";
import Footer from "../Components/Footer";
import doctor from "../images/dental-doctor.jpg";
import {Button, Col, FloatingLabel, Form, InputGroup, Row} from "react-bootstrap";
import "../CSS/Contact.css"

function Contact() {
    return (
        <>
            <Container fluid className="d-block align-items-center" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://www.leica-microsystems.com/fileadmin/_processed_/d/3/csm_dental-applications_8c3fb35730.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: '64vh',
                backgroundSize: "100% auto"
            }}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 d-flex justify-content-center p-5">
                        <h1 className="text-white text-center col-8" style={{paddingTop: "150px"}}>Book your free
                            initial consultation today and take the first step towards a healthier smile!</h1>
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

            <Container style={{width: "55%"}}>
                <h1 className="pt-5" style={{color: "#FF9849", fontWeight: "bold"}}>CONTACT</h1>
                <Form className="p-5">
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                            <Form.Label>E-mail Address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="email"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationCustom02">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Phone Number"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="py-2">
                        <Form.Label className="text-start">We usually respond within 24 hours</Form.Label>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            className="mb-3"
                            label="">
                            <Form.Control className="asd" as="textarea" placeholder="Leave a comment here"
                                          style={{height: "18vh"}}/>
                        </FloatingLabel>
                    </Row>
                    <div className="d-flex justify-content-end">
                        <Button type="submit" className="btn rounded-1 border-0 " style={{backgroundColor: "#FF9849"}}>Submit
                            Contact Info
                        </Button>
                    </div>
                </Form>
            </Container>

            <Container>
                <Location/>
            </Container>

        </>
    )
}


export default Contact;