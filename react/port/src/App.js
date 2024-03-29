import React from 'react';
import MainNev from './components/MainNev';
import Introduce from './pages/Introduce';
import Footers from './components/Footers';
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";
import About from './pages/About';
import './css/App.css';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Project2 from './pages/Project2';
const {useState} = React;

function App() {

  
 
  return (
    <> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Introduce/>}/>
              <Route path='About' element={<About/>}/>
              <Route path='Project' element={<Project/>}/>
              <Route path='Project2' element={<Project2/>}/>
              <Route path='Contact' element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;


