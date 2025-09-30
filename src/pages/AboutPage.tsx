import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsSection from "../components/AboutUsSection";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="About Impacta Ltd — UK Packaging & Handling Experts"
        description="Founded in 1989, Impacta delivers steel, textile and plastic packaging solutions with end-to-end design, manufacturing and repair in the UK."
        canonical="https://lmagarbett.github.io/impacta-site/about"
      />
      <Navbar defaultPage="About Us" />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
