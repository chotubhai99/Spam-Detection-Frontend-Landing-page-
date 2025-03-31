import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, CheckCircle, HelpCircle } from 'lucide-react';

function Terms() {
  const sections = [
    {
      icon: FileText,
      title: 'Terms of Use',
      content: 'By accessing and using our service, you agree to comply with these terms and conditions.'
    },
    {
      icon: AlertCircle,
      title: 'User Responsibilities',
      content: 'Users must not upload malicious content, violate intellectual property rights, or attempt to breach our security.'
    },
    {
      icon: CheckCircle,
      title: 'Service Usage',
      content: 'Our spam detection service is provided "as is" and we make no guarantees about its accuracy or availability.'
    },
    {
      icon: HelpCircle,
      title: 'Support and Updates',
      content: 'We may modify these terms or our service at any time. Continued use constitutes acceptance of any changes.'
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Please read these terms carefully before using our service.
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
              <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                To the maximum extent permitted by law, we shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, or any loss of profits
                or revenues, whether incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For any questions about these terms, please contact us:
              </p>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>Email: legal@spamdetection.com</li>
                <li>Address: 123 Legal Avenue, Terms City, 12345</li>
                <li>Phone: (555) 987-6543</li>
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

export default Terms;