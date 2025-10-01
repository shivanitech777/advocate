"use client"
import React from "react"
import { Scale, Gavel, FileText } from "lucide-react" // Professional law-related icons

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

  return (
    <section className="w-full bg-[#fdfcf7] text-[#1a1a1a] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
          Where We Are <span className="text-[#e28615]">Targeted</span>
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          As a Law Firm, our objectives are clear. We strive to provide services 
          that ensure long-term, effective, and professional solutions for our clients.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#a69b8c] p-8 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#c19a6b]/10 text-[#c19a6b] mb-6"
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetSection
