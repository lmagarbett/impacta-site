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
    image: staff8,
  },
  {
    name: "Georgia Goymer",
    role: "Sales Director",
    image: staff1,
  },
  {
    name: "Ryan Skipton",
    role: "Business Development Executive",
    image: staff2,
  },
  {
    name: "Karen Hartlebury",
    role: "Financial Controller",
    image: staff7,
  },
  {
    name: "Dimitrijus Seliuginas",
    role: "CAD/Engineering",
    image: staff6,
  },
  {
    name: "Jonathan Churms",
    role: "CAD Engineer Manager",
    image: staff3,
  },
  {
    name: "Jack Titley",
    role: "Textile Supervisor",
    image: staff5,
  },
  {
    name: "Neill Urba",
    role: "Metal Work Supervisor",
    image: staff4,
  },
];

export default function TeamMembers() {
  return (
    <section className="bg-gray-100 py-20 px-6">
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
            className="flex flex-col items-center p-6 rounded-xl bg-gray-50 shadow"
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
