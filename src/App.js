import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Admin from './Components/Admin';
import About from './Components/About';
import Nav from './Components/Nav';
import Event from './Components/Event';
import EditEvent from './Components/EditEvent';
import {MOCK_API_URL} from "./Config"


export default function App() {
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
  
  const [updateEvent, setUpdateEvent] = useState('')
  
  
  const getEvents = () => {
  
    fetch(eventTable)
      .then((data) => data.json())
      .then((data => setEvents(data)))
     
  }
  
  //populates data on site visit
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
    
    const deleteEvent = (id) => {
      if (confirm("Are you sure you want to delete this Event?") == true) {
        fetch(`${eventTable}/${id}`, {
          method: 'DELETE',
        }).then(() => getEvents())
      } else {
        return
      }   
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
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin 
    newEvent={newEvent}
    postEvent={postEvent}
    handleName={handleName}
    handleDate={handleDate}
    handleImage={handleImage}
    handleLocation={handleLocation}
    handleResources={handleResources}
    events={events} 
    deleteEvent={deleteEvent}
    />} />
    <Route path="/admin/event/:id" element={<EditEvent />} />
    <Route path="/event/:id" element={<Event events={events}/>} />
    <Route path="/about" element={<About />} />


    
    </Routes>
    </>
    );
}
