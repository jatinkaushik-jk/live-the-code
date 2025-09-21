import React from 'react';
import { motion } from 'motion/react';

// Static data for timeline
const timelineData = [
  {
    id: 1,
    title: "Registration Begins",
    description: "Kickstart your journey! Register now to secure your spot and be part of an exhilarating hackathon adventure.",
    time: "Day 1 - 9:00 AM",
    icon: "📝",
    color: "green"
  },
  {
    id: 2,
    title: "Speaker Session", 
    description: "Get inspired by industry leaders! Join our speaker session for insights and tips to enhance your hackathon experience.",
    time: "Day 1 - 11:00 AM",
    icon: "🎤",
    color: "emerald"
  },
  {
    id: 3,
    title: "Orientation",
    description: "Prepare for the challenge ahead! Attend the orientation to understand the event details and meet fellow participants.",
    time: "Day 1 - 2:00 PM", 
    icon: "🧭",
    color: "green"
  },
  {
    id: 4,
    title: "24 Hour Coding Period",
    description: "Dive into the coding marathon! Collaborate, innovate, and create your project in a thrilling 24-hour coding session.",
    time: "Day 1 - 4:00 PM",
    icon: "💻",
    color: "emerald"
  },
  {
    id: 5,
    title: "Pitch Presentation",
    description: "Showcase your hard work! Present your project to the judges and make an impression with your innovative solutions.",
    time: "Day 3 - 10:00 AM",
    icon: "🎯",
    color: "green"
  }
];

const TimelineSection = () => {
  return (
    <div className="py-20 bg-black relative overflow-hidden" id="timeline">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-black" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
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
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow the journey from registration to final pitch presentation
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-emerald-400 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
              >
                {/* Timeline Item Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${
                      item.color === 'green' 
                        ? 'from-green-500/20 to-emerald-500/20' 
                        : 'from-emerald-500/20 to-green-500/20'
                    } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-colors duration-300">
                      {/* Time Badge */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        item.color === 'green'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {item.time}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Central Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                  <div className={`w-6 h-6 rounded-full ${
                    item.color === 'green' ? 'bg-green-400' : 'bg-emerald-400'
                  } border-4 border-black shadow-lg`} />
                </div>

                {/* Mobile Timeline Connector */}
                <div className="md:hidden w-1 h-8 bg-gradient-to-b from-green-400 to-emerald-400 mx-auto my-4" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to be part of this incredible journey?
          </p>
          <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
              Join The Journey
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineSection;