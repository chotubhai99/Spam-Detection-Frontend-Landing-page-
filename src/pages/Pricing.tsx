import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "10 spam checks per day",
        "Basic text analysis",
        "Image upload up to 2MB",
        "24-hour detection history"
      ]
    },
    {
      name: "Pro",
      price: "9.99",
      description: "For power users",
      features: [
        "Unlimited spam checks",
        "Advanced text analysis",
        "Image upload up to 10MB",
        "30-day detection history",
        "Priority support",
        "API access"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        "Custom usage limits",
        "Advanced API integration",
        "Dedicated support",
        "Custom features",
        "SLA guarantee",
        "Team management"
      ]
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include our core spam detection features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-navy-darker rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    {typeof plan.price === 'number' && <span className="text-gray-600 dark:text-gray-400">/month</span>}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                  <button className="w-full bg-green-500 dark:bg-green-400 text-white dark:text-navy py-2 rounded-lg hover:bg-green-400 dark:hover:bg-green-300 transition-colors mb-6">
                    Get Started
                  </button>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 dark:text-green-400 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;