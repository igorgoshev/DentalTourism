import AppointmentCard from "../Components/AppointmentCard";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import {Col, Collapse, Row} from "react-bootstrap";
import "../CSS/Appointment.css"

const Appointment = () => {
    const [openSections, setOpenSections] = useState({});

    const handleToggle = (index) => {
        setOpenSections(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };


    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const weekdayMoto = [
        "Sunday provides a peaceful pause before the week begins anew, a day for rest and preparation.",
        "Monday is a fresh start, full of new possibilities and a chance to set the tone for the week.",
        "On Tuesday, the week is in full swing, and productivity begins to pick up its pace for what is coming.",
        "Wednesday, the midpoint of the week, offers a moment to reflect on progress and refocus.",
        "Thursday brings the anticipation of the weekend closer, with energy levels often surging.",
        "Friday marks the end of the workweek, filled with the promise of relaxation and enjoyment ahead.",
        "Saturday is a day for leisure and exploration, a chance to unwind and enjoy life’s simple pleasures."
    ]
    const d = new Date();

    function getFormattedDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    function getNextDates(numOfDates) {
        const dates = [];
        const today = new Date();

        for (let i = 0; i <= numOfDates; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(getFormattedDate(nextDate));
        }

        return dates;
    }

    const dates = getNextDates(4); // Gets current date and the next 4 dates


    const weekdays = [
        {
            day: weekday[d.getDay()], moto: weekdayMoto[d.getDay()], date: dates[0],
            appointments: ["15:00", "17:00"],
        },
        {
            day: weekday[(d.getDay()+1)%6], moto: weekdayMoto[(d.getDay()+1)%6], date: dates[1],
            appointments: ["11:00", "15:00", "17:00"],
        },
        {
            day: weekday[(d.getDay()+2)%6], moto: weekdayMoto[(d.getDay()+2)%6], date: dates[2],
            appointments: [ "17:00"],
        },
        {
            day: weekday[(d.getDay()+3)%6], moto: weekdayMoto[(d.getDay()+3)%6], date: dates[3],
            appointments: ["11:00", "13:00", "15:00", "17:00"],
        },
        {
            day: weekday[(d.getDay()+4)%6], moto: weekdayMoto[(d.getDay()+4)%6], date: dates[4],
            appointments: ["11:00", "13:00"],
        }
    ]

    return (
        <>
            <Container>
                <Row className="p-5 d-flex justify-content-between">
                    {weekdays.map((day, index) => {
                        return (
                            <Col>
                                <a onClick={() => handleToggle(index)}><AppointmentCard day={day}/></a>
                                {day.appointments.map(app => {
                                    return (
                                        <div className="py-3" style={{minHeight: '150px'}}>
                                            <Collapse in={openSections[index]} dimension="width">
                                                <div id="example-collapse-text">
                                                    <AppointmentCard appointment={app} />
                                                </div>
                                            </Collapse>
                                        </div>
                                    )
                                })}

                            </Col>
                        )
                    })}

                </Row>

            </Container>
        </>

    )

}

export default Appointment;