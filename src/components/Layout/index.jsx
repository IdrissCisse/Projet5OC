import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.scss' ;
import headerLogo from '../../assets/images/header-logo.svg' ;
import footerLogo from '../../assets/images/footer-logo.svg' ;

const Layout = () => (
  <div className='layout'>
    <header className='header'>
      <div className='logo'>
        <img src={headerLogo} alt="Logo de Kasa" />
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
    <img src={footerLogo} alt="Logo de Kasa" />
    <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  </div>
);

export default Layout;