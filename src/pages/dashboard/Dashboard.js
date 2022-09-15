import React from 'react';
import Todos from '../../components/todo/Todos';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Todos/>
    </div>
  )
};

export default Dashboard;