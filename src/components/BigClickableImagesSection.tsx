import React from 'react';
import impactaentrance from '../assets/impactaentrance.jpeg';
import herobg2 from '../assets/herobg2.jpeg';
import herobg3 from '../assets/herobg3.jpeg';

const BigClickableImagesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
      
      {/* First image - Welding / Repairs */}
      <a
        href="/services/repairs-maintenance" // Link to repairs section
        className="relative group overflow-hidden h-80 md:h-96 rounded-lg shadow-lg"
      >
        <img
          src={herobg2}
          alt="Welding and Repairs"
          className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
            mixBlendMode: 'multiply',
          }}
        />
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Repairs & Maintenance</h3>
            <p className="text-lg text-gray-200">Professional repair and maintenance solutions</p>
          </div>
        </div>
      </a>

      {/* Second image - Textile Manufacturing / Polyurethane Molding */}
      <a
        href="/services/welding-services" // Link to textiles or other service
        className="relative group overflow-hidden h-80 md:h-96 rounded-lg shadow-lg"
      >
        <img
          src={herobg3}
          alt="Textile Manufacturing"
          className="absolute inset-0 w-full h-full object-cover opacity-45 transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom right, rgba(4, 75, 171, 0.5), rgba(15, 23, 42, 0.6))",
            mixBlendMode: 'multiply',
          }}
        />
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Welding Services</h3>
            <p className="text-lg text-gray-200">Expert welding solutions for various applications</p>
          </div>
        </div>
      </a>

        </div>

    </section>
  );
};

export default BigClickableImagesSection;
