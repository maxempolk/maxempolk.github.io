import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BaseLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-text-light font-sans">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;