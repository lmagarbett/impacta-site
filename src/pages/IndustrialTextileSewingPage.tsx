import ServicePageTemplate from '../components/ServicePageTemplate';

export default function IndustrialTextileSewingPage() {
  const keyFeatures = [
    {
      title: "Premium Material Selection",
      description: "We use a variety of high-quality textiles to ensure strength, resilience, and long-lasting performance."
    },
    {
      title: "Skilled Craftsmanship",
      description: "Our experienced sewing team combines precision and expertise to deliver consistently reliable results."
    },
    {
      title: "Custom Packaging Solutions",
      description: "Every product is designed to meet your exact specifications, ensuring optimal protection and fit."
    },
    {
      title: "Trusted Quality",
      description: "With durability and excellence at the core, we provide packaging solutions that stand up to the toughest of industrial demands."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      step: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      step: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      step: 4,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ];

  return (
    <ServicePageTemplate
      serviceName="Industrial Textile Sewing"
      sectorName="Industrial Textile Sewing"
      heroTitle="Professional Industrial Textile Sewing"
      heroDescription="Durable, expertly crafted textile packaging solutions tailored to protect your products with precision and quality."
      mainDescription="Our textile factory specializes in delivering high-quality solutions by utilizing a diverse selection of premium materials, ensuring durability and excellence. With a team of skilled sewers, we craft exceptional packaging that offers optimal protection for your products, combining craftsmanship and top-tier textiles to meet your specific needs."
      keyFeatures={keyFeatures}
      processSteps={processSteps}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
