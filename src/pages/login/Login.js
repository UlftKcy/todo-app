import React, { useRef } from 'react';
import "./Login.css";

const Login = () => {
    const usernameInput = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        const username = usernameInput.current?.value;
        localStorage.setItem('username',username);
    }
    return (
        <div className='login-wrapper'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className='form-label'>USERNAME : </label>
                <input type="text" name="username" id="username" className='user-name' placeholder='enter username...' ref={usernameInput} />
                <div className='btn-wrapper'>
                    <button type='submit' className='btn-submit'><i className="fa-solid fa-arrow-right-to-bracket"></i>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;