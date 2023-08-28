import axios from "axios"

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchApiProducts = async (page) => {
  try {
    const response = await api.get(`/products?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFilterSearch = async (search) => {
  try {
    const response = await api.get(`/products?search=${search}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchFilterCategory = async (category) => {
  try {
    const response = await api.get(`/products?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchDetailProducts = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const postApiData = async (data) => {
  try {
    const response = await api.post('/products', data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const patchApiData = async (id, payload) => {
  try {
    const response = await api.patch(`/products/${id}`, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteApiData = async (id) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};




