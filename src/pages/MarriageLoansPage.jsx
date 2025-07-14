"use client"

import { motion } from "framer-motion"
import { 
  FaHeart,
  FaMosque,
  FaUserTie,
  FaUserAlt,
  FaGift,
  FaUtensils,
  FaHome
} from "react-icons/fa"
import { FaHandsHoldingCircle, FaBookQuran } from "react-icons/fa6";

const MarriageLoansPage = () => {
  const loanFeatures = [
    {
      icon: FaBookQuran,
      title: "Interest-Free",
      description: "Strictly following Islamic prohibition of Riba",
      verse: "Quran 2:275"
    },
    {
      icon: FaHeart,
      title: "Simplify Nikah",
      description: "Help fulfill half of your faith with dignity",
      verse: "Hadith: 'Marriage is half of faith'"
    },
    {
      icon: FaHandsHoldingCircle,
      title: "Community Support",
      description: "Co-guarantor system reduces burden",
      verse: "Hadith: 'The believers are like one body'"
    },
    {
      icon: FaMosque,
      title: "Mosque-Based",
      description: "Approval through local mosque committees",
      verse: "Quran 24:36"
    }
  ];

  const coveredExpenses = [
    {
      category: "Mehndi/Walima",
      examples: "Catering, venue, decorations",
      icon: FaUtensils,
      color: "text-amber-500"
    },
    {
      category: "Bridal Needs",
      examples: "Clothing, jewelry, essentials",
      icon: FaUserAlt,
      color: "text-pink-500"
    },
    {
      category: "Groom Needs",
      examples: "Attire, gifts, essentials",
      icon: FaUserTie,
      color: "text-blue-500"
    },
    {
      category: "Dowry Items",
      examples: "Furniture, appliances, household",
      icon: FaHome,
      color: "text-emerald-500"
    },
    {
      category: "Ceremony Costs",
      examples: "Nikah fees, photography, transport",
      icon: FaGift,
      color: "text-purple-500"
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Age Requirement",
      description: "Groom 18+, Bride 16+ (with guardian consent)"
    },
    {
      title: "Income Level",
      description: "Monthly income under ₨50,000"
    },
    {
      title: "Community Guarantors",
      description: "Two local references required"
    },
    {
      title: "Islamic Marriage",
      description: "Must comply with Shariah requirements"
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
                Marriage <span className="text-amber-300">Loans</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                "And marry the unmarried among you..." (Quran 24:32). 
                Fulfill your Nikah with dignity through our Islamic Qard-e-Hasna.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHeart />
                  Apply Now
                </motion.a>
                <motion.a
                  href="/contact-us"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaBookQuran />
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
                src="https://www.bankalfalah.com/wp-content/uploads/2017/06/Rida-Brochure.jpg" 
                alt="Islamic marriage ceremony" 
                className="rounded-lg w-full h-auto"
              />
              <div className="p-4 text-center">
                <p className="text-sm italic">"Helping build Muslim families through compassionate finance"</p>
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
              <span className="text-emerald-600">Islamic</span> Marriage Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "And live with them in kindness" (Quran 4:19)
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

      {/* Covered Expenses */}
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
              Covered <span className="text-emerald-600">Expenses</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting all essential marriage needs within Islamic guidelines
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coveredExpenses.map((expense, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`text-4xl mb-4 ${expense.color} mx-auto`}>
                  <expense.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{expense.category}</h3>
                <p className="text-gray-600 text-sm">{expense.examples}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Loan <span className="text-emerald-600">Structure</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Amounts</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Basic Nikah Expenses</span>
                      <span className="font-bold">Up to ₨150,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Complete Wedding</span>
                      <span className="font-bold">Up to ₨300,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Special Cases</span>
                      <span className="font-bold">Up to ₨500,000</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Repayment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>Standard Term</span>
                      <span className="font-bold">12-24 months</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Grace Period</span>
                      <span className="font-bold">3 months after marriage</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Installments</span>
                      <span className="font-bold">Monthly, interest-free</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 italic mb-2">
                    "The best wedding is that which involves the least burden" (Hadith)
                  </p>
                  <p className="text-gray-700">
                    We encourage simple marriages within means while providing support for essential needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Eligibility <span className="text-emerald-600">Requirements</span>
              </h3>
              
              <ul className="space-y-4">
                {eligibilityCriteria.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <div className="bg-emerald-100 p-2 rounded-full">
                      <div className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-emerald-600 text-white p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Required Documents</h4>
                <ul className="text-sm space-y-2">
                  <li>• CNIC copies (bride, groom, guardians)</li>
                  <li>• Nikah Nama draft</li>
                  <li>• Income proof (groom/family)</li>
                  <li>• Two guarantor CNICs</li>
                  <li>• Cost estimates from vendors</li>
                </ul>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Islamic Marriage Journey</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                "And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them" (Quran 30:21)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHeart />
                  Apply for Marriage Loan
                </motion.a>
                <motion.a
                  href="/contact-us"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaMosque />
                  Speak to Our Imams
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MarriageLoansPage