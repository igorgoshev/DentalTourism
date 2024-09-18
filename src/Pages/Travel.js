import {Button, Card, Carousel, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import React, {useEffect, useState} from "react";
import CardCarousel from "../Components/CardCarousel";
import loft1 from "../images/loft (1).jpg";
import loft2 from "../images/loft (2).jpg";
import loft3 from "../images/loft (3).jpg"
import loft4 from "../images/loft (4).jpg";
import ReviewListing from "../Components/ReviewListing";
import {get, getDatabase, ref} from "firebase/database";

const Travel = () => {

    const rooms = [
        {
            title: "Studio apartment", images: [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499985667.jpg?k=1c97967ee1296657a73074495a140e543eab0080cd6db261fbc13b73db453081&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505543233.jpg?k=55c148bc517a0e6b4ba43be0de4426dd28f65bbaa9180221390b1921a35fa0a9&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499985749.jpg?k=ff4d97b3d4a4936a2ec86316807c28baaf31ce9d1f791b75c000aea9da425935&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499985691.jpg?k=3c563085d6327d762d41e24ae1c4a87228258097bf6933ea6e72500f9d5a7ee6&o=&hp=1"
            ],
            description: "A studio apartment in Skopje is a compact space with a combined living and sleeping area, a small kitchen, and a separate bathroom. It’s an efficient and cozy option for singles or couples."
        },
        {
            title: "Duplex", images: [
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470179879.jpg?k=8d82f21d34cd4918ee59cd1921e13e6a079b9409e83fee2eac5f84f0916f282a&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/469352391.jpg?k=d82804b37b6f1feed2e02972f1d0311667fd39a5a0ed39855e5dab4d42ba6850&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470179865.jpg?k=9c6b7cf3313914c976697448baed23dc972f6e722df8f245b0af9cc0de4e7f44&o=&hp=1",
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470181607.jpg?k=da75146533cd7ce6ebafbb45cd83a31bd5d73e3d0805660982cd66a3f09ce99e&o=&hp=1"
            ],
            description: "A duplex in Skopje features two levels, with the main living and kitchen areas on one floor and bedrooms and bathrooms on the upper floor. This layout offers ample space and privacy, ideal for families or those needing extra room."
        },
        {
            title: "Loft", images: [
                loft1, loft2, loft3, loft4
            ],
            description: "A loft apartment in Skopje boasts an open-plan design with high ceilings, combining living, sleeping, and kitchen areas in one spacious room. It includes a separate bathroom and often showcases modern, stylish finishes."
        }
    ]

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviewsRef = ref(getDatabase(), 'reviews/');
            try {
                const snapshot = await get(reviewsRef);
                if (snapshot.exists()) {
                    const reviewsData = snapshot.val();
                    const reviewsArray = Object.keys(reviewsData).map(key => ({
                        id: key,
                        ...reviewsData[key]
                    }));
                    setReviews(reviewsArray);
                } else {
                    console.log("No reviews found");
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
            }
        };

        fetchReviews();
    }, []);

    console.log(reviews);


    return (
        <>
            <Container fluid className="d-block align-items-center" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://media.tacdn.com/media/attractions-content--1x-1/12/28/41/fb.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                height: '60vh',
                backgroundSize: "100% auto"
            }}>
                <Row style={{height: "100%"}} className="align-items-center">
                    <Col className="col-12 align-self-end">
                        <h1 className="text-white text-center pt-5 mt-5">Every city street hides a new adventure!</h1>
                    </Col>
                    <Col className="col-12 align-self-end text-start text-white"
                         style={{paddingBottom: "4em", paddingLeft: "4em"}}>

                        <button className="btn rounded-0 shadow" style={{backgroundColor: "#FF9849"}}>Book your trip
                        </button>
                        <Col className="py-2 px-3">Call +389 75 500 000</Col>

                    </Col>
                </Row>

            </Container>
            <Container fluid className="px-5 mb-5">
                <h1 style={{color: "#1C7C82", fontWeight: "Bold", fontSize: "3em"}}
                    className="text-center pt-5 ">Our Rooms</h1>
                <Row>
                    {rooms.map(room => {
                        return (
                            <Col className="col-4 py-5">
                                <Card style={{width: "30vw", height: "100%", overflow: "hidden"}} className="">
                                    <CardCarousel images={room.images}/>
                                    <Card.Body>
                                        <Card.Title>{room.title}</Card.Title>
                                        <Card.Text>
                                            {room.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}

                </Row>
                <Row className="m-0 p-0">
                    <h1 className="pb-5" style={{color: "#FF9849"}}> <b>CUSTOMER REVIEWS</b></h1>
                    <Carousel interval={5000} variant={"dark"} style={{height: "35vh"}}>
                        {reviews.map(review => {
                            console.log(review);
                            return (
                            <Carousel.Item>
                                <ReviewListing review={review}/>
                            </Carousel.Item>
                            )
                        })}
                    </Carousel>

                </Row>

            </Container>


        </>
    )

}

export default Travel;