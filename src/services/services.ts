// services/api.ts

import axios, { AxiosResponse } from 'axios';

// Definir la URL base de tu API
const BASE_URL = 'https://tu-api.com';

// Configuración de la instancia de axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Agrega más headers si es necesario, como autorización
  },
});

// Método GET para obtener datos
export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error en GET:', error);
    throw error;
  }
};

// Método POST para enviar datos
export const postData = async <T, U>(endpoint: string, data: T): Promise<U> => {
  try {
    const response: AxiosResponse<U> = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error en POST:', error);
    throw error;
  }
};

// Método PUT para actualizar datos
export const putData = async <T, U>(endpoint: string, data: T): Promise<U> => {
  try {
    const response: AxiosResponse<U> = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error en PUT:', error);
    throw error;
  }
};

// Método DELETE para eliminar datos
export const deleteData = async (endpoint: string): Promise<void> => {
  try {
    await api.delete(endpoint);
  } catch (error) {
    console.error('Error en DELETE:', error);
    throw error;
  }
};
