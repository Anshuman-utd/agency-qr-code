'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PlusCircle, Trash2, Printer, LogOut, CheckCircle, XCircle, Search, RefreshCw } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import api from '../api';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  agencyId: string;
}

interface Agency {
  id: string;
  name: string;
  code: string;
}

interface QRIssuance {
  id: string;
  agencyId: string;
  token: string;
  status: 'ACTIVE' | 'REVOKED';
  issuedAt: string;
  createdBy: string | null;
  labelText: string | null;
}

export default function DashboardPage() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [agency, setAgency] = useState<Agency | null>(null);

  // Data states
  const [issuances, setIssuances] = useState<QRIssuance[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [hasLoadedInit, setHasLoadedInit] = useState(false);

  // Stats states
  const [totalCodes, setTotalCodes] = useState(0);
  const [activeCodes, setActiveCodes] = useState(0);
  const [revokedCodes, setRevokedCodes] = useState(0);
  
  // Selection for printing
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Form states
  const [count, setCount] = useState(10);
  const [labelText, setLabelText] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Print view state
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem('admin_token');
    const savedUser = localStorage.getItem('admin_user');
    const savedAgency = localStorage.getItem('admin_agency');

    if (!savedToken || !savedUser || !savedAgency) {
      router.push('/login');
      return;
    }

    setToken(savedToken);
    setUser(JSON.parse(savedUser));
    setAgency(JSON.parse(savedAgency));
  }, [router]);

  const loadData = async (showLoader = true, pageToLoad = page, searchVal = searchQuery) => {
    if (showLoader) setLoading(true);
    try {
      const res = await api.get('/issuances', {
        params: {
          page: pageToLoad,
          limit,
          search: searchVal.trim() || undefined,
        }
      });
      setIssuances(res.data.items);
      setPage(res.data.page);
      setTotalPages(res.data.totalPages);
      setTotalCodes(res.data.total);
      setActiveCodes(res.data.activeCount);
      setRevokedCodes(res.data.revokedCount);
    } catch (err) {
      console.error('Failed to load issuances:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token && !hasLoadedInit) {
      loadData(true, 1, '');
      setHasLoadedInit(true);
    }
  }, [token, hasLoadedInit]);

  useEffect(() => {
    if (token && hasLoadedInit) {
      const delayDebounceFn = setTimeout(() => {
        loadData(false, 1, searchQuery);
      }, 300);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchQuery, token, hasLoadedInit]);

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (count <= 0 || count > 1000) {
      setFormError('Please enter a count between 1 and 1000');
      return;
    }

    setFormLoading(true);
    setFormError(null);

    try {
      await api.post('/issuances/batch', {
        count,
        labelText: labelText.trim() || undefined,
      });
      setLabelText('');
      await loadData(false);
    } catch (err: any) {
      console.error(err);
      setFormError(err.response?.data?.message || 'Failed to generate batch.');
    } finally {
      setFormLoading(false);
    }
  };

  const handleRevoke = async (item: QRIssuance) => {
    if (!window.confirm(`Are you sure you want to revoke token:\n${item.token}?`)) {
      return;
    }

    try {
      await api.patch(`/issuances/${item.id}/revoke`);
      // Update state locally
      setIssuances((prev) =>
        prev.map((x) => (x.id === item.id ? { ...x, status: 'REVOKED' } : x))
      );
    } catch (err) {
      console.error('Failed to revoke token:', err);
      alert('Failed to revoke token.');
    }
  };

  // Checkbox functions
  const toggleSelectAll = () => {
    const filtered = activeFilteredIssuances;
    if (selectedIds.size === filtered.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filtered.map((x) => x.id)));
    }
  };

  const toggleSelect = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  // Filter calculations
  const filteredIssuances = issuances;
  const activeFilteredIssuances = filteredIssuances.filter((x) => x.status === 'ACTIVE');
  const itemsToPrint = issuances.filter((x) => selectedIds.has(x.id) && x.status === 'ACTIVE');

  if (loading && !token) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-slate-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-slate-900 text-white p-2 rounded-lg font-bold text-lg">AQ</div>
              <div>
                <h1 className="text-lg font-extrabold text-slate-900 leading-none">Agency QR Portal</h1>
                <p className="text-xs text-slate-500 font-medium mt-1">{agency?.name} • Code: {agency?.code}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">{user?.name}</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-slate-600 hover:text-red-600 p-2 rounded-lg hover:bg-slate-50 transition"
                title="Sign Out"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 w-full space-y-8">
        {/* Stats Grid */}
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Generated</p>
              <p className="mt-2 text-3xl font-extrabold text-slate-900">{totalCodes}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold">∑</div>
          </div>

          <div className="bg-white overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Tokens</p>
              <p className="mt-2 text-3xl font-extrabold text-emerald-600">{activeCodes}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
            </div>
          </div>

          <div className="bg-white overflow-hidden rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Revoked Tokens</p>
              <p className="mt-2 text-3xl font-extrabold text-red-600">{revokedCodes}</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-50 flex items-center justify-center">
              <XCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Generation Panel */}
          <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm h-fit space-y-6">
            <div className="flex items-center space-x-2">
              <PlusCircle className="h-5 w-5 text-slate-900" />
              <h2 className="text-lg font-bold text-slate-900">Generate QR Batch</h2>
            </div>
            
            <form onSubmit={handleGenerate} className="space-y-4">
              {formError && (
                <div className="p-3 bg-red-50 text-red-600 text-sm font-semibold rounded-lg border border-red-100">
                  {formError}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-slate-700">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  required
                  value={count}
                  onChange={(e) => setCount(parseInt(e.target.value, 10))}
                  className="mt-1 w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white"
                />
                <p className="text-xs text-slate-500 mt-1">Number of tokens to generate (Max 1000).</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700">Batch Label (Optional)</label>
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  placeholder="e.g. Batch #3 (Depot Spirits)"
                  className="mt-1 w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white"
                />
                <p className="text-xs text-slate-500 mt-1">Display label bound to these tokens.</p>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400"
              >
                {formLoading ? 'Generating...' : 'Create Batch'}
              </button>
            </form>
          </section>

          {/* List/Audit Panel */}
          <section className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">
            {/* Header / Search */}
            <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">QR Issuances</h2>
                <p className="text-xs text-slate-500">View, search, and manage issued tokens</p>
              </div>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search tokens or labels..."
                    className="pl-9 pr-4 py-1.5 w-64 border border-slate-200 rounded-lg text-sm text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:bg-white"
                  />
                </div>
                <button
                  onClick={() => loadData(false)}
                  className="p-2 border border-slate-200 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 transition"
                  title="Reload"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Print Selection Actions */}
            {selectedIds.size > 0 && (
              <div className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between">
                <p className="text-sm font-medium">{selectedIds.size} active tokens selected for printing</p>
                <button
                  onClick={() => setIsPrintModalOpen(true)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-white text-slate-900 rounded-lg text-xs font-bold shadow hover:bg-slate-100 transition"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Preview & Print Labels</span>
                </button>
              </div>
            )}

            {/* Table */}
            <div className="flex-grow overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase">
                    <th className="py-3 px-4 w-12 text-center">
                      <input
                        type="checkbox"
                        checked={
                          activeFilteredIssuances.length > 0 &&
                          selectedIds.size === activeFilteredIssuances.length
                        }
                        onChange={toggleSelectAll}
                        className="rounded accent-slate-900"
                      />
                    </th>
                    <th className="py-3 px-4">Token</th>
                    <th className="py-3 px-4">Label</th>
                    <th className="py-3 px-4">Issued At</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredIssuances.map((item) => {
                    const isActive = item.status === 'ACTIVE';
                    const isSelected = selectedIds.has(item.id);

                    return (
                      <tr key={item.id} className="hover:bg-slate-50 transition">
                        <td className="py-3 px-4 text-center">
                          {isActive ? (
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleSelect(item.id)}
                              className="rounded accent-slate-900"
                            />
                          ) : (
                            <div className="w-4 h-4 mx-auto bg-slate-100 border border-slate-200 rounded" />
                          )}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-700 font-semibold">{item.token}</td>
                        <td className="py-3 px-4 text-slate-500 font-medium">{item.labelText || '-'}</td>
                        <td className="py-3 px-4 text-slate-500 text-xs font-medium">
                          {new Date(item.issuedAt).toLocaleString()}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                              isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          {isActive ? (
                            <button
                              onClick={() => handleRevoke(item)}
                              className="text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-red-50 transition inline-flex items-center space-x-1"
                              title="Revoke Token"
                            >
                              <Trash2 className="h-4 w-4" />
                              <span className="text-xs font-bold">Revoke</span>
                            </button>
                          ) : (
                            <span className="text-xs text-slate-400 font-semibold">Revoked</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}

                  {filteredIssuances.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-500">
                        {loading ? 'Loading...' : 'No issuances found.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Controls */}
            <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 print:hidden">
              <div className="text-xs text-slate-500 font-semibold">
                Showing {totalCodes === 0 ? 0 : (page - 1) * limit + 1} to {Math.min(page * limit, totalCodes)} of {totalCodes} tokens
              </div>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => loadData(false, page - 1)}
                  className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg bg-white hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition"
                >
                  Previous
                </button>
                <span className="text-xs font-bold text-slate-700">
                  Page {page} of {totalPages}
                </span>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => loadData(false, page + 1)}
                  className="px-3 py-1.5 text-xs font-bold border border-slate-200 rounded-lg bg-white hover:bg-slate-50 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed transition"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Printable Labels Preview Modal */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 z-50 flex items-center justify-center p-4 print:p-0 print:bg-white print:relative print:z-auto">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden print:shadow-none print:rounded-none print:w-auto print:max-h-none print:overflow-visible">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between print:hidden">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Print Labels Preview</h3>
                <p className="text-xs text-slate-500 mt-1">Review labels layout before printing ({itemsToPrint.length} items)</p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => window.print()}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold shadow hover:bg-slate-800 transition"
                >
                  <Printer className="h-4 w-4" />
                  <span>Print Labels</span>
                </button>
                <button
                  onClick={() => setIsPrintModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Modal Body / Printable Grid */}
            <div className="flex-grow p-8 overflow-y-auto print:overflow-visible print:p-0 bg-slate-100 print:bg-white">
              {/* Grid Wrapper */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto print:grid print:grid-cols-3 print:gap-4 print:max-w-none print:mx-0">
                {itemsToPrint.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border-2 border-dashed border-slate-400 p-4 rounded-lg flex flex-col items-center justify-between text-center min-h-[160px] aspect-[4/3] print:border-slate-800 print:break-inside-avoid print:page-break-inside-avoid"
                  >
                    <div className="text-[10px] font-extrabold text-slate-900 tracking-wide uppercase">
                      Issued by {agency?.name}
                    </div>

                    <div className="my-2">
                      {/* Generates standard SVG barcode */}
                      <QRCodeSVG value={item.token} size={84} />
                    </div>

                    <div className="w-full">
                      <div className="text-[8px] font-mono text-slate-500 font-semibold truncate">
                        ID: {item.token}
                      </div>
                      {item.labelText && (
                        <div className="text-[9px] font-bold text-slate-700 mt-1 leading-tight line-clamp-1">
                          {item.labelText}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles for Print Layout (Media Queries) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              body * {
                visibility: hidden;
              }
              /* Only display the modal content */
              .fixed, .fixed * {
                visibility: visible;
              }
              .fixed {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: auto;
                background: white !important;
                padding: 0;
                margin: 0;
              }
              .print\\:hidden {
                display: none !important;
              }
              .print\\:relative {
                position: relative !important;
              }
              .print\\:bg-white {
                background-color: white !important;
              }
              .print\\:p-0 {
                padding: 0 !important;
              }
              .print\\:grid-cols-3 {
                grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              }
            }
          `,
        }}
      />
    </div>
  );
}
