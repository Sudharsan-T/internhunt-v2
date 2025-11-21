import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthInput } from '../components/AuthInput';
import { AuthButton } from '../components/AuthButton';
import { registerUserAPI } from "../api/api";


export const Register: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [role, setRole] = useState<'student' | 'startup'>('student');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await registerUserAPI({
        name: `${firstName} ${lastName}`,
        email,
        password,
        role,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // Redirect to landing page after successful signup
      navigate("/");

    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="animate-fade-in w-full">
      <div className="mb-8 text-center lg:text-left">
        <h2 className="font-serif text-4xl text-white tracking-tight mb-2">Create an account</h2>
        <p className="text-gray-400 text-sm">Join InternHunt and start your journey today.</p>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <AuthInput
            className="w-full"
            label="First Name"
            type="text"
            placeholder="John"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <AuthInput
            className="w-full"
            label="Last Name"
            type="text"
            placeholder="Doe"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <AuthInput
          label="Email address"
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-400">I am a</label>
          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => setRole('student')}
              className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${role === 'student'
                ? 'border-[#A78BFA] bg-[#A78BFA]/10 text-white'
                : 'border-white/10 bg-transparent text-gray-400 hover:bg-white/5'
                }`}
            >
              <span className="text-sm font-medium">Student</span>
            </div>
            <div
              onClick={() => setRole('startup')}
              className={`cursor-pointer rounded-lg border p-3 text-center transition-all ${role === 'startup'
                ? 'border-[#A78BFA] bg-[#A78BFA]/10 text-white'
                : 'border-white/10 bg-transparent text-gray-400 hover:bg-white/5'
                }`}
            >
              <span className="text-sm font-medium">Startup</span>
            </div>
          </div>
          {/* Hidden input to ensure form data compatibility if needed, though we use state */}
          <input type="hidden" name="role" value={role} />
        </div>

        <AuthInput
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="mt-2">
          <AuthButton type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </AuthButton>
          {error && (
            <p className="mt-3 text-sm text-red-400 text-center">{error}</p>
          )}
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-[#A78BFA] hover:text-[#9061F9] transition-colors">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};