import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [choices, setChoices] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchChoices();
    }, []);

    const fetchChoices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/choices', {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('jsonwebtoken')}`
                }
            });
            setChoices(response.data);
        } 
        catch (error) {
            setError(error.response ? error.response.data.message : error.message);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/choices/${id}`, {
                headers: {
                    'Authorization': `Bearer ${sessionStorage.getItem('jsonwebtoken')}`
                }
            });
            fetchChoices(); 
        } 
        catch (error) {
            setError(error.response ? error.response.data.message : error.message);
        }
    };

    return (
        <div>
            <h1>Employee Choices</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Choice</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {choices.map(choice => (
                        <tr key={choice.id}>
                            <td>{choice.employeeId}</td>
                            <td>{choice.choice}</td>
                            <td>
                                <button onClick={() => deleteItem(choice.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Menu;
