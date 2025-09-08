import { useState, useEffect } from 'react';
import biglogo from './assets/biglogo.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleMap from './components/GoogleMap';
import SalesTeam from './components/SalesTeam';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('Contact');

  useEffect(() => {
      const onScroll = () => {
        setScrolled(window.scrollY > 100); 
      };
      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Handle form submission (API call, email service, etc.)
  console.log('Form submitted:', form);
};

  return (
    <div className="bg-white text-gray-800">

      <Navbar defaultPage="Contact" />

      {/* Hero Section */}
      <section className="relative bg-impacta12 text-white px-6 text-left overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '8rem' }}>
  <div className="relative z-10 pl-0 md:pl-48">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="max-w-2xl text-lg text-gray-200">
      Impacta is committed to exceeding your needs when it comes to storage solutions for car parts. Questions, comments or special requests? We’d love to hear from you, so don’t hesitate to reach out today.
    </p>
  </div>
  <img
    src={biglogo}
    alt="Impacta Logo"
    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[600px] max-w-none opacity-10 pointer-events-none"
    style={{ zIndex: 1 }}
  />
</section>

<section className="bg-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center text-sm">
            <a 
              href="/" 
              className="text-impacta11 hover:text-impacta1 transition-colors duration-200"
            >
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">Sectors</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-impacta11 font-medium">Contact Us</span>
          </nav>
        </div>
      </section>

      <SalesTeam />

      {/* View Full Team Link */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto mt-4 px-4 sm:px-6 text-left text-sm">
          <div className="flex items-center gap-2">
            <p className="text-gray-400">
              Want to meet our entire team?
            </p>
            <a 
              href="/team" 
              className="text-impacta1 hover:text-bluehover font-medium transition-colors duration-300"
            >
              View Our Complete Team
            </a>
          </div>
        </div>
      </section>

      {/* Full-width Map */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <GoogleMap />
        </div>
      </section>
      
      {/* Location Info Horizontal */}
      <section className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">Our Location:</h2>
                <p>Field St,</p>
                <p>Bradley,</p>
                <p>Bilston WV14 8RW</p>
              </div>
              <div>
                <h3 className="font-bold">Phone:</h3>
                <p>+44 01902496307</p>
              </div>
              <div>
                <h3 className="font-bold">Email:</h3>
                <p>sales@impacta.co.uk</p>
              </div>
              <div>
                <h3 className="font-bold">Opening Hours:</h3>
                <p>Mon - Thu: 8:00 AM - 5:00 PM</p>
                <p>Fri: 8:00 AM - 2:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 w-full bg-impacta12 relative min-h-[400px]">
  <div className="max-w-6xl mx-auto flex justify-end items-stretch h-full">
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 shadow rounded-lg w-full max-w-lg h-full flex flex-col justify-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-impacta12">Send Us a Message</h2>
      <label className="block mb-1 font-semibold" htmlFor="name">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded"
        required
      />
      <label className="block mb-1 font-semibold" htmlFor="email">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded"
        required
      />
      <label className="block mb-1 font-semibold" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Your Phone (optional)"
        value={form.phone || ''}
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded"
      />
      <label className="block mb-1 font-semibold" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="w-full mb-4 p-3 border rounded"
        required
      />
      <button
        type="submit"
        className="bg-impacta5 text-white px-6 py-3 rounded-full hover:bg-bluehover transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      <Footer />

    </div>
  );
}
