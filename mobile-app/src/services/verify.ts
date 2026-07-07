import api from './api';

export interface VerifyResponse {
  valid: boolean;
  message: string;
  agencyName?: string;
  status?: 'ACTIVE' | 'REVOKED';
  issuedAt?: string;
  labelText?: string;
}

export async function verifyTokenApi(token: string): Promise<VerifyResponse> {
  const response = await api.post<VerifyResponse>('/verify', { token });
  return response.data;
}
