import Container from "react-bootstrap/Container";
import {FaRegUserCircle} from "react-icons/fa";
import {Button} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../Firebase";
import {RiToothFill} from "react-icons/ri";
import axios from "axios";
import {UserContext} from "../UserContext";

const PatientComponent = (props) => {

    const u = useContext(UserContext);

    const [complete, setComplete] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target[0]?.files[0];
        console.log(file)

        if (!file) return;

        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            null, // No need to track progress
            (error) => {
                alert(`Upload failed: ${error.message}`);
            },
            () => {
                setComplete(true);
            }
        );
    };

    return (
        <>
            {u?.email !== "goshev.ig@gmail.com"? document.location.href="/" : (
                <Container
                    className="border border-1 rounded-1 my-3 d-flex justify-content-between align-items-center"
                    style={{ height: "10vh", fontSize: "2em" }}
                >
                    <div className="d-flex justify-content-center align-items-center">
                        <FaRegUserCircle />
                        <h2 className="ps-3">{props.user.email.split('@')[0]}</h2>
                    </div>
                    <p style={{ fontSize: "0.7em" }} className="pt-3">{props.user.email}</p>

                    <form className="form p-0" style={{ fontSize: "0.5em" }} onSubmit={handleSubmit}>
                        <input type="file" />
                        {complete ? (
                            <RiToothFill className="mx-5" style={{ fontSize: "2em" }} />
                        ) : (
                            <Button
                                className="mx-4 border-0"
                                style={{ backgroundColor: "#FF9849" }}
                                type="submit"
                            >
                                Upload
                            </Button>
                        )}
                    </form>
                </Container>
            )}
        </>
    )
}

export default PatientComponent