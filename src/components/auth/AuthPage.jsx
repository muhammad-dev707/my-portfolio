import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(
        err.code === 'auth/wrong-password' ? "Noto'g'ri parol" :
        err.code === 'auth/user-not-found' ? "Foydalanuvchi topilmadi" :
        err.code === 'auth/email-already-in-use' ? "Bu email allaqachon ro'yxatdan o'tgan" :
        "Xatolik yuz berdi"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Parol"
            required
            className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
          />

          {error && <p className="text-red-400 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition"
          >
            {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <p className="text-center text-white/80 mt-6">
          {isLogin ? "Hisobingiz yo'qmi?" : "Hisobingiz bormi?"}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-indigo-300 hover:text-indigo-200 underline"
          >
            {isLogin ? "Ro'yxatdan o'ting" : "Kirish"}
          </button>
        </p>
      </div>
    </div>
  );
}