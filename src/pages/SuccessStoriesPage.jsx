"use client"

import { motion } from "framer-motion"
import { 
  FaHandHoldingHeart,
  FaMosque,

  FaUserTie,
  FaHome,
  FaGraduationCap,
  FaStoreAlt,
  FaLeaf
} from "react-icons/fa"
import { FaHandshake } from "react-icons/fa6";
import { FaBookQuran } from "react-icons/fa6";

const SuccessStoriesPage = () => {
  const featuredStories = [
    {
      id: 1,
      name: "Muhammad Asif",
      location: "Lahore, Punjab",
      loanType: "Business Loan",
      amount: "₨150,000",
      icon: FaStoreAlt,
      quote: "From cart to shop - my dream realized without interest",
      story: "With Akhuwat's interest-free loan, I transformed my fruit cart into a proper shop. Now I employ two other brothers from my community.",
      verse: "Quran 2:275",
      image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
    },
    {
      id: 2,
      name: "Ayesha Bibi",
      location: "Karachi, Sindh",
      loanType: "Education Loan",
      amount: "₨85,000/year",
      icon: FaGraduationCap,
      quote: "My daughter is now the first doctor in our family",
      story: "As a widow, I could never afford medical school. Akhuwat's education financing made my daughter's dream possible through Qard-e-Hasna.",
      verse: "Quran 58:11",
      image: "https://thumbs.dreamstime.com/b/studio-shot-blonde-hair-young-woman-smiling-arms-folded-chest-as-if-expressing-gratitude-teen-girl-wears-t-shirt-isolated-253677672.jpg"
    },
    {
      id: 3,
      name: "Abdul Razzaq",
      location: "Multan, Punjab",
      loanType: "Agriculture Loan",
      amount: "₨200,000",
      icon: FaLeaf,
      quote: "From tenant to landowner through Islamic finance",
      story: "Akhuwat's agricultural loan helped me purchase my own land. Their profit-free model respects Allah's prohibition of Riba.",
      verse: "Quran 2:245",
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
    }
  ];

  const impactStats = [
    { number: "5.5M+", label: "Lives Transformed", icon: FaHandHoldingHeart },
    { number: "99.3%", label: "Repayment Rate", icon: FaHandshake },
    { number: "850+", label: "Mosque-Based Centers", icon: FaMosque },
    { number: "₨500B+", label: "Interest-Free Loans", icon: FaBookQuran }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-emerald-800 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://static.vecteezy.com/system/resources/previews/014/664/051/non_2x/islamic-ornament-persian-motiff-3d-ramadan-islamic-round-pattern-elements-geometric-circular-ornamental-arabic-symbol-gold-background-vector.jpg')]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Stories of <span className="text-amber-300">Hope & Dignity</span>
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245)
            </motion.p>
            
            <motion.div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {impactStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <stat.icon className="text-3xl text-amber-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
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
              Transforming Lives Through <span className="text-emerald-600">Qard-e-Hasna</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real stories of Pakistanis who broke the cycle of poverty with interest-free loans
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs bg-emerald-600 px-2 py-1 rounded-md inline-block">
                      {story.loanType}
                    </div>
                    <div className="text-xl font-bold mt-1">{story.amount}</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-emerald-100 p-3 rounded-full">
                      <story.icon className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-500 text-sm">{story.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic mb-4 border-l-2 border-emerald-600 pl-4">
                    "{story.quote}"
                  </blockquote>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="text-sm text-emerald-600 font-medium">
                    Reference: {story.verse}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
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
              In Their <span className="text-emerald-600">Own Words</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch how Akhuwat's interest-free loans are changing lives across Pakistan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative pt-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/example1" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">From Rickshaw Driver to Shop Owner</h3>
                <p className="text-gray-600">Abdul's story of transformation in Faisalabad</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative pt-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/example2" 
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Educating the Ummah - A Mother's Journey</h3>
                <p className="text-gray-600">How Fatima financed her children's education Islamically</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building <span className="text-emerald-600">Stronger Communities</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Akhuwat's mosque-based model strengthens the Islamic principles of brotherhood and mutual support. Each loan creates ripple effects that benefit entire neighborhoods.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Mosque-Based Centers",
                    description: "850+ centers operating from mosques across Pakistan",
                    icon: FaMosque
                  },
                  {
                    title: "Community Guarantors",
                    description: "Local members vouch for applicants, building trust",
                    icon: FaHandshake
                  },
                  {
                    title: "Islamic Values",
                    description: "All transactions follow Shariah principles",
                    icon: FaBookQuran
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                      <item.icon className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://akhuwat.org.pk/uploads/1749642498654-47%20Students%20of%20Akhuwat%20College%20Blog.jpg" 
                    alt="Akhuwat community meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://www.finnable.com/wp-content/uploads/2023/08/Loan-Disbursement.jpeg" 
                    alt="Loan disbursement ceremony" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://cdn.startupleague.online/wp-content/uploads/2019/05/successful-entrepreneur.jpg" 
                    alt="Business owner with family" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden h-48">
                  <img 
                    src="https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blog_Paytm_Education-Loan-Eligibility-Criteria-Documents-Required.jpg" 
                    alt="Education loan recipients" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join millions of Pakistanis who have transformed their lives through interest-free Islamic financing
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
                href="/impact"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaBookQuran />
                Read More Stories
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SuccessStoriesPage