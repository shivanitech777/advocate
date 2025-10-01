"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
    

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white dark:bg-royal-900 border-t border-gray-200 dark:border-royal-800"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-royal-900 dark:text-white">Advocate Shivani</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">
              Experienced legal counsel offering compassionate advocacy, clear strategy, and strong courtroom
              representation for individuals and small businesses.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:contact@advocate.com" className="text-royal-700 dark:text-gray-200 hover:text-primary">
                contact@advocate.com
              </a>
              <span className="text-gray-400">•</span>
              <a href="tel:+1234567890" className="text-royal-700 dark:text-gray-200 hover:text-primary">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex justify-between md:justify-center md:col-span-1">
            <div>
              <h4 className="text-lg font-medium text-royal-900 dark:text-white mb-3">Quick links</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <Link href="/">
                    <span className="hover:text-primary">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="hover:text-primary">About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <span className="hover:text-primary">Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="hover:text-primary">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
             
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-medium text-royal-900 dark:text-white mb-3">Office</h4>
            <address className="not-italic text-gray-600 dark:text-gray-300">
              123 Legal Avenue
              <br />
              Suite 400, City, State
            </address>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-indigo-600 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.6 4.07 5.5 2.98 5.5S0.98 4.6 0.98 3.5 1.89 1.5 2.98 1.5 4.98 2.4 4.98 3.5zM0 8h6v16H0V8zm9 0h5.5v2.2h.1c.8-1.5 2.8-3.1 5.8-3.1C25.6 7.1 26 10.2 26 14.5V24h-6v-8.5c0-2-0.04-4.6-2.9-4.6-2.9 0-3.3 2.2-3.3 4.4V24H9V8z" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6c-.9.4-1.8.7-2.8.8 1-0.6 1.7-1.5 2-2.6-.9.6-1.9 1-3 1.2C19 2 17.8 1.5 16.5 1.5c-2.6 0-4.6 2.2-4.6 4.8 0 .4 0 .9.1 1.3C8 7.4 4.3 5.6 1.7 2.9c-.4.7-.6 1.5-.6 2.4 0 1.7.8 3.3 2.1 4.2-.8 0-1.6-.2-2.3-.6v.1c0 2.2 1.6 4 3.7 4.4-.4.1-.8.1-1.3.1-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.5 3.4-1.6 1.3-3.6 2.1-5.7 2.1H2c2 1.3 4.3 2 6.8 2 8.2 0 12.7-6.9 12.7-12.8v-.6c.9-.6 1.6-1.3 2.2-2.2-.8.4-1.6.6-2.5.7C23 6.4 23.6 5.5 24 4.6z" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-indigo-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.6V12H10.5V9.7c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Advocate Shivani. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Designed with care • Privacy Policy</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
