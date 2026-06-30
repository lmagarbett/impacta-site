import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsSection from "../components/AboutUsSection";
import ScrollProgressBar from "../components/ScrollProgressBar";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SEO
        title="About Impacta Ltd — UK Packaging & Handling Experts"
        description="Founded in 1989, Impacta delivers steel, textile and plastic packaging solutions with end-to-end design, manufacturing and repair in the UK."
      />
      <Navbar defaultPage="About Us" />
      <ScrollProgressBar />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
