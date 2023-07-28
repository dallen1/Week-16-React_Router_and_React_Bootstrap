import {React, useState, useEffect} from 'react'
import {MOCK_API_URL} from "../Config"


export default function Home() {
    const eventTable = MOCK_API_URL + "user";
  
const [events, setEvents] = useState([{
    name: '',
    jobTitle: '',
    companyName: ''
  }])

const getEvents = () => {

  fetch(eventTable)
    .then((data) => data.json())
    .then((data => setEvents(data)))
   
}

//populates data on page visit
useEffect(()=> {getEvents()}, [])

    return (
        <div>
            <h1>Hello World 🌎</h1>
        </div>
    )
}