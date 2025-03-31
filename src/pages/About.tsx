import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, Globe } from 'lucide-react';

function About() {
  const stats = [
    { label: 'Active Users', value: '100K+' },
    { label: 'Spam Detected', value: '1M+' },
    { label: 'Accuracy Rate', value: '99.9%' },
    { label: 'Countries', value: '150+' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      description: 'Expert in AI and cybersecurity with 15+ years of experience.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      description: 'Machine learning specialist focused on spam detection algorithms.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      description: 'Product strategist with a passion for user-centric design.'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission to
              <span className="block text-green-500 dark:text-green-400">Make the Internet Safer</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're dedicated to protecting users from spam and harmful content through innovative AI technology.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 dark:text-green-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="bg-white dark:bg-navy-darker p-8 rounded-xl shadow-lg">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2023, Spam Detection emerged from a simple yet powerful idea: make the internet
                a safer place for everyone. What started as a small project to help friends and family
                avoid spam has grown into a comprehensive platform trusted by users worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Our team of experts in AI, cybersecurity, and software development work tirelessly
                to stay ahead of emerging threats and provide the most accurate spam detection
                service possible.
              </p>
            </div>
          </motion.div>

          {/* Team Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
                >
                  <div className="mb-4">
                    <img
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${member.name}`}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                    <p className="text-green-500 dark:text-green-400 text-center mb-2">{member.role}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;