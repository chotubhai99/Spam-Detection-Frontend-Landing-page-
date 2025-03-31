import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Server } from 'lucide-react';

function Security() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Encryption',
      description: 'All data is encrypted using industry-standard AES-256 encryption.'
    },
    {
      icon: Lock,
      title: 'Secure Authentication',
      description: 'Multi-factor authentication and secure session management.'
    },
    {
      icon: Key,
      title: 'Access Control',
      description: 'Strict access controls and user permission management.'
    },
    {
      icon: Server,
      title: 'Data Protection',
      description: 'Regular backups and secure data storage protocols.'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information security management system certification'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality compliance'
    },
    {
      name: 'GDPR Compliant',
      description: 'European data protection regulation compliance'
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
              Security First Approach
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn about our comprehensive security measures designed to protect your data.
            </p>
          </motion.div>

          {/* Security Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-navy-darker p-8 rounded-xl shadow-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Our Security Commitment</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We are committed to maintaining the highest standards of security to protect your data.
              Our team regularly updates our security measures and conducts thorough audits to ensure
              your information remains safe and secure.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Security;