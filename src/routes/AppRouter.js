import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRouter = () => {
  const [username, setUsername] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // set username 
    const loggedInUser = localStorage.getItem("username");
    const foundUser = JSON.parse(loggedInUser);
    setUsername(foundUser);
    // add darkmode class
    if (darkMode) {
      document.body.classList.add("darkmode")
    } else {
      document.body.classList.remove("darkmode")
    }
  }, [username, darkMode])

  return (
    <Router>
      <Navbar username={username} setUsername={setUsername} setDarkMode={setDarkMode} darkMode={darkMode} />
      <Routes>
        {username ? <Route path='/' element={<Dashboard />} /> :
          <Route path='/' element={<Login setUsername={setUsername} />} />}
      </Routes>
    </Router>
  )
}

export default AppRouter;