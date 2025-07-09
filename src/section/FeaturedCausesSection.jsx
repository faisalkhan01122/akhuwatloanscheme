"use client"

import { useState } from "react"
import {
  FaHandHoldingUsd,
  FaBusinessTime,
  FaHome,
  FaGraduationCap,
  FaBriefcaseMedical,
  FaHandshake,
  FaMosque,
  FaArrowRight,
  FaPhone
} from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const loanPrograms = [
  {
    id: 1,
    title: "Family Enterprise Loan",
    category: "Business",
    description: "Interest-free capital for small businesses and family enterprises following Islamic principles of Qard-e-Hasna (benevolent loan).",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    icon: <FaBusinessTime />,
    color: "from-emerald-600 to-teal-600",
    amount: "Up to ₨500,000",
    term: "3-5 Years",
    beneficiaries: "250,000+ businesses funded",
    islamicPrinciple: "Based on Quran 2:245 - 'Who is it that would loan Allah a goodly loan...'"
  },
  {
    id: 2,
    title: "Education Financing",
    category: "Education",
    description: "Shariah-compliant funding for school fees, university tuition and vocational training without interest charges.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    icon: <FaGraduationCap />,
    color: "from-blue-600 to-indigo-600",
    amount: "Up to ₨200,000",
    term: "Flexible repayment",
    beneficiaries: "180,000 students supported",
    islamicPrinciple: "Seeking knowledge is obligatory for every Muslim (Hadith)"
  },
  {
    id: 3,
    title: "Healthcare Support",
    category: "Medical",
    description: "Emergency medical financing following Islamic principles to ensure access to quality healthcare for all.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    icon: <FaBriefcaseMedical />,
    color: "from-rose-600 to-pink-600",
    amount: "Up to ₨300,000",
    term: "1-3 Years",
    beneficiaries: "1.2 million patients helped",
    islamicPrinciple: "The best charity is to provide water (Hadith)"
  },
  {
    id: 4,
    title: "Housing Assistance",
    category: "Housing",
    description: "Islamic home financing solution for construction, renovation and purchase without interest charges.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    icon: <FaHome />,
    color: "from-amber-600 to-orange-600",
    amount: "Up to ₨1,000,000",
    term: "5-7 Years",
    beneficiaries: "50,000 homes funded",
    islamicPrinciple: "Whoever builds a house seeking Allah's pleasure, Allah will build for him a house in Paradise (Hadith)"
  },
  {
    id: 5,
    title: "Marriage Loan",
    category: "Social",
    description: "Dignified wedding financing that follows Islamic values, helping families celebrate without financial burden.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    icon: <FaHandshake />,
    color: "from-purple-600 to-violet-600",
    amount: "Up to ₨150,000",
    term: "2-3 Years",
    beneficiaries: "75,000 marriages supported",
    islamicPrinciple: "Marriage is my Sunnah, whoever turns away from my Sunnah is not from me (Hadith)"
  },
  {
    id: 6,
    title: "Mosque Construction Loan",
    category: "Community",
    description: "Community funding for building and maintaining masajid across Pakistan with transparent financing.",
    image: "https://images.unsplash.com/photo-1561601501-6986b3d0d72a",
    icon: <FaMosque />,
    color: "from-cyan-600 to-sky-600",
    amount: "Up to ₨2,000,000",
    term: "7-10 Years",
    beneficiaries: "1,500 mosques built",
    islamicPrinciple: "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise (Hadith)"
  }
]

const categories = [
  { id: "all", label: "All Programs", icon: FaHandHoldingUsd },
  { id: "Business", label: "Business", icon: FaBusinessTime },
  { id: "Education", label: "Education", icon: FaGraduationCap },
  { id: "Medical", label: "Medical", icon: FaBriefcaseMedical },
  { id: "Housing", label: "Housing", icon: FaHome },
  { id: "Community", label: "Community", icon: FaMosque }
]

const FeaturedCausesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const filteredPrograms = activeCategory === "all"
    ? loanPrograms
    : loanPrograms.filter(p => p.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-2 bg-emerald-100 rounded-full mb-6">
            <span className="text-emerald-700 font-medium">Islamic Microfinance</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Akhuwat <span className="text-emerald-600">Loan Programs</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Providing compassionate, interest-free financial solutions rooted in Islamic values since 2001
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full"></div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === id
                  ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`w-full h-2 bg-gradient-to-r ${program.color}`}></div>
              <div className="relative overflow-hidden h-48">
                <img
                  loading="lazy"
                  src={`${program.image}?auto=format&fit=crop&w=600&q=60`}
                  alt={program.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white text-xs p-2 rounded">
                  {program.islamicPrinciple}
                </div>
                <div className={`absolute top-4 right-4 w-10 h-10 bg-gradient-to-r ${program.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                  {program.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm">{program.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="bg-emerald-50 rounded p-3">
                    <div className="text-xs text-gray-500">Loan Amount</div>
                    <div className="font-bold text-emerald-700">{program.amount}</div>
                  </div>
                  <div className="bg-amber-50 rounded p-3">
                    <div className="text-xs text-gray-500">Term</div>
                    <div className="font-bold text-amber-700">{program.term}</div>
                  </div>
                </div>
                <div className="mb-4 text-xs text-gray-500">
                  <strong className="text-sm text-gray-700">Impact:</strong> {program.beneficiaries}
                </div>
                <Link
                  to="/apply"
                  className={`block w-full text-center py-3 rounded-lg text-white font-semibold bg-gradient-to-r ${program.color} hover:opacity-90 transition`}
                >
                  Apply Now <FaArrowRight className="inline ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-10 text-white text-center shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to Apply for an Interest-Free Loan?</h3>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            Join over 4.8 million Pakistanis who have transformed their lives through Akhuwat's ethical financing model.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/apply"
              className="bg-white text-emerald-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Apply Online
            </a>
            <a
              href="tel:+923354571620"
              className="bg-white/10 border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition"
            >
              <FaPhone className="inline mr-2" /> Call Our Helpline
            </a>
          </div>
          <p className="mt-6 text-sm text-emerald-100">
            "Those who spend their wealth in the way of Allah... will find their reward secure with their Lord." (Quran 2:262)
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCausesSection
