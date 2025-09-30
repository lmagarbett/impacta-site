import biglogo from '../assets/biglogo.png';
import linkedin from '../assets/linkedin.png';
import x from '../assets/x.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-impacta11 text-white py-12">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <img src={biglogo} alt="Impacta Logo" className="h-14 mb-3 filter brightness-0 invert" />
      <p className="text-sm text-gray-300">
        Component handling specialists Fabrication in Textiles, Steel and Plastics
      </p>
      <a 
        href="/QMF40-Impacta-Terms-and-Conditions.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block mt-3 text-sm text-gray-300 hover:text-bluehover transition"
      >
        Terms and Conditions
      </a>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><Link to="/" className="hover:text-bluehover transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-bluehover transition">About</Link></li>
        <li><Link to="/services/plastic-solutions" className="hover:text-bluehover transition">Services</Link></li>
        <li><Link to="/sectors/automotive" className="hover:text-bluehover transition">Sectors</Link></li>
        <li><Link to="/contact" className="hover:text-bluehover transition">Contact</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
      <p className="text-sm text-gray-300">Field St, Bradley, <br />Bilston WV14 8RW</p>
      <p className="text-sm mt-2"><strong>Phone:</strong> +44 01902 496307</p>
      <p className="text-sm"><strong>Email:</strong> sales@impacta.co.uk</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Social</h3>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/company/impactaltd/posts/?feedView=all" aria-label="LinkedIn" className="hover:text-bluehover transition"><img src={linkedin} alt="Linked In" className="h-4 mb-3" /></a>
        <a href="https://x.com/Impacta_ltd" aria-label="X" className="hover:text-bluehover transition"><img src={x} alt="X" className="h-4 mb-3 filter brightness-0 invert" /></a>
      </div>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
    © 2021-2025 Impacta Ltd. All rights reserved.
  </div>
</footer>
    )
}