import EventAdminForm from './EventAdminForm';
import EventAdminTable from './EventAdminTable';

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
        <><h3>Admin Page</h3>
        <EventAdminForm 
        newEvent={newEvent}
        postEvent={postEvent}
        handleName={handleName}
        handleDate={handleDate}
        handleImage={handleImage}
        handleLocation={handleLocation}
        handleResources={handleResources}
        />
        <EventAdminTable
        events={events} 
        deleteEvent={deleteEvent}
        />
        </>
    )
}