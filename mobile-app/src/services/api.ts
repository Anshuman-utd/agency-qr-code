import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const apiBase = process.env.EXPO_PUBLIC_API_URL;

if (!apiBase) {
  const errMsg = 
    'CRITICAL ERROR: EXPO_PUBLIC_API_URL environment variable is missing!\n' +
    'Please create a ".env" file in the "mobile-app/" directory and configure EXPO_PUBLIC_API_URL.\n' +
    'Example for physical device: EXPO_PUBLIC_API_URL=http://192.168.1.50:3000\n' +
    'Example for local simulator: EXPO_PUBLIC_API_URL=http://localhost:3000';
  console.error(errMsg);
  throw new Error(errMsg);
}

export const API_BASE_URL = apiBase;

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync('auth_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Failed to retrieve token for request:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
