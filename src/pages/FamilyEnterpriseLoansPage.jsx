"use client"

import { motion } from "framer-motion"
import { 
  FaHome,
  FaUsers,
  FaHandHoldingUsd,
  FaChartLine,
  FaHandshake,
  FaBalanceScale,
  FaLightbulb,
  FaMosque
} from "react-icons/fa"
import { FaHandsHoldingCircle, FaFileSignature } from "react-icons/fa6";

const FamilyEnterpriseLoansPage = () => {
  const loanFeatures = [
    {
      icon: FaHandHoldingUsd,
      title: "Interest-Free",
      description: "Strictly following Islamic prohibition of Riba",
      verse: "Quran 2:275"
    },
    {
      icon: FaUsers,
      title: "Family-Centric",
      description: "Designed to support multi-generational businesses",
      verse: "Hadith"
    },
    {
      icon: FaBalanceScale,
      title: "No Collateral",
      description: "Trust-based on community guarantees",
      verse: "Quran 5:1"
    },
    {
      icon: FaLightbulb,
      title: "Business Training",
      description: "Included financial literacy programs",
      verse: "Hadith"
    }
  ];

  const eligibleBusinesses = [
    {
      type: "Agriculture",
      examples: "Family farms, livestock, fisheries",
      icon: "🌾"
    },
    {
      type: "Retail",
      examples: "General stores, clothing shops, kiryana",
      icon: "🛍️"
    },
    {
      type: "Food Services",
      examples: "Restaurants, bakeries, food carts",
      icon: "🍲"
    },
    {
      type: "Manufacturing",
      examples: "Textiles, crafts, small workshops",
      icon: "🏭"
    },
    {
      type: "Services",
      examples: "Beauty salons, repair shops, tutoring",
      icon: "🔧"
    },
    {
      type: "Transport",
      examples: "Rickshaws, pickups, animal carts",
      icon: "🚚"
    }
  ];

  const successStories = [
    {
      name: "The Khan Family",
      business: "Textile Workshop",
      location: "Faisalabad",
      loan: "₨300,000",
      impact: "Expanded from 3 to 12 employees including relatives",
      image: "https://i.dawn.com/primary/2023/05/09103249ca71ca0.png?r=103313"
    },
    {
      name: "Fatima & Sons",
      business: "Poultry Farm",
      location: "Jhang",
      loan: "₨150,000",
      impact: "Tripled production and built new coops",
      image: "https://i.dawn.com/primary/2015/12/56759a1b08e6d.jpg"
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
                Family Enterprise <span className="text-amber-300">Loans</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                "The likeness of those who spend their wealth in the Way of Allah is as the likeness of a grain that sprouts seven ears, in every ear a hundred grains" (Quran 2:261)
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFileSignature />
                  Apply Now
                </motion.a>
                <motion.a
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaHandsHoldingCircle />
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
                src="https://www.pwc.com/us/en/services/audit-assurance/images/family-business-image-01.jpg" 
                alt="Family business loan" 
                className="rounded-lg w-full h-auto"
              />
              <div className="p-4 text-center">
                <p className="text-sm italic">"Strengthening family businesses through Islamic finance since 2001"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Loan Features */}
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
              <span className="text-emerald-600">Islamic</span> Business Financing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Qard-e-Hasna designed for family-run enterprises
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

      {/* Loan Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Loan <span className="text-emerald-600">Details</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaHandHoldingUsd className="text-emerald-600" />
                    Loan Amounts
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Initial loan: ₨50,000 - ₨200,000</li>
                    <li>• Subsequent loans: Up to ₨500,000</li>
                    <li>• Special cases: Up to ₨1,000,000</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaChartLine className="text-emerald-600" />
                    Repayment Terms
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 12-36 month flexible repayment</li>
                    <li>• Monthly installments</li>
                    <li>• Grace periods available</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <FaMosque className="text-emerald-600" />
                    Unique Features
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mosque-based approval process</li>
                    <li>• Community co-guarantors</li>
                    <li>• Islamic business training included</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Eligibility Criteria
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="bg-emerald-600 text-white p-2 rounded-full mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Family Business</h4>
                    <p className="text-gray-600">Minimum 2 family members involved</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="bg-emerald-600 text-white p-2 rounded-full mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Income Level</h4>
                    <p className="text-gray-600">Monthly income under ₨50,000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="bg-emerald-600 text-white p-2 rounded-full mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Experience</h4>
                    <p className="text-gray-600">Minimum 6 months in current business</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg">
                  <div className="bg-emerald-600 text-white p-2 rounded-full mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Community Support</h4>
                    <p className="text-gray-600">Two local guarantors required</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">"And do not forget kindness between yourselves" (Quran 2:237)</p>
                  <motion.a
                    href="/contact-us"
                    className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 mx-auto"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaFileSignature />
                    Check Eligibility
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eligible Businesses */}
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
              Supported <span className="text-emerald-600">Business Types</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We finance a wide range of halal family enterprises
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {eligibleBusinesses.map((business, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{business.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{business.type}</h3>
                <p className="text-gray-600">{business.examples}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Family <span className="text-emerald-600">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              "Cooperate in righteousness and piety" (Quran 5:2)
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm bg-emerald-600 px-2 py-1 rounded-md inline-block">
                      {story.business}
                    </div>
                    <div className="text-xl font-bold mt-1">{story.loan} Loan</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-gray-500 mb-4">{story.location}</p>
                  <p className="text-gray-700 mb-4">{story.impact}</p>
                  <a href="#" className="text-emerald-600 font-medium hover:text-emerald-800 flex items-center gap-2">
                    Read Full Story <span>→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section id="apply" className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Family Business Journey</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact-us"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaFileSignature />
                  Apply Online
                </motion.a>
                <motion.a
                  href="/about"
                  className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaMosque />
                  Find a Branch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FamilyEnterpriseLoansPage