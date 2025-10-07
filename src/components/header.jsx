"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="w-full bg-white/60 dark:bg-royal-900/70   backdrop-blur sticky top-0 z-40 border-b border-black/[.06]"
    >
      <div className="w-full mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center ">
          <Image
            src="/blinndfolded.jpg"
            height={56}
            width={56}
            alt="Advocate Profile"
            className="shadow-lg object-cover object-top rounded-full h-14 w-14"
          />
          <div className="ml-3">
            <span className="text-xl font-bold text-royal-900 dark:text-white font-serif">
              Advocate
            </span>
            <br />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-serif">
              Legal Counsel & Advisor
            </span>
          </div>
        </Link>

        <nav>
          <ul className="flex items-center gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-royal-800 hover:text-primary font-serif"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.label}
                  </motion.span>
                  <span className="sr-only">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
