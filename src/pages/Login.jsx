import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Lock, User, ArrowRight, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function Login({ onGuestAccess }) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError('Login yoki parol noto\'g\'ri! (Default: admin / admin123)');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07090E] px-4 select-none">
      
      {/* Background cyber glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/15 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md rounded-3xl bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 sm:p-10 space-y-6"
      >
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-[#131D31] border border-indigo-500/30 items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20 mb-2">
            <ShieldCheck className="w-7 h-7" />
          </div>

          <h1 className="text-2xl font-black text-white tracking-tight font-display">
            ADMIN STUDIO
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            Nurmuhammad.dev portfoliosini boshqarish tizimi
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Login</span>
            </label>
            <input
              type="text"
              required
              placeholder="admin"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#131D31] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Parol</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#131D31] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white shadow-lg shadow-indigo-500/25 transition-all active:scale-95 cursor-pointer mt-2"
          >
            Admin Panelga Kirish
          </button>
        </form>

        {/* Guest Preview Button */}
        <div className="pt-2 border-t border-white/10 space-y-3">
          <button
            type="button"
            onClick={onGuestAccess}
            className="w-full py-3 rounded-xl font-semibold text-xs bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-indigo-500/40 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <span>Portfolioni Mehmon Sifatida Ko'rish</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </button>

          <p className="text-center text-[11px] text-slate-500 font-mono">
            Default kirish: <span className="text-indigo-400 font-semibold">admin</span> / <span className="text-indigo-400 font-semibold">admin123</span>
          </p>
        </div>

      </motion.div>
    </div>
  );
}
