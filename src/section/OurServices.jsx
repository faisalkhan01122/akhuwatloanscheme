"use client"

import { motion } from "framer-motion"
import {
  FaBusinessTime,
  FaHandsHelping,
  FaUserTie,
  FaBriefcaseMedical,
  FaGraduationCap,
  FaHome,
  FaExclamationTriangle,
  FaArrowRight,
  FaCheckCircle,
  FaMosque,
  FaLeaf,
  FaBalanceScale
} from "react-icons/fa"

const services = [
  {
    title: "Family Enterprise Loan",
    desc: "Shariah-compliant business financing to help families establish or expand their halal enterprises without interest.",
    icon: FaBusinessTime,
    color: "from-emerald-600 to-teal-600",
    features: ["Up to ₨30 Lakhs", "0% Interest", "5-7 Year Terms", "Business Training"],
    stats: "50,000+ Businesses Funded",
    link: "/loans/family-enterprise"
  },
  {
    title: "Community Microfinance",
    desc: "Small loans disbursed through local mosques to empower community members with ethical financial support.",
    icon: FaHandsHelping,
    color: "from-blue-600 to-indigo-600",
    features: ["₨25K - ₨5 Lakhs", "Group Guarantee", "Weekly Repayments", "Community Support"],
    stats: "800+ Branches Nationwide",
    link: "/loans/microfinance"
  },
  {
    title: "Professional Development Loan",
    desc: "Interest-free financing for young professionals to enhance skills and career prospects in halal industries.",
    icon: FaUserTie,
    color: "from-purple-600 to-violet-600",
    features: ["Up to ₨10 Lakhs", "Skill Certification", "Career Counseling", "Flexible Repayment"],
    stats: "98% Recovery Rate",
    link: "/loans/professional"
  },
  {
    title: "Healthcare Support",
    desc: "Emergency medical financing following Islamic principles to ensure access to quality healthcare for all.",
    icon: FaBriefcaseMedical,
    color: "from-rose-600 to-pink-600",
    features: ["Urgent Approvals", "Hospital Bills", "Medications", "Therapies"],
    stats: "24-48 Hour Processing",
    link: "/loans/healthcare"
  },
  {
    title: "Education Financing",
    desc: "Qard-e-Hasna for students pursuing education at all levels without the burden of interest.",
    icon: FaGraduationCap,
    color: "from-amber-600 to-orange-600",
    features: ["Full Tuition", "Books & Supplies", "Hostel Fees", "Merit-Based"],
    stats: "100% Riba-Free",
    link: "/loans/education"
  },
  {
    title: "Housing Assistance",
    desc: "Islamic home financing solution for construction, renovation, and purchase without interest charges.",
    icon: FaHome,
    color: "from-cyan-600 to-sky-600",
    features: ["Up to ₨50 Lakhs", "7-10 Year Terms", "Construction Support", "Legal Guidance"],
    stats: "10,000+ Homes Funded",
    link: "/loans/housing"
  }
]

const OurServices = () => {
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
            <span className="text-emerald-700 font-medium">Islamic Financial Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Akhuwat <span className="text-emerald-600">Loan Programs</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Providing compassionate, interest-free financial support rooted in Quranic principles of Mawakhat (brotherhood) since 2001
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Icon Header */}
              <div className={`h-3 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} text-white flex items-center justify-center text-2xl mb-4 group-hover:rotate-12 transition-transform`}>
                  <service.icon />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description || service.desc}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <FaCheckCircle className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Stats */}
                {service.stats && (
                  <div className="text-xs font-medium px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full inline-flex items-center mb-6">
                    <FaLeaf className="mr-1.5" /> {service.stats}
                  </div>
                )}
                
                {/* CTA */}
                <a
                  href={service.link}
                  className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r ${service.color} hover:shadow-md transition-all group-hover:brightness-110`}
                >
                  Learn More <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
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
              Ready to Apply for an Interest-Free Loan?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join over 4.8 million Pakistanis who have transformed their lives through Akhuwat's ethical financing model
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/apply" 
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-md transition-all"
              >
                Begin Application
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServices