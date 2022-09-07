import React, { useEffect, useState } from 'react';
import "./Navbar.css";

const Navbar = () => {
  const [username,setUsername] = useState(null);
  useEffect(()=>{
    setUsername(localStorage.getItem("username"));
  },[username])
  return (
    <div className='navbar'>
        <div className="brand">
            Todo
        </div>
        <div className='navbar-right-side'>
            <ul className='navbar-items'>
              <li>{username}</li>
              <li>logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;