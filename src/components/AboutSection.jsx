import React from 'react';
import { motion } from 'motion/react';
import { 
  FaUsers, 
  FaLightbulb, 
  FaGraduationCap, 
  FaTrophy 
} from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: FaUsers,
      title: "Collaborate",
      description: "Work in teams to tackle real-world challenges."
    },
    {
      icon: FaLightbulb,
      title: "Innovate",
      description: "Develop creative solutions and push the boundaries of technology."
    },
    {
      icon: FaGraduationCap,
      title: "Learn",
      description: "Gain insights from industry experts through workshops and mentorship."
    },
    {
      icon: FaTrophy,
      title: "Win",
      description: "Win exciting prizes and recognition for your innovative projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30" />
      
      {/* Additional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-green-900/8 via-transparent to-emerald-900/8" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-l from-emerald-500/8 to-green-500/8 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/6 to-green-500/6 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What is{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Live The Code 4.0
            </span>{' '}
            Edition?
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              <span className="text-green-400 font-semibold">Live the Code 4.0</span>, an exhilarating hackathon hosted by the{' '}
              <span className="text-emerald-400 font-semibold">GFG ADGIPS society</span>! This event is designed to bring together the brightest minds in coding, innovation, and problem-solving.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Whether you're a seasoned developer or a passionate beginner, this is your chance to showcase your skills, collaborate with like-minded individuals, and create groundbreaking solutions.
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-green-900/20 via-gray-900/10 to-emerald-900/20 rounded-2xl p-8 border border-green-500/20 backdrop-blur-sm">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Code?</h3>
                <p className="text-gray-300">Join us for an unforgettable coding experience!</p>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-400 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-gray-800/50 via-gray-900/30 to-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-4xl mb-4 text-green-400"
              >
                <feature.icon />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-3 text-lg font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
              Join the Hackathon
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;