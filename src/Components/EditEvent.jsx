import { useParams } from "react-router-dom";


export default function editEvent({
    events,
    updateEvent,
    handleName,
    handleDate,
    handleImage,
    handleLocation,
    handleResources
}) {
    const { id } = useParams()
    const event = events.find(event => event.id == id)

    return (
        <form onSubmit={(e) => updateEvent(e, id)}>
        <h4>Update Event {event.name}</h4>
        <label>Name:</label>
        <input onChange={(e) => handleName(e.target.value)} defaultValue={event.name} required></input>&nbsp;
        <label>Date:</label>
        <input type='date' onChange={(e) => handleDate(e.target.value)} defaultValue={event.date} required></input>&nbsp;
        <label>Image URL:</label>
        <input onChange={(e) => handleImage(e.target.value)} defaultValue={event.image} required></input>&nbsp;
        <label>Location:</label>
        <input onChange={(e) => handleLocation(e.target.value)} defaultValue={event.location} required></input>&nbsp;
        <label>Resources:</label>
        <input onChange={(e) => handleResources(e.target.value)} defaultValue={event.resources}></input>&nbsp;
        <button className='btn btn-primary'>Submit</button>

    </form>
    )
}