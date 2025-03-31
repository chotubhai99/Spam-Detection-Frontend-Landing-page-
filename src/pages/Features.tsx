import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Image, 
  MessageSquare, 
  Zap,
  Lock,
  History,
  Bell,
  Download
} from 'lucide-react';

function Features() {
  const features = [
    {
      icon: Image,
      title: "Image Analysis",
      description: "Upload screenshots or images for instant spam detection."
    },
    {
      icon: MessageSquare,
      title: "Text Detection",
      description: "Analyze text messages and emails for spam content."
    },
    {
      icon: Zap,
      title: "Real-Time Results",
      description: "Get instant feedback on whether content is spam or safe."
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is encrypted and processed securely."
    },
    {
      icon: History,
      title: "Detection History",
      description: "Access your past detection results anytime."
    },
    {
      icon: Bell,
      title: "Alert System",
      description: "Get notified about potential threats instantly."
    },
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Multi-layer security against various types of spam."
    },
    {
      icon: Download,
      title: "Bulk Processing",
      description: "Analyze multiple items simultaneously."
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
              Powerful Features to
              <span className="block text-green-500 dark:text-green-400">Keep You Safe</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive set of features designed to protect you from spam and harmful content.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-navy-darker p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;