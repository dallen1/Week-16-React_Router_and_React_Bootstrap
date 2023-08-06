import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

export default function Home({events}) {

    const nextEvent = events.slice(-1)
    const topEvents = events.slice(-4, -1);

    const cardStyle = {
        width: '22rem', 
        margin: '1rem 0' 
    }

    return (
        <Container>
        <Row>
            <Card>
                <Card.Header>Featured Event</Card.Header>
                <Card.Body>
                    <Card.Title>{nextEvent[0].name}</Card.Title>
                    <Card.Img variant="top" src={nextEvent[0].image} alt={nextEvent[0].name} />
                    <Card.Text>
                    When: {nextEvent[0].date}<br/>
                    Where: {nextEvent[0].location}
                    </Card.Text>
                    <LinkContainer to={`/events/`+nextEvent[0].id}>
                    <Button href='#' variant="primary">Details</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Row>
        <br/>
        <br />
        <Row>
        <h4>Upcoming Events</h4>
        {topEvents.map((event,index) => (
        <Col key={index}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={event.image} /> 
          <Card.Body>
            <Card.Title>{event.name}</Card.Title>
            
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>When: {event.date}</ListGroup.Item>
            <ListGroup.Item>Where: {event.location}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <LinkContainer to={`/events/`+event.id}>
            <Button href='#' variant="primary">Details</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
        </Col>
        ))}
        </Row>
        </Container>
    )
}