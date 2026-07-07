import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

/**
 * Configure API Base URL:
 * - iOS Simulator: 'http://localhost:3000'
 * - Android Emulator: 'http://10.0.2.2:3000'
 * - Physical Device (Expo Go): 'http://<YOUR_COMPUTER_LOCAL_IP>:3000' (e.g. 'http://192.168.1.50:3000')
 */
export const API_BASE_URL = 'http://localhost:3000';

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
