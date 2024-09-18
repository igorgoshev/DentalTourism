import Container from "react-bootstrap/Container";
import {Button, FloatingLabel, Form, Row} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import '../CSS/Contact.css'
import {getDatabase, ref, set, push} from "firebase/database";
import {RiToothFill, RiToothLine} from "react-icons/ri";
import {UserContext} from "../UserContext";

const Review = () => {

    const [hoverIndex, setHoverIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [textArea, setTextArea] = useState("");

    const [disabled, setDisabled] = useState(true);


    const user = useContext(UserContext);

    useEffect(() => {
        user ? setDisabled(false) : setDisabled(true);
    }, [user]);

    const getFillStatus = (index) => {
        if (index <= (hoverIndex !== null ? hoverIndex : clickedIndex)) {
            return <RiToothFill/>;
        }
        return <RiToothLine/>;
    };

    const submit = async () => {
        console.log(user, clickedIndex, textArea)
        await push(ref(getDatabase(), 'reviews/'),
            {
                user: user.email.split("@")[0],
                rating: clickedIndex + 1,
                description: textArea
            }
        );

        window.location.href = "http://localhost:3000/"

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
                                    <>
                                        {disabled ? <div className="px-1">{getFillStatus(index)}</div>
                                            : <div className="px-1"
                                                   key={index}
                                                   onMouseEnter={() => setHoverIndex(index)}
                                                   onMouseLeave={() => setHoverIndex(null)}
                                                   onClick={() => setClickedIndex(index)}
                                            >
                                                {getFillStatus(index)}
                                            </div>}

                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                    <FloatingLabel
                        controlId="floatingTextarea"
                        label=""
                        className="mb-3"
                    >
                        <Form.Control disabled={disabled} onChange={(e) => setTextArea(e.target.value)}
                                      style={{height: "30vh"}}
                                      className="asd"
                                      as="textarea"
                                      placeholder="Leave a comment here"/>
                    </FloatingLabel>
                </Row>
                <Row>
                    <div className="d-flex justify-content-start">
                        <Button disabled={disabled} className="px-0"
                                style={{width: "10%", border: "#FF9849", backgroundColor: "#FF9849"}}
                                onClick={submit}>Submit</Button>
                    </div>
                </Row>


            </Container>
        </>
    )

}

export default Review;