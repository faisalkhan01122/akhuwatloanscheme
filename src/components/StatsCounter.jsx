"use client"

import { useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import {
  FaHandHoldingHeart,
  FaChartLine,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFemale,
  FaMoneyBillWave,
  FaMosque,
  FaQuran,
  FaHandshake,
  FaPhoneAlt,
  FaWhatsapp,
  FaBusinessTime,
  FaHome,
  FaGraduationCap,
  FaClinicMedical,
  FaLightbulb
} from "react-icons/fa"

const StatsCounter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeTab, setActiveTab] = useState("reach")

  // Updated statistics with 2023 data
  const stats = {
    reach: [
      {
        id: 1,
        number: 6.7,
        suffix: "M+",
        label: "Loans Disbursed",
        subLabel: "Interest-free financing",
        icon: FaHandHoldingHeart,
        color: "from-teal-500 to-emerald-600",
        duration: 2000
      },
      {
        id: 2,
        number: 135,
        suffix: "B PKR",
        label: "Loan Portfolio",
        subLabel: "Qard-e-Hasna value",
        icon: FaChartLine,
        color: "from-blue-500 to-indigo-600",
        duration: 2200
      },
      {
        id: 3,
        number: 99.8,
        suffix: "%",
        label: "Repayment Rate",
        subLabel: "Highest in microfinance",
        icon: FaHandshake,
        color: "from-amber-500 to-orange-600",
        duration: 1800
      },
      {
        id: 4,
        number: 1600,
        suffix: "+",
        label: "Branches",
        subLabel: "Across Pakistan",
        icon: FaMapMarkerAlt,
        color: "from-purple-500 to-violet-600",
        duration: 1500
      }
    ],
    impact: [
      {
        id: 5,
        number: 22,
        suffix: "Years",
        label: "Of Service",
        subLabel: "Since 2001",
        icon: FaCalendarAlt,
        color: "from-cyan-500 to-blue-600",
        duration: 1600
      },
      {
        id: 6,
        number: 9,
        suffix: "M+",
        label: "Lives Touched",
        subLabel: "Poverty alleviation",
        icon: FaUsers,
        color: "from-rose-500 to-pink-600",
        duration: 1400
      },
      {
        id: 7,
        number: 88,
        suffix: "%",
        label: "Women Borrowers",
        subLabel: "Empowerment focus",
        icon: FaFemale,
        color: "from-fuchsia-500 to-purple-600",
        duration: 1800
      },
      {
        id: 8,
        number: 350,
        suffix: "+",
        label: "Mosque Centers",
        subLabel: "Community-based model",
        icon: FaMosque,
        color: "from-sky-500 to-blue-600",
        duration: 2000
      }
    ]
  }

  // Enhanced loan products
  const loanProducts = [
    {
      icon: FaBusinessTime,
      title: "Business Loans",
      amount: "Up to 3M PKR",
      terms: "1-5 year terms",
      features: [
        "Startup capital",
        "Inventory purchase",
        "Equipment financing"
      ],
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: FaHome,
      title: "Housing Finance",
      amount: "Up to 5M PKR",
      terms: "5-20 year terms",
      features: [
        "Home construction",
        "Renovations",
        "Plot purchase"
      ],
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      icon: FaGraduationCap,
      title: "Education Loans",
      amount: "Up to 1.5M PKR",
      terms: "Grace period available",
      features: [
        "Tuition fees",
        "Vocational training",
        "Study materials"
      ],
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: FaClinicMedical,
      title: "Health Finance",
      amount: "Up to 750K PKR",
      terms: "Flexible repayment",
      features: [
        "Medical treatments",
        "Surgeries",
        "Emergency care"
      ],
      color: "text-rose-600",
      bg: "bg-rose-50"
    }
  ]

  // Islamic principles
  const principles = [
    {
      icon: FaQuran,
      title: "Qard-e-Hasna",
      description: "Interest-free loans as prescribed in Islamic finance",
      verse: "Quran 2:245"
    },
    {
      icon: FaMosque,
      title: "Mosque-Based",
      description: "Utilizing mosques as community welfare centers",
      verse: "Strengthening Ummah"
    },
    {
      icon: FaHandshake,
      title: "Social Collateral",
      description: "Trust-based system replacing material guarantees",
      verse: "Hadith on Trust"
    },
    {
      icon: FaLightbulb,
      title: "Sustainable Impact",
      description: "Creating self-reliance not dependency",
      verse: "Islamic Charity Principles"
    }
  ]

  // Counter component with improved animation
  const Counter = ({ number, duration = 2000, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return

      const startTime = performance.now()
      const endValue = number
      const decimalPlaces = number % 1 === 0 ? 0 : 1

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Ease-out cubic function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3)
        const currentCount = easedProgress * endValue

        setCount(parseFloat(currentCount.toFixed(decimalPlaces)))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isInView, number, duration])

    return (
      <span className="font-bold">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Islamic pattern */}
      <div className="absolute inset-0 opacity-5 [background-image:url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-700 text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
              Akhuwat Islamic Microfinance
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Transforming lives through interest-free financing in accordance with Islamic principles
          </motion.p>
        </motion.div>

        {/* Stats Tabs */}
        <motion.div 
          className="flex justify-center mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-gray-100 p-1 rounded-xl shadow-inner">
            <button
              onClick={() => setActiveTab("reach")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                activeTab === "reach" 
                  ? "bg-white text-teal-600 shadow-md font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Reach
            </button>
            <button
              onClick={() => setActiveTab("impact")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${
                activeTab === "impact" 
                  ? "bg-white text-blue-600 shadow-md font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Social Impact
            </button>
          </div>
        </motion.div>

        {/* Animated Stats Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {stats[activeTab].map((stat, index) => (
              <motion.div
                key={stat.id}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-all duration-300 -z-10`}></div>
                
                <motion.div
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="text-2xl text-white" />
                </motion.div>

                <motion.div
                  className="text-4xl font-bold text-gray-900 mb-3"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Counter 
                    number={stat.number} 
                    suffix={stat.suffix} 
                    duration={stat.duration} 
                  />
                </motion.div>

                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-800">{stat.label}</h3>
                  <p className="text-blue-600 text-sm font-medium">{stat.subLabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Loan Products Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-14">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Sharia-Compliant Products</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Interest-free financing solutions designed to empower individuals and communities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanProducts.map((product, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 ${product.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 ${product.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <product.icon className={`text-xl ${product.color}`} />
                </div>
                <h4 className={`text-xl font-semibold ${product.color} mb-3`}>{product.title}</h4>
                
                <div className="mb-4">
                  <p className="text-gray-700 text-sm mb-1">
                    <span className="font-medium">Amount:</span> {product.amount}
                  </p>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Terms:</span> {product.terms}
                  </p>
                </div>
                
                <ul className="space-y-2 text-sm text-gray-600">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`${product.color} mr-2 mt-0.5`}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Islamic Principles Section */}
        <motion.div
          className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl shadow-xl overflow-hidden mb-20 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h3 className="text-3xl font-bold mb-4">Our Islamic Foundation</h3>
                <p className="text-teal-100 max-w-3xl mx-auto text-lg">
                  Operating in complete harmony with Sharia principles to create sustainable social change
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-5 bg-white/10 p-6 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <principle.icon className="text-2xl text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{principle.title}</h4>
                      <p className="text-teal-100 mb-2">{principle.description}</p>
                      <p className="text-xs text-teal-200 font-arabic">{principle.verse}</p>
                    </div>
                  </motion.div>
                ))}
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
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join millions of Pakistanis who have achieved financial independence through our Qard-e-Hasna program
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/923354571620"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              Apply via WhatsApp
            </motion.a>

            <motion.a
              href="tel:+923354571620"
              className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhoneAlt />
              Call Our Helpline
            </motion.a>
          </div>

          {/* Trust Badges */}
          <motion.div
            className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                <FaQuran className="text-teal-600" />
              </div>
              <span>Sharia Certified</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <FaHandshake className="text-blue-600" />
              </div>
              <span>99.8% Repayment Rate</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <FaMosque className="text-emerald-600" />
              </div>
              <span>Mosque-Based Model</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter