import React, { useState, useEffect } from 'react';
import { getMenu, selectChoice } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './employee.css';



const Employee = () => {
    const history = useNavigate();
    const [menu, setMenu] = useState(null);
    const [employeeName, setEmployeeName] = useState('');
    const [choice, setChoice] = useState('');

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await getMenu();
            setMenu(response.data);
        };
        fetchMenu();
    }, []);

    const handleSelectChoice = async () => {
        await selectChoice({ employeeName, choice });
    };

    const handleLogout = () => {
        history('/login');
    };

    return (
        <div className="employee-container">
            <div className="menu-container">
                <h2>Menu for {menu ? menu.date : 'Loading...'}</h2>
                <ul>
                    {menu ? (
                        menu.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))
                    ) : (
                        <li>Loading menu...</li>
                    )}
                </ul>
            </div>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Your name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your choice"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}
                />
                <button onClick={handleSelectChoice}>Submit Choice</button>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Employee;
