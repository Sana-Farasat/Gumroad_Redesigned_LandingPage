"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-pink/15 via-yellow/10 to-pink/15 dark:from-pink/5 dark:via-yellow/5 dark:to-pink/5" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="scale">
          <h2 className="font-boldonse text-2xl md:text-3xl lg:text-4xl uppercase text-text mb-6 leading-relaxed">
            We want you to try them,
            <br />
            <span className="gradient-text">lots of them,</span>
            <br />
            and find out what works.
          </h2>
        </ScrollAnimation>

        <ScrollAnimation animation="slideUp" delay={0.2}>
          <p className="font-medium text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            You don&apos;t have to be a tech expert or even understand how to start a business.
            You just gotta take what you know and sell it.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="scale" delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 50px rgba(194, 30, 86, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-pink-dark transition-all shadow-xl"
            >
              Start selling for free →
            </motion.button>
          </div>
        </ScrollAnimation>

        {/* Trust badges */}
        <ScrollAnimation animation="fadeIn" delay={0.6}>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-text-secondary">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="font-medium">Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-medium">No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              <span className="font-medium">Trusted by creators worldwide</span>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
