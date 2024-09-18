import Container from "react-bootstrap/Container";
import PatientComponent from "../Components/PatientComponent";
import {useEffect, useState} from "react";
import axios from "axios";

const Patients = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from the server API
        axios.get("http://localhost:5000/list-users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
            });
    }, []);

    return(
        <>
            <Container className="py-5">
                {
                    users.map(user => {
                        return <PatientComponent user={user}/>
                    })
                }
            </Container>
        </>

)

}

export default Patients;