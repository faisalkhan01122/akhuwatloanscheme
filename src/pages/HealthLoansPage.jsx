"use client"

import { motion } from "framer-motion"
import { 
  FaClinicMedical,
  FaProcedures,
  FaUserInjured,
  FaHandHoldingMedical,
  FaHeartbeat,
  FaAmbulance,
  FaHospitalUser
} from "react-icons/fa"
import { FaHandsHoldingCircle, FaFileMedical } from "react-icons/fa6";

const HealthLoansPage = () => {
  const loanFeatures = [
    {
      icon: FaHandHoldingMedical,
      title: "Interest-Free",
      description: "Strictly following Islamic prohibition of Riba",
      verse: "Quran 2:275"
    },
    {
      icon: FaProcedures,
      title: "Comprehensive Coverage",
      description: "From emergencies to chronic conditions",
      verse: "Hadith: 'There is no disease that Allah has created except that He also has created its treatment'"
    },
    {
      icon: FaUserInjured,
      title: "Critical Care Focus",
      description: "Priority for life-saving treatments",
      verse: "Quran 5:32"
    },
    {
      icon: FaHandsHoldingCircle,
      title: "Community Support",
      description: "Co-guarantor system reduces burden",
      verse: "Hadith: 'The believers are like one body'"
    }
  ];

  const coveredTreatments = [
    {
      category: "Emergency Care",
      examples: "Accidents, heart attacks, strokes",
      icon: FaAmbulance,
      color: "text-red-500"
    },
    {
      category: "Surgeries",
      examples: "Appendectomy, fractures, C-sections",
      icon: FaProcedures,
      color: "text-blue-500"
    },
    {
      category: "Chronic Conditions",
      examples: "Diabetes, hypertension, kidney disease",
      icon: FaHeartbeat,
      color: "text-purple-500"
    },
    {
      category: "Diagnostics",
      examples: "MRI, CT scans, lab tests",
      icon: FaFileMedical,
      color: "text-emerald-500"
    },
    {
      category: "Medications",
      examples: "Monthly prescriptions, insulin",
      icon: FaClinicMedical,
      color: "text-amber-500"
    },
    {
      category: "Specialist Care",
      examples: "Oncology, cardiology, neurology",
      icon: FaHospitalUser,
      color: "text-indigo-500"
    }
  ];

  const repaymentOptions = [
    {
      plan: "Standard",
      terms: "6-12 months",
      amount: "Up to ₨500,000",
      bestFor: "Most medical procedures"
    },
    {
      plan: "Extended",
      terms: "12-24 months",
      amount: "Up to ₨1,000,000",
      bestFor: "Major surgeries"
    },
    {
      plan: "Grace Period",
      terms: "3 months grace + repay",
      amount: "Any approved amount",
      bestFor: "Critical emergencies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Health & Medical <span className="text-amber-300">Loans</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                "And when I am ill, it is He who cures me" (Quran 26:80). 
                Access Shariah-compliant financing for your healthcare needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#apply"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFileMedical />
                  Apply Now
                </motion.a>
                <motion.a
                  href="#details"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaClinicMedical />
                  Learn More
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
                src="https://www.omozing.com/wp-content/uploads/2021/06/shutterstock_86451016-1.jpg" 
                alt="Health loan assistance" 
                className="rounded-lg w-full h-auto"
              />
              <div className="p-4 text-center">
                <p className="text-sm italic">"Healing through compassionate Islamic finance"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-emerald-600">Islamic</span> Health Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Allah does not burden a soul beyond that it can bear" (Quran 2:286)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-emerald-50 rounded-xl p-8 text-center border border-emerald-100 hover:border-emerald-600 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <feature.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-sm text-emerald-600 italic">"{feature.verse}"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Covered <span className="text-emerald-600">Medical Needs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "For every disease there is a cure" (Hadith)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coveredTreatments.map((treatment, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl mb-4 ${treatment.color}`}>
                  <treatment.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.category}</h3>
                <p className="text-gray-600">{treatment.examples}</p>
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
              <span className="text-emerald-600">Application</span> Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple steps to access compassionate healthcare financing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-emerald-50 p-8 rounded-xl border border-emerald-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Application</h3>
              <p className="text-gray-600 mb-4">
                At any Akhuwat center or hospital partner with basic documents
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• CNIC copies</li>
                <li>• Medical estimates</li>
                <li>• Doctor's recommendation</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-emerald-50 p-8 rounded-xl border border-emerald-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Urgency Review</h3>
              <p className="text-gray-600 mb-4">
                Our medical committee assesses priority within 24-72 hours
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Emergency cases: 24 hours</li>
                <li>• Elective procedures: 72 hours</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-emerald-50 p-8 rounded-xl border border-emerald-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-emerald-600 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Funds Disbursement</h3>
              <p className="text-gray-600 mb-4">
                Direct payment to hospital or pharmacy upon approval
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Emergency: Same day</li>
                <li>• Regular: Within 3 working days</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Repayment Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible <span className="text-emerald-600">Repayment</span> Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "If someone is in hardship, grant him respite" (Quran 2:280)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {repaymentOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-emerald-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">{option.plan}</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
                    <span className="text-gray-500">Terms</span>
                    <span className="font-medium">{option.terms}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
                    <span className="text-gray-500">Amount</span>
                    <span className="font-medium">{option.amount}</span>
                  </div>
                  <div className="mb-6">
                    <p className="text-gray-500 mb-1">Best for</p>
                    <p className="font-medium">{option.bestFor}</p>
                  </div>
                  <motion.a
                    href="/about"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Choose Plan
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Healing Through Compassionate Finance</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                "And whoever saves a life, it is as though he had saved all mankind" (Quran 5:32)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFileMedical />
                  Apply for Health Loan
                </motion.a>
                <motion.a
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHospitalUser />
                  View Hospital Partners
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthLoansPage