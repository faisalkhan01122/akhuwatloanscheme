"use client"

import { motion } from "framer-motion"
import {
  FaHandHoldingUsd,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaHome,
  FaHandshake,
  FaMosque,
  FaUniversity,
  FaUserTie,
  FaBalanceScale
} from "react-icons/fa"

const OurServices = () => {
  const services = [
    {
      title: "Family Enterprise Loans",
      desc: "Interest-free capital for small businesses and family enterprises following Islamic principles of Qard-e-Hasna.",
      icon: FaHandHoldingUsd,
      stats: "PKR 50K - 500K",
      color: "bg-emerald-600",
      delay: 0.1
    },
    {
      title: "Education Financing",
      desc: "Shariah-compliant funding for school fees, university tuition, and vocational training without interest charges.",
      icon: FaGraduationCap,
      stats: "100% Riba-Free",
      color: "bg-indigo-600",
      delay: 0.2
    },
    {
      title: "Medical Assistance",
      desc: "Emergency healthcare financing for treatments, surgeries, and medications with compassionate repayment terms.",
      icon: FaBriefcaseMedical,
      stats: "Urgent Approvals",
      color: "bg-rose-600",
      delay: 0.3
    },
    {
      title: "Housing Support",
      desc: "Halal home construction, renovation, and rental assistance through our interest-free housing program.",
      icon: FaHome,
      stats: "5-7 Year Terms",
      color: "bg-amber-600",
      delay: 0.4
    },
    {
      title: "Marriage Loans",
      desc: "Dignified wedding financing that follows Islamic values, helping families celebrate without financial burden.",
      icon: FaHandshake,
      stats: "Simple Nikah Plans",
      color: "bg-purple-600",
      delay: 0.5
    },
    {
      title: "Mosque Construction",
      desc: "Community funding for building and maintaining masajid across Pakistan with transparent financing.",
      icon: FaMosque,
      stats: "Community Projects",
      color: "bg-blue-600",
      delay: 0.6
    }
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
            <span className="text-emerald-700 font-medium">Our Islamic Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Akhuwat <span className="text-emerald-600">Loan Programs</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Providing compassionate, interest-free financial solutions rooted in Islamic values since 2001
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Service Card */}
              <div className="bg-white p-8 h-full flex flex-col">
                {/* Icon with color */}
                <div className={`w-16 h-16 ${service.color} text-white rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:rotate-6 transition-transform`}>
                  <service.icon />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                
                {/* Stats */}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium px-3 py-1 bg-gray-100 rounded-full text-gray-700">
                    {service.stats}
                  </span>
                  <a 
                    href="/apply" 
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 transition-colors"
                  >
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaBalanceScale className="text-emerald-600 text-3xl" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Ready to Experience Ethical Financing?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join over 4.8 million Pakistanis who have transformed their lives through Akhuwat's interest-free loan programs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/apply" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-md transition-all"
              >
                Apply Now
              </a>
              <a 
                href="/branches" 
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Find Nearest Branch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices