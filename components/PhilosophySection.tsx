"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-32 relative bg-bg-secondary dark:bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side */}
          <ScrollAnimation animation="slideRight">
            <div>
              <h2 className="font-boldonse text-2xl md:text-3xl lg:text-3xl uppercase text-text mb-6 leading-relaxed">
                Instead of building a company...
              </h2>
              <p className="font-medium text-text-secondary text-lg md:text-xl leading-relaxed mb-8">
                You know all those great ideas you have? The ones that keep you up at night?
                Instead of building a whole company, just start selling a side project.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink text-white px-8 py-3 rounded-full font-bold hover:bg-pink-dark transition-colors"
              >
                Find out how →
              </motion.button>
            </div>
          </ScrollAnimation>

          {/* Right side */}
          <ScrollAnimation animation="slideLeft">
            <div>
              <h2 className="font-boldonse text-2xl md:text-3xl lg:text-3xl uppercase text-text mb-6 leading-relaxed">
                ...start selling a side project!
              </h2>
              <p className="font-medium text-text-secondary text-lg md:text-xl leading-relaxed mb-8">
                No board meetings. No investors. Just you, your work, and people who love it.
                Start small, learn fast, and grow at your own pace.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block bg-pink/10 border-2 border-pink/20 text-pink px-8 py-3 rounded-full font-bold"
              >
                Zero risk. All reward. 🚀
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
