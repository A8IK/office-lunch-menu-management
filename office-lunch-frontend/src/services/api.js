import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const addMenu = async (menu) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/admin/menu`, menu);
        return response.data;
    } 
    catch (error) {
        console.error('Error adding menu:', error);
        throw error;
    }
};

export const getChoices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/admin/choices`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching choices:', error);
        throw error;
    }
};

export const getMenu = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/employee/menu`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};

export const selectChoice = async (choice) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/employee/choice`, choice);
        return response.data;
    } 
    catch (error) {
        console.error('Error selecting choice:', error);
        throw error;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } 
    catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`);
        return response.data;
    } 
    catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};
