import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import LandingPage from './LandingPage';
function RouterPage() {
  return (
    <div>
         <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/' element={<LandingPage />}/>
    
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default RouterPage