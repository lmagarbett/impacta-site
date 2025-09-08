import SectorPageTemplateSimple from '../components/SectorPageTemplateSimple';
import heroImage from '../assets/hero/defencehero.jpeg';
import aboutImage from '../assets/hero/defenceabout.jpeg';

export default function DefensePage() {
  const description = [
    "Impacta supports the UK Ministry of Defence with robust, dependable solutions tailored towards demanding environments. We acknowledge that defence logistics demand the highest levels of security, durability and responsiveness - all of which we deliver on all fronts.",
    "Our in house design and manufacturing ensures that we maintain complete control of the process, from the initial conception through to final delivery. With heavy-duty packaging and handling systems built to withstand extreme conditions, we help defence contractors cut costs, improve reliability and reduce environmental impact through repair and refurbishment."
  ]

  const keyOfferings = [
    {
        title: "Secure Packaging",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.814 3.051 9.79 5.85 12.186a26.39 26.39 0 0 0 3.086 2.537.75.75 0 0 0 1.628 0 26.39 26.39 0 0 0 3.086-2.537C18.699 19.54 21.75 15.564 21.75 9.75a12.74 12.74 0 0 0-.635-3.985.75.75 0 0 0-.722-.515 11.209 11.209 0 0 1-7.877-3.08ZM15.75 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Steelwork",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>`
      },
      {
        title: "Repairs & Refurbishment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5V3Z" clipRule="evenodd" />
        </svg>`
      },
      {
        title: "Heavy-Duty Fabrication",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
        </svg>`
      }
  ];

  const benefits = [
    {
      title: "British Manufacturer",
      description: "Our production facilities are based entirely in the UK, ensuring security and reliability."
    },
    {
      title: "Military-Grade Durability",
      description: "Our packaging solutions are engineered for the toughest environments, ensuring high protection."
    },
    {
      title: "Lifecycle Extension",
      description: "We repair and refurbish existing packaging to save costs and reduce waste."
    },
    {
      title: "Quick Turnaround",
      description: "Agile manufacturing processes ensure fast delivery times to meet urgent defence needs."
    },
  ];

  return (
    <SectorPageTemplateSimple
      sectorName="Ministry of Defence"
      heroTitle="Ministry of Defence Solutions"
      heroDescription="Trusted by the UK's defence sector for secure, durable and cost efficient solutions that meet the highest standards."
      heroImage={heroImage}
      aboutImage={aboutImage}
      description={description}
      keyOfferings={keyOfferings}
      benefits={benefits}
      ctaTitle="Secure Your Defense Supply Chain"
      ctaDescription="Partner with a trusted MOD supplier for your critical defense packaging needs."
    />
  );
}
