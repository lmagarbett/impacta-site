import SectorPageTemplateSimple from '../components/SectorPageTemplateSimple';
import heroImage from '../assets/hero/fabricationhero.jpeg';
import aboutImage from '../assets/hero/fabricationabout.jpeg';
import caseImage from '../assets/hero/fabricationcase.jpeg';

export default function GeneralFabricationPage() {
  const description = [
    "At Impacta Limited, our expertise extend far beyond sector-specific solutions. With decades of experience in steel fabrication, welding, and bespoke manufacturing, we are trusted by clients across a wide range of industries to deliver high-quality, custom solutions combining functionality, durability, and cost-effectiveness.",
    "Because we keep every stage of the manufacturing process in-house at our UK facilities, consistency, quality and shorter lead times are guaranteed. From custom stillages and frames to bespoke welded structures, our team works closely with clients to understand their unique requirements and deliver solutions that exceed expectations.",
    "Additionally, our repair and refurbishment services aid businesses who wish to extend the life of equipment, helping to save money while simultaneously reducing environmental impact. Whether you're in industrial manufacturing, logistics, or a specialist sector, Impacta Limited is your go-to partner to bring your fabrication projects to life."
  ]

  const keyOfferings = [
    {
        title: "Welding",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Steelwork",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 1 15.75 3h-7.5a3 3 0 0 1-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
        </svg>`
      },
      {
        title: "Bespoke Fabrication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
          <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356H3a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-2.053-1.19A6.72 6.72 0 0 0 12 5.25a6.72 6.72 0 0 0-3.1.197 6.783 6.783 0 0 0-2.053 1.19A6.744 6.744 0 0 0 5.657 8.69 6.72 6.72 0 0 0 5.25 12a6.72 6.72 0 0 0 .407 3.1c.253.762.62 1.463 1.19 2.053a6.784 6.784 0 0 0 2.053 1.19c.95.382 1.997.407 3.1.407s2.15-.025 3.1-.407a6.783 6.783 0 0 0 2.053-1.19 6.744 6.744 0 0 0 1.19-2.053c.382-.95.407-1.997.407-3.1s-.025-2.15-.407-3.1Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Repairs & Refurbishment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
        </svg>`
      }
  ];

  const caseStudies = [
    {
      title: "Stakehill Pallet & Dunnage Ltd",
      description: "I have been dealing with Impacta for a few years now and I cannot recommend them enough. Any queries or problems and they are always rectified or answered. Special thanks to Georgia Goymer, she is polite and courteous and any problems I do have, she always sorts them out. She is a shining example for Impacta.",
      image: caseImage,
    },
  ];

  const benefits = [
    {
      title: "Proven Track Record",
      description: "Over 200 years of combined experience in steel fabrication, welding and bespoke manufacturing."
    },
    {
      title: "Tailored Solutions",
      description: "Custom designs built to meet your specific requirements."
    },
    {
      title: "Comprehensive In-House Capabilities",
      description: "All manufacturing processes are handled under one roof, ensuring quality and consistency."
    },
    {
      title: "Sustainable Approach",
      description: "Repair and refurbishment services reduce cost and waste."
    },
  ];

  return (
    <SectorPageTemplateSimple
      sectorName="General Fabrication"
      heroTitle="Custom Fabrication Solutions"
      heroDescription="Flexible, in-house fabrication services tailored to your unique needs, including steelwork and welding, plastics and textiles."
      heroImage={heroImage}
      aboutImage={aboutImage}
      description={description}
      keyOfferings={keyOfferings}
      caseStudies={caseStudies}
      benefits={benefits}
      ctaTitle="Engineer Your Perfect Solution"
      ctaDescription="Let us create a custom packaging solution that perfectly fits your unique requirements."
    />
  );
}
