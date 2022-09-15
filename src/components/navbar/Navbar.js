import { useNavigate } from 'react-router-dom';
import DarkMode from '../darkmode/DarkMode';
import "./Navbar.css";

const Navbar = ({ username ,setUsername,setDarkMode,darkMode}) => {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("username");
    navigate("/");
    setUsername(null);
  }
  return (
    <div className="navbar">
      <div className="brand">TODO</div>
      <DarkMode setDarkMode={setDarkMode} darkMode={darkMode}/>
      {username ? (
        <div className="navbar-right-side">
          <ul className="navbar-items">
            <li>{username}</li>
            <li>
              <button type="button" className="logout" onClick={handleLogout}>
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket"></i>
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Navbar;
