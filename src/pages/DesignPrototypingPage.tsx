import ServicePageTemplate from "../components/ServicePageTemplate";

export default function DesignPrototypingPage() {
  const keyFeatures = [
    {
      title: "Tailored Solutions",
      description:
        "Our design team develops customised packaging that aligns with your specific component and logistics needs.",
    },
    {
      title: "Prototype & Trial",
      description:
        "We offer a buy-off stage with working prototypes, allowing you to test form and function before bulk production.",
    },
    {
      title: "On-Site Support",
      description:
        "We provide site visits to enable better understanding of your operations and in turn greater delivery of solutions that seamlessly fit into your workflow.",
    },
    {
      title: "Expertise & Reliability",
      description:
        "With years of design experience, we ensure our solutions maximise efficiency, protection as well as quality standards.",
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
      serviceName="Design and Prototyping"
      sectorName="Design and Prototyping"
      heroTitle="Expert Design and Prototyping Services"
      heroDescription="Tailored packaging and handling solutions designed, tested, and refined to meet your specific needs."
      mainDescription="Our comprehensive design service is dedicated to helping customers develop optimal component handling and packaging solutions tailored to their specific needs, ensuring efficient delivery of goods. Our experienced team specializes in designing and refining solutions that meet customer requirements, supported by a prototype service that facilitates a buy-off process, allowing clients to trial designs in terms of both form and function before committing to bulk production. Additionally, we offer site visits to better understand your operational environment and provide personalized support, ensuring the final solution aligns perfectly with your logistics and quality standards."
      keyFeatures={keyFeatures}
      processSteps={processSteps}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
