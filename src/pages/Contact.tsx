import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have questions about our spam detection service? We're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">support@spamdetection.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-green-500 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-gray-600 dark:text-gray-400">Available 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-white/10 rounded-lg bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 dark:bg-green-400 text-white dark:text-navy py-2 rounded-lg hover:bg-green-400 dark:hover:bg-green-300 transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;