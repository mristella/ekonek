'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl px-6"
      >
        <Image
          src="/assets/logoEkonek.png"
          alt="E-Konektado"
          width={80}
          height={80}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Connected by Youth. Powered by Knowledge. Driven by Community.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          E-Konektado is a youth-led, open-access platform empowering educators and community leaders with ready-to-use resources.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/join"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Join Now
          </Link>
          <Link
            href="/resources"
            className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition-all duration-300"
          >
            Explore Resources
          </Link>
        </div>
      </motion.div>

      {/* Background Animation */}
      <motion.div
        className="absolute -top-10 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}
