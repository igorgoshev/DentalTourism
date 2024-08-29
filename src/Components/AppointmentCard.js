import {Button, Card, Col, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from 'react'
import '../CSS/Appointment.css'

const AppointmentCard = (props) => {
    const height = props.day ? "25" : "100%";
    const shadow = props.day ? "" : "none";
    const bg = props.day ? "" : "#FFB07A";

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{width: '10vw', height: height, boxShadow: shadow, backgroundColor: bg}}>
                <Card.Body>
                    <Card.Title>{props.day ? props.day.day : props.appointment}</Card.Title>
                    <Card.Subtitle
                        className="mb-2 text-muted">{props.day ? props.day.date : props.appointment}</Card.Subtitle>
                    <hr/>
                    <Card.Text>
                        {props.day ? props.day.moto :
                            <Button onClick={handleShow} style={{backgroundColor: "#1C7C82", border: 0}}>Reserve</Button>}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>E-mail Address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Phone Number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{backgroundColor: "#FF9849", borderColor: "#FF9849"}} onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AppointmentCard;