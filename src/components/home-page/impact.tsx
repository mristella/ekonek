"use client";
import { motion } from "framer-motion";

export default function Impact() {
  const stats = [
    { number: "120+", label: "Resources Shared" },
    { number: "80+", label: "Organizations Engaged" },
    { number: "15+", label: "Regions Reached" },
    { number: "1,200+", label: "Community Beneficiaries" },
  ];

  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-orange-500">{stat.number}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
