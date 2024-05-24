import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login({ username, password, userType });
            navigate('/admin');
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2><i>Login</i></h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
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
