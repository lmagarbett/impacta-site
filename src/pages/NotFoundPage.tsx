import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-impacta12 text-white flex flex-col">
      <Navbar defaultPage={null} />

      <section
        className="px-6 text-center flex-1 flex items-center"
        style={{ paddingTop: "12rem", paddingBottom: "8rem" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-gray-200 mb-8">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block bg-white text-impacta7 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-transparent text-white border border-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
