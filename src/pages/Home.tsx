import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Upload, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Unsure if it's Spam?
                <span className="block text-green-500 dark:text-green-400">We'll Detect It for You.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Upload screenshots or enter text to know instantly if it's spam or harmful.
                Protect yourself with our advanced AI-powered detection system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="http://127.0.0.1:5000"
                className="inline-flex justify-center items-center px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 transition-all">
                Try It Now
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                alt="Spam Detection Illustration"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-navy-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three simple steps to protect yourself from spam and harmful content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Upload,
                title: "Upload Image",
                description: "Upload a screenshot of the suspicious message or content."
              },
              {
                icon: MessageSquare,
                title: "Enter Message",
                description: "Or simply paste the text you want to analyze."
              },
              {
                icon: CheckCircle,
                title: "Get Results",
                description: "Receive instant analysis of whether it's spam or safe."
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;