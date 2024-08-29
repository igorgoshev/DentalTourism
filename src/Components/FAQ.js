import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample(props) {
    return (
        <>
            <h1 className="pb-5" style={{color: "#1C7C82"}}>Frequently asked Questions</h1>
            <Accordion style={{width: "100%"}}>
                {props.questions.map((question, index) => {
                    return <Accordion.Item eventKey={index}>
                        <Accordion.Header>{question.question}</Accordion.Header>
                        <Accordion.Body className="pb-0">
                            <ul className="text-start">
                                {question.answer.map(x => {
                                    return <li className="pb-3"><b>{x.topic}</b> {x.description}</li>
                                })}
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                })}
            </Accordion>
        </>
    )
}

export default AllCollapseExample;