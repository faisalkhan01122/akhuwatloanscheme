"use client"

import { motion } from "framer-motion"
import { 

  FaHandshake,
  FaUsers,
  FaMosque,
  FaHandHoldingHeart,
  FaBalanceScale,
  FaLightbulb,
  FaHeart
} from "react-icons/fa"
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";

const OurValuesPage = () => {
  const coreValues = [
    {
      icon: FaBookQuran,
      title: "Quranic Foundation",
      description: "Our operations are rooted in the divine commandments of Qard-e-Hasna (benevolent loans) and prohibition of Riba",
      verse: "Quran 2:275 - 'Allah has permitted trade and forbidden interest'",
      color: "from-emerald-600 to-green-800"
    },
    {
      icon: FaHandsHoldingCircle,
      title: "Community Brotherhood",
      description: "We believe in the Islamic principle of mutual assistance (Ta'awun) to uplift the Ummah",
      verse: "Hadith - 'The believers are like one body in their mutual love'",
      color: "from-blue-600 to-indigo-800"
    },
    {
      icon: FaBalanceScale,
      title: "Social Justice",
      description: "Addressing economic inequality through equitable distribution of resources",
      verse: "Quran 57:25 - 'We sent Our Messengers with clear signs and sent down the Balance with them'",
      color: "from-amber-600 to-orange-800"
    },
    {
      icon: FaMosque,
      title: "Mosque-Centered Model",
      description: "Using houses of Allah as community development centers",
      verse: "Quran 24:36 - 'In houses which Allah has ordered to be raised'",
      color: "from-purple-600 to-violet-800"
    },
    {
      icon: FaHandHoldingHeart,
      title: "Compassionate Finance",
      description: "Treating borrowers with dignity and flexibility in repayment",
      verse: "Quran 2:280 - 'If someone is in hardship, grant him respite'",
      color: "from-rose-600 to-red-800"
    },
    {
      icon: FaLightbulb,
      title: "Innovative Simplicity",
      description: "Developing creative yet Shariah-compliant solutions to poverty",
      verse: "Hadith - 'The best charity is that which leaves you self-sufficient'",
      color: "from-cyan-600 to-teal-800"
    }
  ];

  const operationalPrinciples = [
    {
      title: "Interest-Free",
      description: "Absolutely no interest charged on any loans",
      icon: "0%"
    },
    {
      title: "Collateral-Free",
      description: "No physical collateral required - trust-based system",
      icon: "🤝"
    },
    {
      title: "Co-Guarantors",
      description: "Community members vouch for applicants",
      icon: "👥"
    },
    {
      title: "Mosque-Based",
      description: "All transactions conducted through mosques",
      icon: "🕌"
    },
    {
      title: "Gender Inclusive",
      description: "Special programs for women entrepreneurs",
      icon: "♀"
    },
    {
      title: "Transparent",
      description: "Full disclosure of all terms and conditions",
      icon: "🔍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border-2 border-amber-300"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <FaHeart className="text-amber-300 text-4xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-amber-300">Islamic Values</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              "The best among you are those who are most beneficial to people" (Hadith)
            </p>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                Akhuwat operates on the fundamental Islamic principles of brotherhood, compassion and social justice. 
                Our model proves that finance can be both ethical and effective.
              </p>
              <div className="text-amber-300 font-medium">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Founding Principles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Quranic values that guide every aspect of our work
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${value.color} p-8 text-white text-center`}>
                    <value.icon className="text-4xl mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">{value.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-6">{value.description}</p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-emerald-600">
                      <p className="text-sm italic text-gray-600">{value.verse}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Principles */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We <span className="text-amber-300">Operate</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              The practical application of our Islamic values
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-amber-300 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-white/90">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://sdgacademy.org/wp-content/uploads/2022/09/AMJAD_SAQIB_PHOTO-copy.jpg" 
                  alt="Dr. Amjad Saqib" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm">Founder & Executive Director</div>
                <div className="font-bold">Dr. Amjad Saqib</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Message From Our <span className="text-emerald-600">Founder</span>
              </h2>
              <blockquote className="text-xl italic text-gray-700 mb-6 border-l-4 border-amber-500 pl-6">
                "Akhuwat isn't just microfinance - it's a movement to restore the Islamic economic system based on compassion and mutual responsibility."
              </blockquote>
              <p className="text-gray-600 mb-6">
                When we started Akhuwat in 2001 with just ₨10,000, we had a simple belief: that the Quranic concept of Qard-e-Hasna could eliminate poverty without interest-based systems. Today, with over 5.5 million beneficiaries, we've proven that Islamic finance works.
              </p>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-emerald-800 font-medium">
                  "The example of those who spend their wealth in the Way of Allah is like that of a grain of corn that sprouts seven ears, and in every ear there are a hundred grains." (Quran 2:261)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Movement</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Become part of this Quranic economic revolution - as a borrower, donor or volunteer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandHoldingHeart />
                Apply for Loan
              </motion.a>
              <motion.a
                href="/contact-us"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandsHoldingCircle />
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurValuesPage