"use client"

import { motion } from "framer-motion"
import {
  FaMosque,
  FaHandHoldingUsd,
  FaUserShield,
  FaChartLine,
  FaHandshake,
  FaBalanceScale,
  FaLeaf,
  FaRibbon
} from "react-icons/fa"

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaMosque,
      title: "Islamic Finance Principles",
      description: "Strictly Riba-free loans following Quranic principles of Qard-e-Hasna (benevolent loans) and Mawakhat (brotherhood).",
      color: "from-green-600 to-emerald-700",
      stats: "100% Shariah-Compliant",
      delay: 0.1
    },
    {
      icon: FaHandHoldingUsd,
      title: "Interest-Free Loans",
      description: "Zero interest charges on all our microfinance solutions - truly ethical financing for all Pakistanis.",
      color: "from-amber-500 to-orange-600",
      stats: "0% Interest",
      delay: 0.2
    },
    {
      icon: FaUserShield,
      title: "No Collateral Required",
      description: "We believe in trust, not assets. No property mortgages or guarantors needed for our loans.",
      color: "from-blue-500 to-cyan-600",
      stats: "Trust-Based Model",
      delay: 0.3
    },
    {
      icon: FaChartLine,
      title: "Proven Success Rate",
      description: "With over 4.8 million loans disbursed, we've helped transform lives across Pakistan.",
      color: "from-purple-500 to-fuchsia-600",
      stats: "98% Recovery Rate",
      delay: 0.4
    },
    {
      icon: FaHandshake,
      title: "Community-Based Approach",
      description: "Loans disbursed through local mosques and community centers for maximum accessibility.",
      color: "from-rose-500 to-pink-600",
      stats: "800+ Branches",
      delay: 0.5
    },
    {
      icon: FaBalanceScale,
      title: "Transparent Operations",
      description: "Clear terms with no hidden charges. All processes follow Islamic financial ethics.",
      color: "from-indigo-500 to-blue-600",
      stats: "Award-Winning NGO",
      delay: 0.6
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-emerald-100 rounded-full mb-6">
            <span className="text-emerald-700 font-medium">Why Akhuwat?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Akhuwat <span className="text-emerald-600">Difference</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Akhuwat isn't just a microfinance institution - we're a movement revolutionizing poverty alleviation through Islamic principles.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: reason.delay, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${reason.color}`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${reason.color} text-white flex items-center justify-center text-2xl mb-6 group-hover:-translate-y-1 transition-transform`}>
                <reason.icon />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 mb-6">{reason.description}</p>
              
              {/* Stats badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full">
                <span className={`text-sm font-medium bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                  {reason.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial/CTA at bottom */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-10 text-white shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <FaRibbon className="text-3xl mx-auto mb-6 text-emerald-200" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Recognized as Pakistan's Largest Interest-Free Microfinance Provider
            </h3>
            <p className="text-lg text-emerald-100 mb-8">
              "Akhuwat has disbursed over PKR 150 billion in interest-free loans, maintaining a recovery rate of 99.6% - proving that compassion and trust can transform economies."
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply for Loan
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Our Success Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs