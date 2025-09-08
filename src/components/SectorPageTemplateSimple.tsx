import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import biglogo from '../assets/biglogo.png';
import Navbar from './Navbar';
import Footer from './Footer';

interface SectorPageTemplateProps {
  sectorName: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  aboutImage?: string;
  description?: string[];
  keyOfferings?: Array<{
    title: string;
    description?: string;
    icon: string;
  }>;
  caseStudies?: Array<{
    title: string;
    description: string;
    image?: string;
    testimonialTitle?: string;
    testimonialDescription?: string;
  }>;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function SectorPageTemplate({
  sectorName,
  heroTitle,
  heroDescription,
  heroImage,
  aboutImage,
  description,
  keyOfferings,
  caseStudies,
  benefits,
}: SectorPageTemplateProps) {
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
      <Navbar defaultPage={sectorName} />

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

      {/* About This Sector Section */}
      <section className="py-28 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <div className="text-lg text-gray-700 space-y-6">
                <h2
                  className="text-3xl md:text-4xl font-bold text-impacta11 mb-8 text-left"
                >
                  Specialised Solutions for {sectorName}
                </h2>
                {description && description.map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-end pl-28">
              {aboutImage && (
                <img
                  src={aboutImage}
                  alt={`${sectorName} Solutions`}
                  className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm h-96 object-cover filter brightness-40 contrast-125 saturate-80 mix-blend-multiply bg-[#044bab]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      {keyOfferings && keyOfferings.length > 0 && (
        <section className="bg-gray-100 py-20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-impacta11 mb-12 text-center"
          >
            Key Offerings
          </motion.h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyOfferings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  className="p-6 border rounded-lg shadow bg-gray-50 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="absolute top-2 right-2 opacity-10 pointer-events-none">
                    <div 
                      className="w-16 h-16 text-impacta1"
                      dangerouslySetInnerHTML={{ __html: offering.icon }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-gray-700">{offering.title}</h3>
                    {offering.description && (
                      <p className="text-gray-700 text-sm">{offering.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Story Section (if provided) */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="bg-impacta12 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-left text-white">
              Success Story
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Large Image with Overlay */}
              <div className="relative overflow-hidden h-80 lg:h-96 rounded-lg shadow-lg">
                {caseStudies[0].image && (
                  <>
                    <img 
                      src={caseStudies[0].image} 
                      alt={caseStudies[0].title}
                      className="absolute inset-0 w-full h-full object-cover opacity-45"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
                        mixBlendMode: 'multiply',
                      }}
                    />
                  </>
                )}
              </div>

              {/* Success Story Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">{caseStudies[0].title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{caseStudies[0].description}</p>
                
                {/* Client Testimonial */}
                {caseStudies[0].testimonialTitle && caseStudies[0].testimonialDescription && (
                  <div className="bg-white bg-opacity-10 p-6 rounded-lg border-l-4 border-white">
                    <h4 className="text-white text-xl font-semibold mb-3">{caseStudies[0].testimonialTitle}</h4>
                    <p className="text-gray-200 text-lg leading-relaxed">{caseStudies[0].testimonialDescription}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-impacta11 mb-2 text-center"
          >
            Why Choose Impacta for {sectorName}?
          </h2>
          
          <p
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            British engineering excellence meets innovative design in every solution we deliver
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: 'easeOut'
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-impacta1 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-impacta11">{benefit.title}</h3>
                  <p className="text-gray-500 text-base">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
