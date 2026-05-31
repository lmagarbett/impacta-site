import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import galleryHero from "../assets/hero/galleryhero.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import g1 from "../assets/gallery/gallery1.jpg";
import g2 from "../assets/gallery/gallery2.jpg";
import g3 from "../assets/gallery/gallery3.jpg";
import g4 from "../assets/gallery/gallery4.jpg";
import g5 from "../assets/gallery/gallery5.jpg";
import g6 from "../assets/gallery/gallery6.jpg";
import g7 from "../assets/gallery/gallery7.jpg";
import g8 from "../assets/gallery/gallery8.jpg";
import g9 from "../assets/gallery/gallery9.jpg";
import g10 from "../assets/gallery/gallery10.jpg";
import g11 from "../assets/gallery/gallery11.jpg";
import g12 from "../assets/gallery/gallery12.jpg";
import g13 from "../assets/gallery/gallery13.jpg";
import g14 from "../assets/gallery/gallery14.jpg";
import g15 from "../assets/gallery/gallery15.jpg";
import g16 from "../assets/gallery/1773659024013.jpg";
import g17 from "../assets/gallery/1773659024376.jpg";
import g18 from "../assets/gallery/1773659024543.jpg";
import g19 from "../assets/gallery/1773659025683.jpg";
import g20 from "../assets/gallery/1773659025748.jpg";
import g21 from "../assets/gallery/1773659025835.jpg";
import g22 from "../assets/gallery/image00001.jpeg";
import g23 from "../assets/gallery/image00002.jpeg";
import g24 from "../assets/gallery/image00003.jpeg";
import g25 from "../assets/gallery/image00004.jpeg";
import g26 from "../assets/gallery/image00005.jpeg";
import g27 from "../assets/gallery/image00006.jpeg";
import g28 from "../assets/gallery/image00007.jpeg";
import g29 from "../assets/gallery/image00008.jpeg";
import g30 from "../assets/gallery/image00009.jpeg";
import g31 from "../assets/gallery/image00010.jpeg";
import g32 from "../assets/gallery/image00011.jpeg";
import g33 from "../assets/gallery/image00012.jpeg";
import g34 from "../assets/gallery/image00013.jpeg";
import g35 from "../assets/gallery/image00014.jpeg";
import g36 from "../assets/gallery/1775895646928.jpg";

export default function GalleryPage() {
  const images: { src: string; alt: string }[] = [
    { src: g1, alt: "Soft Flight Case" },
    { src: g2, alt: "Steel Trolley" },
    { src: g3, alt: "Engine Crank Case Packaging" },
    { src: g4, alt: "Sewing Process" },
    { src: g5, alt: "Textile Bag Packaging" },
    { src: g6, alt: "CNC Cutting Machine" },
    { src: g7, alt: "Doorframe Packaging Solution" },
    { src: g8, alt: "Fitting Team" },
    { src: g9, alt: "Bespoke Textile Bag System" },
    { src: g10, alt: "Bespoke Textile Bag System" },
    { src: g11, alt: "Bespoke Steel Mesh Enclosure" },
    { src: g12, alt: "Large Bespoke Stillage" },
    { src: g13, alt: "Durable Chute Sock" },
    { src: g14, alt: "Bespoke Textile Dunnage" },
    { src: g15, alt: "Returnable Plastic Containers"},
    { src: g16, alt: "Pigeon Hole Stillage" },
    { src: g17, alt: "Small Pigeon Hole Stillage" },
    { src: g18, alt: "Enclosed Protective Stillage" },
    { src: g19, alt: "Mobile Compartment Stillage" },
    { src: g20, alt: "Stackable Transport Stillage" },
    { src: g21, alt: "Mesh-Sided Protective Stillage" },
    { src: g22, alt: "Stillage Assembly" },
    { src: g23, alt: "Pallet Pack System" },
    { src: g24, alt: "Bespoke Divider Sets" },
    { src: g25, alt: "Branded Quality Seal" },
    { src: g26, alt: "Heavy Duty Kitting Sleeve" },
    { src: g27, alt: "Heavy Duty Kitting Sleeve" },
    { src: g28, alt: "Textile Dunnage Detail" },
    { src: g29, alt: "Automotive Component Cells" },
    { src: g30, alt: "Secure Transit Unit" },
    { src: g31, alt: "Vertical Tray Stack" },
    { src: g32, alt: "Tiered Component Trays" },
    { src: g33, alt: "Nestable Logistics Trays" },
    { src: g34, alt: "Custom Foam Inserts" },
    { src: g35, alt: "High-Impact Polypropylene Tray" },
    { src: g36, alt: "Yellow fabricated stillage" },
  ];

  return (
    <div className="bg-white text-gray-800">
      <SEO
        title="Gallery | Impacta Ltd"
        description="A look at Impacta's work and people — your one-stop shop for component handling, packaging, fabrication, moulding, textiles and more."
        canonical={typeof window !== "undefined" ? window.location.href : undefined}
      />
    <Navbar defaultPage="Gallery" />

    <section
        className="relative text-white px-6 text-left overflow-hidden"
        style={{
          backgroundImage: `url(${galleryHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "8rem",
        }}
      >

      <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 pl-0 xl:pl-48">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="max-w-2xl text-lg text-gray-200">
            A visual record of our process, craftsmanship and scale — built in-house and delivered on site.
          </p>
          <h3 className="text-sm font-medium text-gray-300 pt-4">
            British-made, built to last
          </h3>
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center text-sm">
            <Link
              to="/"
              className="text-impacta11 hover:text-impacta1 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-500">About</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-impacta11 font-medium">Gallery</span>
          </nav>
        </div>
      </section>

      <section className="py-12 bg-white px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <div className="text-lg text-gray-700 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-8 text-center">
                  A snapshot of Impacta
                </h2>
                <p className="text-base leading-relaxed text-center">
                  From design and fabrication to delivery and support, Impacta is your 'one-stop shop' for high-quality, bespoke packaging and handling solutions - all manufactured under one roof in the UK.
                </p>
                <p className="text-base leading-relaxed text-center">
                  Explore examples of our projects across <Link to="/services/steel-fabrication" className="text-impacta7 font-semibold hover:underline">steel fabrication</Link>, <Link to="/services/industrial-textile-sewing" className="text-impacta7 font-semibold hover:underline">industrial textile sewing</Link>, and <Link to="/services/plastic-solutions" className="text-impacta7 font-semibold hover:underline">plastic solutions</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-sm shadow-sm bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-60 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                {img.alt && img.alt.trim() !== "" && (
                  <figcaption
                    className="absolute inset-x-0 bottom-0 p-3 text-xs sm:text-sm text-white bg-black/30 backdrop-blur-sm"
                  >
                    {img.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-impacta12 text-white py-12 px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Let’s work together to create smarter, sustainable packaging
              </h2>
              <p className="text-gray-200 max-w-2xl mx-auto mb-6">
                Have a project in mind? Our team of experts is ready to help you
                reduce waste, cut costs, and optimise your supply chain.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-impacta7 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </section>
      
            <Footer />
    </div>
  );
}
