import ServicePageTemplate from "../components/ServicePageTemplate";
import heroImage from "../assets/hero/steelhero.JPG";
import serviceImage from "../assets/hero/steelabout.JPG";

export default function SteelFabricationPage() {
  const keyFeatures = [
    {
      title: "Expert Craftsmanship",
      description:
        "Our skilled workforce brings extensive experience in steel manufacturing, ensuring excellence in every project.",
    },
    {
      title: "Versatile Solutions",
      description:
        "We cater to diverse industrial needs, tailoring our services to meet diverse project requirements.",
    },
    {
      title: "Swift Lead Times",
      description:
        "With efficient processes, we deliver projects promptly without compromising on quality.",
    },
    {
      title: "Competitive Rates",
      description:
        "Our pricing is designed to make high-quality steel fabrication accessible to businesses of all sizes.",
    },
  ];

  

  return (
    <ServicePageTemplate
      serviceName="Steel Fabrication"
      sectorName="Steel Fabrication"
      heroTitle="Expert Steel Fabrication"
      heroImage={heroImage}
      serviceImage={serviceImage}
      heroBackgroundPosition="center 20%"
      heroDescription="High-quality steel manufacturing manufactured in the UK, with speed and efficiency."
      mainDescription="Our UK welding factory welcomes steel inquiries from all industries, committed to delivering high-quality manufacturing with swift lead times and competitive rates. Our skilled workforce brings extensive experience in the steel sector, ensuring excellence in every project and enabling us to serve diverse industrial needs efficiently and reliably."
      keyFeatures={keyFeatures}
      ctaTitle="Lorem Ipsum Dolor Sit Amet"
      ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
  );
}
