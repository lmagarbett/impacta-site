import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUsSection from '../components/AboutUsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar defaultPage="About Us" />
      <AboutUsSection />
      <Footer />
    </div>
  );
}
