"use client";

import { motion } from "framer-motion";
import { Briefcase, Scale, BookOpen } from "lucide-react";
import Image from "next/image";

export default function AboutPage({ show }) {
  return (
    <div className="min-h-screen bg-white text-black">
 
      {show && (
        <section className="py-20 bg-black text-yellow-400 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300"
          >
            Advocate dedicated to justice, integrity, and protecting your rights.
          </motion.p>
        </section>
      )}

  
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Our Journey</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2016, we began as a small creative studio driven by a shared dream — 
              to make design and digital transformation accessible to everyone. Today, 
              we’ve grown into a full-fledged innovation hub working across industries like tech, lifestyle, and education.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our strength lies in collaboration, transparency, and a relentless pursuit of excellence. 
              Every project is an opportunity to reimagine what’s possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-yellow-200 p-8 rounded-md shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">What Drives Us</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Innovation that inspires and solves real-world problems.",
                "Designing digital experiences that leave a lasting impact.",
                "Fostering growth, integrity, and continuous learning.",
                "Building partnerships that empower businesses to thrive.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-yellow-500 mt-2 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] text-white py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Mission</h3>
          <p className="max-w-3xl mx-auto text-gray-300">
            To empower ideas and people through thoughtful design, authentic storytelling, and
            technology that matters — shaping a better digital tomorrow, one project at a time.
          </p>
        </motion.div>
      </section>

     
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-600">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Scale className="w-10 h-10 text-yellow-600" />,
              title: "Justice",
              desc: "Upholding fairness and protecting your rights with dedication.",
            },
            {
              icon: <Briefcase className="w-10 h-10 text-yellow-600" />,
              title: "Expertise",
              desc: "Delivering strategic legal solutions backed by years of practice.",
            },
            {
              icon: <BookOpen className="w-10 h-10 text-yellow-600" />,
              title: "Integrity",
              desc: "Committed to honesty, transparency, and ethical guidance.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 p-6 border border-gray-200 rounded-md hover:shadow-md transition"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#101010] text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/hn.jpg"
            height={400}
            width={400}
            alt="Advocate Profile"
            className="rounded-md shadow-md w-full h-[500px] object-cover object-top"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-lg leading-relaxed text-gray-300">
              With over <span className="font-semibold text-yellow-500">10 years of legal experience</span>, 
              I specialize in civil, criminal, and corporate law. My mission is to ensure justice, fairness, 
              and expert representation for all clients.
              <br />
              <br />
              At our firm, we believe that justice is not just a right, but a responsibility we uphold with dedication and integrity. 
              Our practice is built on the principles of trust, confidentiality, and professionalism.
              <br />
              <br />
              Whether it is civil disputes, criminal defense, corporate matters, or family law, 
              we provide strong representation and thoughtful guidance tailored to each client’s unique situation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}