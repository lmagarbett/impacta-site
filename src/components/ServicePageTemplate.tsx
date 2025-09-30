import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";

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
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
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
  seoTitle,
  seoDescription,
  canonical,
}: ServicePageTemplateProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white text-gray-800">
      <SEO
        title={
          seoTitle || `${serviceName} — Impacta Ltd`
        }
        description={
          seoDescription || heroDescription || `Specialised solutions for ${serviceName}.`
        }
        canonical={canonical || (typeof window !== "undefined" ? window.location.href : undefined)}
        image={heroImage}
      />
      <Navbar defaultPage={serviceName} />

      <section
        className="relative text-white px-6 text-left overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "8rem",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 pl-0 xl:pl-48">
          <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
          <p className="max-w-2xl text-lg text-gray-200">{heroDescription}</p>
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
            <span className="text-gray-500">Services</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-impacta11 font-medium">{sectorName}</span>
          </nav>
        </div>
      </section>

      <section className="py-28 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <div className="text-lg text-gray-700 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-8 text-left">
                  Specialised Solutions for {serviceName}
                </h2>
                {mainDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-end pl-28">
              {serviceImage && (
                <img
                  src={serviceImage}
                  alt={`${serviceName} Solutions`}
                  className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm h-96 object-cover filter brightness-40 contrast-125 saturate-80 mix-blend-multiply bg-[#044bab]"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-impacta1 mb-12 text-center">
            Why Choose Our {serviceName}
          </h2>

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
                  ease: "easeOut",
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
                    <path
                      fillRule="evenodd"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {processSteps && processSteps.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600">
                How we deliver exceptional results
              </p>
            </div>

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
                  <p className="text-gray-600">{step.description}</p>
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
