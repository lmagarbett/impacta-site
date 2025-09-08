import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

interface ServicePageTemplateProps {
  serviceName: string;
  heroTitle: string;
  heroDescription: string;
  sectorName: string;
  heroImage?: string;
  serviceImage?: string;
  mainDescription: string;
  keyFeatures: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  processSteps?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
}

export default function ServicePageTemplate({
  serviceName,
  heroTitle,
  heroDescription,
  sectorName,
  heroImage,
  serviceImage,
  mainDescription,
  keyFeatures,
  processSteps,
  ctaTitle,
  ctaDescription,
}: ServicePageTemplateProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <Navbar defaultPage={serviceName} />

      {/* Hero Section */}
      <section className="relative text-white px-6 text-left overflow-hidden"
      style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    paddingTop: '10rem',
                    paddingBottom: '8rem'
                }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 pl-0 md:pl-48">
                    <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
                    <p className="max-w-2xl text-lg text-gray-200">
                        {heroDescription}
                    </p>
                    <h3 className="text-sm font-medium text-gray-300 pt-4">
                        British-made, built to last
                    </h3>
                </div>
      </section>

      <section className="py-4 px-6">
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
            <span className="text-impacta11 font-medium">{sectorName}</span>
          </nav>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mainDescription}
              </p>
            </div>
            
            {serviceImage && (
              <div
              >
                <img 
                  src={serviceImage} 
                  alt={serviceName}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-impacta1/20 to-transparent rounded-lg"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-impacta1 mb-12 text-center"
          >
            Why Choose Our {serviceName}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 border rounded-lg shadow bg-gray-50 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-16 h-16 text-impacta1"
                  >
                    <path fillRule="evenodd" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section (if provided) */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600">
                How we deliver exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-impacta1 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
