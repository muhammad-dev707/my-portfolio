import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Portfolio from './pages/Portfolio';
import Login from './pages/Login';

function AppContent() {
  const { user } = useAuth();
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  if (showAdminLogin && !user) {
    return <Login onGuestAccess={() => setShowAdminLogin(false)} />;
  }

  return (
    <Portfolio onOpenAdmin={() => setShowAdminLogin(true)} />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
