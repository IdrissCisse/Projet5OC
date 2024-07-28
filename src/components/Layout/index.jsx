import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <p>Footer content</p>
    </footer>
  </div>
);

export default Layout;