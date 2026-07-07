import React, { createContext, useState, useEffect, useContext } from 'react';
import * as SecureStore from 'expo-secure-store';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'STAFF';
  agencyId: string;
}

export interface Agency {
  id: string;
  name: string;
  code: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  agency: Agency | null;
  isLoading: boolean;
}

export interface AuthContextType extends AuthState {
  login: (token: string, user: User, agency: Agency) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';
const AGENCY_KEY = 'auth_agency';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    token: null,
    user: null,
    agency: null,
    isLoading: true,
  });

  useEffect(() => {
    // Load stored auth details on boot
    async function loadStoredAuth() {
      try {
        const token = await SecureStore.getItemAsync(TOKEN_KEY);
        const userStr = await SecureStore.getItemAsync(USER_KEY);
        const agencyStr = await SecureStore.getItemAsync(AGENCY_KEY);

        if (token && userStr && agencyStr) {
          setState({
            token,
            user: JSON.parse(userStr),
            agency: JSON.parse(agencyStr),
            isLoading: false,
          });
        } else {
          setState((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Failed to load auth state:', error);
        setState((prev) => ({ ...prev, isLoading: false }));
      }
    }

    loadStoredAuth();
  }, []);

  const login = async (token: string, user: User, agency: Agency) => {
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(user));
      await SecureStore.setItemAsync(AGENCY_KEY, JSON.stringify(agency));

      setState({
        token,
        user,
        agency,
        isLoading: false,
      });
    } catch (error) {
      console.error('Login storage failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      await SecureStore.deleteItemAsync(USER_KEY);
      await SecureStore.deleteItemAsync(AGENCY_KEY);

      setState({
        token: null,
        user: null,
        agency: null,
        isLoading: false,
      });
    } catch (error) {
      console.error('Logout storage cleanup failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
