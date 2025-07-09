"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  FaHandshake,
  FaMosque,
  FaUniversity,
  FaHospital,
  FaChevronLeft,
  FaChevronRight,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUsers,
  FaQuran,
  FaHome 
} from "react-icons/fa"

import {  FaHandsHoldingCircle } from "react-icons/fa6";

const partners = [
  {
    id: 1,
    name: "State Bank of Pakistan",
    fullName: "Islamic Banking Department",
    logo: "https://www.sbp.org.pk/images/logo.png",
    description: "Regulatory partner ensuring Sharia compliance in Akhuwat's microfinance operations",
    islamicPrinciple: "Allah permits trade and prohibits usury (Quran 2:275)",
    role: "Regulatory Oversight"
  },
  {
    id: 2,
    name: "Al Baraka Bank",
    fullName: "Al Baraka Islamic Bank",
    logo: "https://www.albaraka.com.pk/wp-content/uploads/2020/04/logo.png",
    description: "Financial partner for Akhuwat's Qard-e-Hasna liquidity management",
    islamicPrinciple: "Cooperate in righteousness and piety",
    role: "Banking Partner"
  },
  {
    id: 3,
    name: "Islamic Relief",
    fullName: "Islamic Relief Pakistan",
    logo: "https://www.islamic-relief.org/wp-content/uploads/2020/04/IRP-Logo-1.png",
    description: "Collaborating on Zakat distribution and emergency loan programs",
    islamicPrinciple: "Charity extinguishes sins as water extinguishes fire",
    role: "Zakat Partner"
  },
  {
    id: 4,
    name: "Akhuwat University",
    fullName: "Akhuwat University Kasur",
    logo: "https://akhuwat.org.pk/wp-content/uploads/2021/06/akhuwat-university-logo.png",
    description: "Research partner for Islamic microfinance impact studies",
    islamicPrinciple: "Seeking knowledge is obligatory upon every Muslim",
    role: "Education Partner"
  },
  {
    id: 5,
    name: "Pakistan Poverty Alleviation Fund",
    fullName: "PPAF",
    logo: "https://www.ppaf.org.pk/wp-content/uploads/2021/06/PPAF-Logo.png",
    description: "Co-financing partner for large-scale poverty alleviation projects",
    islamicPrinciple: "The upper hand (giving) is better than the lower hand (receiving)",
    role: "Funding Partner"
  },
  {
    id: 6,
    name: "Karandaaz Pakistan",
    fullName: "Karandaaz Financial Inclusion",
    logo: "https://karandaaz.com.pk/wp-content/uploads/2021/06/logo.png",
    description: "Digital financial inclusion initiatives for Akhuwat borrowers",
    islamicPrinciple: "Economic empowerment of the Ummah",
    role: "Technology Partner"
  },
  {
    id: 7,
    name: "JDC Foundation",
    fullName: "Jafriya Disaster Management Cell",
    logo: "https://jdc.org.pk/wp-content/uploads/2021/06/JDC-Logo.png",
    description: "Partner for medical emergency loan programs",
    islamicPrinciple: "Whoever relieves a believer's distress, Allah will relieve his distress",
    role: "Health Partner"
  },
  {
    id: 8,
    name: "Pakistan Islamic Banking Council",
    fullName: "PIBC",
    logo: "https://www.sbp.org.pk/ibd/PIBC_Logo.jpg",
    description: "Sharia advisory partner for Akhuwat's loan products",
    islamicPrinciple: "Allah has permitted trade and forbidden usury",
    role: "Sharia Advisor"
  }
]

const loanPrograms = [
  {
    icon: FaHandHoldingUsd,
    title: "Family Enterprise Loans",
    amount: "Up to ₨300,000",
    terms: "1-3 years repayment",
    islamicBasis: "Qard-e-Hasna (Benevolent Loan)",
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    icon: FaHome,
    title: "Islamic Housing Finance",
    amount: "Up to ₨3,000,000",
    terms: "5-15 years repayment",
    islamicBasis: "Diminishing Musharakah",
    color: "text-green-600",
    bg: "bg-green-100"
  },
  {
    icon: FaUniversity,
    title: "Education Loans",
    amount: "Up to ₨500,000",
    terms: "Repayment after graduation",
    islamicBasis: "Tawliyah (Trust-based Financing)",
    color: "text-purple-600",
    bg: "bg-purple-100"
  },
  {
    icon: FaHospital,
    title: "Medical Emergency Loans",
    amount: "Up to ₨200,000",
    terms: "Flexible repayment",
    islamicBasis: "Urf (Customary Practice)",
    color: "text-red-600",
    bg: "bg-red-100"
  }
]

const CollaboratingPartnersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const partnersPerSlide = 4
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5 [background-image:url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex flex-col items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-800 text-2xl mb-2 font-arabic">بسم الله الرحمن الرحيم</div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Akhuwat <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">Strategic Partnerships</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            "Hold firmly to the rope of Allah all together and do not become divided" (Quran 3:103). 
            Our partners help us deliver Sharia-compliant microfinance across Pakistan.
          </motion.p>
        </motion.div>

        {/* Loan Programs Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-green-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Sharia-Compliant Loan Programs</h3>
            <p className="text-gray-600 mb-8">Developed with our Islamic finance partners</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {loanPrograms.map((program, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all ${program.bg}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 ${program.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <program.icon className={`text-xl ${program.color}`} />
                  </div>
                  <h4 className={`text-lg font-bold ${program.color} mb-2`}>{program.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Amount:</span> {program.amount}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-medium">Terms:</span> {program.terms}
                  </p>
                  <p className="text-blue-600 text-xs font-medium">
                    {program.islamicBasis}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Partners Carousel */}
        <div
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {partners
                      .slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide)
                      .map((partner) => (
                        <motion.div
                          key={partner.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          className="relative group bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center overflow-hidden"
                        >
                          {/* Islamic Decorative Element */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
                          
                          <div className="relative z-10">
                            <div className="flex justify-center items-center h-20 mb-4">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
                              />
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                              {partner.name}
                            </h3>
                            
                            <div className="text-xs text-blue-600 font-medium mb-2">
                              {partner.role}
                            </div>
                            
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-2 mb-3 rounded-r text-sm italic">
                              "{partner.islamicPrinciple}"
                            </div>
                            
                            <p className="text-sm text-gray-600 mb-2">
                              {partner.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full shadow hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600"
          >
            <FaChevronRight />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 bg-gradient-to-br from-blue-600 to-green-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Partner With Akhuwat?</h3>
              <p className="mb-6 opacity-90">
                Join Pakistan's largest Islamic microfinance network with over 5 million beneficiaries.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaHandsHoldingCircle className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Sharia Advisory</h4>
                    <p className="text-sm opacity-80">
                      Access our team of Islamic scholars for product development
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaUsers className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Community Reach</h4>
                    <p className="text-sm opacity-80">
                      Leverage our network of 1,200+ mosque-based branches
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaShieldAlt className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Impact Measurement</h4>
                    <p className="text-sm opacity-80">
                      Joint monitoring of poverty alleviation outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Process</h3>
              <p className="text-gray-600 mb-6">
                Simple steps to collaborate with Akhuwat's Islamic microfinance programs
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Initial Meeting</h4>
                    <p className="text-gray-600 text-sm">
                      Discuss partnership opportunities and alignment
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sharia Review</h4>
                    <p className="text-gray-600 text-sm">
                      Ensure compliance with Islamic finance principles
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <span className="text-amber-600 font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Agreement Signing</h4>
                    <p className="text-gray-600 text-sm">
                      Formalize the partnership with Islamic contract
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Implementation</h4>
                    <p className="text-gray-600 text-sm">
                      Joint program rollout and monitoring
                    </p>
                  </div>
                </div>
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
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to <span className="text-blue-600">Partner With Akhuwat</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join us in creating Pakistan's largest interest-free microfinance ecosystem.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/partnerships"
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHandshake className="text-xl" />
              Explore Partnerships
            </motion.a>

            <motion.a
              href="tel:+923281969250"
              className="bg-white border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaQuran  />
              Sharia Advisory
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-6 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <FaMosque className="text-blue-500" />
              <span className="text-sm">1,200+ Mosque Branches</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHandHoldingUsd className="text-green-500" />
              <span className="text-sm">₨90 Billion Disbursed</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-amber-500" />
              <span className="text-sm">100% Sharia Compliant</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CollaboratingPartnersSection