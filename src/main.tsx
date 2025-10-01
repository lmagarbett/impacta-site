import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = lazy(() => import("./App.tsx"));
const ContactUs = lazy(() => import("./ContactPage.tsx"));
const AllTeam = lazy(() => import("./AllTeam.tsx"));
const AutomotivePage = lazy(() => import("./pages/AutomotivePage.tsx"));
const DefensePage = lazy(() => import("./pages/DefensePage.tsx"));
const HealthcarePage = lazy(() => import("./pages/HealthcarePage.tsx"));
const AgriculturePage = lazy(() => import("./pages/AgriculturePage.tsx"));
const GeneralFabricationPage = lazy(() => import("./pages/GeneralFabricationPage.tsx"));
const PlasticSolutionsPage = lazy(() => import("./pages/PlasticSolutionsPage.tsx"));
const SteelFabricationPage = lazy(() => import("./pages/SteelFabricationPage.tsx"));
const PolyurethaneMouldingPage = lazy(() => import("./pages/PolyurethaneMouldingPage.tsx"));
const IndustrialTextileSewingPage = lazy(() => import("./pages/IndustrialTextileSewingPage.tsx"));
const RepairMaintenancePage = lazy(() => import("./pages/RepairMaintenancePage.tsx"));
const DesignPrototypingPage = lazy(() => import("./pages/DesignPrototypingPage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage.tsx"));
import ScrollToTop from "./ScrollToTop.tsx";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.tsx"));
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/impacta-site">
        <ScrollToTop />
        <Suspense fallback={<div className="p-6 text-center text-gray-600">Loading…</div>}>
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
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
