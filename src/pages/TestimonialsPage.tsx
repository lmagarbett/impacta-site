import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/TestimonialsSection';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar defaultPage="Testimonials" />
        <TestimonialsSection />
      <Footer />
    </div>
  );
}
