import Container from "react-bootstrap/Container";
import {getDatabase, ref, get} from "firebase/database";
import React, {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {RiToothFill, RiToothLine} from "react-icons/ri";
import {forEach} from "react-bootstrap/ElementChildren";
import {FaRegUserCircle} from "react-icons/fa";

const ReviewListing = (props) => {

    return (
        <>
            <Container className="border border-1 rounded-2 text-center p-3 "
                       style={{minHeight: "25vh", width: "50%"}}>
                <Row className="d-flex px-3 pt-2 align-items-center justify-content-between">
                    <Col>
                        <h3 className="text-start" >
                            <FaRegUserCircle/> {props.review.user}
                        </h3>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-end align-content-end pe-4"
                         style={{fontSize: "1.8em"}}>
                        {Array.from({length: 5}).map((_, index) => {
                            if (index < props.review.rating) {
                                return <RiToothFill/>;
                            } else {
                                return <RiToothLine/>
                            }
                        })}
                    </Col>
                </Row>
                <Row className="pt-3">
                    <p>{props.review.description}</p>
                </Row>
                <Row>

                </Row>
            </Container>


        </>
    )

}

export default ReviewListing;