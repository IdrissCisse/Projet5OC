import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>Footer content</p>
    </footer>
  </div>
);

export default Layout;