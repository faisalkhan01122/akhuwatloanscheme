"use client"

import { useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import {
  FaUsers,
  FaHandHoldingUsd,
  FaCity,
  FaCalendarAlt,
  FaQuran,
  FaHandshake,
  FaDonate,
  FaMosque,
  FaShieldAlt,
  FaStar,
  FaHeart,
  FaPhoneAlt,
  FaWhatsapp,
  FaUniversity,
  FaHome,
  FaBusinessTime
} from "react-icons/fa"
import { GiMoneyStack } from "react-icons/gi"

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState("loans")

  const stats = {
    loans: [
      {
        id: 1,
        number: 5000000,
        suffix: "+",
        label: "Loans Disbursed",
        subLabel: "Interest-free financing",
        icon: FaHandHoldingUsd,
        color: "from-green-500 to-emerald-600",
        bgColor: "bg-green-50",
        arabicText: "قروض ممنوحة",
        duration: 2000
      },
      {
        id: 2,
        number: 90,
        suffix: "B+",
        prefix: "₨",
        label: "Loan Portfolio",
        subLabel: "Qard-e-Hasna value",
        icon: GiMoneyStack,
        color: "from-blue-500 to-indigo-600",
        bgColor: "bg-blue-50",
        arabicText: "محفظة القروض",
        duration: 2200
      },
      {
        id: 3,
        number: 99.7,
        suffix: "%",
        label: "Repayment Rate",
        subLabel: "Community trust",
        icon: FaHandshake,
        color: "from-amber-500 to-orange-600",
        bgColor: "bg-amber-50",
        arabicText: "معدل السداد",
        duration: 1800
      },
      {
        id: 4,
        number: 1200,
        suffix: "+",
        label: "Branches",
        subLabel: "Nationwide presence",
        icon: FaCity,
        color: "from-purple-500 to-violet-600",
        bgColor: "bg-purple-50",
        arabicText: "فروع",
        duration: 1500
      }
    ],
    impact: [
      {
        id: 5,
        number: 23,
        suffix: "+",
        label: "Years Serving",
        subLabel: "Since 2001",
        icon: FaCalendarAlt,
        color: "from-teal-500 to-cyan-600",
        bgColor: "bg-teal-50",
        arabicText: "سنوات الخدمة",
        duration: 1600
      },
      {
        id: 6,
        number: 5,
        suffix: "M+",
        label: "Families Helped",
        subLabel: "Poverty alleviation",
        icon: FaUsers,
        color: "from-rose-500 to-pink-600",
        bgColor: "bg-rose-50",
        arabicText: "أسر مستفيدة",
        duration: 1400
      },
      {
        id: 7,
        number: 85,
        suffix: "%",
        label: "Women Borrowers",
        subLabel: "Empowering women",
        icon: FaHeart,
        color: "from-fuchsia-500 to-purple-600",
        bgColor: "bg-fuchsia-50",
        arabicText: "مقترضات",
        duration: 1800
      },
      {
        id: 8,
        number: 5,
        suffix: "x",
        label: "Income Growth",
        subLabel: "Average increase",
        icon: FaDonate,
        color: "from-sky-500 to-blue-600",
        bgColor: "bg-sky-50",
        arabicText: "نمو الدخل",
        duration: 2000
      }
    ]
  }

  const loanTypes = [
    { 
      icon: FaBusinessTime, 
      title: "Business Loans", 
      amount: "Up to ₨3,000,000",
      terms: "1-5 years repayment",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    { 
      icon: FaHome, 
      title: "Housing Finance", 
      amount: "Up to ₨5,000,000",
      terms: "5-15 years repayment",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    { 
      icon: FaUniversity, 
      title: "Education Loans", 
      amount: "Up to ₨1,000,000",
      terms: "Repayment after studies",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    { 
      icon: FaHeart, 
      title: "Welfare Loans", 
      amount: "Up to ₨500,000",
      terms: "Medical & emergency",
      color: "text-rose-600",
      bg: "bg-rose-100"
    }
  ]

  const Counter = ({ number, duration = 2000, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      let startTime = null
      const startValue = 0
      const endValue = number

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isInView, number, duration])

    return (
      <span className="font-black">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 [background-image:url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-800 text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Islamic Microfinance</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Providing interest-free loans (Qard-e-Hasna) in accordance with Islamic principles to alleviate poverty and empower communities across Pakistan.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-white p-1 rounded-xl shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab("loans")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "loans" 
                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Loan Statistics
            </button>
            <button
              onClick={() => setActiveTab("impact")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "impact" 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Social Impact
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {stats[activeTab].map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="text-2xl text-white" />
                </motion.div>

                {/* Number */}
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring", bounce: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Counter 
                    number={stat.number} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    duration={stat.duration} 
                  />
                </motion.div>

                {/* Labels */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800">{stat.label}</h3>
                  <p className="text-blue-600 text-sm font-medium">{stat.subLabel}</p>
                  <p className="text-gray-500 text-xs mt-2">{stat.arabicText}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Loan Types Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-green-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Sharia-Compliant Loan Products</h3>
            <p className="text-gray-600 mb-8">Interest-free financing solutions for all needs</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanTypes.map((loan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all ${loan.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 ${loan.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <loan.icon className={`text-xl ${loan.color}`} />
                  </div>
                  <h4 className={`text-lg font-bold ${loan.color} mb-2`}>{loan.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Amount:</span> {loan.amount}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Terms:</span> {loan.terms}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Islamic Principles Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-green-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Islamic Foundation</h3>
              <p className="mb-6 opacity-90">
                Akhuwat operates strictly in accordance with Islamic financial principles and values.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaQuran className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Sharia Compliance</h4>
                    <p className="text-sm opacity-80">
                      All loans are Qard-e-Hasna (benevolent loans) with no interest
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaMosque className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Mosque-Based Model</h4>
                    <p className="text-sm opacity-80">
                      Operating through mosques to strengthen community bonds
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaShieldAlt className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Social Collateral</h4>
                    <p className="text-sm opacity-80">
                      Trust-based system replacing traditional collateral
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Loan Application Process</h3>
              <p className="text-gray-600 mb-6">
                Simple and transparent process following Islamic principles
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Visit Nearest Branch</h4>
                    <p className="text-gray-600 text-sm">
                      Locate your nearest Akhuwat center or mosque branch
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Submit Documents</h4>
                    <p className="text-gray-600 text-sm">
                      CNIC, proof of income, and two guarantors required
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Approval & Disbursement</h4>
                    <p className="text-gray-600 text-sm">
                      Typically within 5-7 working days
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Apply for an <span className="text-blue-600">Interest-Free Loan</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Islamic microfinance solutions are designed to help you achieve your goals without burden.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://wa.me/923281969250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Application
            </motion.a>

            <motion.a
              href="tel:+923281969250"
              className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt />
              Call for Assistance
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-6 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <FaMosque className="text-blue-500" />
              <span className="text-sm">Mosque-Based Model</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-green-500" />
              <span className="text-sm">No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <FaQuran className="text-amber-500" />
              <span className="text-sm">Sharia Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-purple-500" />
              <span className="text-sm">99.7% Repayment Rate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter