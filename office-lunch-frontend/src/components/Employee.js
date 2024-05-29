import React, { useState, useEffect } from 'react';
import { getMenu, addChoice } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './employee.css';

const Employee = () => {
    const history = useNavigate();
    const [menu, setMenu] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [choices, setChoices] = useState([]);
    const [choice, setChoice] = useState('');
    const [menuId, setMenuId] = useState('');

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {
        const response = await getMenu();
        setMenu(response);
        setMenuId(response[0]?.id || '');
        
    };

    const submitChoice = async () => {
        const employee_id = localStorage.getItem('userId');
        const choiceData = { employee_id: employee_id, employee_name: employeeName, choices: choices};

        await addChoice(choiceData);

        setEmployeeName('');
        setChoice('');
        alert('Choice submitted successfully!');
    }

    const handleLogout = () => {
        history('/login');
    };

    return (
        <div className="employee-container">
            <div className="menu-container">
                <h2>Menu for {menu[0]?.date || 'Loading...'}</h2>
                <ul>
                    {menu.length > 0 ? (
                        menu.map((item) => (
                            <li key={item.id}>{item.options.join(', ')}</li>
                        ))
                    ) : (
                        <li>Loading Todays Menu...</li>
                    )}
                </ul>

            </div>
            <div className="input-container">
                <input
                    type="hidden"
                    value={1}
                />

                <input
                    type="text"
                    placeholder="Your name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}/>

                <input
                    type="text"
                    placeholder="Your choice"
                    value={choice}
                    onChange={(e) => setChoice(e.target.value)}/>
                <button onClick={submitChoice}>Submit Choice</button>
            </div>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Employee;
