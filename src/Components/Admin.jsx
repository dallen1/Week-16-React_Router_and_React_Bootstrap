import {React, useState, useEffect} from 'react'
import {MOCK_API_URL} from "../Config"
import AdminForm from './AdminForm';

export default function Admin() {
    const eventTable = MOCK_API_URL + "events";

    const [events, setEvents] = useState([{
        name: '',
        date: '',
        image: '',
        location: '',
        resources: ''
      }])
    
      const [newEvent, setNewEvent] = useState([{
        name: '',
        date: '',
        image: '',
        location: '',
        resources: ''
    }])
    
    const [updatedEvent, setUpdatedEvent] = useState('')
    
    
    const getEvents = () => {
    
      fetch(eventTable)
        .then((data) => data.json())
        .then((data => setEvents(data)))
       
    }
    
    //populates data on page visit
    useEffect(()=> {getEvents()}, [])

    const postEvent = (e) => {
        e.preventDefault();
      
        fetch(eventTable, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newEvent)
        }).then(() => getEvents())
      
        e.target.reset()
      }
      
      function handleName (eventNameValue) {
        setNewEvent({
          ...newEvent,
          name: eventNameValue,
        })
      }
      
      function handleDate (eventDateValue) {
        setNewEvent({
          ...newEvent,
          date: eventDateValue,
        })
      }

      function handleImage (eventDateImage) {
        setNewEvent({
          ...newEvent,
          image: eventDateImage,
        })
      }

      function handleLocation (eventLocationValue) {
        setNewEvent({
          ...newEvent,
          location: eventLocationValue,
        })
      }

      function handleResources (eventResourcesValue) {
        setNewEvent({
          ...newEvent,
          resources: eventResourcesValue,
        })
      }
      
      const deleteUser = (id) => {
      
        fetch(`${eventTable}/${id}`, {
          method: 'DELETE',
        }).then(() => getEvents())
      }
      
      const updateUser = (user) => {
        let updatedUser = user
        updatedUser.name = updatedName
        fetch(`${eventTable}/${user.id}`, {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(updatedUser)
        }).then(() => getEvents())
      
        function handleUpdatedName (updatedNameValue) {
          setUpdatedName(updatedNameValue)
        }
        
        const clearName = () => {
          setUpdatedName('')
        }
        
      }

    return (
        <><h3>Admin Page</h3>
        <AdminForm 
        newEvent={newEvent}
        postEvent={postEvent}
        handleName={handleName}
        handleDate={handleDate}
        handleImage={handleImage}
        handleLocation={handleLocation}
        handleResources={handleResources}
        />
        </>
    )
}