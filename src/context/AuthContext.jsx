import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

// ADMIN MA’LUMOTLARI
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'admin123';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('authUser');
    if (saved) {
      setUser(JSON.parse(saved));
    }
  }, []);

  const login = (login, password) => {
    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      const adminUser = { login: 'admin', role: 'admin' };
      localStorage.setItem('authUser', JSON.stringify(adminUser));
      setUser(adminUser);
      return true;
    } else {
      alert('Login yoki parol noto‘g‘ri');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('authUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);