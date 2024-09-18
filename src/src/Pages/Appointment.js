import AppointmentCard from "../Components/AppointmentCard";
import Container from "react-bootstrap/Container";
import {useContext, useEffect, useState} from "react";
import {Col, Collapse, Row} from "react-bootstrap";
import "../CSS/Appointment.css"
import {UserContext} from "../UserContext";
import {get, getDatabase, ref} from "firebase/database";

const Appointment = () => {
    const [openSections, setOpenSections] = useState({});
    // const [appointment1, setAppointment1] = useState([]);
    // const [appointment2, setAppointment2] = useState([]);
    // const [appointment3, setAppointment3] = useState([]);
    // const [appointment4, setAppointment4] = useState([]);
    // const [appointment5, setAppointment5] = useState([]);

    const [appointments, setAppointments] = useState([]);

    const handleToggle = (index) => {
        setOpenSections(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // function addAppointment(setApp){
    //     return (str) => {
    //         setApp((prevApp) => {
    //             return [...prevApp, str];
    //         });
    //     }
    // }




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

    const [sundayAppointments, setSundayAppointments] = useState([]);
    const [mondayAppointments, setMondayAppointments] = useState([]);
    const [tuesdayAppointments, setTuesdayAppointments] = useState([]);
    const [wednesdayAppointments, setWednesdayAppointments] = useState([]);
    const [thursdayAppointments, setThursdayAppointments] = useState([]);
    const [fridayAppointments, setFridayAppointments] = useState([]);
    const [saturdayAppointments, setSaturdayAppointments] = useState([]);

    const weekdayAppointments = {
        "Sunday": sundayAppointments,
        "Monday": mondayAppointments,
        "Tuesday": tuesdayAppointments,
        "Wednesday": wednesdayAppointments,
        "Thursday": thursdayAppointments,
        "Friday": fridayAppointments,
        "Saturday": saturdayAppointments,
    };

    useEffect(() => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const stateSetters = {
            "Sunday": setSundayAppointments,
            "Monday": setMondayAppointments,
            "Tuesday": setTuesdayAppointments,
            "Wednesday": setWednesdayAppointments,
            "Thursday": setThursdayAppointments,
            "Friday": setFridayAppointments,
            "Saturday": setSaturdayAppointments,
        };

        const fetchAppointmentsForDay = async (day) => {
            const db = getDatabase();
            const appointmentsRef = ref(db, `weekdays/${day}`);
            try {
                const snapshot = await get(appointmentsRef);
                if (snapshot.exists()) {
                    const appointmentsData = snapshot.val();
                    const timesArray = Object.values(appointmentsData);
                    stateSetters[day](timesArray);
                } else {
                    console.log(`No appointments found for ${day}`);
                }
            } catch (error) {
                console.error(`Error fetching appointments for ${day}:`, error);
            }
        };

        daysOfWeek.forEach(day => fetchAppointmentsForDay(day));
    }, []);


    const dates = getNextDates(4);


    const weekdays = [
        {
            day: weekday[d.getDay()], moto: weekdayMoto[d.getDay()], date: dates[0],
            appointments: weekdayAppointments[weekday[d.getDay()]],
        },
        {
            day: weekday[(d.getDay()+1)%7], moto: weekdayMoto[(d.getDay()+1)%7], date: dates[1],
            appointments: weekdayAppointments[weekday[(d.getDay()+1)%7]],
        },
        {
            day: weekday[(d.getDay()+2)%7], moto: weekdayMoto[(d.getDay()+2)%7], date: dates[2],
            appointments: weekdayAppointments[weekday[(d.getDay()+2)%7]],
        },
        {
            day: weekday[(d.getDay()+3)%7], moto: weekdayMoto[(d.getDay()+3)%7], date: dates[3],
            appointments: weekdayAppointments[weekday[(d.getDay()+3)%7]],
        },
        {
            day: weekday[(d.getDay()+4)%7], moto: weekdayMoto[(d.getDay()+4)%7], date: dates[4],
            appointments: weekdayAppointments[weekday[(d.getDay()+4)%7]],
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
                                    console.log(app)
                                    return (
                                        <div className="py-3" style={{minHeight: '150px'}}>
                                            <Collapse in={openSections[index]} dimension="width">
                                                <div id="example-collapse-text">
                                                    <AppointmentCard appointment={app.appointments} />
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