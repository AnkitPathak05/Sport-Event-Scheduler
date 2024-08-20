
import React from 'react';
import Navbar from '../Nvbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const Layout = ({ children }) => (
  <>
    <div className="layout-container">
    <Navbar />
    <main className="main-content">
      <Outlet />
    </main>
    <Footer />
  </div>
  </>
);

