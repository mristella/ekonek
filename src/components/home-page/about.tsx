"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center md:text-left">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About E-Konektado
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          E-Konektado is a youth-led, open-access platform designed to empower trainers, educators, and community leaders. 
          We provide practical resources and collaboration pathways that create real impact in technology, rights, sustainability, and education.
        </motion.p>
      </div>
    </section>
  );
}
