import NavBarCustom from "../Components/NavBarCustom";
import doctor from "../images/dental-doctor.jpg"
import Container from "react-bootstrap/Container";
import Teeth from "../Components/Teeth";
function Home() {
    return (
        <>
                <Container fluid className="px-0" style={{backgroundImage: ` linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${doctor})`,
                    backgroundRepeat:"no-repeat",
                    height: '100vh',
                    // width: "100vw",
                backgroundSize: "100% auto"}}>
                </Container>



                {/*<img className="" src={doctor} alt="doctor" style={{width: "100vw"}}/>*/}

        </>
    )
}

export default Home;