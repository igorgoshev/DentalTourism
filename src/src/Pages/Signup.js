import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase';
import Container from "react-bootstrap/Container";
import {Button, Form} from "react-bootstrap";


const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [textError, setTextError] = useState('');
    const [passwordError, setPasswordError] = useState('Password must contain 6 letters!');


    useEffect(() => {
        check();
    }, [email, password, repeatPassword]);

    const check = () => {
        password.length > 5? setPasswordError('') : setPasswordError('Password must contain 6 letters!');
        if(email.length > 0 && password.length > 0 && repeatPassword.length > 0) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        if (password !== repeatPassword){
            setTextError("Passwords do not match!");
            return;
        }
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });


    }

    return (
        <>
            <Container style={{paddingTop: "5em"}}>

                <Container className=" px-5 py-3 w-50 border border-2 rounded-3">

                    <div className="text-center mt-3">
                        <h1>Welcome</h1>
                    </div>
                    <Form onSubmit={onSubmit        }>
                        <Form.Group controlId="email-address" className="py-3">
                            <Form.Label className="text-start w-100">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="password" className="pb-3">
                            <Form.Label className="text-start w-100">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                required
                            />
                            <p className="text-start mt-1 text-warning mb-0">{passwordError}</p>
                        </Form.Group>

                        <Form.Group controlId="repeatPassword" className="pb-3">
                            <Form.Label className="text-start w-100">Repeat password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={repeatPassword}
                                onChange={(e) => {
                                    setRepeatPassword(e.target.value)
                                }}
                                required
                            />
                        </Form.Group>

                        <Button disabled={disabled} style={{backgroundColor: '#fd9a49', borderColor: '#fd9a49'}} type="submit" className="mt-3">
                            Sign up
                        </Button>

                    </Form>

                    <p className="text-sm text-center mt-3 text-danger">{textError}</p>
                    <p className="text-sm text-center mt-3">

                        Already have an account? {' '}

                        <a href="/login" style={{color: "#1C7C82"}}>
                            Login
                        </a>
                    </p>
                </Container>

            </Container>
        </>
        // <main >
        //     <section>
        //         <div>
        //             <div>
        //                 <h1> FocusApp </h1>
        //                 <form>
        //                     <div>
        //                         <label htmlFor="email-address">
        //                             Email address
        //                         </label>
        //                         <input
        //                             type="email"
        //                             label="Email address"
        //                             value={email}
        //                             onChange={(e) => setEmail(e.target.value)}
        //                             required
        //                             placeholder="Email address"
        //                         />
        //                     </div>
        //
        //                     <div>
        //                         <label htmlFor="password">
        //                             Password
        //                         </label>
        //                         <input
        //                             type="password"
        //                             label="Create password"
        //                             value={password}
        //                             onChange={(e) => setPassword(e.target.value)}
        //                             required
        //                             placeholder="Password"
        //                         />
        //                     </div>
        //
        //                     <button
        //                         type="submit"
        //                         onClick={onSubmit}
        //                     >
        //                         Sign up
        //                     </button>
        //
        //                 </form>
        //
        //                 <p>
        //                     Already have an account?{' '}
        //                     <NavLink to="/login" >
        //                         Sign in
        //                     </NavLink>
        //                 </p>
        //             </div>
        //         </div>
        //     </section>
        // </main>
    )
}

export default Signup