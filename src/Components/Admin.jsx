import {React, useState, useEffect} from 'react'
import {MOCK_API_URL} from "../Config"
import AdminForm from './AdminForm';

export default function Admin() {
    const eventTable = MOCK_API_URL + "user";

    const [events, setEvents] = useState([{
        name: '',
        data: '',
        image: '',
        location: '',
        resources: ''
      }])
    
      const [newEvent, setNewEvent] = useState([{
        name: '',
        data: '',
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

    const postUser = (e) => {
        e.preventDefault();
      
        fetch(eventTable, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newUser)
        }).then(() => getEvents())
      
        e.target.reset()
      }
      
      function handleName (nameValue) {
        setNewUser({
          ...newUser,
          name: nameValue,
        })
      }
      
      function handleJobTitle (jobValue) {
        setNewUser({
          ...newUser,
          jobTitle: jobValue,
          })
      
      }
      
      function handleCompanyName (companyNameValue) {
        setNewUser({
          ...newUser,
          companyName: companyNameValue
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
        <AdminForm />
        </>
    )
}