import React, { useState, useEffect } from 'react';
import {addMenu, getChoices} from '../services/api';
import { useNavigate } from 'react-router-dom';
import './admin.css';
import backgroundImage from '../images/food-cover.jpg';

const Admin = () => {
    const history = useNavigate();
    const [date, setDate] = useState('');
    const [options, setOptions] = useState('');
    const [choices, setChoices] = useState([]);
    const [showChoices, setShowChoices] = useState(false);

    useEffect(() => {
        // viewChoices();
    }, []);

    const AddMenu = async () => {
        const menu = {date, options: options.split(',')};
        await addMenu(menu);

        setDate('');
        setOptions('');
        alert('Added successfully!');
    };

    const viewChoices = async () => {
      try{
        const response = await getChoices();

        if (response.data && Array.isArray(response.data)) {
            setChoices(response.data);
            setShowChoices(true);
        } 
        else {
            console.error('Invalid data format:', response);
            alert('Invalid data format');
        }}
        catch(error){
            alert('Error fetching choices: ' + error.message);
        }
    };
    
    const handleLogout = () => {
        history('/login');
    };

    return(
      <div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <div className = "container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className = "title">Admin</h2>
            <input className='input' type = "date" value = {date} onChange={(e) => setDate(e.target.value)}/>
            <input className='input' type="text" placeholder="Options (comma separated)" value={options} onChange={(e) => setOptions(e.target.value)} />
            <button className='button' onClick = {AddMenu}>Add Menu</button> 
            <button className='button' onClick = {viewChoices}>View Choices</button>
            {showChoices && (
                 
                <ul className='list'>
                    <h2>Employee Choices</h2>
                    {choices.map((choice, index) =>(
                        <li className='list-item' key = {index}>
                            {choice.employee_name} : {Array.isArray(choice.choices) ? choice.choices.join(', ') : choice.choices}
                    </li>
                    ))}
                </ul>
            )};
        </div>
    </div>
    );
};

export default Admin;