import React from "react";

export default function AdminForm({
    postEvent,
    handleName,
    handleDate,
    handleImage,
    handleLocation,
    handleResources
}){
    return (
        <form onSubmit={(e) => postEvent(e)}>
            <h4>Add New Event</h4>
            <label>Name:</label>
            <input onChange={(e) => handleName(e.target.value)} placeholder="Name" required></input>&nbsp;
            <label>Date:</label>
            <input type='date' onChange={(e) => handleDate(e.target.value)} placeholder="Date" required></input>&nbsp;
            <label>Image URL:</label>
            <input onChange={(e) => handleImage(e.target.value)} placeholder="Image URL" required></input>&nbsp;
            <label>Location:</label>
            <input onChange={(e) => handleLocation(e.target.value)} placeholder="Location" required></input>&nbsp;
            <label>Resources:</label>
            <input onChange={(e) => handleResources(e.target.value)} placeholder="Resources"></input>&nbsp;
            <button className='btn btn-primary'>Submit</button>

        </form>
    )
}