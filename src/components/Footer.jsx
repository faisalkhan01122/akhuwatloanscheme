"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaHeart,
  FaArrowRight,
  FaCheckCircle,
  FaHandsHelping,
  FaMosque,
  FaUniversity,
  FaHome,
  FaGraduationCap,
  FaBriefcaseMedical
} from "react-icons/fa"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { label: "Home", url: "/" },
        { label: "About Akhuwat", url: "/about" },
        { label: "Our Branches", url: "/branches" },
        { label: "Success Stories", url: "/success-stories" },
        { label: "Contact Us", url: "/contact" },
      ],
    },
    {
      title: "Our Loan Programs",
      items: [
        { label: "Family Enterprise Loan", url: "/loans/family-enterprise", icon: <FaHome className="inline mr-2" /> },
        { label: "Education Loan", url: "/loans/education", icon: <FaGraduationCap className="inline mr-2" /> },
        { label: "Health Emergency Loan", url: "/loans/health", icon: <FaBriefcaseMedical className="inline mr-2" /> },
        { label: "Marriage Loan", url: "/loans/marriage", icon: <FaHeart className="inline mr-2" /> },
        { label: "Housing Loan", url: "/loans/housing", icon: <FaUniversity className="inline mr-2" /> },
        { label: "Mosque Construction Loan", url: "/loans/mosque", icon: <FaMosque className="inline mr-2" /> },
      ],
    },
    {
      title: "Get Involved",
      items: [
        { label: "Donate Now", url: "/donate" },
        { label: "Volunteer With Us", url: "/volunteer" },
        { label: "Career Opportunities", url: "/careers" },
        { label: "Partner With Us", url: "/partnership" },
      ],
    },
  ]

  const socialIcons = [
    { icon: FaFacebook, url: "https://facebook.com/akhuwat" },
    { icon: FaTwitter, url: "https://twitter.com/akhuwat" },
    { icon: FaInstagram, url: "https://instagram.com/akhuwat" },
    { icon: FaLinkedin, url: "https://linkedin.com/company/akhuwat" },
    { icon: FaYoutube, url: "https://youtube.com/akhuwat" },
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-green-900 to-emerald-900 text-white py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-300 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Newsletter section */}
        <motion.div
          className="text-center mb-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <FaHandsHelping className="text-5xl text-emerald-300" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 via-white to-teal-300 bg-clip-text text-transparent mb-4">
            Join Our Mission of Compassion
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
            Stay updated with Akhuwat's interest-free loan programs, success stories, and initiatives to alleviate poverty through Islamic principles.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full w-full text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r flex items-center justify-center gap-2 from-emerald-500 to-teal-500 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <FaCheckCircle /> Subscribed!
                </>
              ) : (
                <>
                  Subscribe <FaArrowRight />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About column */}
          <div className="md:col-span-1">
            <div className="flex items-center  mb-4">
              <img src="/akhuwatfundslogo.png" alt="Akhuwat Logo" className="h-16  mr-3" />
              {/* <span className="text-xl font-bold text-emerald-200">Akhuwat Foundation</span> */}
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              Established in 2001, Akhuwat provides interest-free microfinance based on the principles of <span className="text-emerald-300">Mawakhat</span> (brotherhood) and <span className="text-emerald-300">Qard-e-Hasna</span> (benevolent loan) to empower underprivileged communities across Pakistan.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-emerald-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Head Office: 34-Tufail Road, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-emerald-300 mr-3" />
                <span className="text-gray-300 text-sm">+92 335 4571 620</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-emerald-300 mr-3" />
                <span className="text-gray-300 text-sm">info@akhuwat.org.pk</span>
              </div>
              {/* <div className="flex items-center">
                <FaGlobe className="text-emerald-300 mr-3" />
                <span className="text-gray-300 text-sm">www.akhuwat.org.pk</span>
              </div> */}
            </div>
            <div className="flex gap-3">
              {socialIcons.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full hover:bg-emerald-500 text-white transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="md:pl-4">
              <h4 className="font-bold text-lg text-emerald-200 mb-5 pb-2 border-b border-emerald-800/50">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((link, j) => (
                  <motion.li 
                    key={j}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={link.url} 
                      className="text-gray-400 hover:text-emerald-300 transition-all duration-300 flex items-center"
                    >
                      {link.icon && link.icon}
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Akhuwat Foundation. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-white">Disclaimer</a>
              <a href="/sitemap" className="text-gray-400 hover:text-white">Sitemap</a>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-500 text-xs">
            <span className="flex items-center justify-center gap-1">
              Built with <FaHeart className="text-red-500 animate-pulse" /> to serve humanity
            </span>
            <span className="block mt-1">Regd. Under Societies Registration Act XXI of 1860</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer