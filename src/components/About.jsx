"use client";

import { motion } from "framer-motion";
import { Briefcase, Scale, BookOpen } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
   
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-gray-200 to-gray-50 text-black">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          About Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl"
        >
          Advocate dedicated to justice, integrity, and protecting your rights.
        </motion.p>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/hn.jpg "  height={400} width={400}
          alt="Advocate Profile"
          className="rounded-2xl shadow-lg w-full h-[500px] object-cover object-top"

        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Adv. SK.jha.</h2>
          <p className="mb-4 text-lg leading-relaxed">
            With over <span className="font-semibold">10 years of legal
            experience</span>, I specialize in civil, criminal, and corporate law.
            My mission is to ensure justice, fairness, and expert representation
            for all clients. I take pride in providing clear, practical advice
            and building long-term trust with those I serve.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're facing a personal dispute, business matter, or
            criminal charge, I'm committed to protecting your rights and guiding
            you with professionalism and care.
          </p>
        </motion.div>
      </section>

      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Scale className="w-10 h-10 text-sky-500" />,
              title: "Justice",
              desc: "Upholding fairness and protecting your rights with dedication.",
            },
            {
              icon: <Briefcase className="w-10 h-10 text-sky-600-600" />,
              title: "Expertise",
              desc: "Delivering strategic legal solutions backed by years of practice.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-sky-500" />,
              title: "Integrity",
              desc: "Committed to honesty, transparency, and ethical guidance.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-20 text-center bg-gradient-to-r from-[#8E1616] to-[#9B3922] text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Need Legal Assistance?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8 text-lg"
        >
          Get in touch today for expert legal advice and representation.
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>
      </section>
    </div>
  );
}
