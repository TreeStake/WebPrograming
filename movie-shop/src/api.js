import axios from 'axios';

const API_URL = 'http://localhost:5000/movies';

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
