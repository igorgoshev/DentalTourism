import React, {useEffect, useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase';
import {NavLink, useNavigate} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textError, setTextError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (email.length > 0 && password.length > 0) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, [password, email]);


    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                setTextError("Email or password are incorrect!")
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
            <Container style={{paddingTop: "7em"}}>

                <Container className=" px-5 py-3 w-50 border border-2 rounded-3">

                        <div className="text-center mt-3">
                            <h1>Welcome</h1>
                        </div>
                        <Form onSubmit={onLogin}>
                            <Form.Group controlId="email-address" className="py-3">
                                <Form.Label className="text-start w-100">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="pb-3">
                                <Form.Label className="text-start w-100">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button disabled={disabled} style={{backgroundColor: '#fd9a49', borderColor: '#fd9a49'}} type="submit" className="mt-3">
                                Login
                            </Button>

                        </Form>

                        <p className="text-sm text-center mt-3 text-danger">{textError}</p>
                        <p className="text-sm text-center mt-3">
                            No account yet? {' '}
                            <a href="/signup" style={{color: "#1C7C82" }}>
                                Sign up
                            </a>
                        </p>
                </Container>

            </Container>
        </>
    )
}

export default Login