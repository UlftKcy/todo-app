import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRouter = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("username");
    const foundUser = JSON.parse(loggedInUser);
    setUsername(foundUser);
  }, [username])

  return (
    <Router>
      <Navbar username={username} setUsername={setUsername} />
      <Routes>
        {username ? <Route path='/' element={<Dashboard />} /> :
          <Route path='/' element={<Login setUsername={setUsername} />} />}
      </Routes>
    </Router>
  )
}

export default AppRouter;