import { useParams, useNavigate } from "react-router-dom";

export default function Event({events}) {
    const { id } = useParams()
    const navigate = useNavigate();
    const event = events.find(x => x.id == id)
    

    return (
    <>
  
    <div >
    <h3>Event: {event.name}</h3>
    <img src={event.image} alt={event.name}/><br/>
    <span><b>When: </b>{event.date}</span>&nbsp;
    <span><b>Where: </b>{event.location}</span>
    <div><h4>Additional Resources:</h4>{event.resources}</div>
    </div>
    <br/>
    <button onClick={() => navigate(-1)}>Back</button>
    </>
    )

}