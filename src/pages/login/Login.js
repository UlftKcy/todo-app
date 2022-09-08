import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    let navigate = useNavigate();
    const usernameInput = useRef(null);
    const [errorShow,setErrorShow] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const username = usernameInput.current?.value;
        if(username !== ""){
            localStorage.setItem('username', JSON.stringify(username));
            navigate("/");
        }else{
            setErrorShow(true);
        }
    }
    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className='form-label'>USERNAME : </label>
                <input type="text" name="username" id="username" className='user-name' placeholder='Username...' ref={usernameInput} />
                <div className='btn-wrapper'>
                    <button type='submit' className='btn-submit'><i className="fa-solid fa-arrow-right-to-bracket"></i>Login</button>
                    {errorShow && <div className='validation'>Please enter your username</div>}
                </div>
            </form>
        </div>
    )
}

export default Login;