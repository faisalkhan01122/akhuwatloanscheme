"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaHandHoldingUsd,
  FaBusinessTime,
  FaGraduationCap,
  FaHome,
  FaHandshake,
  FaUsers,
  FaChartLine,
  FaMosque,
  FaQuran,
  FaLeaf
} from "react-icons/fa"

const loanSchemes = [
  {
    id: 1,
    name: "Family Enterprise Loans",
    description: "Interest-free financing for family businesses to promote sustainable livelihoods",
    amount: "Up to ₨500,000",
    term: "3 years repayment",
    icon: <FaBusinessTime className="text-4xl text-emerald-500" />,
    features: [
      "No collateral required",
      "Sharia-compliant agreement",
      "Business training included"
    ],
    image: "/Sharing-a-Home-Loan-Yes-or-No-to-a-Joint-Home-Loan.jpg",
    theme: "from-blue-600 to-emerald-600"
  },
  {
    id: 2,
    name: "Education Support Loans",
    description: "Qard-e-Hasna for students pursuing higher education",
    amount: "Up to ₨200,000",
    term: "Pay after graduation",
    icon: <FaGraduationCap className="text-4xl text-amber-500" />,
    features: [
      "Interest-free financing",
      "Career counseling",
      "Installments tailored to income"
    ],
    image: "/maxresdefault.jpg",
    theme: "from-purple-600 to-indigo-600"
  },
  {
    id: 3,
    name: "Housing Improvement Loans",
    description: "Halal financing for home renovations and essential repairs",
    amount: "Up to ₨300,000",
    term: "5 year flexible terms",
    icon: <FaHome className="text-4xl text-teal-500" />,
    features: [
      "No hidden charges",
      "Community guarantee system",
      "Energy-efficient options"
    ],
    image: "/Personal-Loans.webp",
    theme: "from-amber-600 to-orange-600"
  }
]

const HeroSection = () => {
  const [currentScheme, setCurrentScheme] = useState(0)
  const scheme = loanSchemes[currentScheme]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScheme((prev) => (prev + 1) % loanSchemes.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12 min-h-screen">
        {/* Left Content - Text */}
        <div className="lg:w-1/2 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-full mb-6 border border-emerald-100">
              <FaMosque className="text-emerald-600" />
              <span className="text-emerald-700 font-medium">Sharia-Compliant Financing</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {scheme.name}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              {scheme.description}
            </p>

            <div className="flex items-center gap-8 mb-10">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Loan Amount</h3>
                <p className="text-2xl font-bold text-emerald-600">{scheme.amount}</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-500 text-sm">Repayment Term</h3>
                <p className="text-2xl font-bold text-emerald-600">{scheme.term}</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              {scheme.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Apply Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-emerald-600 px-8 py-3 rounded-lg font-medium border border-emerald-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Visual */}
        <div className="lg:w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] w-full max-w-md mx-auto">
                <div className={`absolute inset-0 bg-gradient-to-t ${scheme.theme} opacity-90`}></div>
                <img 
                  src={scheme.image} 
                  alt={scheme.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icon Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-full shadow-lg border border-gray-200"
              >
                {scheme.icon}
              </motion.div>

              {/* Quran Verse */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 left-0 bg-white p-4 rounded-xl shadow-lg border border-gray-200 max-w-xs"
              >
                <p className="text-gray-600 italic">"Allah will deprive usury of all blessing, but will give increase for deeds of charity"</p>
                <p className="text-right text-sm text-emerald-600 mt-2">Quran 2:276</p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scheme Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {loanSchemes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentScheme(index)}
            className={`w-3 h-3 rounded-full transition-colors ${currentScheme === index ? 'bg-emerald-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="text-center px-4 py-2">
              <p className="text-2xl font-bold">2.5M+</p>
              <p className="text-sm">Loans Disbursed</p>
            </div>
            <div className="text-center px-4 py-2">
              <p className="text-2xl font-bold">₨120B+</p>
              <p className="text-sm">In Interest-Free Financing</p>
            </div>
            <div className="text-center px-4 py-2">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm">Recovery Rate</p>
            </div>
            <div className="text-center px-4 py-2">
              <p className="text-2xl font-bold">850+</p>
              <p className="text-sm">Branches Nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection