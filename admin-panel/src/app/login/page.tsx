'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '../../api';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const userStr = localStorage.getItem('admin_user');
    if (token && userStr) {
      const user = JSON.parse(userStr);
      if (user.role === 'ADMIN') {
        router.push('/');
      }
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await api.post('/auth/login', { email, password });
      const { accessToken, user, agency } = res.data;

      if (user.role !== 'ADMIN') {
        setError('Access denied. Only administrators can log in here.');
        setLoading(false);
        return;
      }

      localStorage.setItem('admin_token', accessToken);
      localStorage.setItem('admin_user', JSON.stringify(user));
      localStorage.setItem('admin_agency', JSON.stringify(agency));

      router.push('/');
    } catch (err: any) {
      console.error(err);
      const msg = err.response?.data?.message || 'Connection failed. Ensure backend is running.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900">
            Agency QR Portal
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Admin console for token management & label printing
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="p-3 bg-red-50 text-red-600 text-sm font-semibold rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                  placeholder="admin@alpha.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-900 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-950 disabled:bg-slate-400"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
