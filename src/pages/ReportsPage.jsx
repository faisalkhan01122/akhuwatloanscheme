"use client"

import { motion } from "framer-motion"
import { 
  FaFileAlt,
  FaChartLine,
  FaBalanceScale,
  FaHandHoldingUsd,
  FaMosque,
  FaUsers,
  FaQuran,
  FaDownload
} from "react-icons/fa"
import { FaMoneyBillWave } from "react-icons/fa6";

const ReportsPage = () => {
  const annualReports = [
    {
      year: "2023",
      title: "Annual Report & Financial Statements",
      description: "Complete overview of our operations, impact and audited financials",
      download: "/reports/akhuwat-annual-report-2023.pdf",
      size: "8.4 MB"
    },
    {
      year: "2022",
      title: "Annual Report & Financial Statements",
      description: "Documenting our growth and social impact across Pakistan",
      download: "/reports/akhuwat-annual-report-2022.pdf",
      size: "7.1 MB"
    },
    {
      year: "2021",
      title: "Decade of Impact Special Report",
      description: "20-year retrospective on transforming lives through Qard-e-Hasna",
      download: "/reports/akhuwat-20-year-report.pdf",
      size: "12.3 MB"
    }
  ];

  const financialHighlights = [
    {
      title: "Total Loans Disbursed",
      amount: "₨502 Billion+",
      growth: "18% increase from 2022",
      icon: FaHandHoldingUsd,
      color: "text-emerald-600"
    },
    {
      title: "Beneficiaries Served",
      amount: "5.5 Million Families",
      growth: "1.2 million new families in 2023",
      icon: FaUsers,
      color: "text-blue-600"
    },
    {
      title: "Repayment Rate",
      amount: "99.3%",
      growth: "Consistently above 99% since 2005",
      icon: FaMoneyBillWave,
      color: "text-amber-600"
    },
    {
      title: "Mosque Branches",
      amount: "850+ Centers",
      growth: "45 new locations in 2023",
      icon: FaMosque,
      color: "text-purple-600"
    }
  ];

  const shariahReports = [
    {
      title: "Shariah Compliance Report 2023",
      issued: "Mufti Muhammad Taqi Usmani",
      description: "Certification of our adherence to Islamic finance principles",
      download: "/reports/shariah-compliance-2023.pdf"
    },
    {
      title: "Fatwa on Qard-e-Hasna Model",
      issued: "Darul Uloom Karachi",
      description: "Islamic ruling on our interest-free microfinance system",
      download: "/reports/fatwa-qard-e-hasna.pdf"
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
              <FaFileAlt className="text-amber-300 text-4xl" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Reports & <span className="text-amber-300">Financials</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              "And fulfill the covenant of Allah when you have taken it" (Quran 16:91)
            </p>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                As part of our commitment to transparency in Islamic finance, we publish detailed reports on our operations, 
                financial performance, and social impact - all conducted according to Shariah principles.
              </p>
              <div className="text-amber-300 font-medium">
                "Verily, Allah commands you to render trusts to whom they are due" (Quran 4:58)
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights */}
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
              <span className="text-emerald-600">Financial</span> Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key metrics demonstrating our growth and impact (2023 Fiscal Year)
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`text-4xl mb-4 ${item.color}`}>
                  <item.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold mb-2">{item.amount}</div>
                <div className="text-sm text-gray-500">{item.growth}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
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
              <span className="text-emerald-600">Annual</span> Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive documentation of our operations and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {annualReports.map((report, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-emerald-600 p-6 text-white">
                  <div className="text-4xl font-bold mb-2">{report.year}</div>
                  <h3 className="text-xl font-bold">{report.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{report.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{report.size}</span>
                    <motion.a
                      // href={report.download}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaDownload />
                      Download
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shariah Compliance */}
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
              <span className="text-emerald-600">Shariah</span> Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unwavering commitment to Islamic financial principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {shariahReports.map((report, index) => (
              <motion.div
                key={index}
                className="bg-emerald-50 rounded-xl p-8 border border-emerald-100 hover:border-emerald-600 transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-600 text-white p-3 rounded-lg">
                    <FaQuran className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{report.title}</h3>
                    <p className="text-emerald-600 font-medium">Issued by: {report.issued}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">{report.description}</p>
                <motion.a
                  // href={report.download}
                  className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-800"
                  whileHover={{ x: 5 }}
                >
                  Download Document <FaDownload />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Charts */}
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
              <span className="text-emerald-600">Performance</span> Trends
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visualizing our growth and impact over time
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaChartLine className="text-emerald-600" />
                Loans Disbursed (2018-2023)
              </h3>
              <img 
                src="https://www.researchgate.net/publication/369901944/figure/fig1/AS:11431281141232586@1681036812649/Figure-A1-reveals-that-Pakistans-debt-burden-has-been-rapidly-growing-as-indicated-by.png" 
                alt="Akhuwat loan growth chart" 
                className="w-full h-auto border border-gray-200 rounded-lg"
              />
              <div className="mt-4 text-sm text-gray-500">
                * All figures in billions of PKR, interest-free Qard-e-Hasna
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaUsers className="text-blue-600" />
                Beneficiaries Reached (2018-2023)
              </h3>
              <img 
                src="https://media.wwltv.com/assets/VERIFY/images/e0bdd39f-75c8-4fd6-8043-70816ae58d71/e0bdd39f-75c8-4fd6-8043-70816ae58d71_1140x641.jpg" 
                alt="Akhuwat beneficiaries growth chart" 
                className="w-full h-auto border border-gray-200 rounded-lg"
              />
              <div className="mt-4 text-sm text-gray-500">
                * Number of families served through Islamic microfinance
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team for detailed financial inquiries or partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact-us"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaFileAlt />
                Request Detailed Reports
              </motion.a>
              <motion.a
                href="/about/story"
                className="bg-white/10 hover:bg-white/20 border border-white text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaBalanceScale />
                View Audited Statements
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ReportsPage