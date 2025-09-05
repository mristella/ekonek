"use client";
import { motion } from "framer-motion";

export default function FocusAreas() {
  const areas = [
    "Technology & Digital Literacy",
    "Social & Human Rights Advocacy",
    "Environment & Sustainability",
    "Health, Education, and Community Development",
  ];

  return (
    <section className="py-16 bg-gray-50 text-black">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Focus Areas
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white border rounded-xl hover:bg-orange-50 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-medium text-lg">{area}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
