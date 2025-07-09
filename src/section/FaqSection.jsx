"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaQuestionCircle,
  FaChevronDown,
  FaHandHoldingUsd,
  FaClock,
  FaUserTie,
  FaHandshake,
  FaMosque,
  FaHome,
  FaGraduationCap,
  FaBusinessTime,
} from "react-icons/fa"
import { FaBookQuran, FaHandsHoldingCircle } from "react-icons/fa6";

const faqCategories = [
  { id: "general", label: "General", icon: FaQuestionCircle },
  { id: "business", label: "Business Loans", icon: FaBusinessTime },
  { id: "education", label: "Education Loans", icon: FaGraduationCap },
  { id: "housing", label: "Housing Finance", icon: FaHome },
  { id: "welfare", label: "Welfare Loans", icon: FaHandsHoldingCircle },
]

const faqs = [
  {
    id: 1,
    category: "general",
    question: "What is Akhuwat's interest-free loan model?",
    answer:
      "Akhuwat provides Qard-e-Hasna (benevolent loans) following Islamic principles. Our loans are completely interest-free, supported by donations and Zakat. We've disbursed over PKR 200 billion to more than 5 million families since 2001, maintaining a 99.7% recovery rate through community trust.",
    icon: FaBookQuran,
    color: "from-green-600 to-emerald-800",
    verse: "Quran 2:245: 'Who is it that would loan Allah a goodly loan...'"
  },
  {
    id: 2,
    category: "business",
    question: "What business sectors are eligible for financing?",
    answer:
      "We finance halal businesses including retail, agriculture, handicrafts, small manufacturing, and services. Prohibited sectors include alcohol, gambling, interest-based finance, and any trade against Islamic principles. Loan amounts range from PKR 20,000 to 3 million based on business needs.",
    icon: FaBusinessTime,
    color: "from-blue-600 to-indigo-800",
    verse: "Quran 2:275: 'Allah has permitted trade and forbidden riba'"
  },
  {
    id: 3,
    category: "education",
    question: "How do education loans work?",
    answer:
      "Our education loans cover tuition, books, and supplies for primary to university levels. Repayment begins 6 months after graduation or employment. Special consideration is given to orphans and students from low-income families, with up to 100% financing available for eligible cases.",
    icon: FaGraduationCap,
    color: "from-purple-600 to-violet-800",
    verse: "Hadith: 'Seeking knowledge is obligatory upon every Muslim'"
  },
  {
    id: 4,
    category: "housing",
    question: "What are the terms for Islamic housing finance?",
    answer:
      "Our Diminishing Musharakah model offers financing up to PKR 5 million with 5-15 year terms. The client gradually purchases Akhuwat's share in the property. No interest is charged - only actual ownership transfer costs. Required documents include CNIC, proof of income, and property papers.",
    icon: FaHome,
    color: "from-amber-600 to-orange-800",
    verse: "Hadith: 'Whoever builds a house, Allah will build for him a house in Paradise'"
  },
  {
    id: 5,
    category: "welfare",
    question: "What welfare loans are available?",
    answer:
      "We provide emergency loans for medical treatment (up to PKR 500,000), marriage assistance (up to PKR 200,000), and disaster relief. These have flexible repayment terms and in some cases may be converted to grants based on need assessment.",
    icon: FaHandsHoldingCircle,
    color: "from-pink-600 to-rose-800",
    verse: "Quran 2:177: 'And gives wealth, in spite of love for it, to relatives, orphans, the needy...'"
  },
  {
    id: 6,
    category: "general",
    question: "What makes Akhuwat different from banks?",
    answer:
      "Unlike conventional banks: 1) We charge no interest 2) Use mosques as branches 3) Require no collateral 4) Focus on poverty alleviation 5) Operate on trust and dignity 6) Have minimal paperwork 7) Offer mentoring with financing 8) Maintain lowest operational costs.",
    icon: FaMosque,
    color: "from-green-600 to-emerald-800",
    verse: "Hadith: 'The truthful and trustworthy businessman will be with the prophets'"
  },
  {
    id: 7,
    category: "business",
    question: "What's the loan application process?",
    answer:
      "1) Submit application at nearest Akhuwat center 2) Interview with loan officer 3) Field verification 4) Approval by local committee 5) Disbursement at mosque ceremony. Average processing time is 7-10 days. Two guarantors from the community are required.",
    icon: FaBusinessTime,
    color: "from-blue-600 to-indigo-800",
    verse: "Hadith: 'Document your debts'"
  },
  {
    id: 8,
    category: "education",
    question: "Can loans cover overseas education?",
    answer:
      "Yes, for selected programs in Islamic universities and institutions. We finance up to PKR 1 million for overseas studies with repayment in PKR after graduation. Students must maintain good academic standing and commit to serving Pakistan for at least 2 years after studies.",
    icon: FaGraduationCap,
    color: "from-purple-600 to-violet-800",
    verse: "Quran 39:9: 'Are those who know equal to those who do not know?'"
  },
  {
    id: 9,
    category: "housing",
    question: "Can I get financing for home construction?",
    answer:
      "Yes, we finance both home purchase and construction. For construction, funds are released in stages as work progresses. The property must be in the applicant's name with clear title. We conduct regular site visits during construction.",
    icon: FaHome,
    color: "from-amber-600 to-orange-800",
    verse: "Hadith: 'When a person builds a house, Allah grants him three rewards'"
  },
  {
    id: 10,
    category: "welfare",
    question: "How are medical emergency loans processed?",
    answer:
      "Medical loans are prioritized with 48-hour processing. Required documents: 1) Doctor's recommendation 2) Hospital estimate 3) CNIC copies 4) Two guarantors. Repayment begins after patient recovery with flexible installments based on capacity.",
    icon: FaHandsHoldingCircle,
    color: "from-pink-600 to-rose-800",
    verse: "Hadith: 'There is no disease that Allah has created, except that He also has created its treatment'"
  },
]

const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openFaq, setOpenFaq] = useState(null)

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory)

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? null : faqId)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header with Islamic Design */}
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
            <div className="text-blue-800 text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-600 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600">Loans FAQ</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "The believer's shade on the Day of Resurrection will be his charity" (Hadith). Find answers about our interest-free loan programs.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {faqCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="grid gap-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full p-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                onClick={() => toggleFaq(faq.id)}
                whileHover={{ x: 3 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${faq.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    <faq.icon className="text-white text-sm" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                </div>
                <motion.div
                  animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="w-4 h-4 text-gray-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openFaq === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5">
                      <div className="pl-14">
                        {/* Quran/Hadith Verse */}
                        <div className="bg-blue-50 border-r-4 border-blue-500 p-3 mb-4 rounded-r-lg">
                          <p className="text-xs font-medium text-blue-800">"{faq.verse}"</p>
                        </div>
                        
                        <motion.p
                          className="text-gray-600 leading-relaxed text-sm md:text-base"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-700 to-green-600 rounded-xl p-8 text-white relative overflow-hidden border border-white/20 shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center gap-3 mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FaHandHoldingUsd className="text-2xl text-blue-200" />
                <span className="text-blue-200 font-bold text-lg">Need Financial Assistance?</span>
              </motion.div>

              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-4 font-serif"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                "The best of people are those who benefit others" (Hadith)
              </motion.h3>

              <motion.p
                className="text-blue-100 mb-6 text-base leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our team is ready to guide you through the interest-free loan process with dignity and respect.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/apply"
                  className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHandshake />
                  Apply Now
                </motion.a>

                <motion.a
                  href="/branches"
                  className="bg-white/10 backdrop-blur-sm border border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaMosque />
                  Find a Branch
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection