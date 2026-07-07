import api from './api';

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'STAFF';
    agencyId: string;
  };
  agency: {
    id: string;
    name: string;
    code: string;
  };
}

export async function loginApi(email: string, password: string): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', { email, password });
  return response.data;
}
