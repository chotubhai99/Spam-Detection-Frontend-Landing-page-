import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Shield, Mail, Lock } from 'lucide-react';

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignIn) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-navy-darker rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-white/10">
          <div className="flex justify-center mb-8">
            <Shield className="w-12 h-12 text-green-500 dark:text-green-400" />
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">
            {isSignIn ? 'Welcome Back' : 'Create Account'}
          </h2>

          {error && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 dark:bg-green-400 text-white dark:text-navy py-2 rounded-lg hover:bg-green-400 dark:hover:bg-green-300 transition-colors"
            >
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsSignIn(!isSignIn)}
              className="text-green-500 dark:text-green-400 hover:underline"
            >
              {isSignIn ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Auth;