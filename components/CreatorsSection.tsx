"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const creators = [
  { name: "Creator 1", role: "Digital Artist", image: "/img_07.webp" },
  { name: "Creator 2", role: "Course Creator", image: "/img_08.webp" },
  { name: "Creator 3", role: "Musician", image: "/img_09.webp" },
  { name: "Creator 4", role: "Writer", image: "/img_10.webp" },
  { name: "Creator 5", role: "Designer", image: "/img_11.webp" },
];

export default function CreatorsSection() {
  return (
    <section id="creators" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-r from-yellow/10 to-pink/10 dark:from-yellow/5 dark:to-pink/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-boldonse text-3xl md:text-4xl lg:text-5xl mb-6">
              Join <span className="gradient-text">8,888+</span> creators
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              From artists to educators, everyone's building their empire on Gumroad.
            </p>
          </div>
        </ScrollAnimation>

        {/* Creators grid with parallax */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {creators.map((creator, index) => (
            <ScrollAnimation
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group overflow-hidden rounded-3xl aspect-3/4"
              >
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-linear-to-t from-pink/90 to-transparent flex flex-col justify-end p-6"
                >
                  <h3 className="font-boldonse text-xl text-white mb-1">
                    {creator.name}
                  </h3>
                  <p className="text-white/80">{creator.role}</p>
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 md:mt-32 grid md:grid-cols-3 gap-8">
          <ScrollAnimation animation="slideUp" delay={0}>
            <div className="text-center bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-border">
              <motion.div
                className="font-boldonse text-5xl md:text-6xl text-pink mb-2"
              >
                $324775432+
              </motion.div>
              <p className="text-text-secondary text-lg">Earned by creators</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.2}>
            <div className="text-center bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-border">
              <motion.div
                className="font-boldonse text-5xl md:text-6xl text-yellow mb-2"
              >
                10K+
              </motion.div>
              <p className="text-text-secondary text-lg">Active creators</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="slideUp" delay={0.4}>
            <div className="text-center bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-border">
              <motion.div
                className="font-boldonse text-5xl md:text-6xl gradient-text mb-2"
              >
                1M+
              </motion.div>
              <p className="text-text-secondary text-lg">Products sold</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
