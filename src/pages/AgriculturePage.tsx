import SectorPageTemplateSimple from '../components/SectorPageTemplateSimple';
import heroImage from '../assets/hero/agriculturehero.jpeg';
import aboutImage from '../assets/hero/agricultureabout.jpeg';

export default function AgriculturePage() {
  const description = [
    "Agriculture logistics require solutions that can endure tough, outdoor conditions on a daily basis. At Impacta Limited, we design and manufacture bespoke packaging, containers and fabricated products that aid farms in operating smoothly.",
    "Our rugged steel, textile and plastic products are manufactured for reliability in the field, meanwhile our repair and refurbishment services offer a way to extend the life of vital agricultural equipment. With all manufacturing carried out locally inside the UK, we deliver faster turnaround times and tailored solutions to meet the unique needs of the agriculture sector."
  ];

  const keyOfferings = [
    {
        title: "Durable Packaging",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Welding",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Repairs & Refurbishment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
          <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
          <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>`
      },
      {
        title: "Heavy-Duty Fabrication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z" clipRule="evenodd" />
        </svg>`
      }
  ]

  const benefits = [
    {
      title: "Rugged Solutions",
      description: "Built to withstand harsh outdoor conditions, ensuring longevity and reliability in the field.",
    },
    {
      title: "Cost Savings",
      description: "Repairs and refurbishment services keep replacement spend to a minimum."
    },
    {
      title: "Flexible Design",
      description: "Bespoke solutions tailored to the unique needs of agricultural operations."
    },
    {
      title: "UK Based Expertise",
      description: "Faster turnaround times with UK-based production."
    }
  ];

  return (
    <SectorPageTemplateSimple
      sectorName="Agriculture"
      heroTitle="Agricultural Solutions"
      heroDescription="Durable, cost-effective packaging solutions designed to withstand the demands of modern farming and agriculture."
      heroImage={heroImage}
      aboutImage={aboutImage}
      description={description}
      keyOfferings={keyOfferings}
      benefits={benefits}
      ctaTitle="Cultivate Supply Chain Success"
      ctaDescription="Partner with us to develop packaging solutions that support your agricultural operations."
    />
  );
}
