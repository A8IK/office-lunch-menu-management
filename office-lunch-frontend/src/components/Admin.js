import React, { useState } from 'react';
import {addMenu, getChoices} from '../services/api';
import './admin.css';
import backgroundImage from '../images/food-cover.jpg';

const Admin = () => {
    const [date, setDate] = useState('');
    const [options, setOptions] = useState('');
    const [choices, setChoices] = useState([]);

    const AddMenu = async () => {
        const menu = {date, options: options.split(',')};
        await addMenu(menu);
    };

    const viewChoices = async () => {
        const response = await getChoices();
        setChoices(response.data);
    };

    return(
        <div className = "container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className = "title">Admin</h2>
            <input className='input' type = "date" value = {date} onChange={(e) => setDate(e.target.value)}/>
            <input className='input' type="text" placeholder="Options (comma separated)" value={options} onChange={(e) => setOptions(e.target.value)} />
            <button className='button' onClick = {AddMenu}>Add Your Menu</button> 
            <button className='button' onClick = {viewChoices}>View Choices</button>
            <ul className='list'>
                {choices.map((choice, index) =>(
                    <li className='list-item' key = {index}>
                        {choice.employeeName} : {choice.choice}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;