import ServicePageTemplate from "../components/ServicePageTemplate";

export default function RepairMaintenancePage() {
  const keyFeatures = [
    {
      title: "Sustainability Focused",
      description:
        "Our program integrates steel, textiles, plastics, and polyurethane moulding, maximising reuse and minimising waste.",
    },
    {
      title: "Circular Economy",
      description:
        "We promote a closed-loop system, supporting eco-friendly practices and reducing reliance on single-use packaging.",
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "By reusing and repairing existing packaging, we reduce expenses while maintaining high standards of safety and reliability.",
    },
    {
      title: "Commitment to Clients & the Planet",
      description:
        "Every aspect of our program reflects our dedication to both customer satisfaction and environmental responsibility.",
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
      serviceName="Repairs & Maintenance"
      sectorName="Repairs & Maintenance"
      heroTitle="Expert Repair & Maintenance"
      heroDescription="Extending the life of your packaging and handling solutions through reuse, repair and sustainable innovation."
      mainDescription="Impacta's commitment to sustainability is demonstrated through its innovative reusable and sustainable packaging program, which emphasizes reusing current packaging by integrating this program for steel, textiles, plastics and polyurethane moulding. Impacta provides a cost-effective solution for securely transporting goods while promoting circular economy principles. This initiative not only helps clients lower packaging costs but also supports eco-friendly practices, reinforcing Impacta's dedication to sustainable development and responsible logistics."
      keyFeatures={keyFeatures}
      processSteps={processSteps}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
