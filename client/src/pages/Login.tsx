import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { loginUserAPI } from "../api/api";


export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await loginUserAPI({ email, password });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      navigate(data.role === "startup" ? "/startup/post" : "/dashboard/applications");

    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in w-full">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="font-serif text-4xl text-white tracking-tight mb-2">Welcome back</h2>
        <p className="text-gray-400 text-sm">Enter your credentials to access your account.</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <AuthInput
          label="Email address"
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-400">Password</label>
            <Link to="#" className="text-sm text-[#A78BFA] hover:text-[#9061F9] transition-colors">
              Forgot password?
            </Link>
          </div>

          <input
            type="password"
            className="w-full rounded-lg border border-white/10 bg-transparent px-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-2">
          <AuthButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </AuthButton>
          {error && (
            <p className="mt-3 text-sm text-red-400 text-center">{error}</p>
          )}
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-[#A78BFA] hover:text-[#9061F9] transition-colors">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
