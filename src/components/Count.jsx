"use client"
import React from "react"
import CountUp from "./CountUp"

const Count = () => {
  const stats = [
    { to: 10, label: "Years Experience" },
    { to: 750, label: "Cases Won" },
    { to: 2015, label: "Founded" },
    { to: 99, label: "Client Satisfaction %" },
  ]

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <CountUp
              from={0}
              to={stat.to}
              separator=","
              direction="up"
              duration={2}
              className="text-5xl md:text-6xl font-bold text-yellow-400"
            />
            <p className="mt-2 text-lg text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Count
