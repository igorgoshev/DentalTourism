import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
import Kocka from "../Components/Kocka";
import {Image} from "react-bootstrap";
import blue from "../images/background-blue.png"
function Home() {
    return (
        <>
            <Container fluid className="p-0 d-block" style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(${doctor})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundPosition: "center",

                // width: "100vw",
            backgroundSize: "100% auto"}}>
            </Container>

            <Container fluid  style={{
                backgroundImage: `url(${blue})`,
                backgroundRepeat:"no-repeat",
                backgroundAttachment: "fixed",
                height: '100vh',
                backgroundPosition: "center",
                backgroundSize: "100% auto",
                opacity: "30%"
            }}>
                {/* Content for the Second Container */}
                <p>laaa</p>
            </Container>

            <Kocka></Kocka>
            <Kocka></Kocka>

                {/*<img className="" src={doctor} alt="doctor" style={{width: "100vw"}}/>*/}

        </>
    )
}

export default Home;