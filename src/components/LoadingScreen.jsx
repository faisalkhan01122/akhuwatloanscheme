
"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          if (onComplete) {
            setTimeout(onComplete, 500)
          }
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-400 rounded-full animate-pulse blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-400 rounded-full animate-ping blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-400 rounded-full animate-bounce blur-xl"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 mx-auto bg-gradient-to-br from-white to-white rounded-full flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(16, 185, 129, 0.4)",
                  "0 0 0 20px rgba(16, 185, 129, 0)",
                  "0 0 0 0 rgba(16, 185, 129, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* <motion.div
                className="text-white text-4xl font-bold"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              > */}
                <img src="/akhuwatfundslogo.png" alt="Akhuwat" className="w-full h-full object-contain rounded-full shadow-2xl" />
              {/* </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Akhuwat</span>{" "}
            Loans Scheme
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Pakistan's Largest Interest-Free Loans
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-80 mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </motion.div>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Loading...</span>
            <span className="font-bold text-emerald-600">{progress}%</span>
          </div>
        </motion.div>

        {/* Loading Messages */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="text-gray-500 text-sm">
            {progress < 30 && "Initializing Akhuwat Services..."}
            {progress >= 30 && progress < 60 && "Loading Islamic Finance Solutions..."}
            {progress >= 60 && progress < 90 && "Preparing Interest-Free Loans..."}
            {progress >= 90 && "Almost Ready..."}
          </div>
        </motion.div>

        {/* Islamic Pattern */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-96 h-96 border-4 border-emerald-300 rounded-full"></div>
          <div className="absolute inset-8 border-2 border-teal-300 rounded-full"></div>
          <div className="absolute inset-16 border border-green-300 rounded-full"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
