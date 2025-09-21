import React from 'react';
import { motion } from 'motion/react';

// Static data for sponsors
const sponsorsData = {
  platinum: [
    {
      id: 1,
      name: "GeeksforGeeks",
      logo: "/api/placeholder/200/80",
      website: "https://geeksforgeeks.org"
    },
    {
      id: 2,
      name: "Microsoft",
      logo: "/api/placeholder/200/80", 
      website: "https://microsoft.com"
    }
  ],
  gold: [
    {
      id: 3,
      name: "Google",
      logo: "/api/placeholder/180/70",
      website: "https://google.com"
    },
    {
      id: 4,
      name: "Amazon",
      logo: "/api/placeholder/180/70",
      website: "https://amazon.com"
    },
    {
      id: 5,
      name: "Meta", 
      logo: "/api/placeholder/180/70",
      website: "https://meta.com"
    }
  ],
  silver: [
    {
      id: 6,
      name: "Netflix",
      logo: "/api/placeholder/150/60",
      website: "https://netflix.com"
    },
    {
      id: 7,
      name: "Spotify",
      logo: "/api/placeholder/150/60", 
      website: "https://spotify.com"
    },
    {
      id: 8,
      name: "Adobe",
      logo: "/api/placeholder/150/60",
      website: "https://adobe.com"
    },
    {
      id: 9,
      name: "Intel",
      logo: "/api/placeholder/150/60",
      website: "https://intel.com"
    }
  ],
  bronze: [
    {
      id: 10,
      name: "Figma",
      logo: "/api/placeholder/120/50",
      website: "https://figma.com"
    },
    {
      id: 11,
      name: "Notion",
      logo: "/api/placeholder/120/50", 
      website: "https://notion.so"
    },
    {
      id: 12,
      name: "Discord",
      logo: "/api/placeholder/120/50",
      website: "https://discord.com"
    },
    {
      id: 13,
      name: "Slack",
      logo: "/api/placeholder/120/50",
      website: "https://slack.com"
    },
    {
      id: 14,
      name: "GitHub",
      logo: "/api/placeholder/120/50",
      website: "https://github.com"
    }
  ]
};

const collaborators = [
  {
    id: 1,
    name: "ADGIPS",
    logo: "/api/placeholder/100/100",
    role: "Host Institution"
  },
  {
    id: 2,
    name: "IEEE ADGIPS",
    logo: "/api/placeholder/100/100", 
    role: "Technical Partner"
  },
  {
    id: 3,
    name: "Google Developer Groups",
    logo: "/api/placeholder/100/100",
    role: "Community Partner"
  },
  {
    id: 4,
    name: "Microsoft Learn",
    logo: "/api/placeholder/100/100",
    role: "Education Partner"
  }
];

const SponsorsSection = () => {
  return (
    <div className="py-20 bg-black relative overflow-hidden" id="sponsors">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proudly supported by industry leaders and innovation partners
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-green-400 mb-8">Platinum</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsorsData.platinum.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-green-500/50 transition-colors duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-20 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-yellow-400 mb-8">Gold</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {sponsorsData.gold.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-yellow-500/50 transition-colors duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-16 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-400 mb-8">Silver</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sponsorsData.silver.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-slate-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 hover:border-gray-500/50 transition-colors duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bronze Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center text-amber-600 mb-8">Bronze</h3>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {sponsorsData.bronze.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-3 hover:border-amber-600/50 transition-colors duration-300">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-10 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaborators Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Collaborators</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborators.map((collaborator, index) => (
              <motion.div
                key={collaborator.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-green-500/50 transition-colors duration-300">
                  <img 
                    src={collaborator.logo} 
                    alt={collaborator.name}
                    className="h-16 w-16 object-contain mx-auto mb-4 filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                  <h4 className="text-white font-semibold mb-2">{collaborator.name}</h4>
                  <p className="text-green-400 text-sm">{collaborator.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to sponsor Live The Code 3.0?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Join us in empowering the next generation of innovators and creators
            </p>
            <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
                Become a Sponsor
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorsSection;