import React, { useEffect } from 'react';

const Dashboard = ({setUsername,username}) => {
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("username");
    const foundUser = JSON.parse(loggedInUser);
    setUsername(foundUser);
  },[username])
  return (
    <div></div>
  )
}

export default Dashboard;