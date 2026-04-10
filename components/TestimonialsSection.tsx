"use client";

import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Gumroad made it incredibly easy to monetize my Procreate brushes. I went from hobby to full-time income in just a few months.",
    name: "Max Ulichney",
    category: "Procreate Brushes",
    image: "/img_07.webp",
  },
  {
    quote: "I turned my content research into a paid newsletter. The platform handles everything — payments, delivery, all of it.",
    name: "Steph Smith",
    category: "Content & Tutorials",
    image: "/img_08.webp",
  },
  {
    quote: "The analytics showed me exactly what my audience wanted. I doubled down on what worked and scaled fast.",
    name: "Trendsvc",
    category: "Business Insights",
    image: "/img_08.webp",
  },
  {
    quote: "Building small products taught me more about business than any course ever could. Start small, learn fast.",
    name: "Daniel Vassallo",
    category: "Business Insights",
    image: "/img_07.webp",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="creators" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-boldonse text-3xl md:text-4xl lg:text-5xl uppercase text-text mb-6">
              What <span className="gradient-text">creators</span> say
            </h2>
            <p className="tfont-medium ext-xl text-text-secondary max-w-2xl mx-auto">
              Real stories from real people building their income on Gumroad.
            </p>
          </div>
        </ScrollAnimation>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation
              key={index}
              animation="slideUp"
              delay={index * 0.15}
              duration={0.6}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card-bg dark:bg-card-bg backdrop-blur-xl rounded-3xl p-8 shadow-md border border-border h-full flex flex-col"
              >
                {/* Quote */}
                <p className="font-medium text-text text-lg leading-relaxed mb-6 grow italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-text">{testimonial.name}</h4>
                    <p className="font-medium text-text-secondary text-sm">{testimonial.category}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
