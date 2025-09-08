import { useState, useEffect } from 'react';
import biglogo from './assets/biglogo.png';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SalesTeam from './components/SalesTeam';
import staff1 from './assets/staff/staff1.jpg';
import staff2 from './assets/staff/staff2.png';
import TeamMembers from './components/TeamMembers';

export default function AllTeam() {
    const [scrolled, setScrolled] = useState(false);
    const warehouseBg = "/src/assets/impactawh.JPEG";

    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 100); 
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <Navbar defaultPage="Team" />
            
            {/* Hero Section */}
            <section 
                className="relative text-white px-6 text-left overflow-hidden"
                style={{
                    backgroundImage: `url(${warehouseBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    paddingTop: '10rem',
                    paddingBottom: '8rem'
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>
                
                <div className="relative z-10 pl-0 md:pl-48">
                    <h1 className="text-4xl font-bold mb-4">Our Team</h1>
                    <p className="max-w-2xl text-lg text-gray-200">
                        Meet the people behind Impacta's success. Our team of experts is dedicated to delivering the highest quality service and solutions.
                    </p>
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
            <span className="text-impacta11 font-medium">Meet the Team</span>
          </nav>
        </div>
      </section>

            {/* Introduction Section */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-black mb-6">Driven by Excellence</h2>
                    <p className="text-lg mb-10 max-w-3xl mx-auto">
                        At Impacta, our team brings together decades of combined experience in the automotive industry. 
                        We are passionate about delivering exceptional service and building lasting relationships with our clients.
                    </p>
                </div>
            </section>

            <TeamMembers />
            
            <Footer />
        </div>
    );
}