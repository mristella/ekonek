"use client";

import { motion } from "framer-motion";

const resources = [
  { title: "Youth Rights Module", type: "PDF", category: "Social & Human Rights" },
  { title: "Sustainable Gardening Guide", type: "Word", category: "Environment & Sustainability" },
];

export default function ResourceGrid() {
  return (
    <section className="py-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, idx) => (
          <motion.div
            key={idx}
            className="p-5 bg-white rounded-lg border hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h3 className="text-lg font-medium">{res.title}</h3>
            <p className="text-sm text-gray-600">{res.category}</p>
            <span className="text-xs text-gray-500">{res.type}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
