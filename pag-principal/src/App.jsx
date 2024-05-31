import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomeTemple from './pages/home/HomeTemple';
import LoginForm from './pages/login/loginTemple';
import RegisterForm from './pages/register/RegisterTemple';
import Game from './pages/Game/Game';
import Chat from './pages/chatbot/Chat';

const App = () => {
  return (

    <BrowserRouter>
     <Routes> 
     <Route path="/" element={<HomeTemple/>} />
     <Route path="/login" element={<LoginForm/>} />
     <Route path="/registrar" element={<RegisterForm/>} />
     <Route path="/Game" element={<Game/>} />
     <Route path="/Chat" element={<Chat/>} />



     


     </Routes>
    


    </BrowserRouter>
   
  )
}

export default App