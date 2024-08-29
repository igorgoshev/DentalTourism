import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import logo from "../images/logo.png"
const Kocka = (props) => {
    return (
        <div className="card d-inline-block rounded-0" style={{ width: '25em', height:'18em', borderColor: '#1c7c82' }}>
            <div className="position-relative">
                {/*<div className="border-top border-primary" style={{ height: '1px' }}></div>*/}
                <div className="position-absolute top-0 start-50 translate-middle-x" style={{ zIndex: '1', marginTop: '-2em' }}>
                    <Image src={logo} style={{height:'4em', width:'4em', border: "solid #1c7c82 1px"}} roundedCircle />
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title text-center" style={{paddingTop: "1.7em"}}>{props.title}</h5>
                <hr/>
                <p className="card-text text-center">{props.description}</p>

            </div>
        </div>
    );
}

export default Kocka;
