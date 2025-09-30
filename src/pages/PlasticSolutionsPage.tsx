import ServicePageTemplate from "../components/ServicePageTemplate";

export default function PlasticSolutionsPage() {
  const keyFeatures = [
    {
      title: "Durability & Protection",
      description:
        "Our plastic containers and dunnage are designed to safeguard small components, ensuring long-lasting protection during handling and transportation.",
    },
    {
      title: "Customisability",
      description:
        "We tailor our solutions to meet your exact requirements, offering a wide range of materials and sizes.",
    },
    {
      title: "Sustainable and Reusable",
      description:
        "We focus on reusability, our plastic solutions are made to reduce waste and promote eco-friendly practices.",
    },
    {
      title: "Expert Design Support",
      description:
        "Our dedicated design team works closely with you to select the best materials and configurations.",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      step: 2,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      step: 3,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      step: 4,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ];

  return (
    <ServicePageTemplate
      serviceName="Plastic Solutions"
      sectorName="Plastic Solutions"
      heroTitle="Comprehensive Plastic Solutions"
      heroDescription="Durable, reusable, and customisable containers with tailored dunnage for optimal protection and organization."
      mainDescription="Plastic containers with appropriate dunnage offer an efficient and versatile solution for packaging small components, providing durability, stackability, and reusability. Their availability in various materials and sizes allows for customization to meet specific product requirements, enhancing protection and organization while promoting sustainable practices through reuse.
        Our design team is available to assist customers in selecting the appropriate materials for both boxes and internal dunnage, ensuring that the solutions meet their specific needs and provide optimal protection and functionality."
      keyFeatures={keyFeatures}
      processSteps={processSteps}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
