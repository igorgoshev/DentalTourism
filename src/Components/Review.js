import Container from "react-bootstrap/Container";
import {Button, FloatingLabel, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import '../CSS/Contact.css'
import {RiToothFill, RiToothLine} from "react-icons/ri";

const Review = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [textArea, setTextArea] = useState("");

    const getFillStatus = (index) => {
        console.log("entered")
        if (index <= (hoverIndex !== null ? hoverIndex : clickedIndex)) {
            return <RiToothFill/>;
        }
        return <RiToothLine/>;
    };

    function resetState() {
        window.location.reload()
    }

    return (
        <>
            <Container className="pb-5">
                <Row>
                    <div className="d-flex justify-content-between">
                        <h2 className="text-start" style={{color: "#FF9849", fontWeight: "bold"}}>LEAVE A REVIEW</h2>
                        <div className="d-flex justify-content-end" style={{fontSize: "2em"}}>
                            <div className="d-flex" style={{cursor: "pointer"}}>
                                {Array.from({length: 5}, (_, index) => (
                                    <div className="px-1"
                                         key={index}
                                         onMouseEnter={() => setHoverIndex(index)}
                                         onMouseLeave={() => setHoverIndex(null)}
                                         onClick={() => setClickedIndex(index)}
                                    >
                                        {getFillStatus(index)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label=""
                        className="mb-3"
                    >
                        <Form.Control onChange={(e) => setTextArea(e.target.value)} style={{height: "30vh"}}
                                      className="asd"
                                      as="textarea"
                                      placeholder="Leave a comment here"/>
                    </FloatingLabel>
                </Row>
                <Row>
                    <div className="d-flex justify-content-start">
                        <Button className="px-0" style={{width: "10%", border: "#FF9849", backgroundColor: "#FF9849"}}
                                onClick={resetState}>Submit</Button>
                    </div>
                </Row>


            </Container>
        </>
    )

}

export default Review;