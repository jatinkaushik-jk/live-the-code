import React from 'react';
import { motion } from 'motion/react';

// Static data for themes
const themesData = [
  {
    id: 1,
    title: "FinTech",
    description: "Revolutionary financial technology solutions for modern banking and payments",
    icon: "💰",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  },
  {
    id: 2,
    title: "Ed-Tech",
    description: "Innovative educational platforms and learning management systems",
    icon: "🎓",
    color: "from-emerald-400 to-green-500", 
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    id: 3,
    title: "Web 3.0",
    description: "Decentralized applications and blockchain-powered solutions",
    icon: "🔗",
    color: "from-green-400 to-teal-500",
    bgColor: "bg-green-500/10", 
    borderColor: "border-green-500/20"
  },
  {
    id: 4,
    title: "Health",
    description: "Healthcare technology solutions improving patient care and medical processes",
    icon: "🏥",
    color: "from-teal-400 to-emerald-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20"
  },
  {
    id: 5,
    title: "AgriTech",
    description: "Smart farming solutions using IoT, AI and sustainable technology",
    icon: "🌱",
    color: "from-emerald-400 to-green-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20"
  },
  {
    id: 6,
    title: "Smart India",
    description: "Digital transformation solutions for smart cities and governance",
    icon: "🇮🇳",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20"
  }
];

const ThemesSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden" id="themes">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Themes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your domain and build innovative solutions that matter
          </p>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themesData.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${theme.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className={`relative ${theme.bgColor} backdrop-blur-sm border ${theme.borderColor} rounded-2xl p-8 h-full hover:border-opacity-50 transition-all duration-300`}>
                {/* Theme Icon */}
                <div className="flex items-center justify-center w-16 h-16 mb-6">
                  <span className="text-5xl">{theme.icon}</span>
                </div>

                {/* Theme Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {theme.title}
                </h3>

                {/* Theme Description */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {theme.description}
                </p>

                {/* Explore Button */}
                <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors duration-300">
                  <span>Explore</span>
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-400 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't find your theme?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Don't worry! You can also propose your own innovative theme and build something completely unique.
            </p>
            <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
                Propose Your Theme
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThemesSection;