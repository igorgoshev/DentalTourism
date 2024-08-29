import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

const ServiceComponent = (props) => {
    console.log(props)
    return (
        <>
                    <Col className="col-6">
                    <Container className="p-3 border border-top-0 border-bottom-1 border-end-0 border-start-0 m-4 service ">
                        <Row className="d-flex align-content-center justify-content-center">
                            <img className="pb-3" style={{width: "30%"}} src={props.service.image} alt="slika"/>
                            <h2 >{props.service.name}</h2>
                            <p style={{width: "90%"}}>{props.service.description}</p>
                        </Row>
                    </Container>
                    </Col>
        </>
    )
}

export default ServiceComponent;