import { useParams, useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();

    const event = events.find(event => event.id == id)

    function handleSubmit(e){
        if (confirm("Are you sure you want to update this Event?") == true) {
            updateEvent(e, id)
            navigate(-1)
        } else {return}

    }

    return (
        <>
        <form onSubmit={(e) => handleSubmit(e)}>
        <h4>Update Event {event.name}</h4>
        <label>Name:</label><br/>
        <input onChange={(e) => handleName(e.target.value)} defaultValue={event.name} required></input><br/><br/>
        <label>Date:</label><br/>
        <input type='date' onChange={(e) => handleDate(e.target.value)} defaultValue={event.date} required></input><br/><br/>
        <label>Image URL:</label><br/>
        <input onChange={(e) => handleImage(e.target.value)} defaultValue={event.image} required></input><br/><br/>
        <label>Location:</label><br/>
        <input onChange={(e) => handleLocation(e.target.value)} defaultValue={event.location} required></input><br/><br/>
        <label>Resources:</label><br/>
        <textarea onChange={(e) => handleResources(e.target.value)} defaultValue={event.resources}></textarea><br/><br/>
        <button className='btn btn-primary' >Submit</button><br/><br/>

    </form>
        <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
        </>
    )
}