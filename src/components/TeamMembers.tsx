import { motion } from "motion/react";
import staff1 from "../assets/staff/staff1.jpg";
import staff2 from "../assets/staff/staff2.png";
import staff8 from "../assets/staff/staff8.jpg";
import staff3 from "../assets/staff/staff3.jpg";
import staff4 from "../assets/staff/staff4.jpg";
import staff5 from "../assets/staff/staff5.jpg";
import staff6 from "../assets/staff/staff6.jpg";
import staff7 from "../assets/staff/staff7.jpg";

const teamMembers = [
  {
    name: "Warren Morgan",
    role: "Managing Director",
    description:
      "Provides strategic leadership for the business, overseeing operations, customer relationships and long-term growth initiatives.",
    image: staff8,
  },
  {
    name: "Georgia Goymer",
    role: "Sales Director",
    description:
      "Leads business development activities, managing customer accounts and identifying new opportunities across key industries.",
    image: staff1,
  },
  {
    name: "Karen Hartlebury",
    role: "Financial Controller",
    description:
      "Oversees the company's financial management, including budgeting, reporting, cash flow and regulatory compliance.",
    image: staff7,
  },
  {
    name: "Dimitrijus Seliuginas",
    role: "CAD/Engineering",
    description:
      "Develops technical designs and engineering solutions, producing detailed CAD models and manufacturing drawings for bespoke projects.",
    image: staff6,
  },
  {
    name: "Jonathan Churms",
    role: "CAD Engineer Manager",
    description:
      "Manages the engineering team and design processes, ensuring projects are delivered efficiently and meet customer specifications.",
    image: staff3,
  },
  {
    name: "Jack Titley",
    role: "Textile Supervisor",
    description:
      "Supervises textile production activities, coordinating workflow, quality standards and on-time delivery of customer orders.",
    image: staff5,
  },
 
];

export default function TeamMembers() {
  return (
    <section className="bg-slate-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold text-black mb-12 text-center"
      >
        Meet Our Team
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            className={`relative flex flex-col items-center p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-2xl ${
              i === 4 ? "lg:col-start-2" : ""
            }`}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-200 shadow mb-2"
            />
            <div className="text-center">
              <h3 className="text-base font-semibold text-impacta12">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-gray-500">{member.role}</p>
              <div className="mt-4 rounded-3xl bg-slate-100 p-4 text-left">
                <p className="text-sm leading-6 text-gray-700">
                  {member.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
