"use client"

import { motion } from "framer-motion"
import { 
  FaUserTie,
  FaHandshake,
  FaMosque,

  FaUniversity,
  FaUsers,
  FaChartLine,
  FaLightbulb
} from "react-icons/fa"
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";

const LeadershipPage = () => {
  const leadershipTeam = [
    {
      name: "Dr. Amjad Saqib",
      title: "Founder & Executive Director",
      bio: "Pioneer of Islamic microfinance in Pakistan, Ashoka Fellow, and recipient of Sitara-e-Imtiaz",
      image: "https://sdgacademy.org/wp-content/uploads/2022/09/AMJAD_SAQIB_PHOTO-copy.jpg",
      quote: "Poverty isn't just lack of money - it's lack of hope. Our mission is to restore dignity through Quranic economics.",
      verse: "Quran 2:245"
    },
    {
      name: "Muhammad Imran",
      title: "Director Operations",
      bio: "20+ years experience in Islamic finance and community development",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQHiatBsY0mdcQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1598020825313?e=2147483647&v=beta&t=JJKumnbD3yMnG0qi0rqHIDus-X6uPSjqu1JVkncv2Aw",
      quote: "True Islamic finance must serve the poorest among us with compassion.",
      verse: "Hadith"
    },
    {
      name: "Ayesha Farooq",
      title: "Director Women Empowerment",
      bio: "Specialist in gender-inclusive Islamic microfinance programs",
      image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      quote: "Empowering women means strengthening entire families according to Islamic principles.",
      verse: "Quran 4:32"
    }
  ];

  const advisoryCouncil = [
    {
      name: "Mufti Muhammad Taqi Usmani",
      role: "Shariah Advisor",
      affiliation: "Renowned Islamic scholar and former Supreme Court Shariah Judge"
    },
    {
      name: "Dr. Ishrat Husain",
      role: "Economic Advisor",
      affiliation: "Former Governor State Bank of Pakistan"
    },
    {
      name: "Sania Nishtar",
      role: "Health Advisor",
      affiliation: "Former Federal Minister and WHO Director"
    }
  ];

  const leadershipPrinciples = [
    {
      icon: FaBookQuran,
      title: "Quranic Guidance",
      description: "All decisions rooted in Islamic teachings of social justice"
    },
    {
      icon: FaHandsHoldingCircle,
      title: "Servant Leadership",
      description: "Leaders as humble servants of the community"
    },
    {
      icon: FaMosque,
      title: "Community-Based",
      description: "Decisions made closest to those we serve"
    },
    {
      icon: FaLightbulb,
      title: "Innovative Vision",
      description: "Creative solutions within Islamic framework"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white overflow-hidden">
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
              <FaUserTie className="text-amber-300 text-4xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Islamic <span className="text-amber-300">Leadership</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              "The leader of a people is their servant" (Hadith)
            </p>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                Akhuwat's leadership embodies the Quranic principles of Amanah (trusteeship) and Khilafah (stewardship). 
                We believe true leadership means serving the Ummah with humility and wisdom.
              </p>
              <div className="text-amber-300 font-medium">
                "And make us leaders of the righteous" (Quran 25:74)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Our <span className="text-emerald-600">Executive Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by Islamic principles of servant leadership
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-bottom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{leader.name}</h3>
                      <p className="text-amber-300">{leader.title}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{leader.bio}</p>
                    <blockquote className="text-gray-600 italic mb-4 border-l-2 border-emerald-600 pl-4">
                      "{leader.quote}"
                    </blockquote>
                    <div className="text-sm text-emerald-600 font-medium">
                      {leader.verse}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The <span className="text-emerald-600">Founder's Vision</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dr. Amjad Saqib established Akhuwat in 2001 with a revolutionary idea - that poverty could be eliminated through mosque-based, interest-free microfinance rooted in Islamic principles of brotherhood.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-amber-500">
                <p className="text-gray-700 italic mb-2">
                  "We don't give charity, we give opportunities. The Quran teaches us that the best charity is that which leaves the recipient self-sufficient."
                </p>
                <p className="text-emerald-600 font-medium">- Dr. Amjad Saqib</p>
              </div>
              <p className="text-gray-700">
                Under his leadership, Akhuwat has grown from a small initiative with ₨10,000 to Pakistan's largest Islamic microfinance organization, serving over 5.5 million families without compromising its Quranic values.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://sdgacademy.org/wp-content/uploads/2022/09/AMJAD_SAQIB_PHOTO-copy.jpg" 
                  alt="Dr. Amjad Saqib vision" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg">
                <div className="text-sm">Recipient of</div>
                <div className="font-bold">Sitara-e-Imtiaz</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
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
              Our <span className="text-emerald-600">Leadership Principles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Quranic values that guide our decision-making
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipPrinciples.map((principle, index) => (
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
                  <principle.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Council */}
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
              Shariah & <span className="text-emerald-600">Advisory Council</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Renowned scholars and experts ensuring Islamic compliance and strategic guidance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryCouncil.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-emerald-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-amber-300">{member.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{member.affiliation}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Become part of Pakistan's largest Islamic microfinance movement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/about/story"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaUserTie />
                Career Opportunities
              </motion.a>
              <motion.a
                href="/about"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandsHoldingCircle />
                Volunteer With Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LeadershipPage