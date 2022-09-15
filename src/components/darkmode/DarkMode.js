import React, { useCallback, useEffect, useState } from 'react';
import "./DarkModeStyle.css";

const DarkMode = ({setDarkMode,darkMode}) => {
    const handleDarkMode = useCallback(()=>{
        setDarkMode(prevDarkMode=>!prevDarkMode);
    },[darkMode]);

    useEffect(()=>{
        localStorage.setItem("darkmode",JSON.stringify(darkMode))
    },[darkMode]);
    
    return (
        <div>
            <label className="switch">
                <input type="checkbox" onClick={handleDarkMode}/>
                    <span className="slider round"></span>
            </label>
        </div>
    )
}

export default DarkMode;