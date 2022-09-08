import React, { useEffect } from 'react';
import Todos from '../../components/todo/Todos';
import "./Dashboard.css";

const Dashboard = ({setUsername,username}) => {
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("username");
    const foundUser = JSON.parse(loggedInUser);
    setUsername(foundUser);
  },[username])
  return (
    <div className='dashboard'>
      <Todos/>
    </div>
  )
}

export default Dashboard;