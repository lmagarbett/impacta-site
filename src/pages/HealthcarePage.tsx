import SectorPageTemplateSimple from '../components/SectorPageTemplateSimple';
import heroImage from '../assets/hero/healthcarehero.jpeg';
import aboutImage from '../assets/hero/healthcareabout.jpeg';

export default function HealthcarePage() {
  const description = [
    "Healthcare logistics demand hygienic, reliable and precise solutions - Impacta provides all of this and more. From the transportation of delicate equipment to storing medical consumables safely, our packaging and fabrication solutions ensure that healthcare providers can focus on what matters most: patient care.",
    "With expertise in textiles, plastics, and polyutherane, we design and manufacture products that meet stringent healthcare standards, our in-house team guarantees consistent quality and compliance. Additionally, our repair and recycling services aid in reducing costs and environmental impact within the healthcare sector."
  ]

  const keyOfferings = [
    {
        title: "Sterile Packaging",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
          <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356H3a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-2.053-1.19A6.72 6.72 0 0 0 12 5.25a6.72 6.72 0 0 0-3.1.197 6.783 6.783 0 0 0-2.053 1.19A6.744 6.744 0 0 0 5.657 8.69 6.72 6.72 0 0 0 5.25 12a6.72 6.72 0 0 0 .407 3.1c.253.762.62 1.463 1.19 2.053a6.784 6.784 0 0 0 2.053 1.19c.95.382 1.997.407 3.1.407s2.15-.025 3.1-.407a6.783 6.783 0 0 0 2.053-1.19 6.744 6.744 0 0 0 1.19-2.053c.382-.95.407-1.997.407-3.1s-.025-2.15-.407-3.1Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Plastic Solutions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H13.5a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-5.206-5.077ZM15.75 9a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5Zm-3.75 3a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75H12Zm-3.75 3a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75h-1.5Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Textile Inserts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.814 3.051 9.79 5.85 12.186a26.39 26.39 0 0 0 3.086 2.537.75.75 0 0 0 1.628 0 26.39 26.39 0 0 0 3.086-2.537C18.699 19.54 21.75 15.564 21.75 9.75a12.74 12.74 0 0 0-.635-3.985.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08ZM15.75 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Repairs & Refurbishment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>`
      }
  ];

  const benefits = [
    {
      title: "Hygeinic Materials",
      description: "Utilising materials that are designed for safe medical use.",
    },
    {
      title: "Precise Engineering",
      description: "Protecting sensitive medical equipment with tailored solutions."
    },
    {
      title: "Cost-Efficient Repairs",
      description: "Extending the lifecycle of products through expert refurbishment."
    },
    {
      title: "Compliance Assured",
      description: "Our packaging solutions meet the regulatory requirements for healthcare applications."
    },
  ];

  return (
    <SectorPageTemplateSimple
      sectorName="Healthcare"
      heroTitle="Healthcare & Medical Solutions"
      heroDescription="Reliable, hygienic packaging and fabrication solutions for hospitals, labs, and healthcare providers nationwide."
      heroImage={heroImage}
      aboutImage={aboutImage}
      description={description}
      keyOfferings={keyOfferings}
      benefits={benefits}
      ctaTitle="Protect Your Medical Supply Chain"
      ctaDescription="Ensure patient safety with our regulatory-compliant healthcare packaging solutions."
    />
  );
}
