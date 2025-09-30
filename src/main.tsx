import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css"; 
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactUs from "./ContactPage.tsx";
import AllTeam from "./AllTeam.tsx";
import AutomotivePage from "./pages/AutomotivePage.tsx";
import DefensePage from "./pages/DefensePage.tsx";
import HealthcarePage from "./pages/HealthcarePage.tsx";
import AgriculturePage from "./pages/AgriculturePage.tsx";
import GeneralFabricationPage from "./pages/GeneralFabricationPage.tsx";
import PlasticSolutionsPage from "./pages/PlasticSolutionsPage.tsx";
import SteelFabricationPage from "./pages/SteelFabricationPage.tsx";
import PolyurethaneMouldingPage from "./pages/PolyurethaneMouldingPage.tsx";
import IndustrialTextileSewingPage from "./pages/IndustrialTextileSewingPage.tsx";
import RepairMaintenancePage from "./pages/RepairMaintenancePage.tsx";
import DesignPrototypingPage from "./pages/DesignPrototypingPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import TestimonialsPage from "./pages/TestimonialsPage.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <MantineProvider
        theme={{
          fontFamily: "Arial, Helvetica, sans-serif",
          headings: { fontFamily: "Arial, Helvetica, sans-serif" },
        }}
      >
        <BrowserRouter basename="/impacta-site">
          <ScrollToTop />
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
            <Route
              path="/sectors/general-fabrication"
              element={<GeneralFabricationPage />}
            />
            <Route
              path="/services/plastic-solutions"
              element={<PlasticSolutionsPage />}
            />
            <Route
              path="/services/steel-fabrication"
              element={<SteelFabricationPage />}
            />
            <Route
              path="/services/polyurethane-moulding"
              element={<PolyurethaneMouldingPage />}
            />
            <Route
              path="/services/industrial-textile-sewing"
              element={<IndustrialTextileSewingPage />}
            />
            <Route
              path="/services/repairs-maintenance"
              element={<RepairMaintenancePage />}
            />
            <Route
              path="/services/design-prototyping"
              element={<DesignPrototypingPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </HelmetProvider>
  </React.StrictMode>
);
