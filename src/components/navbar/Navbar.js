import { useNavigate } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ username ,setUsername}) => {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("username");
    navigate("/login");
    setUsername(null);
  }
  return (
    <div className="navbar">
      <div className="brand">Todo</div>
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
