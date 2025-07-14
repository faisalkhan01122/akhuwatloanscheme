"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaBuilding,
  FaUsers,
  FaUser,
  FaMedkit,
  FaGraduationCap,
  FaHome,
  FaExclamationTriangle,
  FaPhone,
  FaMosque,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaChartLine,
  FaBook,
  FaHandsHelping,
} from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const loanServices = [
    {
      name: "Family Enterprise Loans",
      path: "/loans/family-enterprise",
      icon: FaBuilding,
      desc: "Up to ₨500,000 for family businesses",
      color: "text-emerald-600",
    },
    {
      name: "Education Loans",
      path: "/loans/education",
      icon: FaGraduationCap,
      desc: "Interest-free support for students",
      color: "text-blue-600",
    },
    {
      name: "Health Emergency Loans",
      path: "/loans/health",
      icon: FaMedkit,
      desc: "Medical treatment financing",
      color: "text-purple-600",
    },
    {
      name: "Housing Loans",
      path: "/loans/housing",
      icon: FaHome,
      desc: "Home construction & renovation",
      color: "text-orange-600",
    },
    {
      name: "Marriage Loans",
      path: "/loans/marriage",
      icon: FaHandsHelping,
      desc: "Support for wedding expenses",
      color: "text-pink-600",
    },
    {
      name: "Agricultural Loans",
      path: "/loans/agriculture",
      icon: FaHandHoldingHeart,
      desc: "Farming equipment & supplies",
      color: "text-green-600",
    },
  ]

  const navItems = [
    { name: "Home", path: "/", icon: FaHome },
    { 
      name: "About Us", 
      path: "/about", 
      icon: FaBook,
      dropdown: [
        {
          name: "Our Story",
          path: "/about/story",
          icon: FaBook,
          desc: "History and mission of Akhuwat",
          color: "text-emerald-600"
        },
        {
          name: "Core Values",
          path: "/about/values",
          icon: FaShieldAlt,
          desc: "Principles guiding our work",
          color: "text-blue-600"
        },
        {
          name: "Leadership",
          path: "/about/leadership",
          icon: FaUsers,
          desc: "Meet our team",
          color: "text-purple-600"
        }
      ]
    },
    { 
      name: "Loan Programs", 
      path: "/loans", 
      dropdown: loanServices, 
      icon: FaHandHoldingHeart 
    },
    { 
      name: "Impact", 
      path: "/impact", 
      icon: FaChartLine,
      dropdown: [
        {
          name: "Success Stories",
          path: "/impact/stories",
          icon: FaUsers,
          desc: "Transformational journeys",
          color: "text-orange-600"
        },
        {
          name: "Annual Reports",
          path: "/impact/reports",
          icon: FaChartLine,
          desc: "Financial and social impact",
          color: "text-green-600"
        },
        {
          name: "Geographical Reach",
          path: "/impact/reach",
          icon: FaBuilding,
          desc: "Our nationwide presence",
          color: "text-blue-600"
        }
      ]
    },
    // { name: "Donate", path: "/donate", icon: FaHandsHelping },
    { name: "Contact", path: "/contact-us", icon: FaPhone },
  ]

  const toggleMobileDropdown = (name) => {
    if (activeDropdown === name) setActiveDropdown(null)
    else setActiveDropdown(name)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-gradient-to-b from-gray-900/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <img
                src="/akhuwatfundslogo.png" // Replace with your logo
                alt="Akhuwat Logo"
                className="h-12 w-auto"
              />
              <div className="ml-3 hidden md:block">
                <h1 className={`text-xl font-bold ${scrolled ? "text-emerald-700" : "text-white"}`}>
                  Akhuwat Foundation
                </h1>
                <p className={`text-xs ${scrolled ? "text-gray-600" : "text-emerald-200"}`}>
                  Interest-Free Microfinance
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-emerald-600 text-white"
                      : scrolled
                      ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-72 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                    >
                      <div className="py-2">
                        {item.dropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-150"
                          >
                            <div className={`flex-shrink-0 ${service.color} mr-3`}>
                              <service.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-medium">{service.name}</p>
                              <p className="text-xs text-gray-500 mt-1">{service.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <Link
              to="/contact-us"
              className={`ml-4 px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : "bg-white text-emerald-600 hover:bg-emerald-50"
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-3 text-base font-medium rounded-lg ${
                        location.pathname === item.path
                          ? "bg-emerald-600 text-white"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                      }`}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className={`flex items-center justify-between px-3 py-3 text-base font-medium rounded-lg w-full ${
                          location.pathname === item.path
                            ? "bg-emerald-600 text-white"
                            : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        }`}
                      >
                        <span className="flex items-center">
                          <item.icon className="mr-3 h-5 w-5" />
                          {item.name}
                        </span>
                        <FaChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeDropdown === item.name ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-8 space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((service) => (
                              <Link
                                key={service.name}
                                to={service.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <Link
                to="/contact-us"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 mt-2"
              >
                Apply for Loan
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar