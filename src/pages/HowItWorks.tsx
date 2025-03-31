import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Lock } from 'lucide-react';

function HowItWorks() {
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
              How Our Technology Works
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Learn about our advanced AI-powered spam detection system and how it keeps you safe.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Brain,
                title: "AI-Powered Analysis",
                description: "Our advanced machine learning models analyze patterns and characteristics of spam messages with high accuracy."
              },
              {
                icon: Zap,
                title: "Real-Time Detection",
                description: "Get instant results whether your content is spam or safe, powered by our lightning-fast processing."
              },
              {
                icon: Shield,
                title: "Multi-Layer Protection",
                description: "Multiple detection algorithms work together to provide comprehensive protection against various types of spam."
              },
              {
                icon: Lock,
                title: "Privacy First",
                description: "Your data is encrypted and processed securely. We never store sensitive information."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-navy-darker p-8 rounded-xl shadow-lg"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorks;