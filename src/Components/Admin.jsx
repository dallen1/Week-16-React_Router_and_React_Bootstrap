import EventAdminForm from './EventAdminForm';
import EventAdminTable from './EventAdminTable';
import Accordion from 'react-bootstrap/Accordion';


export default function Admin({
  newEvent,
  postEvent,
  handleName,
  handleDate,
  handleImage,
  handleLocation,
  handleResources,
  events,
  deleteEvent
}) {


    return (
      <>
      <h3>Admin Page</h3>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Event</Accordion.Header>
        <Accordion.Body>
        <EventAdminForm 
        newEvent={newEvent}
        postEvent={postEvent}
        handleName={handleName}
        handleDate={handleDate}
        handleImage={handleImage}
        handleLocation={handleLocation}
        handleResources={handleResources}
        />
        </Accordion.Body>
        </Accordion.Item>

        </Accordion>

        <EventAdminTable
        events={events} 
        deleteEvent={deleteEvent}
        />
      </>
    )
}