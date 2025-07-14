"use client"

import { motion } from "framer-motion"
import { 
  FaHandHoldingUsd,
  FaBusinessTime,
  FaHome,
  FaGraduationCap,
  FaClinicMedical,
  FaTractor,
  FaStore,
  FaUserTie,
  FaChartLine,
  FaHandshake
} from "react-icons/fa"
import { FaFileSignature, FaCalendarCheck } from "react-icons/fa6";

const AkhuwatLoansPage = () => {
  const loanProducts = [
    {
      icon: FaBusinessTime,
      title: "Business Loans",
      amount: "Up to ₨500,000",
      terms: "0% interest | 1-3 years repayment",
      description: "Start or expand your business with our Shariah-compliant financing. No collateral required for small businesses.",
      features: [
        "No interest charges",
        "Flexible repayment plans",
        "Business training included",
        "Community support network"
      ]
    },
    {
      icon: FaHome,
      title: "Housing Loans",
      amount: "Up to ₨2,000,000",
      terms: "0% interest | 5-7 years repayment",
      description: "Purchase, construct or renovate your home without riba. Affordable payment plans for low-income families.",
      features: [
        "No hidden costs",
        "Co-guarantor system",
        "Islamic financing structure",
        "Priority for widows/orphans"
      ]
    },
    {
      icon: FaGraduationCap,
      title: "Education Loans",
      amount: "Up to ₨200,000/year",
      terms: "0% interest | Repay after graduation",
      description: "Fund your children's education through our interest-free student financing program.",
      features: [
        "Covers tuition and expenses",
        "Grace period until employment",
        "Career counseling",
        "Scholarships available"
      ]
    }
  ];

  const specialPrograms = [
    {
      icon: FaClinicMedical,
      title: "Health Financing",
      description: "Medical treatment loans for emergencies and chronic conditions"
    },
    {
      icon: FaTractor,
      title: "Agriculture Loans",
      description: "Support for farmers with crop financing and equipment"
    },
    {
      icon: FaStore,
      title: "Small Shop Loans",
      description: "Inventory and shop improvement financing"
    },
    {
      icon: FaUserTie,
      title: "Vocational Loans",
      description: "Tools and training for skilled trades"
    }
  ];

  const applicationSteps = [
    {
      step: "1",
      icon: FaFileSignature,
      title: "Application Submission",
      description: "Complete our simple application form at any Akhuwat center"
    },
    {
      step: "2",
      icon: FaHandshake,
      title: "Community Verification",
      description: "Your application is reviewed by local community members"
    },
    {
      step: "3",
      icon: FaCalendarCheck,
      title: "Approval & Disbursement",
      description: "Receive funds within 7-10 working days after approval"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Interest-Free Loans <br />
                <span className="text-amber-300">Based on Islamic Principles</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Akhuwat provides Qard-e-Hasna (benevolent loans) to empower Pakistani families without interest charges or complex requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHandHoldingUsd />
                  Apply for Loan
                </motion.a>
                <motion.a
                  href="/impact"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaChartLine />
                  View Loan Products
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20"
            >
              <img 
                src="https://pbs.twimg.com/media/GFTmPRgbUAAbVP_.jpg:large" 
                alt="Akhuwat Loan Disbursement" 
                className="rounded-lg w-full h-auto"
              />
              <div className="p-4 text-center">
                <p className="text-sm italic">"Helping families grow without burden since 2001"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Loan Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shariah-compliant financing solutions designed to meet your family's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-emerald-600 p-6 text-white">
                  <product.icon className="text-3xl mb-3" />
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-amber-300">{product.amount}</span>
                    <span className="text-sm">{product.terms}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a 
                      href="/contact-us" 
                      className="text-emerald-600 font-semibold hover:text-emerald-800 flex items-center gap-2"
                    >
                      Apply Now <span>→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Special <span className="text-emerald-600">Loan Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored financing solutions for specific needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="text-emerald-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple <span className="text-emerald-600">Application Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Shariah-compliant process is designed to be accessible to all
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-emerald-200 top-1/2"></div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {applicationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto lg:mx-0">
                    {step.step}
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="bg-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto lg:mx-0 mb-4">
                      <step.icon className="text-emerald-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-emerald-600 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Eligibility Requirements</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">✓</span>
                    <span>Pakistani citizen with valid CNIC</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">✓</span>
                    <span>Age between 18-65 years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">✓</span>
                    <span>Monthly income under ₨50,000 for most loans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">✓</span>
                    <span>Two community members as co-guarantors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-white text-emerald-600 rounded-full w-6 h-6 flex items-center justify-center mt-1 flex-shrink-0">✓</span>
                    <span>Willingness to attend financial literacy sessions</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="border-b border-gray-100 pb-3">• CNIC copy (B-form for students)</li>
                  <li className="border-b border-gray-100 pb-3">• Recent photograph</li>
                  <li className="border-b border-gray-100 pb-3">• Proof of income (if employed)</li>
                  <li className="border-b border-gray-100 pb-3">• Business proof (for business loans)</li>
                  <li className="border-b border-gray-100 pb-3">• Property documents (for housing loans)</li>
                  <li className="border-b border-gray-100 pb-3">• Admission proof (for education loans)</li>
                  <li className="pb-3">• Co-guarantor CNIC copies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply for Your Interest-Free Loan?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Visit your nearest Akhuwat branch or start your application online today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                target="_blank"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandHoldingUsd />
                Apply Now
              </motion.a>
              <motion.a
                href="/contact-us"
                target="_blank"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaStore />
                Find a Branch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AkhuwatLoansPage