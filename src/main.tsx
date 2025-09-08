import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css'; // Required for Mantine v7+
import './index.css'; // Your Tailwind styles
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ContactUs from './ContactPage.tsx';
import AllTeam from './AllTeam.tsx';
import AutomotivePage from './pages/AutomotivePage.tsx';
import DefensePage from './pages/DefensePage.tsx';
import HealthcarePage from './pages/HealthcarePage.tsx';
import AgriculturePage from './pages/AgriculturePage.tsx';
import GeneralFabricationPage from './pages/GeneralFabricationPage.tsx';
import PlasticMouldingPage from './pages/PlasticMouldingPage.tsx';
import SteelFabricationPage from './pages/SteelFabricationPage.tsx';
import PolyurethaneMouldingPage from './pages/PolyurethaneMouldingPage.tsx';
import WeldingServicesPage from './pages/WeldingServicesPage.tsx';
import RepairMaintenancePage from './pages/RepairMaintenancePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import TestimonialsPage from './pages/TestimonialsPage.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={{
      fontFamily: 'Arial, Helvetica, sans-serif',
      headings: { fontFamily: 'Arial, Helvetica, sans-serif' }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<AllTeam />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/sectors/automotive" element={<AutomotivePage />} />
          <Route path="/sectors/defense" element={<DefensePage />} />
          <Route path="/sectors/healthcare" element={<HealthcarePage />} />
          <Route path="/sectors/agriculture" element={<AgriculturePage />} />
          <Route path="/sectors/general-fabrication" element={<GeneralFabricationPage />} />
          <Route path="/services/plastic-moulding" element={<PlasticMouldingPage />} />
          <Route path="/services/steel-fabrication" element={<SteelFabricationPage />} />
          <Route path="/services/polyurethane-moulding" element={<PolyurethaneMouldingPage />} />
          <Route path="/services/welding-services" element={<WeldingServicesPage />} />
          <Route path="/services/repairs-maintenance" element={<RepairMaintenancePage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);