import { useState } from 'react';
import amLogo from '../assets/brands/am.png';
import bentleyLogo from '../assets/brands/bentley.png';
import bmwLogo from '../assets/brands/bmw.png';
import buseLogo from '../assets/brands/buse.png';
import fordLogo from '../assets/brands/ford.png';
import hondaLogo from '../assets/brands/honda.png';
import j9Logo from '../assets/brands/j9.png';
import jaguarLogo from '../assets/brands/jaguar.png';
import landroverLogo from '../assets/brands/landrover.png';
import nissanLogo from '../assets/brands/nissan.png';
import renaultLogo from '../assets/brands/renault.png';
import ruthleeLogo from '../assets/brands/ruthlee.png';
import tgwLogo from '../assets/brands/tgw.png';
import toyotaLogo from '../assets/brands/toyota.png';
import vauxhallLogo from '../assets/brands/vauxhall.png';
import volkswagenLogo from '../assets/brands/volkswagen.png';
import heroImage from '../assets/hero/testimonialhero.jpeg';

const testimonials = [
  {
    id: 1,
    quote: "I have been dealing with Impacta for a few years now and I cannot recommend them enough. Any queries or problems and they are always rectified or answered. Special thanks to Georgia Goymer, she is polite and courteous and any problems I do have, she always sorts them out. She is a shining example for Impacta.",
    author: "Craig Stephens",
    company: "Stakehill Pallet & Dunnage Ltd",
  }
];

const brandLogos = [
  amLogo, bentleyLogo, bmwLogo, buseLogo, fordLogo, hondaLogo,
  j9Logo, jaguarLogo, landroverLogo, nissanLogo, renaultLogo,
  ruthleeLogo, tgwLogo, toyotaLogo, vauxhallLogo, volkswagenLogo
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative text-white px-6 text-left overflow-hidden"
      style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 55%',
                    position: 'relative',
                    paddingTop: '10rem',
                    paddingBottom: '8rem'
                }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 pl-0 md:pl-48">
                    <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
                    <p className="max-w-2xl text-lg text-gray-200">
                        Trusted by Automotive, MOD, Healthcare, and Beyond — See Why Clients Choose Impacta
                    </p>
                    <h3 className="text-sm font-medium text-gray-300 pt-4">
                        British-made, built to last
                    </h3>
                </div>
      </section>


      {/* Breadcrumb Navigation */}
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
            <span className="text-impacta11 font-medium">Testimonials</span>
          </nav>
        </div>
      </section>

      {/* Testimonial Carousel - styled like case study section with brand logos background */}
      <section className="relative py-28 bg-white px-6 overflow-hidden">
        {/* Background Brand Logos */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 grid grid-cols-8 gap-8 transform scale-150">
            {Array.from({ length: 64 }, (_, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={brandLogos[index % brandLogos.length]}
                  alt="Brand Logo"
                  className="w-16 h-16 object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-12 text-left">
            Client Testimonials
          </h2>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200 shadow-sm">

              <blockquote className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              <div className="text-center">
                <h4 className="text-lg font-bold text-impacta11 mb-1">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 text-impacta11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 text-impacta11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-impacta11 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Collaboration Section */}
      <section 
        className="relative py-20 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #044BAB 100%)"
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're proud to partner with some of the world's most respected automotive and industrial brands, 
              delivering innovative packaging solutions that drive their success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {brandLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg hover:bg-white transition-all duration-300 group border border-white/20"
              >
                <img
                  src={logo}
                  alt={`Brand Logo ${index + 1}`}
                  className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-700 text-lg">
              And many more industry-leading companies trust Impacta for their packaging needs.
            </p>
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
    </div>
  );
}
