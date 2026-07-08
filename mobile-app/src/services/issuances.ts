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

export interface PaginatedIssuances {
  items: QRIssuance[];
  page: number;
  limit: number;
  total: number;
  activeCount: number;
  revokedCount: number;
  totalPages: number;
}

export async function createBatchApi(count: number, labelText?: string): Promise<QRIssuance[]> {
  const response = await api.post<QRIssuance[]>('/issuances/batch', { count, labelText });
  return response.data;
}

export async function getIssuancesApi(page?: number, limit?: number, search?: string): Promise<PaginatedIssuances> {
  const response = await api.get<PaginatedIssuances>('/issuances', {
    params: { page, limit, search }
  });
  return response.data;
}

export async function revokeIssuanceApi(id: string): Promise<QRIssuance> {
  const response = await api.patch<QRIssuance>(`/issuances/${id}/revoke`);
  return response.data;
}
