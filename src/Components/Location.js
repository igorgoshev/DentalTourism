import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


const Location = (props) => {
    return (
        <>
            <Row className="py-5" >
                <Col style={{width: "100%"}} className="m-8">
                    <iframe style={{width:"800px", height:"700px"}}
                            src="https://maps.google.com/maps?width=800&amp;height=600&amp;hl=en&amp;q=Majka%20Tereza%2060/3+(dr%20Ljupka%20Terzieva)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        <a href="https://www.gps.ie/">gps systems</a></iframe>
                </Col>
                <Col className="m-4">

                    <Col className="pt-0 px-lg-5 pb-0 display-4 " style={{color:"#FF9849", fontWeight:"bold", opacity: "30%"}}>LOCATION </Col>
                    <Col className="px-0" style={{color:"#FF9849", fontWeight:"bold", fontSize: "2rem", marginTop: "-30px" }}>Our dental office </Col>

                    <Container className="m-5 d-flex text-start">
                        <Col>
                            <h5>Address</h5>
                            <p className="col-4">Majka Tereza 60/3, Skopje 1000</p>
                            <Link href="https://maps.app.goo.gl/cHLHtASJj9BHP9HC8">Get directions</Link>
                        </Col>
                    </Container>

                    <hr className="shadow-sm"/>
                    <Container className="m-5 d-flex text-start">
                        <Col>
                            <h5>Phone</h5>
                            <p className="col-4">070/000-000</p>
                        </Col>
                    </Container>

                    <hr/>
                    <Container className="m-5 d-flex text-start">
                        <Col>
                            <h5>Open Hours</h5>
                            <h6>Monday-Friday: </h6>
                            <p>8am–5pm</p>
                        </Col>
                    </Container>

                    <hr/>
                </Col>
            </Row>
        </>
    )
}

export default Location;