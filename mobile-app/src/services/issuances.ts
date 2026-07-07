import api from './api';

export interface QRIssuance {
  id: string;
  agencyId: string;
  token: string;
  status: 'ACTIVE' | 'REVOKED';
  issuedAt: string;
  createdBy: string | null;
  labelText: string | null;
}

export async function createBatchApi(count: number, labelText?: string): Promise<QRIssuance[]> {
  const response = await api.post<QRIssuance[]>('/issuances/batch', { count, labelText });
  return response.data;
}

export async function getIssuancesApi(): Promise<QRIssuance[]> {
  const response = await api.get<QRIssuance[]>('/issuances');
  return response.data;
}

export async function revokeIssuanceApi(id: string): Promise<QRIssuance> {
  const response = await api.patch<QRIssuance>(`/issuances/${id}/revoke`);
  return response.data;
}
