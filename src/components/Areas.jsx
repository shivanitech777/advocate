"use client";
import { motion } from "framer-motion";
import { Building2, Users, Lock } from "lucide-react";

const areas = [
  {
    icon: <Building2 size={40} className="text-yellow-500" />,
    title: "Civil Law",
    items: [
      "Partition Suit",
      "Money Recovery",
      "Real Estate",
      "Arbitration",
      "Contract Laws",
      "Wills",
    ],
  },
  {
    icon: <Users size={40} className="text-yellow-500" />,
    title: "Family Law",
    items: [
      "Mutual Divorce",
      "Maintenance",
      "Child Custody",
      "Domestic Violence",
      "Transfer Petition",
      "Marriage Registration",
      "Contested Divorce",
      "Matrimonial Criminal",
    ],
  },
  {
    icon: <Lock size={40} className="text-yellow-500" />,
    title: "Criminal Law",
    items: [
      "Sexual Offence",
      "Fraud",
      "Bail",
      "Cyber Crime",
      "Cheque Bouncing",
    ],
  },
];

const Areas = () => {
  return (
    <section className="w-full  bg-white text-black py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-500 mb-2">
          Practice Areas
        </h2>
        <p className="text-gray-400">
          We have focus in almost every legal field
        </p>
        <div className="w-20 h-1 bg-yellow-600 mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-shadow duration-300 p-8 border border-yellow-700/30"
          >
            <div className="flex justify-center mb-5">{area.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">
              {area.title}
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              {area.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Areas;
