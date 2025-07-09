"use client"

import { motion } from "framer-motion"
import { FaLeaf, FaHandHoldingUsd, FaChartLine, FaHome, FaGraduationCap, FaHospital, FaPeopleCarry, FaQuran  } from "react-icons/fa"

const loanSchemes = [
  {
    id: 1,
    title: "Family Enterprise Loan",
    amount: "Up to ₨500,000",
    beneficiaries: "200,000+ families",
    icon: FaHandHoldingUsd,
    description: "Interest-free business loans for low-income families to start or expand micro-enterprises."
  },
  {
    id: 2,
    title: "Education Loan",
    amount: "Up to ₨200,000",
    beneficiaries: "150,000+ students",
    icon: FaGraduationCap,
    description: "Helping deserving students pursue education without the burden of interest."
  },
  {
    id: 3,
    title: "Health Support Loan",
    amount: "Up to ₨300,000",
    beneficiaries: "100,000+ patients",
    icon: FaHospital,
    description: "Loans for emergency medical expenses provided with dignity and compassion."
  },
  {
    id: 4,
    title: "Housing Loan",
    amount: "Up to ₨800,000",
    beneficiaries: "50,000+ homes supported",
    icon: FaHome,
    description: "Supporting shelter through Shariah-compliant home construction and renovation financing."
  },
  {
    id: 5,
    title: "Liberation Loan",
    amount: "Up to ₨100,000",
    beneficiaries: "70,000+ families",
    icon: FaPeopleCarry,
    description: "To help individuals break free from the clutches of predatory lending and debt."
  }
]

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-emerald-600">Akhuwat</span> Loan Schemes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interest-free financial services rooted in compassion and Quranic economic principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanSchemes.map((scheme, i) => (
            <motion.div
              key={scheme.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                <scheme.icon className="text-xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{scheme.description}</p>
              <div className="text-sm text-emerald-700 font-medium mb-1">Loan Amount: {scheme.amount}</div>
              <div className="text-sm text-gray-500">Beneficiaries: {scheme.beneficiaries}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-emerald-700 to-teal-600 rounded-xl p-10 text-white text-center shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FaQuran  className="text-4xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Empowering Through Quranic Justice</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Akhuwat’s mission is to create a poverty-free society by enabling financial inclusion and dignity through interest-free loans.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
