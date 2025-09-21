import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const NavigationSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Themes', href: '#themes' },
    { name: 'Sponsors', href: '#sponsors' },
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-md border-b border-green-500/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-sm">LTC</span>
                </div>
                <div className="text-white font-bold text-xl">
                  Live The Code <span className="text-green-400">3.0</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-green-400 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden md:block"
            >
              <button className="group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
                  Register Now
                </span>
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-green-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-gray-300 hover:text-green-400 transition-colors duration-300 py-2"
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <button className="w-full group relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#10B981_50%,#E2E8F0_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-green-900/20 transition-colors">
                      Register Now
                    </span>
                  </button>
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
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
        initial={{ width: 0 }}
        animate={{
          width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />
    </>
  );
};

export default NavigationSection;