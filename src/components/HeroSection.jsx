import React from 'react';
import { motion } from 'motion/react';
import { FaCode, FaRocket, FaTrophy, FaUsers, FaClock, FaLightbulb } from 'react-icons/fa';

// Static data for hero section
const heroData = {
  title: "Live The Code",
  version: "4.0",
  subtitle: "Code. Innovate. Transform.",
  description: "Join GeeksForGeeks ADGIPS Campus Chapter for an exhilarating 24-hour coding marathon where innovation meets technology.",
  ctaText: "Register Now",
  organization: "GeeksForGeeks ADGIPS Chapter",
  stats: [
    { icon: FaUsers, value: "500+", label: "Participants" },
    { icon: FaClock, value: "24", label: "Hours" },
    { icon: FaTrophy, value: "₹50K+", label: "Prize Pool" },
    { icon: FaCode, value: "6", label: "Tracks" }
  ],
  features: [
    { icon: FaRocket, text: "Innovation" },
    { icon: FaLightbulb, text: "Creativity" },
    { icon: FaCode, text: "Technology" },
    { icon: FaTrophy, text: "Excellence" }
  ]
};

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02]">
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      
      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/8 via-transparent to-emerald-900/8" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-emerald-500/15 to-green-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-teal-500/10 to-green-500/10 rounded-full blur-2xl" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 text-2xl font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['<', '/', '>', '{', '}', '(', ')', ';', '=', '+', '-', '*', '/'].sort(() => Math.random() - 0.5)[0]}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Organization Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-4 mt-8 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">
                  {heroData.organization}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              >
                <span className="text-white block">{heroData.title}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 block">
                  {heroData.version}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-green-400 font-semibold mb-4 tracking-wider"
              >
                {heroData.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
              >
                {heroData.description}
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6"
              >
                {heroData.features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center px-3 py-1.5 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-full backdrop-blur-sm text-sm"
                  >
                    <feature.icon className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a
                  href="#"
                  className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-900 px-6 py-2 text-base font-semibold text-white backdrop-blur-3xl group-hover:from-green-900/20 group-hover:to-emerald-900/20 transition-all duration-300">
                    <span className="relative z-10">{heroData.ctaText}</span>
                    <motion.svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </a>
                
                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-2 text-base font-semibold text-gray-300 hover:text-green-400 transition-colors duration-300 border border-gray-700/50 rounded-full hover:border-green-500/50 backdrop-blur-sm"
                >
                  Learn More
                </a>
              </motion.div>
            </div>

            {/* Right Content - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {heroData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-4 bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl backdrop-blur-sm hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <motion.div
                      className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      <stat.icon className="w-5 h-5 text-black" />
                    </motion.div>
                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs font-medium">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-green-400 rounded-full opacity-30"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-6 h-6 border-2 border-green-400 rounded-full opacity-40"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full opacity-50"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroSection;