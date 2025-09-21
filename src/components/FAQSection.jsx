import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data array
  const faqData = [
    {
      id: 1,
      question: "What is Live The Code 4.0?",
      answer: "Live The Code 4.0 is a 24-hour hackathon organized by GeeksForGeeks ADGIPS Campus Chapter. It's a platform for students to showcase their coding skills, collaborate with peers, and develop innovative solutions to real-world problems."
    },
    {
      id: 2,
      question: "Who can participate?",
      answer: "The hackathon is open to all students from ADGIPS and other universities. Whether you're a beginner or an experienced developer, everyone is welcome to participate and learn."
    },
    {
      id: 3,
      question: "What are the themes for the hackathon?",
      answer: "We have six exciting themes: FinTech, Ed-Tech, Web 3.0, Health, AgriTech, and Smart India. Participants can choose any theme that interests them or propose their own innovative idea."
    },
    {
      id: 4,
      question: "How do I register for the event?",
      answer: "Registration is simple! Click on the 'Register Now' button on our website, fill out the registration form with your details, and you'll receive a confirmation email with further instructions."
    },
    {
      id: 5,
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, and any necessary development tools. We'll provide food, drinks, and a comfortable workspace. Don't forget to bring your creativity and enthusiasm!"
    },
    {
      id: 6,
      question: "Are there any prizes?",
      answer: "Yes! We have exciting prizes for the top teams, including cash prizes, tech gadgets, and internship opportunities. There are also special prizes for the best theme-specific solutions."
    },
    {
      id: 7,
      question: "Can I participate as an individual or do I need a team?",
      answer: "You can participate as an individual or form a team of up to 4 members. We encourage team participation as it often leads to more innovative solutions, but solo participants are also welcome."
    },
    {
      id: 8,
      question: "What if I'm new to coding?",
      answer: "No worries! This hackathon is perfect for beginners. We'll have mentors available to help you, and there will be workshops and sessions to guide you through the development process."
    },
    {
      id: 9,
      question: "How will the judging be done?",
      answer: "Projects will be judged based on innovation, technical implementation, user experience, and potential impact. Our panel of industry experts and faculty members will evaluate each project fairly."
    },
    {
      id: 10,
      question: "Will there be food and refreshments?",
      answer: "Absolutely! We'll provide breakfast, lunch, dinner, and snacks throughout the 24-hour period. Coffee and energy drinks will also be available to keep you energized."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-emerald-900/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full mb-6 backdrop-blur-sm"
          >
            <FaQuestionCircle className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-green-400 text-sm font-semibold">
              Frequently Asked Questions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Got Questions?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              We've Got Answers
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Find answers to the most common questions about Live The Code 4.0 hackathon
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className="w-5 h-5 text-green-400" />
                  </motion.div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="p-4 bg-gradient-to-r from-gray-800/20 to-gray-900/20 border border-gray-700/30 rounded-xl backdrop-blur-sm">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6">
              Don't hesitate to reach out to us for any clarifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:geeksforgeeksadgips@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-700/50 text-gray-300 font-semibold rounded-full hover:border-green-500/50 hover:text-green-400 transition-all duration-300"
              >
                More Info
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
