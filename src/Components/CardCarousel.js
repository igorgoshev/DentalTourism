import React from 'react';
import {Carousel} from "react-bootstrap";

const CardCarousel = (props) => {
    console.log(props);
    return (
        <>
            <Carousel>
                {props.images.map(image => {
                    return (
                        <Carousel.Item>
                            <img src={image} style={{height: "40vh", width: "100%", objectFit: "cover"}} alt="img"/>
                        </Carousel.Item>
                    )})}
            </Carousel>
        </>
    )

}
export default CardCarousel;