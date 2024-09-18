import {Button, Card, Col, Form, Modal, Row} from "react-bootstrap";
import React, {useContext, useState} from 'react'
import '../CSS/Appointment.css'
import {UserContext} from "../UserContext";
import {get, getDatabase, push, ref, remove} from "firebase/database";

const AppointmentCard = (props) => {
    const user = useContext(UserContext);

    const height = props.day ? "25" : "100%";
    const shadow = props.day ? "" : "none";

    const bg = props.day ? "" : "#FFB07A";

    const [time, setTime] = useState('');
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const deleteAppointment = async (dayOfWeek, timeToDelete) => {
        const db = getDatabase();
        const dayRef = ref(db, `weekdays/${dayOfWeek}`);

        try {
            const snapshot = await get(dayRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                for (const [id, appointment] of Object.entries(data)) {
                    if (appointment.appointments === timeToDelete) {
                        await remove(ref(db, `weekdays/${dayOfWeek}/${id}`));
                        console.log(`Appointment at ${timeToDelete} removed from ${dayOfWeek}`);
                        document.location.reload()
                        return;
                    }
                }
                console.log("Appointment not found");
            } else {
                console.log("No data found");
            }
        } catch (error) {
            console.error("Error fetching or deleting appointment:", error);
        }

        document.location.reload()
    };

    const removeAppointment = (e) => {
        var time = e.target.getAttribute('data-time');
        let btn = e.target;
        while(btn){
            // console.log(btn);
            if (btn.matches('.col')){
                var day = btn.querySelector("div.day.card-title.h5").innerHTML
                break;
            }
            btn = btn.parentElement
        }

        deleteAppointment(day, time)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => setShowAdd(true);
    const handleCloseAdd = () => setShowAdd(false);
    const handleSaveAdd = () => {
        console.log(props.day.day)
        push(ref(getDatabase(), 'weekdays/' + props.day.day),
            {
                appointments: time
            }
        );
        console.log(time)
        setShowAdd(false);
        document.location.reload()
    }




    return (
        <>
            <Card style={{width: '10vw', height: height, boxShadow: shadow, backgroundColor: bg}}>
                <Card.Body>
                    <Card.Title className={props.day? "day" : "appointment"}>{props.day ? props.day.day : props.appointment}</Card.Title>
                    <Card.Subtitle
                        className="mb-2 text-muted">{props.day ? props.day.date : props.appointment}</Card.Subtitle>
                    <hr/>
                    <Card.Text>
                        {
                            user?.email !== "goshev.ig@gmail.com"?
                            props.day ? props.day.moto : <Button onClick={handleShow} style={{backgroundColor: "#1C7C82", border: 0}}>Reserve</Button>
                                :
                                props.day ?
                                    <Button onClick={handleAdd} style={{backgroundColor: "#FFB07A", border: 0}}>Add</Button> :
                                    <Button onClick={removeAppointment} data-time={props.appointment} style={{backgroundColor: "#1C7C82", border: 0}}>Remove</Button>
                        }
                        {/*{*/}
                        {/*    props.day ? props.day.moto :*/}
                        {/*    <Button onClick={handleShow} style={{backgroundColor: "#1C7C82", border: 0}}>Reserve</Button>*/}
                        {/*}*/}
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
            <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="">
                        <Row className="mb-2">
                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Time of appointment</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="11:00"
                                    onChange={(e) => setTime(e.target.value)}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button style={{backgroundColor: "#FF9849", borderColor: "#FF9849"}} type={"submit"} onClick={handleSaveAdd}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}

export default AppointmentCard;