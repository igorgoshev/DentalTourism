import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
function Home() {
    return (
        <>
            <NavBarCustom/>
            <Container className="container-fluid">
                <img className="img-fluid" src={doctor} alt="doctor" style={{width: "100vw"}}/>
            </Container>
        </>
    )
}

export default Home;