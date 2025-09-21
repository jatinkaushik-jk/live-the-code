import React from 'react';
import { motion } from 'motion/react';
import { HeroParallax } from './ui/aceternity-components';
import { Highlight } from './ui/aceternity-components';

// Static data for hero section
const heroData = {
  title: "Live The Code",
  version: "3.0",
  subtitle: "Code. Innovate. Transform.",
  description: "Join GeeksForGeeks ADGIPS Campus Chapter for an exhilarating 24-hour coding marathon where innovation meets technology.",
  ctaText: "Register Now",
  organization: "GeeksForGeeks ADGIPS Chapter",
  parallaxImages: [
    {
      title: "Data Science Track",
      link: "#tracks",
      thumbnail: "/assets/placeholderIMG.webp"
    },
    {
      title: "Web Development",
      link: "#tracks", 
      thumbnail: "/assets/placeholderIMG.webp"
    },
    {
      title: "MERN Stack",
      link: "#tracks",
      thumbnail: "/assets/placeholderIMG.webp"
    },
    {
      title: "AI/ML Innovation",
      link: "#tracks",
      thumbnail: "/assets/placeholderIMG.webp"
    },
    {
      title: "Mobile Development",
      link: "#tracks",
      thumbnail: "/assets/placeholderIMG.webp"
    },
    {
      title: "Cloud Computing",
      link: "#tracks",
      thumbnail: "/assets/placeholderIMG.webp"
    }
  ]
};

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-black bg-grid-white/[0.02]">
        <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Organization Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-8"
          >
            <span className="text-green-400 text-sm font-medium">
              {heroData.organization}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4"
          >
            <span className="text-white">{heroData.title}</span>
            <br />
            <Highlight className="text-white bg-gradient-to-r from-green-400 to-emerald-400">
              {heroData.version}
            </Highlight>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-green-400 font-semibold mb-6 tracking-wider"
          >
            {heroData.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="group relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-lg font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
                {heroData.ctaText}
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 bg-green-400 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-6 h-6 border-2 border-green-400 rounded-full opacity-30"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-40"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroSection;