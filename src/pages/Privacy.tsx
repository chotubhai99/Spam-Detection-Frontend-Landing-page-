import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

function Privacy() {
  const sections = [
    {
      icon: Shield,
      title: 'Data Protection',
      content: 'We employ industry-standard encryption and security measures to protect your personal information and uploaded content.'
    },
    {
      icon: Lock,
      title: 'Information Collection',
      content: 'We only collect information necessary for spam detection. This includes uploaded images, text content, and basic account information.'
    },
    {
      icon: Eye,
      title: 'Data Usage',
      content: 'Your data is used solely for spam detection purposes. We never sell or share your personal information with third parties.'
    },
    {
      icon: Database,
      title: 'Data Retention',
      content: 'We retain your data only for as long as necessary to provide our services and comply with legal obligations.'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                If you have any questions about our privacy policy or how we handle your data,
                please don't hesitate to contact us:
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Email: privacy@spamdetection.com</li>
                <li>Address: 123 Privacy Street, Security City, 12345</li>
                <li>Phone: (555) 123-4567</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-sm text-gray-600 dark:text-gray-400"
            >
              Last updated: March 15, 2024
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;