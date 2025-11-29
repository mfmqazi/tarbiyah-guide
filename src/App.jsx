import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GeneralTarbiyah from './pages/GeneralTarbiyah';
import RaisingDaughters from './pages/RaisingDaughters';
import MarriagePrep from './pages/MarriagePrep';
import Resources from './pages/Resources';
import Fatima from './pages/Fatima';

function App() {
  return (
    <Router basename="/tarbiyah-guide">
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/tarbiyah" element={<GeneralTarbiyah />} />
          <Route path="/daughters" element={<RaisingDaughters />} />
          <Route path="/marriage-prep" element={<MarriagePrep />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/fatima" element={<Fatima />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
