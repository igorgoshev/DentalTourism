import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
import Kocka from "../Components/Kocka";
import {Col, Image, Row} from "react-bootstrap";
import blue from "../images/background-blue.png"
import Footer from "../Components/Footer";
function Home() {
    return (
        <>
            <Container fluid className="p-0 d-block" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${doctor})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundSize: "100% auto"}}>
                <div className="d-flex justify-content-center">
                    <h1 className="text-white align-self-center" style={{paddingTop: "20%"}}>Maintain your smile for a lifetime</h1>
                </div>
                <button className="btn btn-secondary">Book your appointment</button>
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
                <div>
                    <h1 className="p-5" style={{color:"#cd5700", fontWeight:"bold"}}>WELCOME TO DENTAL TOURISM IN MACEDONIA</h1>
                </div>
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
            <Container fluid style={{backgroundColor: "#e9f6f4", position: "relative", top: "-19vh", height: "30vh", backgroundSize: "100% auto", zIndex: '-1'}}>

            </Container>

            <Footer></Footer>
        </>
    )
}

export default Home;