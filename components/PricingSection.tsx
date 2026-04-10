"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-boldonse text-3xl md:text-4xl lg:text-5xl mb-6 leading-relaxed">
              Simple <span className="text-pink">pricing</span>
            </h2>
            <p className="font-medium text-xl text-text-secondary max-w-2xl mx-auto">
              Start for free. Only pay when you make money. It's that simple.
            </p>
          </div>
        </ScrollAnimation>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free plan */}
          <ScrollAnimation animation="slideRight">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-10 shadow-lg border-2 border-border"
            >
              <div className="text-center mb-8">
                <h3 className="font-boldonse text-3xl mb-2 text-text">Free</h3>
                <p className="text-text-secondary text-lg mb-4">Perfect for getting started</p>
                <div className="font-boldonse text-6xl text-text mb-2">$0</div>
                <p className="text-text-secondary">per month</p>
              </div>

              <ul className="space-y-4 mb-8">
                {["Unlimited products", "Basic analytics", "Email support", "Custom domain", "Community access"].map(
                  (feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-secondary">
                      <span className="text-pink text-xl">✓</span>
                      {feature}
                    </li>
                  )
                )}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-pink/10 text-pink py-4 rounded-full font-bold text-lg hover:bg-pink/20 transition-colors"
              >
                Get started free
              </motion.button>
            </motion.div>
          </ScrollAnimation>

          {/* Pro plan */}
          <ScrollAnimation animation="slideLeft">
            <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-linear-to-br from-pink to-pink-dark rounded-3xl p-10 shadow-xl text-white"
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow text-text px-6 py-2 rounded-full font-bold text-sm">
                MOST POPULAR ⭐
              </div>

              <div className="text-center mb-8 pt-4">
                <h3 className="font-boldonse text-3xl mb-2">Pro</h3>
                <p className="text-white/80 text-lg mb-4">For serious creators</p>
                <div className="font-boldonse text-6xl mb-2">$10</div>
                <p className="text-white/80">per month + 10% fee</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Free",
                  "Advanced analytics",
                  "Priority support",
                  "Custom branding",
                  "Affiliate program",
                  "API access",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <span className="text-yellow text-xl">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(255, 210, 63, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-pink py-4 rounded-full font-bold text-lg hover:bg-pink-200 transition-colors"
              >
                Start Pro trial →
              </motion.button>
            </motion.div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
