"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn } from "react-icons/fa";
import { FiSend, FiPhone, FiMail, FiClock, FiGlobe } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0b1526] text-gray-300 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="text-gold-500 text-4xl">🏛️</div>
            <div>
              <h2 className="text-2xl font-bold text-white">ADVOKAT</h2>
              <p className="text-sm text-gold-500 tracking-wide">HOUSE OF LAWYERS</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms.
          </p>
          <p className="text-sm mt-3">
            Righteous indignation and dislike men who are so the charms.
          </p>

        
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaTwitter, FaPinterestP, FaLinkedinIn].map(
              (Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 bg-[#1b2335] rounded-full hover:bg-gold-500 transition-colors cursor-pointer"
                >
                  <Icon size={16} />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-gold-500 pl-3">
            Quick Contact Info
          </h3>
          <p className="text-sm mb-4">
            We denounce with righteous indignation and dislike men who are so beguiled.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><FiGlobe /> new Delhi cannught -palace</li>
            <li className="flex items-center gap-2"><FiPhone /> +1 0524 145 2042</li>
            <li className="flex items-center gap-2"><FiMail /> support@rstheme.com</li>
            <li className="flex items-center gap-2"><FiClock /> Mon - Fri: 09:00 - 1:00</li>
          </ul>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-gold-500 pl-3">
            Latest News
          </h3>
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <img src="/hii.jpg" alt="news" className="w-14 h-14 object-cover rounded" />
              <div>
                <p className="text-gold-500">Best Education Law and Training</p>
                <span className="text-xs text-gray-400">29 october 2025</span>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/blinndfolded.jpg" alt="news" className="w-14 h-14 object-cover rounded" />
              <div>
                <p className="text-gold-500">Flexible Working Hours</p>
                <span className="text-xs text-gray-400">october 30 2025</span>
              </div>
            </div>
            <div className="flex gap-3">
              <img src="/p.jpg" alt="news" className="w-14 h-14 object-cover rounded" />
              <div>
                <p className="text-gold-500">The Top Law Students</p>
                <span className="text-xs text-gray-400">october 21 2025</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4 border-l-2 border-gold-500 pl-3">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm">
            We denounce with righteous indignation and dislike men who are so beguiled.
          </p>
          <p className="text-sm mt-3">
            Righteous indignation and dislike men who are so the charms.
          </p>
          <div className="flex mt-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 bg-black rounded-l-md text-sm focus:outline-none"
            />
            <button className="px-4 bg-gold-900 rounded-r-md hover:bg-gold-600 transition-colors">
              <FiSend />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
