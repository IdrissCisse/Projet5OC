import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Logement from '../../pages/Logement';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';

const AppRouter = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default AppRouter;