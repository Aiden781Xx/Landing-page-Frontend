import React, { useState } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './pages/LandingPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'admin'>('landing');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 'landing' ? <LandingPage /> : <AdminPage />}
    </div>
  );
}

export default App;