import SectorPageTemplateSimple from "../components/SectorPageTemplateSimple";
import heroImage from "../assets/hero/fabricationhero.jpeg";
import aboutImage from "../assets/hero/fabricationabout.jpeg";
import caseImage from "../assets/hero/fabricationcase.jpeg";

export default function GeneralFabricationPage() {
  const description = [
    "At Impacta Limited, our expertise extend far beyond sector-specific solutions. With decades of experience in steel fabrication, welding, and bespoke manufacturing, we are trusted by clients across a wide range of industries to deliver high-quality, custom solutions combining functionality, durability, and cost-effectiveness.",
    "Because we keep every stage of the manufacturing process in-house at our UK facilities, consistency, quality and shorter lead times are guaranteed. From custom stillages and frames to bespoke welded structures, our team works closely with clients to understand their unique requirements and deliver solutions that exceed expectations.",
    "Additionally, our repair and refurbishment services aid businesses who wish to extend the life of equipment, helping to save money while simultaneously reducing environmental impact. Whether you're in industrial manufacturing, logistics, or a specialist sector, Impacta Limited is your go-to partner to bring your fabrication projects to life.",
  ];

  const keyOfferings = [
    {
      title: "Welding",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
        </svg>`,
    },
    {
      title: "Steelwork",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
          <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
        </svg>`,
    },
    {
      title: "Bespoke Fabrication",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>`,
    },
    {
      title: "Repairs & Refurbishment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
    </svg>`,
    },
  ];

  const caseStudies = [
    {
      title: "Stakehill Pallet & Dunnage Ltd",
      description:
        "I have been dealing with Impacta for a few years now and I cannot recommend them enough. Any queries or problems and they are always rectified or answered. Special thanks to Georgia Goymer, she is polite and courteous and any problems I do have, she always sorts them out. She is a shining example for Impacta.",
      image: caseImage,
    },
  ];

  const benefits = [
    {
      title: "Proven Track Record",
      description:
        "Over 200 years of combined experience in steel fabrication, welding and bespoke manufacturing.",
    },
    {
      title: "Tailored Solutions",
      description: "Custom designs built to meet your specific requirements.",
    },
    {
      title: "Comprehensive In-House Capabilities",
      description:
        "All manufacturing processes are handled under one roof, ensuring quality and consistency.",
    },
    {
      title: "Sustainable Approach",
      description: "Repair and refurbishment services reduce cost and waste.",
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
