import axios from 'axios';

const API_URL = 'http://localhost:5000/movies';

export const clearAuthToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`http://localhost:5000/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Помилка при реєстрації користувача:', error);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`http://localhost:5000/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Помилка при логіні користувача:', error);
    throw error;
  }
};

export const getAllMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні всіх фільмів:', error);
    throw error;
  }
};

export const getById = async (id) => {
  try {
    console.log(id)
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні фільму за ID:', error);
    throw error;
  }
};

export const searchAndSortMovies = async (search, sort, filterPrice, filterViews) => {
  try {
    const response = await axios.get(`${API_URL}/sorted`, {
      params: { search, sort, filterPrice, filterViews },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при пошуку та сортуванні фільмів:', error);
    throw error;
  }
};
