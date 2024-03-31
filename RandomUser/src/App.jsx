import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  const fetchRandomUser = async () => {
    const response = await axios.get("https://api.randomuser.me/");
    setUserData([response.data.results[0]]);
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <div className="container-background">
      <div className="Header">

      
      <div className="App">
        <h1>RANDOM USER GENERATOR</h1>
        <h2 className="subtitle">A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</h2>
        <div className="user-container">
          {userData.length != 0 ? (userData.map((user, index) => (
            <div key={index} className="user-card">
              <h2>{user.name.first} {user.name.last}</h2>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
              <p>Age: {user.dob.age}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>
                Address: {user.location.street.name},{" "}
                {user.location.street.number}
              </p>
              <p>
                {user.location.city}, {user.location.state} {user.location.postcode}
              </p>
              <p>Country: {user.location.country}</p>
            </div>
          ))) : null }
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;