"use client"

import { motion } from "framer-motion"
import { 
  FaMapMarkerAlt,
  FaCity,
  FaUsers,
  FaMosque,
  FaHandHoldingUsd,
  FaGlobeAsia,
  FaChartLine
} from "react-icons/fa"
import { FaHandsHoldingCircle } from "react-icons/fa6";

const ReachPage = () => {
  const coverageData = [
    {
      province: "Punjab",
      branches: 420,
      families: "2.8M",
      icon: <img src="https://cdn.britannica.com/53/176353-050-5B854179/Harmandir-Sahib-Amritsar-Punjab-India.jpg" alt="Punjab" className="w-12 h-12" />
    },
    {
      province: "Sindh",
      branches: 185,
      families: "1.2M",
      icon: <img src="https://wpassets.graana.com/blog/wp-content/uploads/2023/05/Sindh-Culture.jpg" alt="Sindh" className="w-12 h-12" />
    },
    {
      province: "Khyber Pakhtunkhwa",
      branches: 135,
      families: "850K",
      icon: <img src="https://thefridaytimes.com/digital_images/large/2024-01-02/khyber-pakhtunkhwa-has-witnessed-a-tourism-boom-over-the-past-year-1704216504-2043.jpg" alt="KPK" className="w-12 h-12" />
    },
    {
      province: "Balochistan",
      branches: 68,
      families: "320K",
      icon: <img src="https://images.unsplash.com/photo-1708020836322-555bda534ea4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsb2NoaXN0YW4lMjBwYWtpc3RhbnxlbnwwfHwwfHx8MA%3D%3D" alt="Balochistan" className="w-12 h-12" />
    },
    {
      province: "Azad Kashmir",
      branches: 32,
      families: "180K",
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Neeulm_Valley_AJK_%28Arang_Kel%29.jpg" alt="AJK" className="w-12 h-12" />
    },
    {
      province: "Gilgit-Baltistan",
      branches: 18,
      families: "95K",
      icon: <img src="https://pakistan.asia-news.com/cnmi_pf/images/2017/12/08/10471-14.shangrila_skkardu-739_416.jpg" alt="GB" className="w-12 h-12" />
    }
  ];

  const growthTimeline = [
    {
      year: "2001",
      branches: 1,
      families: "50",
      milestone: "Founded in Lahore with first mosque-based center"
    },
    {
      year: "2005",
      branches: 15,
      families: "5,000",
      milestone: "Expanded to 3 major cities"
    },
    {
      year: "2010",
      branches: 120,
      families: "250K",
      milestone: "National recognition, awarded Islamic Finance Award"
    },
    {
      year: "2015",
      branches: 380,
      families: "1.2M",
      milestone: "Launched international operations"
    },
    {
      year: "2020",
      branches: 650,
      families: "3.5M",
      milestone: "Pandemic response program launched"
    },
    {
      year: "2023",
      branches: 850,
      families: "5.5M",
      milestone: "Became Pakistan's largest Islamic microfinance org"
    }
  ];

  const internationalPresence = [
    {
      country: "United Kingdom",
      programs: "Diaspora Qard-e-Hasna",
      icon: "🇬🇧"
    },
    {
      country: "Canada",
      programs: "Islamic charity channels",
      icon: "🇨🇦"
    },
    {
      country: "Malaysia",
      programs: "Knowledge exchange",
      icon: "🇲🇾"
    },
    {
      country: "UAE",
      programs: "Funding partnerships",
      icon: "🇦🇪"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
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
              <FaGlobeAsia className="text-amber-300 text-4xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-amber-300">Islamic Reach</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              "And We have made you into nations and tribes so that you may know one another" (Quran 49:13)
            </p>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                From a single mosque in Lahore to 850+ centers across Pakistan, Akhuwat's Islamic microfinance model 
                has transformed millions of lives through Qard-e-Hasna.
              </p>
              <div className="text-amber-300 font-medium">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over?" (Quran 2:245)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* National Coverage */}
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
              <span className="text-emerald-600">National</span> Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving all provinces of Pakistan through our mosque-based centers
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageData.map((province, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-100 p-2 rounded-full">
                    {/* {province.icon} */}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{province.province}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Branches</div>
                    <div className="text-2xl font-bold text-emerald-600">{province.branches}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm text-gray-500">Families</div>
                    <div className="text-2xl font-bold text-emerald-600">{province.families}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Visualization */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Geographic</span> Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visualizing Akhuwat's nationwide coverage through Islamic microfinance
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://www.phoneworld.com.pk/wp-content/uploads/2024/12/Pakistan-91-of-cellular-coverage.jpg" 
              alt="Akhuwat coverage map of Pakistan" 
              className="w-full h-auto"
            />
            <div className="mt-4 text-sm text-gray-500 text-center">
              * Each marker represents a mosque-based Akhuwat center
            </div>
          </motion.div>
        </div>
      </section>

      {/* Growth Timeline */}
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
              <span className="text-emerald-600">Growth</span> Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to nationwide impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 to-amber-600 rounded-full"></div>

            <div className="space-y-16">
              {growthTimeline.map((year, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-2xl font-black text-emerald-600 mb-2">{year.year}</div>
                      <div className="flex justify-center gap-4 mb-3">
                        <div className="bg-emerald-50 px-3 py-1 rounded-full text-sm">
                          {year.branches} Branches
                        </div>
                        <div className="bg-amber-50 px-3 py-1 rounded-full text-sm">
                          {year.families} Families
                        </div>
                      </div>
                      <p className="text-gray-600">{year.milestone}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-600 to-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Presence */}
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
              <span className="text-emerald-600">Global</span> Connections
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Extending our Islamic microfinance model internationally
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalPresence.map((country, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-emerald-600 p-6 text-white text-center">
                  <div className="text-4xl mb-2">{country.icon}</div>
                  <h3 className="text-xl font-bold">{country.country}</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600">{country.programs}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bring Akhuwat to Your Community</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Interested in establishing an Akhuwat center in your mosque or city?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaMapMarkerAlt />
                Request New Center
              </motion.a>
              <motion.a
                href="/about"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHandsHoldingCircle />
                Become Ambassador
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ReachPage