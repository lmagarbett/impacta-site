import ServicePageTemplate from "../components/ServicePageTemplate";

export default function PolyurethaneMouldingPage() {
  const keyFeatures = [
    {
      title: "Greater Protection",
      description:
        "Polyurethane provides a cushioned barrier that eliminates the risk of damage to components during handling and transportation.",
    },
    {
      title: "Custom Solutions",
      description:
        "Our UK-based factory produces moulding in a variety of shapes, sizes and colours, tailoring to your specific requirements.",
    },
    {
      title: "Quality & Precision",
      description:
        "All moulding is manufactured with meticulous attention to detail, to ensure that quality and performance stays consistent.",
    },
    {
      title: "Cost-Effective & Quick Turnaround",
      description:
        "With competitive pricing and efficient lead times, we deliver bespoke solutions that guarantee security and reliability.",
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
      serviceName="Polyurethane Moulding"
      sectorName="Polyurethane Moulding"
      heroTitle="Advanced Polyurethane Moulding"
      heroDescription="Custom-made polyurethane mouldings that deliver precision, durability, and protection for your components."
      mainDescription="Adding polyurethane (PU) to stillages helps eliminate the risk to components by providing a secure, cushioned environment that protects items from damage during handling and transportation, ensuring a reliable and effective working solution.
        Our UK-based factory specializes in bespoke polyurethane moulding, offering a wide range of shapes, sizes, and colours tailored to your specifications. We prioritize quality and precision, ensuring each product meets your unique needs. With competitive pricing and efficient lead times, we deliver customized solutions promptly and cost-effectively, making us your ideal partner for all bespoke polyurethane moulding requirements."
      keyFeatures={keyFeatures}
      processSteps={processSteps}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
