import React from "react";
import './App.css';
import "./index.css";
import Home from './router/Home';
import Contact from './router/Contact';
import Project from './router/Project';
import About from './router/About';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
