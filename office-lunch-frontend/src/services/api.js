import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const login = async (credentials) => {
    console.log(credentials);
    try {
        const response = await fetch(axios.post(`${API_BASE_URL}/login`, credentials,
            {withCredentials: true,}));
        return await response.data;
    } 
    catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

const getAuthToken = () => sessionStorage.getItem('jsonwebtoken');

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthToken()}`,
    },
});

export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const addMenu = async (menu) => {
    console.error('Error adding menu:');
    try {
        const response = await axios.post(`${API_BASE_URL}/menu`, menu);
        return response.data;
    } 
    catch (error) {
        console.error('Error adding menu:', error);
        throw error;
    }
};

export const addChoice = async (choiceData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/choices`, choiceData);
        return response.data;
    } 
    catch (error) {
        console.error('Error adding choice:', error);
        throw error;
    }
};

export const getChoices = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/choices`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching choices:', error);
        throw error;
    }
};

export const getMenu = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menu`);
        return response.data;
    } 
    catch (error) {
        console.error('Error fetching menu:', error);
        throw error;
    }
};

export const selectChoice = async (choice) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/choice`, choice);
        return response.data;
    } 
    catch (error) {
        console.error('Error selecting choice:', error);
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
