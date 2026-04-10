"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const tags = [
  "Ebooks", "Courses", "Procreate Brushes", "Music", "Software", "Templates",
  "Photography", "Illustrations", "Podcasts", "Workshops", "Coaching",
  "Design Assets", "Video Tutorials", "Notion Templates", "Fonts",
  "Presets", "3D Models", "Code Snippets", "Guides", "Memberships",
  "Comics", "Writing Prompts", "Fitness Plans", "Recipes",
  "Spreadsheets", "Stock Photos", "Sound Effects", "Patterns",
  "Icon Packs", "Resume Templates", "Study Guides", "Art Prints",
];

// Duplicate tags for seamless loop
const allTags = [...tags, ...tags, ...tags];

export default function DiscoverySection() {
  return (
    <section id="discover" className="py-20 md:py-32 relative bg-bg-secondary dark:bg-bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-boldonse text-3xl md:text-4xl lg:text-5xl uppercase text-text mb-6">
              Unlimited <span className="gradient-text">Possibilities</span>
            </h2>
            <p className="font-medium text-xl text-text-secondary max-w-2xl mx-auto">
              Discover the best-selling products and creators on Gumroad.
            </p>
          </div>
        </ScrollAnimation>

        {/* Marquee Container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-bg-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-bg-secondary to-transparent z-10" />

          {/* Row 1 - Left to Right */}
          <div className="overflow-hidden mb-4">
            <motion.div
              className="flex gap-3 md:gap-4 w-max"
              animate={{ x: [0, -1600] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {allTags.map((tag, index) => (
                <a
                  key={`row1-${index}`}
                  href="#"
                  className="bg-pink/10 border border-pink/30 text-pink hover:bg-pink/20 hover:border-pink/40 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm whitespace-nowrap"
                >
                  {tag}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left (Reverse) */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3 md:gap-4 w-max"
              animate={{ x: [-1600, 0] }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
            >
              {allTags.map((tag, index) => (
                <a
                  key={`row2-${index}`}
                  href="#"
                  className="bg-yellow/10 border border-yellow/30 text-yellow-dark hover:bg-yellow/20 hover:border-yellow/40 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm whitespace-nowrap"
                >
                  {tag}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
