"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Start Small",
    description: "Don't try to build a massive product on day one. Start with a blog post, a simple guide, or a single video lesson. See if people want it.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Get Better Together",
    description: "Your audience will tell you what they need. Listen to them. Iterate. Improve. Build the next thing based on real feedback, not guesses.",
    icon: "🤝",
  },
  {
    number: "03",
    title: "Learn Quickly",
    description: "Try lots of small bets. Some will work, some won't. The ones that work? Double down. The ones that don't? Learn and move on.",
    icon: "⚡",
  },
];

export default function GumroadWaySection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-boldonse text-3xl md:text-4xl lg:text-5xl uppercase text-text mb-6">
              The Gumroad <span className="text-pink">Way</span>
            </h2>
            <p className="font-medium text-xl text-text-secondary max-w-2xl mx-auto">
              Three principles that turn ideas into income.
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.2}
              duration={0.6}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="text-center group"
              >
                {/* Number */}
                <div className="font-boldonse text-7xl md:text-8xl gradient-text opacity-20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-boldonse text-2xl md:text-3xl text-text mb-4 leading-relaxed">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-medium text-text-secondary text-lg leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
