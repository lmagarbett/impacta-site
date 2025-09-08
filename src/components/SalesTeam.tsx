import { motion } from 'motion/react';
import staff1 from '../assets/staff/staff1.jpg';
import staff2 from '../assets/staff/staff2.png';

const staff = [
    {
        name: 'Georgia Goymer',
        role: 'Sales Director',
        image: staff1,
        phone: '+44(0) 01902 496307',
        email: 'Georgia@impacta.co.uk',
    },
    {
        name: 'Ryan Skipton',
        role: 'Business Development Executive',
        image: staff2,
        phone: '+44(0) 1902 496307',
        email: 'Ryan@impacta.co.uk'
    }
]

export default function SalesTeam() {
    return (
    <section className="bg-gray-100 py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-bold text-impacta11 mb-12 text-center"
      >
        Speak to Our Sales Team
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {staff.map((staff, i) => (
          <motion.div
            key={staff.name}
            className="flex flex-row items-center p-8 rounded-xl shadow bg-gray-50"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: i * 0.15,
              ease: 'easeOut'
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={staff.image}
              alt={staff.name}
              className={`w-48 h-48 object-cover rounded-full border-2 border-gray-200 shadow mr-8 ${
                staff.name === 'Ryan Skipton' ? 'object-bottom' : ''
              }`}
            />
            <div className="flex-1 flex flex-col justify-center">
                <p className="text-base font-semibold text-gray-700 mb-1">{staff.role}</p>
              <h3 className="text-xl font-semibold mb-1 text-impacta12">{staff.name}</h3>
              <p className="text-gray-700 text-sm mb-1">{staff.email}</p>
              <p className="text-gray-700 text-sm mb-1">{staff.phone}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    );
}