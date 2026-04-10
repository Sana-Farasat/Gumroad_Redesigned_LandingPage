"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "⚡",
    title: "Sell anything",
    description: "Video lessons, subscriptions, coaching, or just experimentation. If you can create it, you can sell it on Gumroad.",
    image: "/img_01.webp",
  },
  {
    icon: "🛣️",
    title: "Make your own road",
    description: "Start a new gig, keep your current one, or find a new balance. You set the pace and direction of your creator journey.",
    image: "/img_02.webp",
  },
  {
    icon: "🌍",
    title: "Sell to anyone",
    description: "Go from 0 to $1 and automated workflows. Let your customers pay in their own currency, while you focus on creating.",
    image: "/img_03.webp",
  },
  {
    icon: "📱",
    title: "Sell anywhere",
    description: "Build your all-in-one platform, or connect to thousands of apps. Your storefront, your rules, your way.",
    image: "/img_04.webp",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="group"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-4xl shrink-0"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-boldonse text-2xl md:text-3xl text-text mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-medium text-text-secondary text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={500}
                    className="w-full h-56 md:h-64 lg:h-1/2 object-fill group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
