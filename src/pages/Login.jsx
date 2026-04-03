import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0d12] px-4">

      {/* animated background blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-500/30 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-fuchsia-500/30 rounded-full blur-[160px]" />

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-sm rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl p-10"
      >
        {/* title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-3xl font-black tracking-widest text-white mb-2"
        >
          ADMIN
        </motion.h1>

        <p className="text-center text-xs tracking-widest uppercase text-white/40 mb-8">
          secure access only
        </p>

        {/* login */}
        <motion.input
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-5 rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        {/* password */}
        <motion.input
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45 }}
          type="password"
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-8 rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
        />

        {/* button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl font-semibold text-white 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500
          shadow-lg shadow-indigo-500/30"
        >
          Kirish
        </motion.button>

        {/* footer */}
        <p className="mt-6 text-center text-[10px] tracking-widest uppercase text-white/30">
          admin • protected • system
        </p>
      </motion.form>
    </div>
  );
}