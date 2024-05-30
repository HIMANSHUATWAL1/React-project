// App.js or another parent component
import React, { useState } from 'react';
import userContext from './context/userContext';
import Login from './component/Login';
import Profile from './component/Profile';
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    
    <userContext.Provider value={{ user, setUser }}>
      <h1>Chai with React</h1>
      <Login />
      <Profile/>
    </userContext.Provider>
  );
}

export default App;
