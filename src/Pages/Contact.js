import Location from "../Components/Location";
import Container from "react-bootstrap/Container";
import Footer from "../Components/Footer";
import doctor from "../images/dental-doctor.jpg";
import {Col, Row} from "react-bootstrap";

function Contact() {
    return (
        <>
            <Container fluid className="d-block align-items-center" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://www.leica-microsystems.com/fileadmin/_processed_/d/3/csm_dental-applications_8c3fb35730.jpg)`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '64vh',
                backgroundSize: "100% auto"}}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 d-flex justify-content-center p-5" >
                        <h1 className="text-white text-center col-8"  style={{paddingTop: "150px"}}>Book your free initial consultation today and take the first step towards a healthier smile!</h1>
                    </Col>
                    <Col className="col-12 align-self-end text-start text-white" style={{paddingBottom: "4em", paddingLeft: "4em"}}>

                        <button className="btn rounded-0 shadow" style={{backgroundColor: "#FF9849"}}>Book your appointment</button>
                        <Col className="py-2 px-3">Call +389 75 500 000</Col>

                    </Col>
                </Row>

            </Container>

            <Container>
                <Location/>
            </Container>
<Footer/>

        </>
    )
}

export default Contact;