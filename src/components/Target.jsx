"use client"

import React from "react"
import { motion } from "framer-motion"
import { Scale, Gavel, FileText } from "lucide-react"

const TargetSection = () => {
  const items = [
    {
      icon: <Scale size={36} strokeWidth={1.5} />,
      title: "To better understand your needs",
      desc: "We believe in devoting sufficient time, listening to our clients while understanding their issues.",
    },
    {
      icon: <FileText size={36} strokeWidth={1.5} />,
      title: "To maintain effective communication",
      desc: "We ensure effective communication with clients, providing them with regular updates and clarity.",
    },
    {
      icon: <Gavel size={36} strokeWidth={1.5} />,
      title: "To innovate ways",
      desc: "We constantly innovate ways to simplify the process of obtaining justice for our clients.",
    },
  ]

  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="w-full bg-[#fdfcf7] text-[#1a1a1a] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
       
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1a1a1a]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Where We Are <span className="text-[#e28615]">Targeted</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          As a Law Firm, our objectives are clear. We strive to provide services 
          that ensure long-term, effective, and professional solutions for our clients.
        </motion.p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemAnim}
              className="bg-white border border-[#d28314] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#a38214]/10 text-black mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TargetSection
