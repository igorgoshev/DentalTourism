import '../CSS/Services.css';
import Container from "react-bootstrap/Container";
import cleaning from "../images/cleaning-whitening-treatment.png"
import implants from "../images/dental-implants-treatment.png"
import prostetics from "../images/dental-prostetics-treatment.png"
import surgery from "../images/dental-surgery-treatment.png"
import dentistry from "../images/general-dentistry-treatment.png"
import straight from "../images/teeth-straightening-treatment.png"
import ServiceComponent from "../Components/ServiceComponent";
import React from "react";
import {Row} from "react-bootstrap";

const services = [
    {
        name: 'General Dentistry',
        description: "Enjoy top quality dental services with our team of internationally recognized dental specialists.",
        image: dentistry
    },
    {
        name: 'Cleaning & Whitening',
        description: "Our dental cleaning and whitening service provides you with the pearly smile you deserve.",
        image: cleaning
    },
    {
        name: 'Teeth Straightening',
        description: "Perfectly aligned teeth are the cornerstone of every successful professional presentation.",
        image: straight
    },
    {
        name: 'Dental Implants',
        description: "Our dental implants will help you return your beaming smile and radiate self-confidence.",
        image: implants
    },
    {
        name: 'Dental Prosthetics',
        description: "Make your eating troubles a thing of the past with the help of our tailor-made dental prosthetics.",
        image: prostetics
    },
    {
        name: 'Dental Surgery',
        description: "We provide the latest dental surgery procedures to ensure long-term health benefits.",
        image: surgery
    },
]
console.log(services)
const Services = () => {
    return (
        <>
            <Container className={"py-5"}>
                <Container className="w-50">
                    <h1 style={{color: "#FF9849", fontWeight: "bold", fontSize: "2.7em"}}
                        className="text-center pt-3 pb-2">SERVICES</h1>
                    {/*<hr />*/}
                </Container>
                <Row>
                    {services.map(x => {
                        return <ServiceComponent service={x}></ServiceComponent>
                    })}
                </Row>
            </Container>
        </>
    );
};

export default Services;