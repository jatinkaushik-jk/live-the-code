import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NavigationSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Themes', href: '#themes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    // Initial call to set correct values
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-b border-green-500/30 shadow-2xl' 
            : 'bg-transparent'
        }`}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-emerald-900/5 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <motion.div
              className="flex items-center group cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="text-white font-bold text-2xl group-hover:text-green-400 transition-colors duration-300">
                  Live The Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">3.0</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-6 py-3 text-white hover:text-green-400 transition-all duration-300 rounded-xl group"
                  >
                    <span className="relative z-10 font-medium">{item.name}</span>
                    
                    {/* Bottom Border */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300"
                      initial={false}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:block"
            >
              <a 
                href='#' 
                className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-black to-gray-900 px-8 py-3 text-base font-semibold text-white backdrop-blur-3xl group-hover:from-green-900/20 group-hover:to-emerald-900/20 transition-all duration-300">
                  <span className="relative z-10">Register Now</span>
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
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-50">
              <motion.button
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-4 rounded-2xl transition-all duration-300 backdrop-blur-none ${
                  isMobileMenuOpen 
                    ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-500/70 shadow-lg shadow-green-500/30' 
                    : 'bg-gradient-to-r from-gray-800/70 to-gray-900/70 border border-gray-700/70 hover:border-green-500/70 hover:bg-green-500/20'
                }`}
              >
                <div className="relative w-6 h-6">
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      opacity: isMobileMenuOpen ? 0 : 1,
                      rotate: isMobileMenuOpen ? 90 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hamburger Icon */}
                    <svg
                      className="w-6 h-6 text-gray-300 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-0"
                    animate={{ 
                      opacity: isMobileMenuOpen ? 1 : 0,
                      rotate: isMobileMenuOpen ? 0 : -90
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Close Icon */}
                    <svg
                      className="w-6 h-6 text-green-300 transition-colors duration-300 drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.5))' }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Animated indicator */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                  animate={{ 
                    scale: isMobileMenuOpen ? [1, 1.2, 1] : 0,
                    opacity: isMobileMenuOpen ? [0, 1, 0] : 0
                  }}
                  transition={{ duration: 0.6, repeat: isMobileMenuOpen ? Infinity : 0 }}
                />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-gradient-to-br from-gray-900/98 via-black/98 to-gray-900/98 backdrop-blur-2xl border border-green-500/30 rounded-3xl shadow-2xl z-40 overflow-hidden"
            >
              {/* Mobile Menu Header */}
              <div className="px-6 py-4 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold text-sm">LTC</span>
                    </div>
                    <span className="text-white font-semibold">Navigation</span>
                  </div>
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="px-6 py-6 space-y-4">
                {/* Mobile Navigation Items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className="group w-full text-left py-4 px-6 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 hover:from-green-500/10 hover:to-emerald-500/10 border border-gray-700/30 hover:border-green-500/40 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium text-gray-300 group-hover:text-green-400 transition-colors duration-300">
                          {item.name}
                        </span>
                        <motion.div
                          className="flex items-center space-x-2"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ scale: 1.5 }}
                          />
                          <motion.svg
                            className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ x: 2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
                        </motion.div>
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: navItems.length * 0.1 + 0.2 }}
                  className="pt-6 border-t border-gray-700/50"
                >
                  <a 
                    href='#' 
                    className="group relative inline-flex w-full h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-gradient-to-r from-black to-gray-900 px-6 py-4 text-lg font-bold text-white backdrop-blur-3xl group-hover:from-green-900/20 group-hover:to-emerald-900/20 transition-all duration-300">
                      <span className="relative z-10">Register Now</span>
                      <motion.svg
                        className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </span>
                  </a>
                </motion.div>

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: navItems.length * 0.1 + 0.4 }}
                  className="pt-6 border-t border-gray-700/50"
                >
                  <p className="text-sm text-gray-400 mb-4 text-center font-medium">Follow us for updates</p>
                  <div className="flex justify-center space-x-3">
                    {['Instagram', 'LinkedIn', 'Twitter', 'GitHub'].map((social, index) => (
                      <motion.a
                        key={social}
                        href="#"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: navItems.length * 0.1 + 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                      >
                        <span className="text-sm font-bold">{social[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-400 z-50"
        style={{
          width: `${scrollProgress}%`
        }}
        initial={{ width: 0 }}
        animate={{
          width: `${scrollProgress}%`
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default NavigationSection;