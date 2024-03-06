import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
import Kocka from "../Components/Kocka";
import {Col, Image, Row} from "react-bootstrap";
import blue from "../images/background-blue.png"
function Home() {
    return (
        <>
            <Container fluid className="p-0 d-block" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${doctor})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundSize: "100% auto"}}>
            </Container>

            <Container fluid  style={{
                backgroundImage: `url(${blue})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundPosition: "top",
                backgroundSize: "100% auto",
                opacity: "30%"
            }}>
                <h1>Dental Tourism</h1>
            </Container>

            <Container style={{paddingTop: "6em"}}>
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
            <Container fluid style={{backgroundColor: "#e9f6f4", position: "relative", top: "-19vh", height: "30vh", backgroundSize: "100% auto", zIndex: '-1'}}>

            </Container>

        </>
    )
}

export default Home;