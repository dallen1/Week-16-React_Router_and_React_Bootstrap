import {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import Admin from './Components/Admin';
import About from './Components/About';
import Nav from './Components/Nav';

export default function App() {


  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/about" element={<About />} />

    
    </Routes>
    </>
    );
}
