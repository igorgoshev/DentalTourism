import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import logo from "../images/logo.png"
const Kocka = () => {
    return (
        <div className="card d-inline-block" style={{ width: '16em', height:'13em', borderColor: '#1c7c82' }}>
            <div className="position-relative">
                {/*<div className="border-top border-primary" style={{ height: '1px' }}></div>*/}
                <div className="position-absolute top-0 start-50 translate-middle-x" style={{ zIndex: '1', marginTop: '-1em' }}>
                    <Image src={logo} style={{height:'2em', width:'2em', border: "solid #1c7c82 1px"}} roundedCircle />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary text-center">Card subtitle</h6>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>
    );
}

export default Kocka;
