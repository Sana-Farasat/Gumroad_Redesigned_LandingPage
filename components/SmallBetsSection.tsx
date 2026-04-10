"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const cards = [
  {
    headline: "DON'T TAKE RISKS.",
    subheadline: "THAT'S SCARY!",
    body: "Instead of selling a book, start by selling a blog post. Instead of a course, sell a single workshop. Test before you invest.",
    emoji: "🎲",
  },
  {
    headline: "PLACE SMALL BETS.",
    subheadline: "THAT'S EXCITING!",
    body: "Each small project teaches you something. No big upfront risk. Just experiment, learn, and scale what works.",
    emoji: "🎯",
  },
  {
    headline: "SHARE YOUR WORK.",
    subheadline: "SOMEONE OUT THERE NEEDS IT.",
    body: "You don't need millions of fans. You just need the right people who value what you create. They're waiting.",
    emoji: "💛",
  },
];

export default function SmallBetsSection() {
  return (
    <section className="py-20 md:py-32 relative bg-bg-secondary dark:bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.2}
              duration={0.6}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-8 shadow-md border border-border h-full flex flex-col"
              >
                {/* Emoji */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-5xl mb-6"
                >
                  {card.emoji}
                </motion.div>

                {/* Headline */}
                <h3 className="font-boldonse text-2xl md:text-3xl uppercase text-text mb-2 leading-relaxed">
                  {card.headline}
                </h3>

                {/* Subheadline */}
                <p className="text-pink font-bold text-lg mb-4">
                  {card.subheadline}
                </p>

                {/* Body */}
                <p className="font-medium text-text-secondary text-lg leading-relaxed grow">
                  {card.body}
                </p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
