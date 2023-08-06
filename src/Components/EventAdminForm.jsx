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
            <label>Name:</label><br/>
            <input onChange={(e) => handleName(e.target.value)} placeholder="Name" required></input><br/><br/>
            <label>Date:</label><br/>
            <input type='date' onChange={(e) => handleDate(e.target.value)} placeholder="Date" required></input><br/><br/>
            <label>Image URL:</label><br/>
            <input type='url' onChange={(e) => handleImage(e.target.value)} placeholder="Image URL" required></input><br/><br/>
            <label>Location:</label><br/>
            <input onChange={(e) => handleLocation(e.target.value)} placeholder="Location" required></input><br/><br/>
            <label>Resources:</label><br/>
            <textarea onChange={(e) => handleResources(e.target.value)} placeholder="Resources"></textarea><br/><br/>
            <button className='btn btn-primary'>Submit</button>

        </form>
    )
}