import React from "react";
import { Link } from "react-router-dom";

export default function eventTable({events, deleteEvent}){
    return (
        <>            
        <h4>Available Events</h4>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {events.map((event, index) => (
                <tr key={index}>
                    <td><Link to={'/events/'+event.id}>{event.name}</Link></td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td><button><Link to={'event/'+event.id}>✎</Link></button></td>
                    <td><button onClick={() => deleteEvent(event.id)}>❌</button></td>
                </tr>
            ))}
            </tbody>
        </table> 
        </>
    )
}