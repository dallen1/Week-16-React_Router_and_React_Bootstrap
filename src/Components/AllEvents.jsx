import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';



export default function allEvents({events}) {
    const style={
        width: '30rem',
        margin: "1em 0"
    }

    return (
        <Container>
        <h1>All Events</h1>
        <Row>
        {events.map((event, index) => (
            <Col>
                <Card body key={index} style={style}>
                    <b>{event.name}</b> at <b>{event.location}</b> on <b>{event.date}</b>&nbsp;
                    <LinkContainer to={`/events/`+event.id}>
                        <Button href='#' variant="primary">Details</Button>
                    </LinkContainer></Card>
            </Col>
        ))}
        </Row>
        </Container>
    )
}