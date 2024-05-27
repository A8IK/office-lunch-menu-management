import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login',{ userId, password, userType });
            console.log(response);
            if(response.data.token){
                sessionStorage.setItem('jsonwebtoken', response.data.token);
                if (response.data.redirectTo === '/admin') {
                    navigate('/admin');
                } 
                else if(response.data.redirectTo === '/employee'){
                    navigate('/employee');
                }
            }
            else{
                console.error('Login failed:', response.message);
            }
        } 
        catch (error) {
            setError('Login failed. Please try again.');
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2><i>Login</i></h2>
                <input
                    type="text"
                    placeholder="User Id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required/>

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>

                <select
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    required>
                    <option value="" disabled>User Type</option>
                    <option value="Admin">Admin</option>
                    <option value="Employee">Employee</option>
                </select>
                
                <div className="login-actions">
                    <button type="submit" className="login-button">Login</button>
                    <a href="/forget-password" className="forget-password-link">Forget Password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
