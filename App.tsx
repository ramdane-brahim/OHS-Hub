import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import LanguageModal from './components/LanguageModal';
import Homepage from './pages/Homepage';
import WhatIsHealthSafety from './pages/WhatIsHealthSafety';
import HealthSafetyManagement from './pages/HealthSafetyManagement';
import BestPractices from './pages/BestPractices';
import ProceduresDevelopment from './pages/ProceduresDevelopment';
import RiskAssessment from './pages/RiskAssessment';
import Resources from './pages/Resources';
import OHSPresentations from './pages/OHSPresentations';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <LanguageModal />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/what-is-health-safety" element={<WhatIsHealthSafety />} />
            <Route path="/health-safety-management" element={<HealthSafetyManagement />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/procedures-development" element={<ProceduresDevelopment />} />
            <Route path="/risk-assessment" element={<RiskAssessment />} />
            <Route path="/ohs-presentations" element={<OHSPresentations />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;