import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeTemple from './pages/home/HomeTemple';
import LoginForm from './pages/login/loginTemple';

const App = () => {
  return (

    <BrowserRouter>
     <Routes> 
     <Route path="/" element={<HomeTemple/>} />
     <Route path="/login" element={<LoginForm/>} />

     


     </Routes>
    


    </BrowserRouter>
   
  )
}

export default App