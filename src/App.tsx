import { useState, useEffect } from 'react';
import logo from './assets/logo.png';
import biglogo from './assets/biglogo.png';
import herobg from './assets/herobg.jpg';;
import impactaentrance from './assets/impactaentrance.jpeg';
import { Button, Modal, TextInput, Textarea, Container, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Sectors from './components/Sectors';
import BrandLogos from './components/BrandLogos';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BigClickableImagesSection from './components/BigClickableImagesSection';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, { open, close }] = useDisclosure(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}

      <Navbar defaultPage="Home" />

      {/* Hero */}
      <section
        className={`
          relative px-6 text-center overflow-hidden
          transition-opacity duration-1000
          ${heroVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          paddingTop: '16rem',
          paddingBottom: '14rem'
        }}
      >
        <img src={herobg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-45 z-0" />
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
            mixBlendMode: 'multiply',
          }}
        />
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Component Handling, Packaging Solutions</h1>
          <p className="max-w-xl mx-auto text-lg text-white">
            British-made, built to last. At Impacta, we design, manufacture, and repair high-quality packaging and handling solutions all from one UK facility.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-10">
            <div className="flex-1">
              <div className="text-lg text-gray-700 space-y-6 mx-auto" style={{maxWidth: '700px'}}>
                <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-8 text-center">About Us</h2>
                <p className="text-base">
                  Founded in 1989, Impacta Ltd has solidified its position as a pioneer in component care and handling solutions, garnering respect from the automotive and manufacturing industries.
                </p>
                <p className="text-base">
                  With two cutting-edge facilities in Wolverhampton focusing on steel, textile, and plastic packaging products, our team, boasting over 200 years of collective experience, delivers innovative solutions to clients in aerospace, logistics, and textiles.
                </p>
                <p className="text-base">
                  Committed to excellence from design to delivery, we strive to provide top-tier solutions to clients in the UK and globally.
                </p>
                <p className="text-base">
                  As a recognised tier 1 supplier to the world's top automotive manufacturers, we understand our clients' needs.
                </p>
                <p className="text-base">
                  Impacta also offers a repair service to reduce costs and environmental impact, ensuring the recycling of products at the end of their service life.
                </p>
              </div>
            </div>
        <div className="flex-1 flex justify-end pl-28">
              <img
                src={impactaentrance}
                alt="Impacta Entrance"
                className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm filter brightness-40 contrast-125 saturate-80 mix-blend-multiply bg-[#044bab]"
              />
            </div>
          </div>
        </div>
      </section>

      <BrandLogos />

      <BigClickableImagesSection />

      <Sectors />

    {/* Contact Us Banner */}
    <section className="bg-impacta12 text-white py-12 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Let’s work together to create smarter, sustainable packaging
      </h2>
      <p className="text-gray-200 max-w-2xl mx-auto mb-6">
        Have a project in mind? Our team of experts is ready to help you reduce waste,
        cut costs, and optimise your supply chain.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-impacta7 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Contact Us
      </a>
    </section>

    <Footer />

    </div>
  );
}

export default App;