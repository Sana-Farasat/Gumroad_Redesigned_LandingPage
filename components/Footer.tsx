"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaX } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-bg-secondary dark:bg-bg-secondary border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 pb-12 border-b border-border"
        >
          <h3 className="font-boldonse text-2xl md:text-3xl text-text mb-4 leading-relaxed">
            Subscribe to get tips & tactics
          </h3>
          <p className="text-text-secondary text-lg font-medium mb-6">
            Grow the way you want. Real advice from real creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card-bg dark:bg-card-bg border border-border rounded-full px-6 py-3 text-text placeholder:text-text-secondary focus:outline-none focus:border-pink grow"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink text-white px-8 py-3 rounded-full font-medium hover:bg-pink-dark transition-colors"
            >
              Subscribe →
            </motion.button>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-boldonse text-2xl text-pink mb-4">gumroad</h3>
            <p className="text-text-secondary text-sm font-medium leading-relaxed">
              The easiest way to sell digital products and build your creator empire.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium text-pink mb-4 text-sm uppercase">Product</h4>
            <ul className="space-y-2">
              {["Features", "Pricing", "Marketplace"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-pink transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-pink mb-4 text-sm uppercase">Company</h4>
            <ul className="space-y-2">
              {["About", "Careers", "Blog", "Small Bets"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-pink transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-pink mb-4 text-sm uppercase">Support</h4>
            <ul className="space-y-2">
              {["Help", "Board meetings", "Terms of Service", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-pink transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            Ⓒ Gumroad, Inc.
          </p>
          <div className="flex gap-4">
            {["Twitter", "Instagram", "YouTube" , "Linkedin" , "Facebook"].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-text-secondary hover:text-pink transition-colors text-xl"
                aria-label={social}
              >
                {social === "Twitter" && <FaX />}
                {social === "Instagram" && <FaSquareInstagram />}
                {social === "YouTube" && <FaYoutube />}
                {social === "Linkedin" && <FaLinkedin />}
                {social === "Facebook" && <FaFacebookSquare />}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
