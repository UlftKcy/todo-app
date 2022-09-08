import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Dashboard from '../pages/dashboard/Dashboard';
import Login from '../pages/login/Login';

const AppRouter = () => {
  const [username,setUsername] = useState(null);
  return (
    <Router>
        <Navbar username={username} setUsername={setUsername}/>
        <Routes>
            <Route path='/' element={<Dashboard setUsername={setUsername}  username={username}/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter;