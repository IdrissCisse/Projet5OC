import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss' ;

const Layout = () => (
  <div className='layout'>
    <header className='header'>
      <div className='logo'>
        <img src="/assets/header-logo.svg" alt="Logo de Kasa" />
      </div>
      <nav className='nav'>
        <NavLink to="/"  
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Accueil</NavLink>
        <NavLink to="/about"  
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>A Propos</NavLink>
      </nav>
    </header>
    <main className='main'>
      <Outlet />
    </main>
    <footer className='footer'>
    <img src="/assets/footer-logo.svg" alt="Logo de Kasa" />
    <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </div>
);

export default Layout;