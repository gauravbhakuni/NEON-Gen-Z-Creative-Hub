import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { VideoShowcase } from './components/showcase/VideoShowcase';
import { CommunityGrid } from './components/community/CommunityGrid';
import { Footer } from './components/footer/Footer';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import type { AuthPage } from './types/auth';

function App() {
  const [currentPage, setCurrentPage] = useState<AuthPage>(null);

  if (currentPage === 'login') {
    return <Login />;
  }

  if (currentPage === 'register') {
    return <Register />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onAuthClick={setCurrentPage} />
      <Hero />
      <Features />
      <VideoShowcase />
      <CommunityGrid />
      <Footer />
    </div>
  );
}

export default App;