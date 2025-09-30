import { Link } from "react-router-dom";
import aboutUs1 from "../assets/aboutus1.jpeg";
import heroImage from "../assets/hero/aboutushero.jpeg";

const stats = [
  {
    number: "35+",
    label: "Years of Experience",
    description: "Serving industries since 1989",
  },
  {
    number: "200+",
    label: "Years of Combined Expertise",
    description: "From our specialist team",
  },
  {
    number: "100%",
    label: "In-House Manufacturing",
    description: "In Bilston, Wolverhampton, UK",
  },
  {
    number: "??%",
    label: "Manufacturer Savings",
    description: "Through repairing and refurbishing",
  },
];

const values = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
      </svg>`,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every product we deliver, ensuring reliability and durability.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0Z" />
      </svg>`,
    title: "Environmental Responsibility",
    description:
      "Our returnable packaging solutions reduce waste and environmental impact across supply chains.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
      </svg>`,
    title: "Innovation",
    description:
      "We continuously develop cutting-edge solutions to meet evolving industry challenges.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157l.001.003Z" />
      </svg>`,
    title: "Partnership",
    description:
      "We build long-term relationships with our clients, understanding their unique needs and challenges.",
  },
];

export default function AboutUsSection() {
  return (
    <div className="bg-white text-gray-800">
      <section
        className="relative text-white px-6 text-left overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
          position: "relative",
          paddingTop: "10rem",
          paddingBottom: "8rem",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 pl-0 xl:pl-48">
          <h1 className="text-4xl font-bold mb-4">About Impacta</h1>
          <p className="max-w-2xl text-lg text-gray-200">
            Pioneering sustainable packaging solutions since 1989, committed to
            reducing waste, cutting costs, and optimising supply chains across
            multiple industries.
          </p>
          <h3 className="text-sm font-medium text-gray-300 pt-4">
            British-made, built to last
          </h3>
        </div>
      </section>

      <section className="py-4 px-6">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center text-sm">
            <Link
              to="/"
              className="text-impacta11 hover:text-impacta1 transition-colors duration-200"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-impacta11 font-medium">About Us</span>
          </nav>
        </div>
      </section>

      <section className="py-28 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12">
            <div className="flex-1">
              <div className="text-lg text-gray-700 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-impacta11 mb-8 text-left">
                  Our Story
                </h2>
                <p className="text-base leading-relaxed">
                  At Impacta Limited, we design, manufacture, and repair
                  high-quality packaging and handling solutions across textiles,
                  plastics, steel, and polyutherane - all from one UK facility.
                  From container repair and specialised welding to custom
                  fabrication and painting, every single project is finished
                  in-house to preserve cost-effectiveness, consistency and
                  control.
                </p>
                <p className="text-base leading-relaxed">
                  Since 1989, Impacta have been collaborating with leading
                  organisations within the automotive, defence, healthcare,
                  agriculture and more industries, delivering reliable solutions
                  built to endure. We are a British manufacturer with full
                  end-to-end capability, opting to keep all processes under one
                  roof to ensure rapid turnaround time, lower costs, and closer
                  working with clients.
                </p>
                <p className="text-base leading-relaxed">
                  With a skilled team of many years of collective experience, we
                  pride ourselves on our ability to innovate while keeping
                  service personal and flexible. Whether it's extending the life
                  of a container through repair and repainting or creating
                  bespoke solutions for complex handling challenges, we help
                  customers cut costs, reduce waste, and stay operational.
                </p>
                <p className="text-base leading-relaxed">
                  Impacta does more than just product delivery, we supply trust,
                  sustainability, and long-term value.
                </p>
              </div>
            </div>
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <img
                src={aboutUs1}
                alt="Impacta Facilities"
                className="rounded-lg shadow-lg w-full max-w-xs md:max-w-sm h-96 object-cover object-center mx-auto md:mx-0 filter brightness-40 contrast-125 saturate-80 mix-blend-multiply bg-[#044bab]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-base md:text-lg font-semibold text-impacta11 mb-8 text-left pb-2 text-opacity-75">
            By the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-3xl font-bold text-impacta11 mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-impacta12 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let’s work together to create smarter, sustainable packaging
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-6">
          Have a project in mind? Our team of experts is ready to help you
          reduce waste, cut costs, and optimise your supply chain.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-impacta7 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
