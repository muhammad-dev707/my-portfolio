import React from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';

function AppContent() {
  const { user } = useAuth();
  return user ? <Portfolio /> : <Login />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}