"use client";
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "Understanding",
    desc: "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
  },
  {
    id: 2,
    title: "Strategic Planning",
    desc: "Our team formulates strategies to aggressively defend and contest your stance.",
  },
  {
    id: 3,
    title: "Implementing The Steps",
    desc: "We ensure wholesome execution of the plan to achieve effective and fruitful results.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-yellow-500 mb-2">
          Our Process
        </h2>
        <p className="text-gray-400">Our steps to achieve success</p>
        <div className="w-20 h-1 bg-yellow-600 mx-auto mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center bg-[#111] rounded-2xl p-8 border border-yellow-700/40 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-black font-bold text-2xl rounded-lg shadow-lg"
              >
                {step.id}
              </motion.div>
            </div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
