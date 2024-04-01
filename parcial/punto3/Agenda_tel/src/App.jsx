import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

function App() {

  const getContactos =async () =>{
    let Datos = await axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project");
    setUserData (Datos.data)
  }
  const [userData, setUserData] = useState([]);
  const [userinfo, setUserinfo] = useState({
    telefono : "", nombre : "", imagen: ""
  });

  useEffect(()=>{
    getContactos()

  }, [])

  

  return (
    <>
    <input type="text" value={userinfo.nombre} onChange={(x)=>{setUserinfo({...userinfo, nombre: x.target.value})}}/>
    <input type="text" value={userinfo.telefono} onChange={(x)=>{setUserinfo({...userinfo, telefono: x.target.value})}}/>
    <input type="text" value={userinfo.imagen} onChange={(x)=>{setUserinfo({...userinfo, imagen: x.target.value})}}/>


    
    
    
    {userData.map((personas)=>{
      return(
        <div key={personas.identify}>
          
          <H1>no hay diseño ":("</H1>
          
          
          
          {personas.names}
      
        </div>
      )
    })}
    </>
  )
}

export default App
