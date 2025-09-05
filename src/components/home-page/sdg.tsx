"use client";
import { motion } from "framer-motion";

export default function SDGs() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Aligned with the Sustainable Development Goals</h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {["Quality Education", "Sustainable Cities", "Reduced Inequalities", "Climate Action"].map((goal, idx) => (
            <div key={idx} className="p-6 border rounded-lg hover:shadow-lg transition">
              <p className="font-medium">{goal}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
